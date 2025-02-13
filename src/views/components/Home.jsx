import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import Noticias from "./Noticias/Noticias";
import EventList from "./Eventos/Eventos";
import './Home.css';

function Home() {

    return(
        <div>                     
            <Sidebar />
            <Noticias />
            <EventList />                              
        </div>
    );
};

export default Home;