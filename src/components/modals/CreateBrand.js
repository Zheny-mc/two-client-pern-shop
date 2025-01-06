import { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { createBrand } from '../../http/deviceApi';

export default function CreateBrand({show, onHide}) {
  const [value, setValue] = useState('');
  const addBrand = () => {
    createBrand({name: value}).then(data => {
      setValue('')
      onHide()
    })
  }

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить новый Бренд
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control 
            value={value}
            onChange={ e => setValue(e.target.value) }
            placeholder={'Введите название Бренда'} />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={addBrand}>Добавить</Button>
        <Button variant="outline-success" onClick={onHide}>Закрыть</Button>
      </Modal.Footer>
    </Modal>
  );
}