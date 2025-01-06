import React, {useState} from "react";
import { Button, Container } from "react-bootstrap";
import CreateType from "../components/modals/CreateType";
import CreateBrand from "../components/modals/CreateBrand";
import CreateDevice from "../components/modals/СreateDevice";

const Admin = () => {
    const [brandVisible, setBrandVisible] = useState(false)
    const [deviceVisible, setDeviceVisible] = useState(false)
    const [typeVisible, setTypeVisible] = useState(false)

    return (
        <Container className="d-flex flex-column">
            <Button className="mt-3" variant="outline-dark" onClick={() => setBrandVisible(true)}>Добавить бренд</Button>
            <Button className="mt-3" variant="outline-dark" onClick={() => setDeviceVisible(true)}>Добавить устройство</Button>
            <Button className="mt-3" variant="outline-dark" onClick={() => setTypeVisible(true)}>Добавить тип</Button>
            
            <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)} />
            <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)}/>
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
            
        </Container>
    )
}

export default Admin;

