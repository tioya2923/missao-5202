import React from "react";
import './AssociacaoDoHuambo.css';
import { useParams } from "react-router-dom";
import { datasAssociacoesReligiosas} from "../../../../Datas/datasAssociacoesReligiosas";

const AssociacaoDoHuambo = () => {
    const { id } = useParams();
    const associacaoReliHuambo = datasAssociacoesReligiosas.find((b) => b.id === id);

    if (!associacaoReliHuambo) {
        return <p>Associação Religiosa não encontrado</p>
    }

    return (
        <div className="container-associacao">
            <h1>{associacaoReliHuambo.nomeCompleto}</h1>
            <p className="associacao-historia"><strong>História</strong> <br/> {associacaoReliHuambo.historia}</p>
        </div>
    )
};
export default AssociacaoDoHuambo;