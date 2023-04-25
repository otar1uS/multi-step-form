import { useDispatch } from "react-redux";
import { setPlanNumber, planChecker, adds } from "../../store/store";
interface Addon {
  identifier: string;
  name: string;
  value: number;
}

const Buttons = ({
  index,
  goForward,
  goBackward,
  planNumber,
  isItSelected,
  addsItems,
}: {
  index: number;
  goForward: () => void;
  goBackward: () => void;
  planNumber?: number;
  isItSelected: string | boolean;
  addsItems?: Addon[];
}) => {
  const dispatch = useDispatch();

  return (
    <div className="buttons">
      {index === 1 || index === 2 || index === 3 ? (
        <button
          className="buttons_prev"
          type="submit"
          onClick={() => goBackward()}
        >
          Go Back
        </button>
      ) : (
        <p></p>
      )}
      <button
        className="buttons_next"
        type="submit"
        disabled={!isItSelected}
        onClick={() => {
          goForward();
          dispatch(setPlanNumber(planNumber));
          dispatch(planChecker());

          if (addsItems) dispatch(adds(addsItems));
        }}
      >
        {`${index == 3 ? "Confirm" : "Next Step"}`}
      </button>
    </div>
  );
};

export default Buttons;
