import React from 'react'
import Header from './subcomponents/Header'
import Content from './subcomponents/Content'
import Total from './subcomponents/Total'

const Course = ({ courses }) => {

    return (
        <div>
            <h1>Web development curriculum</h1>
            {courses.map(course =>
                <div key={course.id}>
                    <Header course={course} />
                    <Content contents={course.parts} />
                    <Total total={course.parts} />
                </div>
            )}
        </div>
    )
}

export default Course