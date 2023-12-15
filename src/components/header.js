import React from "react"
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from "react-router-dom";
import Userfront, {
    LoginForm,
} from "@userfront/toolkit/react";
import Images from "./im"
import man from "../images/im9.png"
import lock from "../images/ikon7.png"

Userfront.init("demo1234")

export default function Header() {
    return (
        <Router>
            <div className="main">
                <div className="header__nav">
                    <div className="logo"></div>
                    <nav className="topnav">
                        <a href="">Главная</a>
                        <a href="">Тарифы</a>
                        <a href="">FAQ</a>
                    </nav>
                    <div className="login">
                        <a href="">Зарегистрироваться</a>
                        <span className="login__razd"></span>
                        <div className="login__log"><Link to="/login">Войти</Link></div>
                    </div>
                </div>

                <div className="header__nav_mobile">
                    <div className="hamburger-menu">
                        <div className="logo"></div>
                        <input id="menu__toggle" type="checkbox" />
                        <label className="menu__btn" for="menu__toggle">
                            <span></span>
                        </label>
                        <ul className="menu__box">
                            <li>
                                <div className="logo_nav"></div>
                            </li>
                            <li className="menu__item"><a href="#">Главная</a></li>
                            <li><a className="menu__item" href="#">Тарифы</a></li>
                            <li><a className="menu__item" href="#">FAQ</a></li>
                            <li className="menu__item_reg">
                                <a href="">Зарегистрироваться</a>
                            </li>
                            <li className="login__log"><Link to="/login">Войти</Link></li>
                        </ul>
                    </div>
                </div>
                <Routes>
                    <Route path="/login" element={<Home />} />
                </Routes>
            </div>
        </Router>
    )
}

function Home() {
    return (
        <div class="row">
            <div class="col-lg-8 col-sm-11 order-lg-first order-sm-last order-first">
                <h1 class="left__form-h1">Для оформления подписки
                    на тариф, необходимо авторизоваться.</h1>
                <div class="left__form-img"><Images image={man} /></div>
            </div>

            <div class="col-lg-4 col-sm-11  order-lg-last order-sm-first order-last">
                <div action="" class="card__form">
                    <div class="card__img-form"><Images image={lock} /></div>
                    <div class="log">
                        <div class="login__form"><Link to="/login">Войти</Link></div>
                        <a href="" class="reg">Зарегистрироваться</a>
                    </div>
                    <div class="inp">
                        <LoginForm />
                    </div>
                    <p><a href="" class="passw">Восстановить пароль</a></p>
                </div>
            </div>

        </div>
    );
}




