import React from 'react';

import userIcon from './user-icon.jpg'
import robotIcon from './robot-icon.jpg'

import './ChatMessage.css'

function ChatMessage ({ message, role }) {
    const isUser = role === 'user';
    
    const icon = isUser ? userIcon : robotIcon;
    const altText = isUser ? 'Ícone de usuário' : 'Ícone de robô'

    return (
        isUser 
        ?(
            <div className='text-icon-container'>
                <p>{message}</p>
                <img src={icon} alt={altText} className='text-icon-container user'></img>
            </div>
        )
        :(
            <div className='text-icon-container'>
                <img src={icon} alt={altText} className='text-icon-container robot'></img>
                <p>{message}</p>
            </div>
        )
    );
}

export default ChatMessage;