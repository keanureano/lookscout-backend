import { useState, useEffect } from "react";
import { InfoIcon, CaretIcon } from "./Icons";
import { Tooltip } from "react-tooltip";
import { getButtonText, addContent } from "../services/apiService";

function StepperModal() {
  function submitHandler(event) {
    event.preventDefault();
    const newContent = {
      name: event.target.Name.value,
      email: event.target.Email.value,
    };
    addContent(newContent).then((data) => console.log(data));
    event.target.reset();
  }
  return (
    <form method="post" className="StepperModal" onSubmit={submitHandler}>
      <ModalHeader />
      <ModalBody />
      <ModalFooter />
    </form>
  );
}

function ModalHeader() {
  return (
    <div className="ModalHeader">
      <div className="Stepper SelectedStep">
        <div className="Step">
          <span>1</span>
          <p>Account</p>
        </div>
      </div>
      <div className="Stepper NextStep">
        <div className="Step">
          <span>2</span>
          <p>Personal</p>
        </div>
      </div>
      <div className="Stepper">
        <div className="Step">
          <span>3</span>
          <p>Billing</p>
        </div>
      </div>
      <div className="Stepper">
        <div className="Step">
          <span>4</span>
          <p>Done</p>
        </div>
      </div>
    </div>
  );
}

function ModalBody() {
  return (
    <div className="ModalBody">
      <div className="FormGroup">
        <label htmlFor="Name">Name</label>
        <InfoIcon tooltipId="NameInfo" content="Name lorem" />
        <Tooltip id="NameInfo" />
        <input id="Name" name="Name" placeholder="Bryan Koelpin" />
      </div>

      <div className="FormGroup">
        <label htmlFor="Email">Email*</label>
        <InfoIcon tooltipId="EmailInfo" content="Email lorem" />
        <Tooltip id="EmailInfo" />
        <input id="Email" name="Email" placeholder="Email Address" />
        <p>Please input a real Email Address</p>
      </div>

      <div className="PasswordGroup">
        <div className="FormGroup">
          <label htmlFor="Password">Password* </label>
          <InfoIcon tooltipId="PasswordInfo" content="Password lorem" />
          <Tooltip id="PasswordInfo" />
          <input
            id="Password"
            name="Password"
            type="password"
            placeholder="Password"
          />
          <p>Please enter your password</p>
        </div>

        <div className="FormGroup">
          <label htmlFor="ConfirmPassword">Confirm Password*</label>
          <InfoIcon
            tooltipId="ConfirmPasswordInfo"
            content="Confirm Password lorem"
          />
          <Tooltip id="ConfirmPasswordInfo" />
          <input
            id="ConfirmPassword"
            name="ConfirmPassword"
            placeholder="Confirm Password"
          />
          <p>Passwords need to match</p>
        </div>
      </div>

      <div className="FormCheckBox">
        <input id="CheckBox" name="CheckBox" type="checkbox" defaultChecked />
        <label htmlFor="CheckBox">I accept the Terms and Privacy Policy</label>
      </div>
    </div>
  );
}

function ModalFooter() {
  const [buttonText, setButtonText] = useState(null);

  useEffect(() => {
    getButtonText().then((data) => setButtonText(data));
  }, []);

  return (
    <div className="ModalFooter">
      <button className="NextButton" type="submit">
        <span>{buttonText}</span>
        <CaretIcon />
      </button>
    </div>
  );
}

export default StepperModal;
