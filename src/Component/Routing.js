import {Route, Routes} from "react-router-dom";
import Home from "../Home";
import Research from "../Research";
import Calendar from "./Calendar";
import SignInSide from "../Login";
import SignUp from "../Register";
import {
    Courses,
    DigitalArchive,
    Dissemination,
    Ecumenism,
    Integration,
    InternationalCooperation,
    Networks,
    Resources
} from "../Components";
import AboutUs from "../AboutUs";
import DirectorAndOthers from "../DirectorAndOthers";
import ContactUs from "../Contact";
import Location from "../Location";
import News from "../News";
import Fellowships from "../Fellowships";
import Fellowship from "../Fellowship";
import NewsDetail from "../NewsDetail";
import Layout from "../layout/Layout";
import LayoutNews from "../layout/LayoutNews";
import FellowshipDetail from "../FellowshipDetail";
import React from "react";

const Routing = () => {

    return (

        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/research" element={<Research/>}/>
            <Route path="/events" element={<Calendar />} />
            <Route path="/login" element={<SignInSide />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="/digital-archive" element={<DigitalArchive/>}/>
            <Route path="/about-and-mission" element={<AboutUs/>}/>
            <Route path="/director-and-others" element={<DirectorAndOthers/>}/>
            <Route path="/integration" element={<Integration/>}/>
            <Route path="/ecumenism" element={<Ecumenism/>}/>
            <Route path="/dissemination" element={<Dissemination/>}/>
            <Route path="/resources" element={<Resources/>}/>
            <Route path="/courses" element={<Courses/>}/>
            <Route path="/networks" element={<Networks/>}/>
            <Route path="/international-cooperation" element={<InternationalCooperation/>}/>
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/location" element={<Location />} />
            <Route path="/news" element={<News />} />
            <Route path="/fellowships" element={<Fellowships />} />
            <Route path="/fellowships-detail" element={<Fellowship />} />
            <Route path="/news-detail" element={<NewsDetail />} />
            <Route path="/layout" element={<Layout />} />
            <Route path="/layout-news" element={<LayoutNews />} />
            <Route path="/fellowships/:title" element={<FellowshipDetail />} />
            <Route path="/news/:title" element={<LayoutNews />} />


        </Routes>

    );

}
export  default Routing;