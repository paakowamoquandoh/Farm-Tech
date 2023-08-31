import "./footer.css";
import { Instagram, Facebook, Twitter, Youtube } from 'react-feather';

const Footer = () => {
    return(
        <div className="footer">
            <div className="topside">
            <div className="mediaNavbarLogo">
          <h1 className="text-white">Excellent<i className='goldText'>Tech</i></h1>
            </div>
                <div className="socials">
                    <a href="/"><Twitter/></a>
                    <a href="/"><Facebook/></a>
                    <a href="/"><Instagram/></a>
                    <a href="/"><Youtube/></a>
                </div>
            </div>



            <div className="bottom">
                <div>
                    <h4>Services</h4>
                    <a href="/">Branding</a>
                    <a href="/">Advertising</a>
                    <a href="/">Growth Strategy</a>
                    <a href="/">Packages</a>
                </div>
                <div>
                    <h4>Resources</h4>
                    <a href="/">Client Portal</a>
                    <a href="/">Blog</a>
                    <a href="/">Partners</a>
                    <a href="/">Email Newsletter</a>
                </div>
                <div>
                    <h4>About Us</h4>
                    <a href="/">Our Team</a>
                    <a href="/">Our Work</a>
                    <a href="/">Testimonials</a>
                    <a href="/">Contact Us</a>
                </div>
                <div>
                    <h4>Contact</h4>
                    <a href="/">peni@mediaBrand.customer</a>
                    <a href="/">(233) 334-2851</a>
                    <a href="/">2545 N Canyon Rd</a>
                    <a href="/">Accra, Ghana</a>
                </div>
            </div>
        </div>
    )
}


export default Footer;