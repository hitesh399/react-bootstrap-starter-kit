import React, { createContext } from 'react';
import { guidGenerator } from '../../utils';
import { Modal } from 'react-bootstrap';

export const AppModalContext = createContext();

export class AppModalProvider extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      modals: [],
    };
  }
  open(message, modalProps = {}, componentProps = {}, destroyCallback = null) {
    const id = guidGenerator();
    const destroy = this.destroy.bind(this, id);
    const close = this.close.bind(this, id);
    let { modals } = this.state;
    const {
      title = '',
      showCloseBtn = false,
      //   delayToDestroy = 500,
    } = modalProps;

    delete modalProps.title;
    delete modalProps.showCloseBtn;
    delete modalProps.delayToDestroy;

    modals.push({
      id,
      message,
      hidden: false,
      isBusy: false,
      title,
      destroyCallback,
      //   delayToDestroy,
      showCloseBtn,
      componentProps,
      modalProps,
    });
    this.setState({ modals: modals.slice() });

    return {
      destroyModal: destroy,
      closeModal: close,
      id,
    };
  }
  destroy(id) {
    let { modals } = this.state;
    const modalIndex = modals.findIndex(
      (value) => value.isBusy === false && value.id === id
    );
    if (modalIndex !== -1) {
      modals.splice(modalIndex, 1);
      this.setState({ modals: modals.slice() });
    }
  }
  close(id, reason) {
    let callback;
    let { modals } = this.state;
    let isFound = false;
    modals.map((modal) => {
      if (modal.id === id && modal.isBusy === false) {
        isFound = true;
        if (
          modal.destroyCallback &&
          typeof modal.destroyCallback === 'function'
        ) {
          callback = modal.destroyCallback;
        }
        modal.hidden = true;
      }
      return modal;
    });

    if (isFound) {
      this.setState({ modals: modals.slice() });
      if (callback) callback(reason);
    }
  }
  busy(id, status = true) {
    console.log('Busy', id, status);
    let { modals } = this.state;
    modals.map((modal) => {
      if (modal.id === id) {
        modal.isBusy = status;
      }
      return modal;
    });

    this.setState({ modals: modals.slice() });
  }

  render() {
    const { children } = this.props;
    const { modals } = this.state;
    const modalLength = modals.length;
    return (
      <AppModalContext.Provider value={{ open: this.open.bind(this) }}>
        <>
          {children}
          {modals.map((modal, modalIndex) => (
            <ModalComponent
              key={`${modal.id}_modal_id`}
              modal={modal}
              destroy={this.destroy.bind(this, modal.id)}
              close={(reason = 'close') =>
                this.close.bind(this, modal.id, reason)()
              }
              modalLength={modalLength}
              modalIndex={modalIndex}
              busy={(status = true) => this.busy.bind(this, modal.id, status)()}
            ></ModalComponent>
          ))}
        </>
      </AppModalContext.Provider>
    );
  }
}

const ModalComponent = ({
  modal: {
    title,
    message,
    showCloseBtn,
    id,
    isBusy,
    hidden,
    componentProps,
    modalProps,
  },
  modalLength,
  modalIndex,
  destroy,
  close,
  busy,
}) => {
  const ContentComponent =
    typeof message === 'function'
      ? React.createElement(message, {
          close,
          busy,
          modalId: id,
          isBusy,
          ...componentProps,
        })
      : message;

  return (
    <Modal
      {...modalProps}
      show={!hidden}
      style={{ zIndex: modalLength === modalIndex + 1 ? 1050 : 1 }}
      onExited={destroy}
      onHide={() => close('close')}
    >
      {title ? (
        <Modal.Header
          closeButton={showCloseBtn}
        >
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
      ) : null}
      {ContentComponent}
    </Modal>
  );
};
