import React from 'react';
import { DeviceScreenContext } from '../../components/DeviceScreenProvider';
import { Button, Modal, Col, Row } from 'react-bootstrap';
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
      <div className="container-fluid">
        <DeviceScreenContext.Consumer>
          {(device) => (
            <div>
              <p>Device Width {device.width} px</p>
              <p>Device Height {device.height} px</p>
            </div>
          )}
        </DeviceScreenContext.Consumer>
        <Row>
          <Col className="mb-2">
            <Button onClick={() => this.confirm()}>Confirm</Button>
          </Col>
          <Col>
            <Button onClick={() => appModal.messageBox('Hello World!')}>
              Text Message
            </Button>
          </Col>
          <Col className="mb-2">
            <Button
              onClick={() =>
                appModal.messageBox(
                  <p>
                    Hello <b>World</b> <i>HTML</i> message
                  </p>
                )
              }
            >
              HTML Message
            </Button>
          </Col>
          <Col className="mb-2"> 
            <Button
              onClick={() =>
                appModal.open(TestModalMessage, {
                  centered: true,
                })
              }
            >
              Nested Modal
            </Button>
          </Col>
        </Row>
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
