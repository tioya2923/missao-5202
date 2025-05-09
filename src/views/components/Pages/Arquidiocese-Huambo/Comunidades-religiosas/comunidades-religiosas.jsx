import React from "react";
import './ComunidadesReligiosas.css';
import {datasComunidadesReligiosas} from "../../../../Datas/datasComunidadesReligiosas";
import { Link } from "react-router-dom";

const ComunidadesReligiosas = () => {
    const comunidadesHuambo = [...datasComunidadesReligiosas].sort((a, b) => a.nomeCompleto.localeCompare(b.nomeCompleto));
    
    
    return (
        <div className="comunidades-section">
            <h1>Comunidades Religiosas</h1>
            <div className="comunidades-container">
                {comunidadesHuambo.map((comunidade) => (
                    <div key={comunidade.id} className="comunidade-item">
                        <Link to={`/comunidadeHuambo/${comunidade.id}`}>
                        <img src={comunidade.foto} alt={`Foto de ${comunidade.nomeCompleto}`} className="comunidades-imagem"/>
                        <div className="comunidades-textos">
                            <h3>{comunidade.nomeCompleto}</h3>
                        </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
};
export default ComunidadesReligiosas;
