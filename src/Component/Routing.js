import {Route, Routes} from "react-router-dom";
import Home from "../Home";
import Research from "../Research";
import Calendar from "./Event/Calendar";
import SignInSide from "../Login";
import SignUp from "../Register";
import {
    Courses,
    Projects,
    Resources
} from "../Components";
import AboutUs from "../AboutUs";
import DirectorAndOthers from "../DirectorAndOthers";
import ContactUs from "./Contact/Contact";
import Location from "../Location";
import News from "../News";
import Fellowships from "../Fellowships";
import FellowshipHolder from "../FellowshipHolder";
import NewsHolder from "../NewsHolder";
import Layout from "../layout/Layout";
import LayoutNews from "../layout/SingleLayoutNews";
import SingleFellowshipDetail from "../SingleFellowshipDetail";
import React from "react";
import AdminDashboard from "../Admin/AdminDashboard";
import ResearchPaperForm from "./Publication/ResearchPaperForm";
import ResearchPaperList from "./Publication/ResearchPaperList";
import AdminRoute from "../Route/AdminRoute";
import NewsItem from "./News/NewsItem";
import NewsPostForm from "./News/NewsPostForm";
import ContactList from "./Contact/ContactList";
import StudyAtAcademy from "./Resources/StudyAtAcademy";
import StudyOnline from "./Resources/StudyOnline";
import MoreCourses from "./Resources/MoreCourses";

const Routing = () => {

    return (

        <Routes>

            {/*<Route path="/" element={*/}
            {/*    <PrivateRoute>*/}
            {/*        <Home/> </PrivateRoute>*/}
            {/*}/>*/}
            <Route path="/" element={
                    <Home/>
            }/>
            <Route path="/research" element={<Research/>}/>
            <Route path="/events" element={<Calendar />} />
            <Route path="/login" element={<SignInSide />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="/about-and-mission" element={<AboutUs/>}/>
            <Route path="/director-and-others" element={<DirectorAndOthers/>}/>
            <Route path="/resources" element={<Resources/>}/>
            <Route path="/projects" element={<Projects/>}/>

            <Route path="/resources-academy" element={<StudyAtAcademy/>}/>
            <Route path="/resources-Web" element={<StudyOnline/>}/>
            <Route path="/courses" element={<Courses/>}/>

            <Route path="/contact" element={<ContactUs />} />
            <Route path="/location" element={<Location />} />
            <Route path="/news" element={<News />} />
            <Route path="/submitPaper"  element={
                <AdminRoute >
                    <ResearchPaperForm />
            </AdminRoute>} />
            <Route path="/addCalendar"  element={
                <AdminRoute >
                    <Calendar />
                </AdminRoute>} />
            <Route path="/newsItem"  element={
                <AdminRoute >
                    <NewsItem />
                </AdminRoute>} />
            <Route path="/ContactView"  element={
                <AdminRoute >
                    <ContactList />
                </AdminRoute>
            } />
            <Route path="/newsPost"  element={
                <AdminRoute >
                    <NewsPostForm />
                </AdminRoute>} />
            <Route path="/publications" element={<ResearchPaperList />} />
            <Route path="/more-courses" element={<MoreCourses />} />

            <Route path="/fellowships" element={<Fellowships />} />
            <Route path="/fellowships-detail" element={<FellowshipHolder />} />
            <Route path="/news-detail" element={<NewsHolder />} />
            <Route path="/layout" element={<Layout />} />
            <Route path="/layout-news" element={<LayoutNews />} />
            <Route path="/fellowships/:title" element={<SingleFellowshipDetail />} />
            <Route path="/news/:title" element={<LayoutNews />} />

            <Route path="/admin/dashboard" element={
                <AdminRoute >
                    <AdminDashboard />
                </AdminRoute>
            } />
        </Routes>

    );

}
export  default Routing;