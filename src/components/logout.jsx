
import './css/logout.css';
import User from './img/User.jpeg';
import { Fragment } from 'react';


export function Logout(){
    return(
        <Fragment>
            <div className={"logout"}>
                <div className={"media"} ></div>
                <div className={"img"}>
                    <img className={"img-item"} src={User}/>
                </div>
                <div className={"form-login"}>
                <p className={"user"} >Jose Alfredo</p>
                    <form>
                        <div className={"grup-form"}>
                            <button>Logout</button>
                        </div>
                        
                    </form>
                </div>
            </div>
        </Fragment>
    );
}