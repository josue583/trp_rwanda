import React from "react";
import Navbar from "../Navbar/Navbar";
import ContactTitle from "../contact_us/Contact";
import ContacyForm from "../contact_us/contactForm";
// import Footer from "../footer/footer";
// import GoogleMap from "../contact_us/google_map";

export default function Contact(){
    return (
        <div className="flex-col gap-16">
            <Navbar/>
            <ContactTitle/>
            <ContacyForm/>
            {/* <Footer/> */}
            
            
        </div>
    );
}