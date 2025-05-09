import React from "react";
import { useParams } from "react-router-dom";
import './HuamboSeminario.css';
import { datasSeminarios } from "../../../../Datas/datasSeminarios";

const HuamboSeminario = () => {
    const { id } = useParams()
    const seminarioDoHuambo = datasSeminarios.find((b) => b.id === id);

    if (!seminarioDoHuambo) {
        return <p>Seminário não encontrado</p>
    }

    return (
        <div className="container-SeminarioHuambo">
            <h1>{seminarioDoHuambo.nomeCompleto}</h1>
            <img src={seminarioDoHuambo.foto} alt={`Foto de ${seminarioDoHuambo.nomeCompleto}`} />
            <p><strong>História</strong><br /> {seminarioDoHuambo.historia}</p>
        </div>
    )
};
export default HuamboSeminario;