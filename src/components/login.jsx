
import './css/login.css';
import User from './img/User.jpeg';
import { Fragment } from 'react';


export function Login(){
    return(
        <Fragment>
            <div className={"login"}>
                <div className={"media"} ></div>
                <div className={"img"}>
                    <img className={"img-item"} src={User}/>
                </div>
                <div className={"form-login"}>
                    <form>
                        <div className={"grup-form"}>
                            <label className={"item-label"} >Email</label>
                            <input className={"item-input"} type="text" placeholder="example@domain.com"/>
                        </div>
                        <div className={"grup-form"}>
                            <label className={"item-label"} >Password</label>
                            <input className={"item-input"} type="password" placeholder="password"/>
                        </div>
                        <p className={"forgot"} >Forgot Password</p>
                        <div className={"grup-form"}>
                            <button>Login</button>
                        </div>
                        <p className={"create"} >Create Account</p>
                    </form>
                </div>
            </div>
        </Fragment>
    );
}