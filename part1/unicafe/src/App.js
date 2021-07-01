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

// Statistics component
const Statistics = ({ num_bad, num_neutral, num_good, total}) => {
    if (total <= 0) {
        return(
            <div>
                No feedback given
            </div>
        )
    }
    const calcAvg = (num_bad, num_good, total) => (
        (-1*num_bad + num_good) / total
    )

    const calcPercPos = (num_good, total) => (num_good / total) * 100
    return (
        <div>
            <div>good {num_good}</div>
            <div>neutral {num_neutral}</div>
            <div>bad {num_bad}</div>
            <div>all {total}</div>
            <div>
                average {calcAvg(num_bad, num_good, total)}
            </div>
            <div>positive {calcPercPos(num_good, total)} %</div>
        </div>
    )
}

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [total, setTotal] = useState(0)

    // Event handlers
    const handleGoodClick = () => {
        setGood(good + 1)
        setTotal(total + 1)
    }
    const handleNeutralClick = () => {
        setNeutral(neutral + 1)
        setTotal(total + 1)
    }
    const handleBadClick = () => {
        setBad(bad + 1)
        setTotal(total + 1)
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
            <Statistics 
                num_bad={bad}
                num_neutral={neutral}
                num_good={good}
                total={total}
            />

        </div>
    )
}

export default App
