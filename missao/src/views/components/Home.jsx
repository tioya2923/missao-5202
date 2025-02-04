import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Sidebar from "./Sidebar/Sidebar";
import Noticias from "./Noticias/Noticias";
import EventList from "./Eventos/Eventos";
import './Home.css';

function Home() {

    return(
        <div>
            <Navbar />            
            <Sidebar />
            <Noticias />
            <EventList />
            <Footer />                            
        </div>
    );
};

export default Home;