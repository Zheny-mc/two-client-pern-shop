import { observer } from 'mobx-react-lite';
import React, { useContext, useState } from 'react';
import { Button, Card, Container, Form } from "react-bootstrap";
import {useLocation, NavLink} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts";
import { login, registration } from '../http/userApi';
import {Context} from "../index";

import {useNavigate} from "react-router-dom";

const Auth = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate();
    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password)
                user.setUser(user)
                user.setIsAuth(true)
                navigate(SHOP_ROUTE)
            } else {
                data = await registration(email, password)
            }
        } catch(e) {
            alert('Неверный логин или пароль')
        }
    }

    return (
        <Container className="d-flex align-items-center justify-content-center min-vh-100">
            <Card style={{width: 600}} className='p-5'>
                <h2 className="m-auto">{isLogin? "Авторизация" : "Регистрация"}</h2>
                <Form className='d-flex flex-column'>
                    <Form.Control 
                        className='mt-3'
                        placeholder='Введите ваш email...'
                        value={email}
                        onChange={ e => setEmail(e.target.value)}
                        // type='email'
                    />
                    <Form.Control 
                        className='mt-3'
                        placeholder='Введите ваш пароль...'
                        value={password}
                        onChange={ e => setPassword(e.target.value)}
                        // type='password'
                    />
                    <div className='d-flex justify-content-between mt-3'>
                        {isLogin? 
                            <div>
                                Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
                            </div>
                            :
                            <div>
                                Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
                            </div>
                        }
                        <Button onClick={click} variant={"outline-success"}>
                            {isLogin? "Войти" : "Регистрация"}
                        </Button>
                    </div>
                </Form>
            </Card>
        </Container>
    )
})

export default Auth;