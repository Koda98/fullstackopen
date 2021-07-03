import React from 'react'

const Notification = ({ message, isError }) => {
    const addStyle = {
        color: "green",
        background: "lightgrey",
        fontSize: 20,
        borderStyle: "solid",
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    }

    const errorStyle = {
        color: "red",
        background: "lightgrey",
        fontSize: 20,
        borderStyle: "solid",
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    }

    if (message === null) {
        return null
    }

    if (isError) {
        return (
            <div style={errorStyle}>
                {message}
            </div>
        )
    }
    else{
        return (
            <div style={addStyle}>
                {message}
            </div>
        )
    }
}

export default Notification
