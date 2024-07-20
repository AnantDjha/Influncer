import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./Contact.css"
import { faMailForward, faMailReply, faMessage, faPhone } from "@fortawesome/free-solid-svg-icons"
import instagram from "../assets/insta.jpeg"
import facebook from "../assets/facebook.png"

export default function Contact()
{
    return (
        <div className="main-contact" id="contact">
            <div className="contact-box">
                <div className="contact-text">
                    <h2>Contact Us</h2>
                    <div className="contact-btn">
                        <a href="tel:+915128828688"><FontAwesomeIcon icon={faPhone}/></a>
                        <a href="mailto:flence@gmail.com"><FontAwesomeIcon icon={faMessage}/></a>
                    </div>
                </div>

                <div className="para">
                    <p>Connect with us with any query and dought related to platform, we'll like to hear from you

                    </p>
                </div>
                <div className="social">
                    <a href="https://www.instagram.com" target="_blank"><img src={instagram} alt="" /></a>
                    <a href="https://www.facebook.com" target="_blank"><img src={facebook} alt="" /></a>
                </div>
            </div>
        </div>
    )
}