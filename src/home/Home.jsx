import "./Home.css"
import { motion } from "framer-motion"
import influncerIconForHome from "../assets/influncerIconForHome.jpg"
import brandIconForHome from "../assets/brandIconForHome.jpg"
import About from "./About"
import Brand from "./Brand"
import influncerLetsStart from "../assets/influncerLetsStart.png"
import { useNavigate } from "react-router-dom"
import Contact from "./Contact"

export default function Home() {
    const navigate = useNavigate()
    return (
        <div className="main-home">
            <div className="imageSection">
                <div className="written-content">
                    <motion.div className="text" >
                        <motion.p className="head" initial={{ position: "relative", top: "-2rem", opacity: 0 }} animate={{ top: "0", opacity: 1 }} transition={{ duration: 0.2, delay: 1.5 }}>Get started</motion.p>
                        <motion.h1 initial={{ position: "relative", top: "-2rem", opacity: 0 }} animate={{ top: "0", opacity: 1 }} transition={{ duration: 0.2, delay: 1.6 }}>Find the best Influencers for your marketing campaign</motion.h1>
                        <motion.span className="sm-text" initial={{ position: "relative", top: "-2rem", opacity: 0 }} animate={{ top: "0", opacity: 1 }} transition={{ duration: 0.2, delay: 1.7 }}>Work with talented Influencers at affordable price to get the best out of your time & cost</motion.span>
                        <motion.div className="btn" initial={{ position: "relative", top: "-2rem", opacity: 0 }} animate={{ top: "0", opacity: 1 }} transition={{ duration: 0.2, delay: 1.8 }}>
                            <button className="firstBTnOFHome">Find Brand</button>
                            <button className = "secondBTnOFHome" >Find Creator</button>
                        </motion.div>
                    </motion.div>
                </div>
            </div>


            <div className="otherContent">
                <div className="choices">
                    <div className="choice-box">
                        <img src={brandIconForHome} alt="" />
                        <h2>Brand / Industry</h2>
                        <p>Connecting brands with top influencers, we specialize in creating impactful partnerships that amplify your message and drive engagement. Our platform streamlines the process of finding, negotiating, and collaborating with influencers to ensure your campaigns achieve maximum reach and effectiveness</p>
                    </div>
                    <div className="choice-box">
                        <img src={influncerIconForHome} alt="" />
                        <h2>Influncer</h2>
                        <p>Connecting brands with top influencers, we specialize in creating impactful partnerships that amplify your message and drive engagement. Our platform streamlines the process of finding, negotiating, and collaborating with influencers to ensure your campaigns achieve maximum reach and effectiveness</p>

                    </div>
                </div>

                <About/>
                <Brand/>

                <div className="collaborateWithInfluencer">
                    
                    <div className="collaborateWithInfluencer-text">
                    <h2>Find best Influncers to Collaborate</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae sit eligendi similique exercitationem ratione nisi!</p>
                    <button onClick={()=>{
                        navigate("/signup")
                    }}>Lets Start</button>

                    </div>
                    <div className="collaborateWithInfluencer-img">
                        <img src={influncerLetsStart} alt="" />
                    </div>
                </div>
                <Contact/>
            </div>

        </div>
    )
}