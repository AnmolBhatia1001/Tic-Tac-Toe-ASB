import React , {useState} from "react";
import Icon from "./component/Icon"
import "./App.css"

const itemArray = new Array(9).fill("clickMe");

const App = ()=>{
    const [turn, setTurn] = useState(false)
    const [gameEnd, setGameEnd] = useState(false)
    const [msg, setMsg] = useState("")

    const reloadGame = ()=>{
        setTurn(false)
        setGameEnd(false)
        itemArray.fill("clickMe", 0, 9)
    }

    const changeItem = (itemNumber)=>{
        if(gameEnd){
            alert("game Ended")
        }else if(itemArray[itemNumber] === "clickMe"){
            itemArray[itemNumber] = turn ? "circle" : "cross"
            setTurn(!turn)
            console.log(itemArray[itemNumber]);
        }
        checkWinnder()
    }

    const checkWinnder = ()=>{
        // const winOne = (itemArray[0] === itemArray[1]) && (itemArray[0]  === itemArray[2]) && (itemArray[0] != "clickMe");
        if(itemArray[0] === itemArray[1] 
        && itemArray[0]  === itemArray[2]
        && itemArray[0] != "clickMe"){
            setGameEnd(true)
            setMsg(`${turn ? "circle": "cross"} Won `)
        }
        if(!itemArray.includes("clickMe")){
            setGameEnd(true)
            setMsg("its draw")
        }
    }

    return(
        <div className="wrapper">
            <h1>Tic Tac Toe</h1>
            
            {/* Game End Logic */}
            {
                gameEnd ? (<div className="msg-box">{msg}</div>):
                (<div className="msg-box">{turn ? "circle" : "cross"} turn</div>)
            }

            {/* Icon Genrator */}
            <div className="game-container">
                {itemArray.map((item, index)=>(
                    <div className="card" onClick={()=> changeItem(index)}>
                        <Icon val={item}/>
                    </div>
                ))}
            </div>

            {/* Reload Btn */}
            {
                gameEnd ? 
                (<div className="reload-box">
                    <button onClick={reloadGame}>Reload Game</button>
                </div>)
                : ""
            }

        </div> 
    )
}

export default App