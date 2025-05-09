import React, { useEffect, useState } from "react";
import './BoletimArquidiocesano.css';
import { pdfBoletins } from '../../../../Datas/pdfBoletim';
import { useInView } from "react-intersection-observer";

const BoletimArquidiocesano = () => {
    const [sortedpdfBoletins, setsortedpdfBoletins] = useState([]);

    useEffect(() => {
        const sortedBoletins = [...pdfBoletins].sort((a, b) => new Date(b.date) - new Date(a.date));
        setsortedpdfBoletins(sortedBoletins);
    }, []);

    return (
        <div className="boletim-arquidiocesano">
            <h2 className="titulo-boletim">Boletim Arquidiocesano</h2>
            <div className="boletim-grid">
                {sortedpdfBoletins.map((boletim) => (
                    <PdfBoletim key={boletim.id} boletim={boletim} />
                ))}
            </div>
        </div>
    );
};

const PdfBoletim = ({boletim}) => {
    const {ref} = useInView({
        triggerOnce: true,
    });

    return (
        <div className="pdf-boletim" ref={ref}>
            <div className="boletin-info">
                <div className="boletim-title">{boletim.title}</div>
                <div className="boletim-actions">
                    <a href={boletim.url} target="_blank" rel="noopener noreferrer" className="boletim-view">Abrir</a>
                    <a href={boletim.url} download className="boletim-download">Baixar</a>
                </div>
            </div>
        </div>
    );
};

export default BoletimArquidiocesano;