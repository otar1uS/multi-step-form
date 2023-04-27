import FormProps from "../../form";

import Buttons from "../buttons";
import { useSelector } from "react-redux";

import { iconThankYou } from "../../assets/images";

interface Addon {
  identifier: string;
  name: string;
  value: number;
}

interface State {
  isItYear: boolean;
  planNumber: number;
  InitialAdds: Addon[];
}

const Summary = ({ setGoBackward, setGoForward, index }: FormProps) => {
  const { InitialAdds, planNumber, isItYear }: State = useSelector(
    (state: State) => state
  );

  const finished = useSelector((state: boolean) => state.itsFinished);

  const planName: () => string | undefined = () => {
    switch (planNumber) {
      case 9:
        return "Arcade";
      case 12:
        return "Advanced";
      case 15:
        return "Pro";

      default:
        "None";
    }
  };
  const total = () => {
    let addValue = InitialAdds[0].map((add) => add.value);
    return planNumber + addValue.reduce((a, b) => a + b, 0);
  };
  return (
    <div className="summary">
      {!finished ? (
        <>
          <div className="summary_header">
            <h1 className="summary_header_h1">Finishing up</h1>
            <p className="summary_header_p">
              Double-check everything looks OK before confirming.
            </p>
          </div>
          <div className="summary_finishedPlan">
            <div className="summary_finishedPlan_planDetails">
              <div className=" summary_finishedPlan_planDetails_container">
                <h1 className="summary_finishedPlan_planDetails_container_planName">{`${planName()} (${
                  isItYear ? "Yearly" : "Monthly"
                })`}</h1>
              </div>
              <h3 className="summary_finishedPlan_planDetails_price">
                {`$${planNumber}/${isItYear ? "yr" : "mo"}`}
              </h3>
            </div>
            <hr />
            {InitialAdds[0].map((add) => (
              <div key={add.identifier} className="summary_finishedPlan_adds">
                {add.name && (
                  <p className="summary_finishedPlan_adds_name">{add.name}</p>
                )}
                <p className="summary_finishedPlan_adds_price">{`+$${
                  add.value
                }/${isItYear ? "yr" : "mo"}`}</p>
              </div>
            ))}
          </div>
          <div className="summary_finishedPlan_total">
            <p className="summary_finishedPlan_total_name">{`Total(per ${
              isItYear ? "year" : "month"
            })`}</p>
            <p className="summary_finishedPlan_total_price">{`$${total()}/${
              isItYear ? "yr" : "mo"
            }`}</p>
          </div>
          <Buttons
            goBackward={setGoBackward}
            goForward={setGoForward}
            index={index}
            isItSelected={true}
          />
        </>
      ) : (
        <div className="summary_thankyou">
          <img
            src={iconThankYou}
            alt="Thank you icon"
            className="summary_thankyou_icon"
          />
          <h1 className="summary_thankyou_header">Thank you!</h1>

          <p className="summary_thankyou_text">
            Thanks for confirming your subscription!We hope you have fun using
            our platform.if you ever need support,please feel free to email us
            at support@loremgaming.com.
          </p>
        </div>
      )}
    </div>
  );
};

export default Summary;
