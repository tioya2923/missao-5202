import React from "react";
import './MovimentoApostolado.css';
import { useParams } from "react-router-dom";
import { datasMovimentos } from "../../../../Datas/datasMovimentos";

const MovimentoApostolado = () => {
    const { id } = useParams();
    const movimentoHuambo = datasMovimentos.find((b) => b.id === id);

    if (!movimentoHuambo) {
        return <p>Movimento de Apostolado não encontrado</p>
    }

    return (
        <div className="container-movimento">
            <h1>{movimentoHuambo.nomeCompleto}</h1>
            <p className="movimento-historia"><strong>História</strong> <br/> {movimentoHuambo.historia}</p>
        </div>
    )
};
export default MovimentoApostolado;