import React, { useState } from 'react';
import { datasLiturgicas } from '../../../Datas/datasLiturgicas';
import { useEventos } from './EventosContext';
import './Calendario.css';

const diasDaSemana = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

const Calendario = () => {
  const [mesAtual, setMesAtual] = useState(new Date().getMonth());
  const [anoAtual, setAnoAtual] = useState(new Date().getFullYear());
  const { eventos } = useEventos();

  const obterDiasDoMes = (mes, ano) => {
    const data = new Date(ano, mes, 1);
    const dias = [];
    while (data.getMonth() === mes) {
      dias.push(new Date(data));
      data.setDate(data.getDate() + 1);
    }
    return dias;
  };

  const diasDoMes = obterDiasDoMes(mesAtual, anoAtual);

  const proximoMes = () => {
    setMesAtual((mesAtual + 1) % 12);
    if (mesAtual === 11) setAnoAtual(anoAtual + 1);
  };

  const mesAnterior = () => {
    setMesAtual((mesAtual + 11) % 12);
    if (mesAtual === 0) setAnoAtual(anoAtual - 1);
  };

  const organizarDiasPorSemana = dias => {
    const semanas = [];
    let semana = [];

    for (let i = 0; i < dias[0].getDay(); i++) {
      semana.push(null); // Preenche o início da semana com null
    }

    dias.forEach(dia => {
      if (semana.length === 7) {
        semanas.push(semana);
        semana = [];
      }
      semana.push(dia);
    });

    while (semana.length < 7) {
      semana.push(null); // Preenche o fim da semana com null
    }

    semanas.push(semana);
    return semanas;
  };

  const semanasDoMes = organizarDiasPorSemana(diasDoMes);

  return (
    <div className="calendario-container">
      <h1> Actividades Episcopais e Calendário Litúrgico</h1>
      <div className="navegacao">
        <button onClick={mesAnterior}>Mês Anterior</button>
        <span>{`${anoAtual}-${mesAtual + 1}`}</span>
        <button onClick={proximoMes}>Próximo Mês</button>
      </div>
      <table className="calendario">
        <thead>
          <tr>
            {diasDaSemana.map((dia, index) => (
              <th key={index}>{dia}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {semanasDoMes.map((semana, index) => (
            <tr key={index}>
              {semana.map((dia, diaIndex) => (
                <td key={diaIndex}>
                  {dia && (
                    <>
                      <strong>{dia.getDate()}</strong>
                      <div>
                        {[...datasLiturgicas, ...eventos]
                          .filter(
                            item =>
                              new Date(item.data).toDateString() ===
                              dia.toDateString()
                          )
                          .map((evento, i) => (
                            <div key={i}>
                              <div> {evento.actividade}</div>
                              <div>{evento.local}</div>
                              <div> {evento.presidente}</div>
                              <div>{evento.hora}</div>
                            </div>
                          ))}
                      </div>
                    </>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>     
    </div>
  );
};

export default Calendario;
