import React from 'react';
import { DeviceScreenContext } from '../../components/DeviceScreenProvider';
import { Button, Modal } from 'react-bootstrap';
import { appModal } from '../../components/modal/AppModalConsumer';

export default class Dashboard extends React.Component {
  confirm() {
    appModal
      .confirmBox(
        'first popup',
        ({ busy }) => {
          busy(true);
          appModal
            .confirmBox('second popup?')
            .then(() => {
              busy(false);
            })
            .catch(() => busy(false));
        },
        { title: 'Are you sure?' }
      )
      .then(() => {
        console.log('Resolved first');
      })
      .catch(() => {
        console.log('close first');
      });
  }
  render() {
    return (
      <div>
        <DeviceScreenContext.Consumer>
          {(device) => (
            <div>
              <p>Device Width {device.width} px</p>
              <p>Device Height {device.height} px</p>
            </div>
          )}
        </DeviceScreenContext.Consumer>

        <Button onClick={() => this.confirm()}>Confirm</Button>

        <Button onClick={() => appModal.messageBox('Hello World!')}>
          Text Message
        </Button>
        <Button
          onClick={() =>
            appModal.messageBox(
              <p>
                Hello <b>World</b> <i>HTML</i> message{' '}
              </p>
            )
          }
        >
          HTML Message
        </Button>

        <Button
          onClick={() =>
            appModal.open(TestModalMessage, {
              centered: true,
            })
          }
        >
          Nested Modal
        </Button>
      </div>
    );
  }
}

let centered = true;

const TestModalMessage = ({ testProp, modalId }) => {
  return (
    <div>
      <Modal.Header closeButton>
        <Modal.Title>I am Title</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        I am Dyamic Modal ID: ({modalId}) {testProp}
        <Button
          onClick={() => {
            centered = centered ? false : true;
            appModal.open(TestModalMessage, { centered });
          }}
        >
          Nested Modal
        </Button>
      </Modal.Body>
    </div>
  );
};
