import React from 'react';

import ChatMessage from '../components/ChatMessage/ChatMessage';

import './PatientSearch.css';


const lista = [
    {
        "id": crypto.randomUUID(),
        "message": 'oi tuod bem',
        "role": 'user'
    },
    {
        "id": crypto.randomUUID(),
        "message": 'opa',
        "role": 'robot'
    }
];

function PatientSearch() {

    return (
        <>
            <input type='text' placeholder='Busque informações sobre o paciente...'/>
            <button>Enter</button>
            {lista.map(element => (
                <ChatMessage key={element.id} message={element.message} role={element.role} />
            ))}
        </>
    );
}

export default PatientSearch;