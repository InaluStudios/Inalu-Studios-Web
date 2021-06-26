import { Fragment } from "react";
import './css/header.css';
import Login1 from './img/Logo1.png';
import {Login} from './login';
import {Logout} from './logout';

export function Header(){
    return(
        <Fragment>
            <div className={"header"}>
                <div>
                    <img src={Login1} />
                </div>
                <div>
                    <ul className={"menu"}>
                        <li className={"menu-item"}>Inicio</li>
                        <li className={"menu-item"}>Quienes Somos</li>
                        <li className={"menu-item"}>Tienda</li>
                        <li className={"menu-item"}>Log In
                        </li>
                        <Login/>
                        <Logout/>
                    </ul>
                </div>
            </div>
        </Fragment>

    );
}