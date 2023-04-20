import { useReducer } from "react";
type PersonalInfoState = {
  name: string;
  email: string;
  phone: string;
  nameError: string;
  emailError: string;
  phoneError: string;
};

type PersonalInfoAction =
  | { type: "CHANGE_NAME"; payload: string }
  | { type: "CHANGE_EMAIL"; payload: string }
  | { type: "CHANGE_PHONE"; payload: string };

function reducer(
  state: PersonalInfoState,
  action: PersonalInfoAction
): PersonalInfoState {
  switch (action.type) {
    case "CHANGE_NAME":
      return {
        ...state,
        name: action.payload,
        nameError: action.payload.trim() ? "" : "Name is required",
      };
    case "CHANGE_EMAIL":
      return {
        ...state,
        email: action.payload,
        emailError: isValidEmail(action.payload) ? "" : "Email is invalid",
      };
    case "CHANGE_PHONE":
      return {
        ...state,
        phone: action.payload,
        phoneError: isValidPhoneNumber(action.payload)
          ? ""
          : "Phone number is invalid",
      };
    default:
      return state;
  }
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return emailRegex.test(String(email).toLowerCase());
}

function isValidPhoneNumber(phone: string): boolean {
  const phoneRegex = /^\+(?:[0-9] ?){6,14}[0-9]$/;
  return phoneRegex.test(phone);
}

type Props = {};

const PersonalInfo = (props: Props) => {
  const [state, dispatch] = useReducer(reducer, {
    name: "",
    email: "",
    phone: "",
    nameError: "",
    emailError: "",
    phoneError: "",
  });

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "CHANGE_NAME", payload: e.target.value });
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "CHANGE_EMAIL", payload: e.target.value });
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "CHANGE_PHONE", payload: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // handle form submission
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="form_header">
        <h1 className="form_header_h1">Personal info</h1>
        <p className="form_header_p">
          Please provide your name, email address, and phone number
        </p>
      </div>
      <div className="form_inputs">
        <div className="form_inputs_name">
          <label className="form_inputs_name_head">Name</label>
          <input
            type="text"
            className={`${
              state.nameError
                ? "form_inputs_name_input_error"
                : "form_inputs_name_input"
            }`}
            placeholder="e.g Stephan King"
            value={state.name}
            onChange={handleNameChange}
          />
          {state.nameError && (
            <div className="form_inputs_name_error">{state.nameError}</div>
          )}
        </div>
        <div className="form_inputs_email">
          <label className="form_inputs_email_head">Email Address</label>
          <input
            type="email"
            className={`${
              state.emailError
                ? "form_inputs_email_input_error"
                : "form_inputs_email_input"
            }`}
            placeholder="e.g stephanking@lorem.com"
            value={state.email}
            onChange={handleEmailChange}
          />
          {state.emailError && (
            <div className="form_inputs_email_error">{state.emailError}</div>
          )}
        </div>
        <div className="form_inputs_phone">
          <label className="form_inputs_phone_head">Phone Number</label>
          <input
            type="phone"
            className={`${
              state.phoneError
                ? "form_inputs_phone_input_error"
                : "form_inputs_phone_input"
            }`}
            placeholder="e.g +1 234 567 890"
            value={state.phone}
            onChange={handlePhoneChange}
          />
          {state.phoneError && (
            <div className="form_inputs_phone_error">{state.phoneError}</div>
          )}
        </div>
      </div>
      <div className="form_button">
        <button className="form_button_next" type="submit">
          Next Step
        </button>
      </div>
    </form>
  );
};

export default PersonalInfo;
