import React from 'react'
import Part from './Part'
let sum = 0;
const Total = ({ total }) => {
    // total.forEach((element) => (sum += element.exercises));
    // return (
    //     <p><b>total of {sum} exercises</b></p>
    // )

    const val =
        total.reduce((s, p) => s + p.exercises, 0)
    return (
        <p>Number of exercises {val}</p>
    )
}
export default Total