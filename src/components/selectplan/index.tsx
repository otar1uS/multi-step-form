import { useEffect, useState } from "react";
import Buttons from "../buttons";
import { iconArcade, iconAdvanced, iconPro } from "../../assets/images/index";
import FormProps from "../../form";

type Values = {
  [key: string]: number;
  arcade: number;
  advanced: number;
  pro: number;
};

const SelectPlan = ({ setGoBackward, setGoForward, index }: FormProps) => {
  const [checked, setChecked] = useState<boolean>(false);
  const [checkedItem, setCheckedItem] = useState<string>("");
  const [newNumber, setNewNumber] = useState<number>(0);

  const handleChange = () => {
    setChecked(!checked);
  };

  const values: Values = {
    arcade: !checked ? 9 : 90,
    advanced: !checked ? 12 : 120,
    pro: !checked ? 15 : 150,
  };

  useEffect(() => {
    setNewNumber(values[checkedItem]);
  }, [checkedItem, values]);

  const handlePlanItemClick = (planName: string) => {
    setCheckedItem(planName);
  };

  return (
    <div className="plan">
      <div className="plan_header">
        <h1 className="plan_header_h1">Select your plan</h1>
        <p className="plan_header_p">
          You have the option of monthly or yearly billing
        </p>
      </div>
      <div className="plan_chooser">
        <div
          className={`plan_chooser_item_inner ${
            checkedItem === "arcade" ? "plan_chooser_item_inner--checked" : ""
          }`}
          onClick={() => handlePlanItemClick("arcade")}
        >
          <img
            className="plan_chooser_item_inner_img"
            src={iconArcade}
            alt="arcade plan"
          />

          <div className="plan_chooser_item_inner_container">
            <h1 className="plan_chooser_item_inner_container_h1">Arcade</h1>
            <p className="plan_chooser_item_inner_container_p">{`${
              !checked ? "$9/mo" : "$90/yr"
            }`}</p>
            <input
              type="radio"
              name="plan"
              checked={checkedItem === "arcade"}
              onChange={() => handlePlanItemClick("arcade")}
            />
          </div>
        </div>

        <div
          className={`plan_chooser_item_inner ${
            checkedItem === "advanced" ? "plan_chooser_item_inner--checked" : ""
          }`}
          onClick={() => handlePlanItemClick("advanced")}
        >
          <img
            className="plan_chooser_item_inner_img"
            src={iconAdvanced}
            alt="advanced plan"
          />
          <div className="plan_chooser_item_inner_container">
            <h1 className="plan_chooser_item_inner_container_h1">Advanced</h1>
            <p className="plan_chooser_item_inner_container_p">{`${
              !checked ? "$12/mo" : "$120/yr"
            }`}</p>
            <input
              type="radio"
              name="plan"
              checked={checkedItem === "advanced"}
              onChange={() => handlePlanItemClick("advanced")}
            />
          </div>
        </div>

        <div
          className={`plan_chooser_item_inner ${
            checkedItem === "pro" ? "plan_chooser_item_inner--checked" : ""
          }`}
          onClick={() => handlePlanItemClick("pro")}
        >
          <img
            className="plan_chooser_item_inner_img"
            src={iconPro}
            alt="pro plan"
          />
          <div className="plan_chooser_item_inner_container">
            <h1 className="plan_chooser_item_inner_container_h1">Pro</h1>
            <p className="plan_chooser_item_inner_container_p">{`${
              !checked ? "$15/mo" : "$150/yr"
            }`}</p>
            <input
              type="radio"
              name="plan"
              checked={checkedItem === "pro"}
              onChange={() => handlePlanItemClick("pro")}
            />
          </div>
        </div>
      </div>

      <div className="plan_time">
        <h3 className="plan_time_month">Monthly</h3>
        <label className="plan_time_switch">
          <input type="checkbox" checked={checked} onChange={handleChange} />
          <span className="plan_time_switch_slider"></span>
        </label>
        <h3 className="plan_time_year">Yearly</h3>
      </div>
      <Buttons
        goBackward={setGoBackward}
        goForward={setGoForward}
        index={index}
        planNumber={newNumber}
        isItSelected={checkedItem}
      />
    </div>
  );
};

export default SelectPlan;
