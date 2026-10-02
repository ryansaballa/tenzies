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

function rollDice() {
    setDice(generateAllNewDice())
}

function generateAllNewDice (){
        return new Array(10)
            .fill(0)
            .map(()=> ({
                value:Math.ceil(Math.random()*6),
                isHeld: true,
                id: nanoid(),
            }))
}

function hold(id){
    console.log(id)
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
