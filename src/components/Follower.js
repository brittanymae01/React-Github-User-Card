import React from 'react';

const Follower = props => {
    return (
        <div className='card'>
            <img src={props.img} alt='follower' />
            <div>
                <h3 className='username'>{props.name}</h3>
            </div>
        </div>
    )
}

export default Follower;