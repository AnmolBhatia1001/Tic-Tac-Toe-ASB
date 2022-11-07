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
            alert("Game Over , Reload to Play Again")
        }else if(itemArray[itemNumber] === "clickMe"){
            itemArray[itemNumber] = turn ? "circle" : "cross"
            setTurn(!turn)
            console.log(itemArray[itemNumber]);
        }
        checkWinnder()
    }

    const checkWinnder = ()=>{
        const winOne = (itemArray[0] === itemArray[1]) && (itemArray[0]  === itemArray[2]) && (itemArray[0] != "clickMe");
        const winTwo = (itemArray[3] === itemArray[4]) && (itemArray[3]  === itemArray[5]) && (itemArray[3] != "clickMe");
        const winThree = (itemArray[6] === itemArray[7]) && (itemArray[6]  === itemArray[8]) && (itemArray[6] != "clickMe");
        const winFour = (itemArray[0] === itemArray[3]) && (itemArray[0]  === itemArray[6]) && (itemArray[0] != "clickMe");
        const winFive = (itemArray[1] === itemArray[4]) && (itemArray[1]  === itemArray[7]) && (itemArray[1] != "clickMe");
        const winSix = (itemArray[2] === itemArray[5]) && (itemArray[2]  === itemArray[8]) && (itemArray[2] != "clickMe");
        const winSeven = (itemArray[0] === itemArray[4]) && (itemArray[0]  === itemArray[8]) && (itemArray[0] != "clickMe");
        const winEight = (itemArray[6] === itemArray[4]) && (itemArray[6]  === itemArray[2]) && (itemArray[6] != "clickMe");
        if(winOne || winTwo || winThree || winFour || winFive || winSix || winSeven || winEight){
            setGameEnd(true)
            setMsg(`${turn ? "circle": "cross"} Won `)
        }
        if(!itemArray.includes("clickMe")){
            setGameEnd(true)
            setMsg("draw")
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