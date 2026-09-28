import { useState } from "react"
import Die from "./Die"




export default function App(){
function generateAllNewDice() {
        return new Array(10)
            .fill(0)
            .map(() => Math.ceil(Math.random() * 6))
    }

const [dice, setDice] = useState(generateAllNewDice())
const diceElements = dice.map(num => <Die value={num} />)

function rollDice() {
    setDice(generateAllNewDice())
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
