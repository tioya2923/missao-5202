import React from "react";
import { Link } from 'react-router-dom';
import './Clero.css';
import { dataClero } from '../../../../Datas/dataClero';

const clero = () => {
    const cleroHuambo = [...dataClero].sort((a, b) => a.nomeCompleto.localeCompare(b.nomeCompleto));

    return (
        <div className="clero-section">
            <h2>Clero da Arquidiocese do Huambo</h2>
            <div className="clero-container">
                {cleroHuambo.map((padre) => (
                    <div key={padre.id} className="clero-item">
                        <Link to={`/presbitero/${padre.id}`}>
                            <img src={padre.foto} alt={`Foto de ${padre.nomeCompleto}`} className="clero-imagem" />
                            <div className="clero-texto">
                                <h3>{padre.nomeCompleto}</h3>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )

}

export default clero();