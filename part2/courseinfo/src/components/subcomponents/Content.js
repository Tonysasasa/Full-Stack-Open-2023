import React from 'react'
import Part from './Part'

const Content = ({ contents }) =>
    <div>
        {contents.map(content =>
            <Part key={content.id} part={content.name} exercises={content.exercises} />
        )}
    </div>


export default Content