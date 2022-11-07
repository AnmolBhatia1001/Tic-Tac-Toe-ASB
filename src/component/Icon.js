import React from "react";
import {FaTimes , FaRegCircle} from "react-icons/fa"
import {TbClick} from "react-icons/tb"

const Icon = ({val})=>{
    switch (val) {
        case "cross":
            return <FaTimes className="icon"/>
            break;
        case "circle":
            return <FaRegCircle className="icon"/>
            break;
        default:
            return <TbClick className="icon"/>
            break;
    }
}
export default Icon
