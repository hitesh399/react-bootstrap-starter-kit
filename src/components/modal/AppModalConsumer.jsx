import React from 'react';
import { AppModalContext } from './AppModalProvider';
import { EventManager } from '../../event-manager';
import { Modal, Button } from 'react-bootstrap';

export class AppModalConsumer extends React.PureComponent {
  handleModalOpen(props) {
    let outout;
    switch (props.appModalType) {
      case 'confirm':
        outout = this.openConfirmBox(props);
        break;
      case 'message':
        this.openMessageBox(props);
        break;
      case 'modal':
        outout = this.openModal(
          props.message,
          props.modalProps,
          props.messageComponentProps
        );
        break;
      default:
        break;
    }
    return outout;
  }

  openConfirmBox(props) {
    return new Promise((reslove, reject) => {
      const func = (reason) => {
        reason === 'close' ? reject(reason) : reslove(reason);
      };
      this.context.open(
        ModalConfirmConponent,
        { backdrop: 'static' },
        { ...props, reslove },
        func
      );
    });
  }
  openMessageBox(props) {
    this.context.open(ModalMessageConponent, {}, props);
  }
  openModal(messageComponent, modalProps, messageComponentProps) {
    return new Promise((reslove, reject) => {
      const func = (reason) => {
        reason === 'close' ? reject(reason) : reslove(reason);
      };
      this.context.open(
        messageComponent,
        modalProps,
        messageComponentProps,
        func
      );
    });
  }
  componentDidMount() {
    EventManager.on('app-open-modal', this.handleModalOpen.bind(this));
  }
  componentWillUnmount() {
    EventManager.off('app-open-modal', this.handleModalOpen);
  }

  render() {
    return null;
  }
}
AppModalConsumer.contextType = AppModalContext;

const ModalConfirmConponent = ({
  message,
  confirmFnc,
  busy,
  close,
  title,
  waitLabel = 'Wait...',
  okBtnLabel = 'Ok',
  cancelBtnLabel = 'Cancel',
  isBusy,
}) => {
  const fnc = () =>
    typeof confirmFnc === 'function'
      ? confirmFnc({
          close: () => {
            busy(false);
            close('success');
          },
          busy,
        })
      : close('success');
  return (
    <>
      {title ? (
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
      ) : null}

      <Modal.Body>
        {typeof message === 'function' ? React.createElement(message) : message}
      </Modal.Body>

      <Modal.Footer>
        <Button
          disabled={isBusy}
          variant="secondary"
          onClick={() => close('cancel')}
        >
          {cancelBtnLabel}
        </Button>
        <Button disabled={isBusy} variant="primary" onClick={fnc}>
          {isBusy ? waitLabel : okBtnLabel}
        </Button>
      </Modal.Footer>
    </>
  );
};

const ModalMessageConponent = ({ message, title, btnLabel = 'Ok', close }) => {
  return (
    <div>
      {title ? (
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
      ) : null}

      <Modal.Body>
        {typeof message === 'function' ? React.createElement(message) : message}
      </Modal.Body>

      <Modal.Footer className="justify-content-center">
        <Button variant="primary" onClick={close}>
          {btnLabel}
        </Button>
      </Modal.Footer>
    </div>
  );
};

export const appModal = {
  /**
   * To render the Bootstrap Modal as confirmation box.
   *
   * @param {string JsxObject ReactComponent} message - Message to display on Modal body
   * @param {Function} confirmFnc
   * @param {Object} option - {title, waitLabel, okBtnLabel, cancelBtnLabel}
   *
   * @returns {Promise} -
   */
  confirmBox: (message, confirmFnc, option = {}) => {
    const out = EventManager.dispatch('app-open-modal', {
      message,
      confirmFnc,
      ...option,
      appModalType: 'confirm',
    });
    return out[0];
  },
  /**
   * To render the Bootstrap modal as MessageBox
   *
   * @param {String JSXObject ReactComponent} message - Modal Message
   * @param {String JSXObject } title - Modal title
   *
   * @returns {Promise} -
   */
  messageBox: (message, title) => {
    const out = EventManager.dispatch('app-open-modal', {
      message,
      title,
      appModalType: 'message',
    });
    return out[0];
  },

  /**
   * To render the Bootstrap modal as Dialog, Here you can pass your custom component to render inside Bootstrap Modal.
   *
   * @param {String JSXObject ReactComponent} message - Modal Body Component, If you pass a ReactComponet then you will receive some props: like: {close:Function, busy(true): Function, isBusy: Boolean},
   * @param { Object } modalProps - Bootstrap Modal props
   * @param {Object} messageComponentProps - MessageComponent Props, If you are passing ReactComponent|PureComponent|FunctionalComponent
   *
   * @returns {Promise} -
   */
  open: (message, modalProps, messageComponentProps) => {
    const out = EventManager.dispatch('app-open-modal', {
      message,
      modalProps,
      messageComponentProps,
      appModalType: 'modal',
    });
    return out[0];
  },
};
