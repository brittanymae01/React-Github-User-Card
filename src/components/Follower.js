import React from 'react';

const Follower = props => {
    return (
        <div className='card'>
            <img src={props.img} alt='follower' />
            <div>
                <p className='username' >Profile: <a href={props.name}>{props.name}</a></p>
            </div>
        </div>
    )
}

export default Follower;