import React, { useState } from 'react'

// Button component
const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
        {text}
    </button>
)

// Statistic component (for a single statistic)
const Statistic = ({ text, value}) => <div>{text} {value}</div>

// Statistics component (for all statistics)
const Statistics = ({ num_bad, num_neutral, num_good, total}) => {
    if (total <= 0) {
        return(
            <div>
                No feedback given
            </div>
        )
    }
    const calcAvg = () => (-1*num_bad + num_good) / total

    const calcPercPos = () => ((num_good / total) * 100) + " %"

    return (
        <div>
            <Statistic text="good" value={num_good} />
            <Statistic text="neutral" value={num_neutral} />
            <Statistic text="bad" value={num_bad} />
            <Statistic text="all" value={total} />
            <Statistic text="average" value={calcAvg()} />
            <Statistic text="positive" value={calcPercPos()} />
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
