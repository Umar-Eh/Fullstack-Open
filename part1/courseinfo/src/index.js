import React from 'react';
import ReactDOM from 'react-dom';


const Header = (props) => {
    return (
        <div>
            <h1>{props.course}</h1>
        </div>
    )
}

const Content = (props) => {
    return (
        <div>
            <Part name = {props.name1} value = {props.value1}/>
            <Part name = {props.name2} value = {props.value2}/>
            <Part name = {props.name3} value = {props.value3}/>
        </div>
    )
}

const Part = (props) => {
    return (
        <div>
            <p>{props.name} {props.value}</p>
        </div>
    )
}

const Total = (props) => {
    return (
        <div>
            <p>Number of exercises {props.value1 + props.value2 + props.value3}</p>
        </div>
    )
}

const App = () => {
    const course = 'Half Stack Application Development'
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14

    return (
        <div>
            <Header course = {course} />
            <Content name1 = {part1} value1 = {exercises1} name2 = {part2} value2 = {exercises2} name3 = {part3} value3 = {exercises3} />
            <Total value1 = {exercises1} value2 = {exercises2} value3 = {exercises3} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));