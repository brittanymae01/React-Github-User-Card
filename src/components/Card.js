import React from 'react'

const Card = props => {
    // console.log(props.user)
    return (
        <div className='card'>
            <img src={props.user.avatar_url} alt='user' />
            <div className='card-info'>
                <h3 className='name'>{props.user.name}</h3>
                <p className='username'>{props.user.login}</p>
                <p>Location: {props.user.location}</p>
                <p>Profile: <a href={props.user.html_url}>{props.user.html_url}</a></p>
                <p>Followers: {props.user.followers}</p>
                <p>Following: {props.user.following}</p>
                <p>Bio: {props.user.bio}</p>
            </div >
        </div >
    )
}

export default Card;