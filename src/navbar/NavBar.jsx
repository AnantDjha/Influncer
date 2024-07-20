import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"
import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react";


export default function NavBar() {
    const navigate = useNavigate()
    const navRef = useRef(null)

    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    useEffect(()=>{
        if(!navRef) return
        if(scrollPosition > 10)
        {   
            navRef.current.style.backgroundColor = "#d5d3d3"
        }
        else{
            navRef.current.style.backgroundColor = "transparent"

        }
    },[scrollPosition])
    return (
        <div className="main-nav">
            <nav ref={navRef}>
                <motion.div className="brand-name" >
                    <motion.h2 initial={{ position: "relative", left: "-5rem", opacity: 0 }} animate={{ left: "0", opacity: 1 }}
                    transition={{ duration: "0.4", delay: "0.1" }}>
                        LUENCE
                    </motion.h2>
                </motion.div>
                <ul>
                    <Link className="one" ><motion.li initial={{ position: "relative", left: "-5rem", opacity: 0 }} animate={{ left: "0", opacity: 1 }}
                        transition={{ duration: "0.3", delay: "0.3" }}>About</motion.li></Link>
                    <a href = "#contact" className="two" ><motion.li initial={{ position: "relative", left: "-5rem", opacity: 0 }} animate={{ left: "0", opacity: 1 }}
                        transition={{ duration: "0.3", delay: "0.5" }} >Contact</motion.li></a>
                    <motion.button className="signupButton" initial={{ position: "relative", left: "-5rem", opacity: 0 }} animate={{ left: "0", opacity: 1 }}
                        transition={{ duration: "0.3", delay: "0.7" }} onClick={()=>{
                            navigate("/signup")
                        }}><motion.li >SignUp</motion.li></motion.button>
                </ul>
            </nav>
        </div>
    )
}