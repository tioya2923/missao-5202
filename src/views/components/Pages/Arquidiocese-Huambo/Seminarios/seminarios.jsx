import React from "react";
import { Link } from "react-router-dom";
import './Seminarios.css';
import { datasSeminarios } from "../../../../Datas/datasSeminarios";


const Seminarios = () => {
    const seminariosHuambo = [...datasSeminarios].sort((a, b) => a.nomeCompleto.localeCompare(b.nomeCompleto));

    return (
        <div className="seminario-section">
            <h1>Seminários</h1>
            <div className="seminarios-container">
                {seminariosHuambo.map((seminario) => (
                    <div key={seminario.id} className="seminarios-item">
                        <Link to={`/huamboSeminario/${seminario.id}`}>
                            <img src={seminario.foto} alt={`Foto de ${seminario.nomeCompleto}`} className="seminarios-imagem" />
                            <div className="seminarios-texto">
                                <h3>{seminario.nomeCompleto}</h3>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Seminarios;