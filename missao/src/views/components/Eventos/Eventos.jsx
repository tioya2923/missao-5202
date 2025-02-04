import React from "react";
import { Link } from 'react-router-dom';
import { lastEvent as events } from '../../Datas/eventos'; // Import and rename to `events`
import "./Event.css"; // Import CSS file for styling

const EventList = ({ events }) => {
  if (!events || events.length === 0) {
    return <div>Nenhum evento disponível</div>;
  }

  // Ordenar os eventos para que o último inserido apareça primeiro
  const sortedEvents = [...events].reverse();

  return (
    <div className="event-main">
      <h2 className="title-h2">Eventos</h2>
      <div className="event-list">
        <div className="event-large">
          <div className="event">
            <img src={sortedEvents[0].image} alt={sortedEvents[0].theme} className="event-image" />
            <div className="event-content">
              <div className="event-date">{sortedEvents[0].date}</div>
              <div className="event-time">{sortedEvents[0].time}</div>
              <div className="event-theme">{sortedEvents[0].theme}</div>
              <div className="event-location">{sortedEvents[0].location}</div>
            </div>
          </div>
        </div>
        <div className="event-small-container">
          {sortedEvents.slice(1, 3).map((event, index) => (
            <div className="event event-small" key={index}>
              <div className="event-content">
                <div className="event-date">{event.date}</div>
                <div className="event-time">{event.time}</div>
                <div className="event-theme">{event.theme}</div>
                <div className="event-location">{event.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mais-eventos-container">
        <Link to="TodosEventos" className="mais-eventos-link">Mais Eventos</Link>
      </div>
    </div>
  );
};

const Eventos = () => {
  return <EventList events={events} />;
};

export default Eventos;
