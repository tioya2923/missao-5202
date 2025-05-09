import React from "react";
import { Link } from "react-router-dom";
import './Paroquias.css';
import { datasParoquias } from "../../../../Datas/datasParoquias";

const Paroquias = () => {
    const paroquiaMissaoHuambo = [...datasParoquias].sort((a, b) => a.nomeCompleto.localeCompare(b.nomeCompleto));

    return (
        <div className="paroquias-section">
            <h1>Paróquias e Missões</h1>
            <div className="paroquias-container">
                {paroquiaMissaoHuambo.map((paroquia) => (
                    <div key={paroquia.id} className="paroquias-item">
                        <Link to={`/missaoParoquia/${paroquia.id}`} >
                            <img src={paroquia.foto} alt={`Foto de ${paroquia.nomeCompleto}`} className="paroquias-imagem" />
                            <div className="paroquias-texto">
                                <h3>{paroquia.nomeCompleto}</h3>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Paroquias;
