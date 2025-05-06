import { useContext, useState, useEffect, useRef } from "react";
import WebplaceContext from "../../store/webplace-context";

import DatePicker from 'react-datepicker';
import emailjs from "@emailjs/browser";

import FormAlertMsg from "../ui/FormAlertMsg/FormAlertMsg";
import ButtonFormat from "../shared/ButtonFormat/ButtonFormat";

import 'react-datepicker/dist/react-datepicker.css';
import "./CateringForm.css";


const stateNames = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming']
const eventType = ["Alumni", "Bachelor / Bachelorette", "Birthday", "Cocktail Reception", "Corporate Lunch", "Engagement", "Fundraiser", "Graduation", "Holiday", "Meeting / Presentation", "Photo / Film Shoot", "Private Dinner", "Rehearsal Dinner", "Shower", "Sporting Event", "Wedding", "Other"]
const timeOptions = [
  "12:00 AM", "12:30 AM", "1:00 AM", "1:30 AM", "2:00 AM", "2:30 AM",
  "3:00 AM", "3:30 AM", "4:00 AM", "4:30 AM", "5:00 AM", "5:30 AM",
  "6:00 AM", "6:30 AM", "7:00 AM", "7:30 AM", "8:00 AM", "8:30 AM",
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
  "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM",
  "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM",
  "9:00 PM", "9:30 PM", "10:00 PM", "10:30 PM", "11:00 PM", "11:30 PM"
]

const initialCateringFormState = {
  email: "",
  first_name: "",
  last_name: "",
  phone_number: "",
  company: "",
  address_1: "",
  address_2: "",
  city: "",
  state: "",
  zip_code: "",
  event_date: "",
  start_time: "",
  end_time: "",
  event_type: "",
  number_people: "",
  additional_info: "",
}


const cateringInputFields = [
  { name: "email", label: "Email*", type: "email", required: true, fullWidth: true },
  { name: "first_name", label: "First name*", type: "text", required: true, fullWidth: false },
  { name: "last_name", label: "Last Name*", type: "text", required: true, fullWidth: false },
  { name: "phone_number", label: "Phone number*", type: "tel", required: true, fullWidth: false },
  { name: "company", label: "Company", type: "text", required: false, fullWidth: false },
  { name: "address_1", label: "Address I*", type: "text", required: true, fullWidth: false },
  { name: "address_2", label: "Address II", type: "text", required: false, fullWidth: false },
  { name: "city", label: "City*", type: "text", required: true, fullWidth: false },
  { name: "state", label: "State*", type: 'dropdown', options: stateNames, required: true, fullWidth: false, placeHolder: "Select state" },
  { name: "zip_code", label: "Zip Code*", type: "text", required: true, fullWidth: false },
  { name: "event_date", label: "Event Date*", type: "date", required: true, fullWidth: false },
  { name: "start_time", label: "Start Time*", type: "dropdown", options: timeOptions, required: true, fullWidth: false, placeHolder: "Select time" },
  { name: "end_time", label: "End Time*", type: "dropdown", options: timeOptions, required: true, fullWidth: false, placeHolder: "Select time" },
  { name: "event_type", label: "Type of Event*", type: 'dropdown', options: eventType, required: true, fullWidth: false, placeHolder: "Select event type" },
  { name: "number_people", label: "Number of People*", type: "number", required: true, fullWidth: false },
  { name: "additional_info", label: "Additional Information*", type: "textarea", required: true, fullWidth: true },
]

const CateringForm = () => {
  const formReference = useRef();
  const placeCtx = useContext(WebplaceContext).generalEmailInformation
  const stylesCtx =
    useContext(WebplaceContext).cateringInformation.catering_information_styles;
  const [formData, setFormData] = useState(initialCateringFormState)
  const [alert, setAlert] = useState(false);
  const [alertTxt, setAlertTxt] = useState("");
  const [alertStatus, setAlertStatus] = useState("");
  const [activeSelectStatus, setActiveSelectStatus] = useState(false)


  const changeHandler = (event) => {
    const { name, value } = event.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleDatePickerChange = (name, date) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: date
    }))
  }

  const submitHandler = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        placeCtx.email_info.service_id,
        placeCtx.catering_tempalte,
        formReference.current,
        placeCtx.email_info.public_id
      )
      .then(
        (result) => {
          console.log("Submit status:", result.text);
          setAlertTxt("Success! We have received your request!");
          setAlertStatus("success");
          setAlert(true);
        },
        (error) => {
          console.log("Submit status:", error.text);
          setAlertTxt("Something went wrong. Please try again later or contact us via phone.");
          setAlertStatus("error");
          setAlert(true);
        }
      );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setAlert(false);
      return () => clearTimeout(timer);
    }, 4000);
  }, [alert]);

  return (
    <div className="catering-form-wrapper">
      {alert && <FormAlertMsg text={alertTxt} alertType={alertStatus} />}
      <form onSubmit={submitHandler} ref={formReference} className="submit-wrapper">
        {cateringInputFields.map((field) => {
          if (field.type === 'date') {
            return <div key={field.name} className={field.fullWidth ? "form-element-wrapper-full" : "form-element-wrapper-mid"}>
              <label htmlFor={field.name} aria-label={`Form section ${field.name} label`}>{field.label}</label>
              <DatePicker
                id={field.name}
                name={field.name}
                value={formData[field.name]}
                selected={formData[field.name]}
                onChange={(date) => handleDatePickerChange(field.name, date)}
                dateFormat="MM/dd/yyyy"
                className="catering-general-input-area"
                required={field.required}
                // minDate={new Date(new Date().setDate(new Date().getDate() + 1))} // Prevent selecting previous dates including today's
                minDate={new Date()}
                aria-label={`Date ${field.name}`}
              />
            </div>
          } else if (field.type === 'textarea') {
            return <div key={field.name} className={field.fullWidth ? "form-element-wrapper-full" : "form-element-wrapper-mid"}>
              <label htmlFor={field.name} aria-label={`Form section ${field.name} label`}>{field.label}</label>
              <textarea
                id={field.name}
                name={field.name}
                value={formData[field.name]}
                onChange={changeHandler}
                rows={4}
                className="catering-general-input-area"
                required={field.required}
                aria-label={`${field.name} input`}
              />
            </div>
          } else if (field.type === 'dropdown') {
            return <div key={field.name} className={field.fullWidth ? "form-element-wrapper-full" : "form-element-wrapper-mid"}>
              <label htmlFor={field.name} aria-label={`Form section ${field.name} label`}>{field.label}</label>
              <select
                id={field.name}
                name={field.name}
                value={formData[field.name]}
                onChange={changeHandler}
                onClick={() => {
                  setActiveSelectStatus(!activeSelectStatus)
                }}
                className="catering-general-input-area catering-dropdown-area"
                required={field.required}
                aria-label={`Form section ${field.name} Dropdown`}
                aria-expanded={activeSelectStatus}
              >
                <option value="" disabled selected hidden >{field.placeHolder}</option>
                {field.options.map((option) => (
                  <option key={option} value={option} aria-label={`Date ${option}`} >
                    {option}
                  </option>
                ))}
              </select>
            </div>
          } else {
            return <div key={field.name} className={field.fullWidth ? "form-element-wrapper-full" : "form-element-wrapper-mid"}>
              <label htmlFor={field.name} aria-label={`Form section ${field.name} label`}>{field.label}</label>
              <input
                type={field.type}
                id={field.name}
                name={field.name}
                value={formData[field.name]}
                onChange={changeHandler}
                className="catering-general-input-area"
                required={field.required}
                aria-label={`${field.name} input`}
              />
            </div>
          }
        })}

        <div className="btn-submit">
          <div className="catering-btn-text">*Required information</div>
          <div className="catering-btn">
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
            />
          </div>
        </div>
      </form >
    </div >
  );
};

export default CateringForm;
