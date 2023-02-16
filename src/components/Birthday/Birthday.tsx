import React from "react";
import { BirthdayYearDropdown } from "./BirthdayYearDropdown";

export function Birthday(){
    return(
        <main>
            <h1 className="birthday-title">Capture the Magic of Your Birthday on Mars: Enter Your Name and Birthday to Receive Your Personalized Martian Photos!</h1>
            <div>IMPORT USER INPUT COMPONENT</div>
            <div><BirthdayYearDropdown/></div>
            <div>IMPORT PHOTOVIEWER COMPONENT</div>
            <div>IMPORT PDF GENERATOR COMPONENT</div>
        </main>
    )
}