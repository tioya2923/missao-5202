import React from "react";
import { useParams } from "react-router-dom";
import './ComunidadeReligiosa.css';
import { datasComunidadesReligiosas } from "../../../../Datas/datasComunidadesReligiosas";

const ComunidadeReligiosa = () => {
    const { id } = useParams()
    const comunidadeReligiosaHuambo = datasComunidadesReligiosas.find((b) => b.id === id);

    if (!comunidadeReligiosaHuambo) {
        return <p>Comunidade Religiosa não encontrada</p>
    }

    return (
        <div className="container-comunidade">
            <h1>{comunidadeReligiosaHuambo.nomeCompleto}</h1>
            <img src={comunidadeReligiosaHuambo.foto} alt={`Foto de ${comunidadeReligiosaHuambo.nomeCompleto}`} />
            <p><strong>História</strong><br />{comunidadeReligiosaHuambo.historia}</p>
        </div>
    )
};
export default ComunidadeReligiosa;