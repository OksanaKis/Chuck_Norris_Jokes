import React, {useEffect, useState} from "react";
import '../App.css';
import HeaderImage from "../components/HeaderImage";
import Main from "../components/Main";


const Jokes = () => {

    return (
        <>
        <div className="container">
            <div className="header">
                <HeaderImage/>
            </div>
            <div className="titleCategories">Categories</div>
            <Main/>
        </div>
        </>
    )
};

export default Jokes;