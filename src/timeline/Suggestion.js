import React from 'react';
import './Suggestion.css';
import { Avatar } from '@mui/material';

const Suggestion=()=>{
    return(
        <div className='suggestions'>
            <div className='suggestions__title'>
                Suggestions for you
            </div>
            <div className='suggestions__usernames'>
                <div className='suggestions__username'>
                    <div className='username__left'>
                        <span className='avatar'>
                            <Avatar>T</Avatar>
                        </span>
                        <div className='username__info'>
                            <div className='username'>tigerian35</div>
                            <div className='relation'>New to instagram</div>
                        </div>
                    </div>
                    <button className='follow__button'>follow</button>
                </div>

                <div className='suggestions__username'>
                    <div className='username__left'>
                        <span className='avatar'>
                            <Avatar>E</Avatar>
                        </span>
                        <div className='username__info'>
                            <div className='username'>eckart_wz</div>
                            <div className='relation'>followed by maddy25_ and khali_210</div>
                        </div>
                    </div>
                    <button className='follow__button'>follow</button>
                </div>

                <div className='suggestions__username'>
                    <div className='username__left'>
                        <span className='avatar'>
                            <Avatar>A</Avatar>
                        </span>
                        <div className='username__info'>
                            <div className='username'>alisia19_</div>
                            <div className='relation'>followed by john_snow23</div>
                        </div>
                    </div>
                    <button className='follow__button'>follow</button>
                </div>

                <div className='suggestions__username'>
                    <div className='username__left'>
                        <span className='avatar'>
                            <Avatar>G</Avatar>
                        </span>
                        <div className='username__info'>
                            <div className='username'>garciareina561</div>
                            <div className='relation'>New to instagram</div>
                        </div>
                    </div>
                    <button className='follow__button'>follow</button>
                </div>
            </div>
        </div>
    );
}

export default Suggestion;