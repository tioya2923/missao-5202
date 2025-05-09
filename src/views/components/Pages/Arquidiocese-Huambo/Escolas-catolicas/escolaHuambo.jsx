import React from "react";
import './EscolaCatolica.css';
import { useParams } from "react-router-dom";
import { datasEscolasCatolicas } from "../../../../Datas/datasEscolasCatolicas";

const EscolaCatolica = () => {
    const { id } = useParams();
    const escolaCatolicaHuambo = datasEscolasCatolicas.find((b) => b.id === id);

    if (!escolaCatolicaHuambo) {
        return <p>Escola não encontrada</p>
    }

    return (
        <div className="escola-associacao">
            <h1>{escolaCatolicaHuambo.nomeCompleto}</h1>
            <p className="escola-historia"><strong>História</strong> <br/> {escolaCatolicaHuambo.historia}</p>
        </div>
    )
};
export default EscolaCatolica;