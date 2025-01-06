import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Context } from "..";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";

const NavBar = observer(() => {
    const {user} = useContext(Context);
    const navigate = useNavigate();

    const logOut = () => {
      user.setUser({})
      user.setIsAuth(false)
      localStorage.setItem('token', '');
    }

    return (
      <Navbar bg="dark" data-bs-theme="dark" className="navbar navbar-light bg-light">
        <Container className="container-fluid">
          <Nav.Link className="navbar-brand text-uppercase text-white" onClick={() => navigate(SHOP_ROUTE)}>Top-Device</Nav.Link>
          <Nav className="ml-auto text-white">
            { user.isAuth ? 
                <div className="d-flex gap-3">
                  <Button variant={"outline-light"} onClick={ () => navigate(ADMIN_ROUTE) }>Админ панель</Button>
                  <Button variant={"outline-light"} onClick={ () => logOut() }>Выйти</Button>
                </div>
                :
                <Button variant={"outline-light"} onClick={ () => navigate(LOGIN_ROUTE) }>Авторизация</Button>
            }
          </Nav>
        </Container>
      </Navbar>
    );
})

export default NavBar;