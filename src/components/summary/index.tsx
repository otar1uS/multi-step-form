import FormProps from "../../form";

import Buttons from "../buttons";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
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

  const dispatch = useDispatch();

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

  const onChange = () => {
    const newPlanNumber = planNumber > 100 ? planNumber / 10 : planNumber * 10;
    const newAdds = InitialAdds[0].map((add) => {
      const newValue =
        add.value === 1 || add.value === 2 ? add.value * 10 : add.value / 10;
      return { ...add, value: newValue };
    });
    dispatch({
      type: "SET_STATE",
      payload: { planNumber: newPlanNumber, InitialAdds: newAdds },
    });
  };

  return (
    <div className="summary">
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
            <p
              className="summary_finishedPlan_planDetails_container_change"
              onClick={() => onChange()}
            >
              Change
            </p>
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
            <p className="summary_finishedPlan_adds_price">{`+$${add.value}/${
              isItYear ? "yr" : "mo"
            }`}</p>
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
    </div>
  );
};

export default Summary;
