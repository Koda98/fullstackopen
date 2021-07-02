import React from "react"

const Header = ({ course }) => {
    return (
        <h2>{course.name}</h2>
    )
}

const Total = ({ course }) => {
    const exerciseSum = course.parts.reduce((sum, part) => sum + part.exercises, 0)
    return (
        <p><b>Total of {exerciseSum} exercises</b></p>
    )
}

const Part = (props) => {
    return (
        <p>
            {props.part.name} {props.part.exercises}
        </p>
    )
}

const Content = ({ course }) => {
    return (
        <div>
            {course.parts.map(part => <Part key={part.id} part={part} />)}
        </div>
    )
}

const Course = ({ course }) => {
    return (
        <>
            <Header course={course} />
            <Content course={course} />
            <Total course={course} />
        </>
    )

}

export default Course