import React, { useState, useEffect } from 'react';
import { pdfFiles } from '../../../Datas/pdfData';
import './ComentarioLiturgico.css';
import { useInView } from 'react-intersection-observer';

const ComentarioLiturgico = () => {
  const [sortedPdfFiles, setSortedPdfFiles] = useState([]);

  useEffect(() => {
    const sortedFiles = [...pdfFiles].sort((a, b) => new Date(b.date) - new Date(a.date));
    setSortedPdfFiles(sortedFiles);
  }, []);

  return (
    <div className="comentario-liturgico">
      <h2 className="titulo-centralizado">Comentários à Liturgia da Palavra</h2>
      <div className="pdf-grid">
        {sortedPdfFiles.map((file) => (
          <PdfItem key={file.id} file={file} />
        ))}
      </div>
    </div>
  );
};

const PdfItem = ({ file }) => {
  const { ref } = useInView({
    triggerOnce: true,
  });

  return (
    <div className="pdf-item" ref={ref}>
      <div className="pdf-info">
        <div className="pdf-title">{file.title}</div>
        <div className="pdf-actions">
          <a href={file.url} target="_blank" rel="noopener noreferrer" className="pdf-view">
            Abrir
          </a>
          <a href={file.url} download className="pdf-download">
            Baixar
          </a>
        </div>
      </div>
    </div>
  );
};

export default ComentarioLiturgico;
