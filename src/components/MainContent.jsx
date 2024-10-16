/// File name  MainContent.jsx

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footerp from "./Footer";
import Footerlast from "./Lastfooter";


export default function Maincon() {

    let [api, setApi] = useState([]);
    let [search, setSearch] = useState("")
    let change = (e) => {
        setSearch(e.target.value)
    }
    useEffect(() => {
        let api = fetch(`https://pixabay.com/api/?key=46193687-1ee9f7465fd5eeca96a352d5f&q=${search}&image_type=photo`);
        api.then(res => res.json()).then(val => setApi(val.hits))
            .catch(err => console.log(err))
    })


    let Single = useNavigate();

    return (
        <>
            <div id="Firstbar">

            </div>
            <nav>
                <a href="FtrArrow" style={{ textDecoration: "none" }}> <h1>pixabay</h1></a>
                <ul>
                    <div id="nav-p" >
                        <li id="nav-items"><button>Explore</button></li>
                        <Link to="/Loginp">  <li id="nav-items"><button>Join</button></li></Link>
                        <li id="nav-items"><button>Login</button></li>
                        <li id="nav-items"><button>Upload</button></li>
                    </div>
                </ul>
            </nav>
            <div className="header-image"></div>
            <div className="main-container">
                <h1 id="main-head-t">Stunning royalty-free images & royalty-free stock</h1>


                <h3>Over 5 million+ high-quality stock images, videos, and music shared by our talented community.</h3>

                <input type="text" placeholder="Search for all images on Pixabay" onChange={change} />

                <select name="" id="select">
                    <option value="">All Images</option>
                    <option value="">Photos</option>
                    <option value="">Vectors</option>
                </select>
            </div>

            <div className="button-container">
                <button className="styled-button">Home</button>
                <button className="styled-button">Photos</button>
                <button className="styled-button">Gifs</button>
                <button className="styled-button">Illustrations</button>
            </div> <br />   <br />

            <div>
                <div id="last-container">
                    {api.filter((y) => {
                        return (
                            <div key={y.id}>{y.tags.toLowerCase().includes(search)}</div>
                        )
                    })
                        .map((x) => {
                            return (
                                <>
                                    <div key={x.id} > <a href=""> <img src={x.webformatURL} id="lastImgae" onClick={() => Single("/myImage", { state: { x } })} /></a></div>
                                </>

                            )
                        })}

                </div>
            </div>
            <Footerp />
            <Footerlast />
        </>
    );
}
