import React, {useState} from 'react';

import api from '../services/api';

import logo from '../assets/logo.svg';
import './Login.css';

export default function Login({history}) {
    const [ username, setUsername ] = useState('');

    async function handleSubmir(e) {
        e.preventDefault();
        
        const response = await api.post('/devs', {
            username
        });


        const { _id } = response.data;

        history.push(`/main/${_id}`)
    }

    return (
        <div className="login-container">
            <form onSubmit={handleSubmir}>
                <img src={logo} alt="Tindev" />
                <input 
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    placeholder="Informe seu usuário do Git"
                />

                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}