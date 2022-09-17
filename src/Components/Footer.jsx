import { Link } from "react-router-dom"
import Logo from "../images/logo.png"
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa"
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai"



const Footer = () => {
  return (
    <footer>
        <div className="container footer__container">
            <article>
                <Link to="/" className="logo">
                    <img src={Logo} alt="Footer Logo"/>
                </Link>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id neque excepturi ex dicta facilis consequatur incidunt natus ipsum quisquam laboriosam.
                </p>
                <div className="footer__socials">
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer noopener"><FaLinkedinIn/></a>
                    <a href="https://facebook.com" target="_blank" rel="noreferrer noopener"><FaFacebookF/></a>
                    <a href="https://twitter.com" target="_blank" rel="noreferrer noopener"><AiOutlineTwitter/></a>
                    <a href="https://instagram.com" target="_blank" rel="noreferrer noopener"><AiOutlineInstagram/></a>
                </div>
            </article>
            <article>
                <h4>Permalinks</h4>
                <Link to="/about">About</Link>
                <Link to="/plans">Plans</Link>
                <Link to="/trainers">Trainers</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/contact">Contact</Link>
            </article>
            <article>
                <h4>Insights</h4>
                <Link to="/s">Blog</Link>
                <Link to="/s">Case Studies</Link>
                <Link to="/s">Events</Link>
                <Link to="/s">Communities</Link>
                <Link to="/s">FAQs</Link>
            </article>
            <article>
                <h4>Get In Touch</h4>
                <Link to="/contact">Contact Us</Link>
                <Link to="/s">Support</Link>
            </article>
        </div>
        <div className="footer__copyright" >
            <small >Made with <small style={{color:"red", fontSize:"1rem"}}>❤</small> by <a href="https://www.linkedin.com/in/jaskaran-singh-dev/" target="_blank" rel="noopener noreferrer" style={{color:"var(--color-secondary)"}}>Jaskaran Singh</a></small>
        </div>
    </footer>
  )
}

export default Footer