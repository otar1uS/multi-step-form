import "./styles/style.css";
import PersonalInfo from "./components/personalinfo";
import Tracker from "./components/tracker";
import SelectPlan from "./components/selectplan";
import useForm from "./hook/useForm";
import AddOns from "./components/addons";
import Summary from "./components/summary";

const sideBar = ["Your Info", "Select Plan", "Add-Ons", "Summary"];

function App() {
  const {
    currentIndex,
    goForwards,
    goBackwards,

    isFirstStep,
    isLastStep,
  } = useForm(sideBar.length);

  return (
    <div className="app">
      <Tracker curIndex={currentIndex}>
        {currentIndex === 0 && (
          <PersonalInfo
            index={currentIndex}
            setGoForward={goForwards}
            setGoBackward={goBackwards}
          />
        )}
        {currentIndex === 1 && (
          <SelectPlan
            index={currentIndex}
            setGoForward={goForwards}
            setGoBackward={goBackwards}
          />
        )}
        {currentIndex === 2 && (
          <AddOns
            index={currentIndex}
            setGoForward={goForwards}
            setGoBackward={goBackwards}
          />
        )}
        {currentIndex === 3 && (
          <Summary
            index={currentIndex}
            setGoForward={goForwards}
            setGoBackward={goBackwards}
          />
        )}
      </Tracker>
    </div>
  );
}

export default App;
