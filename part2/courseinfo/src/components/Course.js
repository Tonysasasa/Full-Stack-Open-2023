import React from 'react'
import Header from './subcomponents/Header'
import Content from './subcomponents/Content'

const Course = ({ courses }) => {

    return (
        <div>
            <Header course={courses} />
            <Content contents={courses.parts} />
        </div>
    )
}

export default Course