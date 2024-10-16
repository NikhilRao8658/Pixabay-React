import React from "react";


export default function Footerlast() {
    function Scroll() {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
    return (
        <footer className="footer-container">
            <div className="footer-section">
                <h3>Discover</h3>
                <ul>
                    <li>Editor's Choice</li>
                    <li>Curated Collections</li>
                    <li>Pixabay Radio</li>
                </ul>
            </div>
            <div className="footer-section">
                <h3>New</h3>
                <ul>
                    <li>Popular Images</li>
                    <li>Popular Videos</li>
                    <li>Popular Music</li>
                    <li>Popular Searches</li>
                </ul>
            </div>
            <div className="footer-section">
                <h3>Community</h3>
                <ul>
                    <li>Blog</li>
                    <li>Forum</li>
                    <li>Creators</li>
                    <li>Cameras</li>
                </ul>
            </div>
            <div className="footer-section">
                <h3>About</h3>
                <ul>
                    <li>About Us</li>
                    <li>FAQ</li>
                    <li>License Summary</li>
                    <li>Terms of Service</li>
                    <li>Privacy Policy</li>
                    <li>Cookies Policy</li>
                    <li>Digital Services Act</li>
                    <li>Report Content</li>
                    <li>API</li>
                </ul>
            </div>
           <a href=""><img src={"https://img.icons8.com/?size=100&id=MW6RiHrZx16Z&format=png&color=000000"} alt="" id="FtrArrow" onClick={Scroll}/></a>
        </footer>
    );
}
