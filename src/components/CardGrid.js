import React from 'react'
import Card from './Card'

const CardGrid = props => {
    console.log(props.user)
    return (
        <div>
            <h1>Hello</h1>
            <Card user={props.user} />
        </div>
    )
}

export default CardGrid;