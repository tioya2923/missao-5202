import React from "react";
import { Link } from "react-router-dom";
import './EscolasCatolicas.css';
import { datasEscolasCatolicas } from "../../../../Datas/datasEscolasCatolicas";

const EscolasCatolicas = () => {
    const escolasHuambo = [...datasEscolasCatolicas].sort((a, b) => a.nomeCompleto.localeCompare(b.nomeCompleto));

    return (
        <div className="escolas-section">
            <h1>Escolas Católicas</h1>
            <div className="escolas-container">
                {escolasHuambo.map((escola) => (
                    <div key={escola.id} className="escolas-item">
                        <Link to={`/escolaHuambo/${escola.id}`}>
                            <div className="escolas-texto">
                                <h3>{escola.nomeCompleto}</h3>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default EscolasCatolicas;