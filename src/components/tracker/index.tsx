import { ReactNode } from "react";

const Tracker = ({
  children,
  curIndex,
}: {
  children: ReactNode;
  curIndex: number;
}) => {
  return (
    <div className="tracker">
      <div className="tracker_sidebar">
        {["YOUR INFO", "SELECT PLAN", "ADD-ONS", "SUMMARY"].map(
          (text, index) => (
            <div className="tracker_sidebar_items" key={index}>
              <span
                className={`${
                  curIndex == index
                    ? "tracker_sidebar_items_circle tracker_sidebar_items_circle_current"
                    : "tracker_sidebar_items_circle"
                }`}
              >
                {index + 1}
              </span>
              <div className="tracker_sidebar_items_text">
                <p className="tracker_sidebar_items_text_step">
                  STEP {index + 1}
                </p>
                <p className="tracker_sidebar_items_text_detail">{text}</p>
              </div>
            </div>
          )
        )}
      </div>

      <div className="tracker_step">{children}</div>
    </div>
  );
};

export default Tracker;
