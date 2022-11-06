import React , {useState} from "react";
import {FaTimes , FaRegCircle} from "react-icons/fa"
import {TbClick} from "react-icons/tb"
import "./App.css"


const App = ()=>{
    const itemArray = new Array(9).fill("clickMe");

    const [turn, setTurn] = useState(false)

    return(
        <div className="wrapper">

            <h1>Tic Tac Toe</h1>

            <div className="game-container">
                {itemArray.map((item)=>(
                    <div className="card">
                        <div className="icon">
                            <TbClick/>
                        </div>
                    </div>
                ))}
            </div>

            <div className="msg-box">
                {turn ? "circle" : "cross"} turn
            </div>

            <div className="reload-box">
                <button>
                    Reload Game
                </button>
            </div>

        </div> 
    )
}

export default App