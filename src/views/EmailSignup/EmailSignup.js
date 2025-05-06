import Navbar from "../../components/ui/navbar/Navbar";
import HeroImg from "../../assets/mainItems/heroImg.png";
import EmailSignupForm from "../../components/EmailSignupComponents/EmailSignupForm";
import "./EmailSignup.css";

const EmailSignup = () => {
    return (
        <div>
            <a href="#main-form" className="skip-to-main">Skip to main form</a>
            <Navbar />
            <div className="spacer"></div>
            <div className="emailsignup-main-wrapper" id="main-form" aria-label="main-form">
                <img src={HeroImg} alt="main show food" className="image-style" />
                <div className="emailsignup-title"  role="heading" aria-level="1">Contact Us</div>
                <div className="emailsignup-content-wrapper">
                    <EmailSignupForm />
                </div>
            </div>
        </div>
    );
};

export default EmailSignup;
