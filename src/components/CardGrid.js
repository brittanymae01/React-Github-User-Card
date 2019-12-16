import React from 'react'
import Card from './Card'
import Follower from './Follower'

const CardGrid = props => {
    console.log(props.user)
    console.log(props.followers)
    return (
        <div className='cards'>
            <Card user={props.user} />
            {props.followers.map(follower => (
                <Follower key={follower.node_id} img={follower.avatar_url} name={follower.html_url} />
            ))}
        </div>
    )
}

export default CardGrid;