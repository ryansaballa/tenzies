import { useState } from "react"
import Die from "./Die"
import { nanoid } from "nanoid"



export default function App(){
const [dice, setDice] = useState(generateAllNewDice())

const diceElements = dice.map(dieObject => 
    <Die 
        key={dieObject.id} 
        value={dieObject.value} 
        isHeld={dieObject.isHeld}
        hold={()=> hold(dieObject.id)}
    />)

function generateAllNewDice (){
        return new Array(10)
            .fill(0)
            .map(()=> ({
                value:Math.ceil(Math.random()*6),
                isHeld: false,
                id: nanoid(),
            }))
}

function rollDice(id) {
    setDice(oldDice => oldDice.map(die => 
        die.isHeld? die: {
            ...die, value: Math.ceil(Math.random()*6)
        }
    ))
}


function hold(id) {
        setDice(oldDice =>
            oldDice.map(die =>
                die.id === id ? { ...die, isHeld: !die.isHeld }
                : die))
    }


    return (
        <main>
            <div class="container">
               {diceElements}
            </div>

            <button className="roll-dice" onClick={rollDice}>Roll</button>
        </main>
    )
}
