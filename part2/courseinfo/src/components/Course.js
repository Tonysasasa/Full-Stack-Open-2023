import React from 'react'
import Header from './subcomponents/Header'
import Content from './subcomponents/Content'
import Total from './subcomponents/Total'

const Course = ({ courses }) => {

    return (
        <div>
            <Header course={courses} />
            <Content contents={courses.parts} />
            <Total total={courses.parts} />
        </div>
    )
}

export default Course