import { Fragment } from "react";
import Princess1 from './img/Princess_1.gif';


export function Slider() {
    return(
        <Fragment>
            <div>
                <img className={"slidercss"} src={Princess1} />
            </div>
        </Fragment>
    )
}