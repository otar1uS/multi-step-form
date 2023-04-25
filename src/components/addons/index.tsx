import { useState, useEffect } from "react";
import { iconCheckMark } from "../../assets/images";
import { useSelector } from "react-redux";
import Buttons from "../buttons";

interface State {
  isItYear: boolean;
  planNumber: number;
}

interface Addon {
  identifier: string;

  name: string;
  value: number;
}

type Props = {
  setGoForward: () => void;
  setGoBackward: () => void;
  index: number;
};

const AddOns = ({ setGoBackward, setGoForward, index }: Props) => {
  const [checkedItems, setCheckedItems] = useState<string[]>([]);
  const [finalItems, setFinalItems] = useState<Addon[]>([]);

  const { isItYear, planNumber }: State = useSelector((state: State) => state);
  console.log(checkedItems);
  const addons: Addon[] = [
    {
      identifier: "onlineService",
      name: "Online service",
      value: !isItYear ? 1 : 10,
    },
    {
      identifier: "largeStorage",
      name: "Large storage",
      value: !isItYear ? 2 : 20,
    },
    {
      identifier: "customizableProfile",
      name: "Customizable profile",
      value: !isItYear ? 2 : 20,
    },
  ];

  const handlePlanItemClick = (planName: string) => {
    const newCheckedItems = checkedItems.includes(planName)
      ? checkedItems.filter((item) => item !== planName)
      : [...checkedItems, planName];
    setCheckedItems(newCheckedItems);
  };
  useEffect(() => {
    let updatedFinalItems: Addon[] = [];

    addons.forEach((addon) => {
      if (checkedItems.includes(addon.identifier)) {
        updatedFinalItems.push(addon);
      }
    });

    setFinalItems(updatedFinalItems);
  }, [checkedItems]);

  return (
    <div className="adds">
      <div className="adds_header">
        <h1 className="adds_header_h1">Pick add-ons</h1>
        <p className="adds_header_p">
          Adds-ons help enhance your gaming experience
        </p>
      </div>

      <div className="adds_chooser">
        <div
          className={`adds_chooser_item_inner ${
            checkedItems.includes("onlineService")
              ? "adds_chooser_item_inner--checked"
              : ""
          }`}
          onClick={() => handlePlanItemClick("onlineService")}
        >
          <img
            className={`${
              checkedItems.includes("onlineService")
                ? "adds_chooser_item_inner_img--checked"
                : "adds_chooser_item_inner_img"
            }`}
            src={iconCheckMark}
            alt="onlineService plan"
          />

          <div className="adds_chooser_item_inner_container">
            <h1 className="adds_chooser_item_inner_container_h1">
              Online service
            </h1>
            <p className="adds_chooser_item_inner_container_p">
              Access multiplayer games
            </p>
            <input
              type="radio"
              name="plan"
              checked={checkedItems.includes("onlineService")}
              onChange={() => handlePlanItemClick("onlineService")}
            />
          </div>
          <p className="adds_chooser_item_inner_price">{`${
            !isItYear ? "+$1/mo" : "+$10/yr"
          }`}</p>
        </div>
        <div className="adds_chooser">
          <div
            className={`adds_chooser_item_inner ${
              checkedItems.includes("largeStorage")
                ? "adds_chooser_item_inner--checked"
                : ""
            }`}
            onClick={() => handlePlanItemClick("largeStorage")}
          >
            <img
              className={`${
                checkedItems.includes("largeStorage")
                  ? "adds_chooser_item_inner_img--checked"
                  : "adds_chooser_item_inner_img"
              }`}
              src={iconCheckMark}
              alt="largeStorage plan"
            />

            <div className="adds_chooser_item_inner_container">
              <h1 className="adds_chooser_item_inner_container_h1">
                Large storage
              </h1>
              <p className="adds_chooser_item_inner_container_p">
                Extra 1TB of cloud save
              </p>
              <input
                type="radio"
                name="plan"
                checked={checkedItems.includes("largeStorage")}
                onChange={() => handlePlanItemClick("largeStorage")}
              />
            </div>
            <p className="adds_chooser_item_inner_price">{`${
              !isItYear ? "+$2/mo" : "+$20/yr"
            }`}</p>
          </div>

          <div
            className={`adds_chooser_item_inner ${
              checkedItems.includes("customizableProfile")
                ? "adds_chooser_item_inner--checked"
                : ""
            }`}
            onClick={() => handlePlanItemClick("customizableProfile")}
          >
            <img
              className={`${
                checkedItems.includes("customizableProfile")
                  ? "adds_chooser_item_inner_img--checked"
                  : "adds_chooser_item_inner_img"
              }`}
              src={iconCheckMark}
              alt="customizableProfile plan"
            />

            <div className="adds_chooser_item_inner_container">
              <h1 className="adds_chooser_item_inner_container_h1">
                Customizable profile
              </h1>
              <p className="adds_chooser_item_inner_container_p">
                Custom theme on your profile
              </p>
              <input
                type="radio"
                name="plan"
                checked={checkedItems.includes("customizableProfile")}
                onChange={() => handlePlanItemClick("customizableProfile")}
              />
            </div>
            <p className="adds_chooser_item_inner_price">{`${
              !isItYear ? "+$2/mo" : "+$20/yr"
            }`}</p>
          </div>
        </div>
      </div>

      <Buttons
        goForward={setGoForward}
        goBackward={setGoBackward}
        index={index}
        planNumber={planNumber}
        isItSelected={
          checkedItems.includes("customizableProfile") ||
          checkedItems.includes("onlineService") ||
          checkedItems.includes("largeStorage")
        }
        addsItems={finalItems}
      />
    </div>
  );
};

export default AddOns;
