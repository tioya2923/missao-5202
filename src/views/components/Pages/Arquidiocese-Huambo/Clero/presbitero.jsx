import React from "react";
import { useParams } from "react-router-dom";
import './Presbitero.css';
import { dataClero } from "../../../../Datas/dataClero";

const Presbitero = () => {
    const { id } = useParams()
    const presbiteroHuambo = dataClero.find((b) => b.id === id);

    if (!presbiteroHuambo) {
        return <p>Sacerdote não encontrado.</p>;
    }

    return (
        <div className="container-presbitero">
            <h1>{presbiteroHuambo.nomeCompleto}</h1>
            <img src={presbiteroHuambo.foto} alt={`Foto de ${presbiteroHuambo.nomeCompleto}`} />
            <p><strong>Data de Nascimento:</strong> {presbiteroHuambo.dataNascimento}</p>
            <p><strong>Data de Ordenação Sacerdotal:</strong> {presbiteroHuambo.dataOrdenacaoSacerdotal}</p>
            <p><strong>Contactos: </strong> {presbiteroHuambo.contactos}</p>
            <p><strong>Email: </strong> {presbiteroHuambo.email}</p>
            <h2>Nomeações</h2>
           <ul>
           {presbiteroHuambo.nomeacoes.map((nomeacao, index) => (
                <li key={index}>{nomeacao}</li>
            ))}
           </ul>
           <h2>Biografia</h2>
           <p>{presbiteroHuambo.notaBiografica}</p>
        </div>
    )
}

export default Presbitero