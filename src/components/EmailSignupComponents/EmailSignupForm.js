
import { useState, useContext, useRef, useEffect } from 'react'
import WebplaceContext from "../../store/webplace-context";

import emailjs from "@emailjs/browser";

import FormAlertMsg from '../ui/FormAlertMsg/FormAlertMsg';

import './EmailSignupForm.css'
import ButtonFormat from '../shared/ButtonFormat/ButtonFormat';


const initialEmailSignupFormState = {
    email: "",
    user_name: "",
    message: "",
    phone_number: ""
}

const emailSignupInputFields = [
    { name: "user_name", label: "Name*", type: "text" },
    { name: "email", label: "Email*", type: "email" },
    { name: "phone_number", label: "Phone*", type: "text" },
    { name: "message", label: "Message*", type: "text" },
]


const EmailSignupForm = () => {
    const formReference = useRef()
    const placeCtx = useContext(WebplaceContext).generalEmailInformation
    const stylesCtx =
        useContext(WebplaceContext).cateringInformation.catering_information_styles;
    const [alert, setAlert] = useState(false);
    const [alertTxt, setAlertTxt] = useState("");
    const [alertStatus, setAlertStatus] = useState("");
    const [formData, setFormData] = useState(initialEmailSignupFormState)

    const changeHandler = (event) => {
        const { name, value } = event.target
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }

    const submitHandler = (event) => {
        event.preventDefault()
        emailjs
            .sendForm(
                placeCtx.email_info.service_id,
                placeCtx.email_signup_template,
                formReference.current,
                placeCtx.email_info.public_id
            )
            .then(
                (result) => {
                    console.log("Submit status:", result.text);
                    setAlertTxt("Success! Thank you for getting in contact with us!");
                    setAlertStatus("success");
                    setAlert(true);
                },
                (error) => {
                    console.log("Submit status:", error.text);
                    setAlertTxt("Something went wrong. Please try again later");
                    setAlertStatus("error");
                    setAlert(true);
                }
            ).then(
                setFormData(initialEmailSignupFormState)
            );
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setAlert(false);
            return () => clearTimeout(timer);
        }, 4000);
    }, [alert]);

    return <div className="signup-form-wrapper" id="contact-info" aria-label="Contact information">
        {alert && <FormAlertMsg text={alertTxt} alertType={alertStatus} />}
        <form className='email-submit-wrapper' onSubmit={submitHandler} ref={formReference}>
            {emailSignupInputFields.map((field, index) => {
                return <div className="email-form-element-wrapper" key={field.name}>
                    {index !== 3 && <div className="email-form-element-wrapper"><label htmlFor={field.name}>{field.label}</label>
                        <input
                            id={field.name}
                            name={field.name}
                            value={formData[field.name]}
                            onChange={changeHandler}
                            rows={4}
                            className="email-general-input-area"
                            type={field.type}
                            required
                            aria-label={`Form section ${formData[field.name]}`}
                        /></div>}
                    {index === 3 && <div className="email-form-element-wrapper"><label htmlFor={field.name}>{field.label}</label>
                        <textarea
                            id={field.name}
                            name={field.name}
                            value={formData[field.name]}
                            onChange={changeHandler}
                            rows={4}
                            className="email-general-input-area text-area-input-area"
                            type={field.type}
                            required
                            aria-label={`Form section ${formData[field.name]}`}
                        /></div>}
                </div>
            })}
            <div className="email-signup-btn-submit">
                <div className="email-signup-btn-text">*Required information</div>
                <div className="email-signup-btn">
                    <ButtonFormat
                        btnSize={stylesCtx.submit_button.btn_size}
                        showArrow={stylesCtx.submit_button.show_arrow}
                        arrowAtStart={stylesCtx.submit_button.arrow_at_start}
                        arrowColor={stylesCtx.submit_button.arrow_color}
                        showBorder={stylesCtx.submit_button.show_border}
                        borderColor={stylesCtx.submit_button.border_color}
                        backgroundColor={stylesCtx.submit_button.background_color}
                        fontColor={stylesCtx.submit_button.font_color}
                        capitalizeText={stylesCtx.submit_button.capitalize_text}
                        btnText="Submit"
                        aria-label="Form Submit"
                    />
                </div>
            </div>
        </form>
    </div>
}

export default EmailSignupForm