import "./Footer.css"
import instagram from "../assets/insta.jpeg"
import facebook from "../assets/facebook.png"

export default function Footer() {
    return (
        <div className="main-footer">
            <div className="uper">
                <h3>
                    <h4>FLUENCE</h4>
                    <span>
                        <a href="https://www.instagram.com"><img src={instagram} alt="" height="30px" width="30px" /></a>
                        <a href="https://www.facebook.com"><img src={facebook} alt="" height="30px" width="30px" /></a>
                    </span>
                </h3>
            </div>
            <div className="down">
                <p>LeanQuest Copyright 2024 Terms of Use | Privacy Policy</p>
            </div>
        </div>
    )
}