import React from "react";
import './MissaoParoquia.css';
import { useParams } from "react-router-dom";
import { datasParoquias } from "../../../../Datas/datasParoquias";

const MissaoParoquia = () => {
    const { id } = useParams();
    const missaoParoquiaHuambo = datasParoquias.find((b) => b.id === id);


    if (!missaoParoquiaHuambo) {
        return <p>Paróquia ou Missão não enconntrada</p>
    }

    return (
        <div className="container-missaoParoquia">
            <h1>{missaoParoquiaHuambo.nomeCompleto}</h1>
            <img src={missaoParoquiaHuambo.foto} alt={`Foto de ${missaoParoquiaHuambo.nomeCompleto}`}/>
            <p><strong>História</strong> <br />{missaoParoquiaHuambo.historia}</p>
        </div>
    );
};

export default MissaoParoquia;