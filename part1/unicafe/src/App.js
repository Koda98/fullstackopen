import React, { useState } from 'react'

// Display component
const Display = ({ text, counter }) => <div>{text} {counter}</div>
const DisplayPerc = ({ text, counter }) => <div>{text} {counter} %</div>

// Button component
const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
        {text}
    </button>
)

const calcAvg = function(num_bad, num_neutral, num_good){
    let sum = -1*num_bad + num_good
    return sum/(num_bad + num_neutral + num_good)
}

const calcPos = (num_good, total) => (num_good / total) * 100

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    // Event handlers
    const handleGoodClick = () => setGood(good + 1)
    const handleNeutralClick = () => setNeutral(neutral + 1)
    const handleBadClick = () => setBad(bad + 1)

    let total = good + neutral + bad
    let avg = 0
    let perc_pos = 0
    if (total > 0) {
        avg = calcAvg(bad, neutral, good)
        perc_pos = calcPos(good, total)
    }

    return (
        <div>
            <h1>give feedback</h1>
            <Button
                handleClick={handleGoodClick}
                text='good'
            />
            <Button
                handleClick={handleNeutralClick}
                text='neutral'
            />
            <Button
                handleClick={handleBadClick}
                text='bad'
            />

            <h1>statistics</h1>
            <Display text="good" counter={good}/>
            <Display text="neutral" counter={neutral}/>
            <Display text="bad" counter={bad}/>
            <Display text="all" counter={total}/>
            <Display text="average" counter={avg}/>
            <DisplayPerc text="positive" counter={perc_pos}/>
        </div>
    )
}

export default App
