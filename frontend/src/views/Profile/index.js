import React, { useState, useEffect } from 'react';
import './styles.css'
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import Logo from '../../assets/logo.svg'
import api from '../../services/api'

export default function Profile(){
    const [incidents, setIncidents] = useState([]);

    const ongName = localStorage.getItem('ongName');
    const ongId = localStorage.getItem('ongID');

    useEffect(() => {
        api.get('profile', {
            headers: {
                Auhorization: ongId,
            } 
        }).then( response => {
            setIncidents(response.data);
        })
    }, [ongId]);

    return(
        <div className="profile-container">
            <header>
                <img src={Logo} alt="Be The Hero" />
                <span>Bem vinda, {ongName}</span>

                <Link className="button" to="cadastrar/caso">Cadastrar novo caso</Link>
                <button className="button">
                    <FiPower color='#e02041' />
                </button>
            </header>

            <h1>Casos cadastrados</h1>

            <ul>
            {incidents.map(incident => (
                <li key={incident.id}>
                     <strong>CASO:</strong>
                     <p>{incident.title}</p>
 
                     <strong>DESCRIÇÃO:</strong>
                     <p>{incident.description}</p>
 
                     <strong>VALOR:</strong>
                     <p>R$ {incident.value}</p>
 
                     <button type="button">
                         <FiTrash2 size={20} color="#a8a8b3" />
                     </button>
                 </li>
                ))}
            </ul>
        </div>
    );
}