import React from "react";
import { Link } from "react-router-dom";
import './AssociacoesReligiosas.css';
import { datasAssociacoesReligiosas} from "../../../../Datas/datasAssociacoesReligiosas";


const AssociacoesReligiosas = () => {
    const associacoesRelHuambo = [...datasAssociacoesReligiosas].sort((a, b) => a.nomeCompleto.localeCompare(b.nomeCompleto));

    return (
        <div className="associacoes-section">
            <h1>Associações Religiosas</h1>
            <div className="associacoes-container">
                { associacoesRelHuambo.map((associacao) => (
                    <div key={associacao.id} className="associacoes-item">
                        <Link to={`/associacaoHuambo/${associacao.id}`}>
                            <div className="associacoes-texto">
                                <h3>{associacao.nomeCompleto}</h3>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default AssociacoesReligiosas;