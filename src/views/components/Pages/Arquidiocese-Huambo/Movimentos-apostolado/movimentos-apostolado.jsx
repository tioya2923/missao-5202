import React from "react";
import { Link } from "react-router-dom";
import './MovimentosApostolado.css';
import { datasMovimentos } from "../../../../Datas/datasMovimentos";

const MovimentosApostolado = () => {
    const movimentosDeApostolado = [...datasMovimentos].sort((a, b) => a.nomeCompleto.localeCompare(b.nomeCompleto));

    return (
        <div className="movimentos-section">
            <h1>Movimentos de Apostolado</h1>
            <div className="movimentos-container">
                {movimentosDeApostolado.map((movimento) => (
                    <div key={movimento.id} className="movimentos-item">
                        <Link to={`/movimentoDeApostolado/${movimento.id}`}>
                            <div className="movimentos-texto">
                                <h3>{movimento.nomeCompleto}</h3>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default MovimentosApostolado;