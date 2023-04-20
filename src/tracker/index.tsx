import { ReactNode } from "react";

const Tracker = ({ children }: { children: ReactNode }) => {
  return (
    <div className="tracker">
      <div className="tracker_sidebar">
        <div className="tracker_sidebar_items">
          <span className="tracker_sidebar_items_circle">1</span>
          <div className="tracker_sidebar_items_text">
            <p className="tracker_sidebar_items_text_step">STEP 1</p>
            <p className="tracker_sidebar_items_text_detail">YOUR INFO</p>
          </div>
        </div>
        <div className="tracker_sidebar_items">
          <span className="tracker_sidebar_items_circle">2</span>
          <div className="tracker_sidebar_items_text">
            <p className="tracker_sidebar_items_text_step">STEP 2</p>
            <p className="tracker_sidebar_items_text_detail">SELECT PLAN</p>
          </div>
        </div>
        <div className="tracker_sidebar_items">
          <span className="tracker_sidebar_items_circle">3</span>
          <div className="tracker_sidebar_items_text">
            <p className="tracker_sidebar_items_text_step">STEP 3</p>
            <p className="tracker_sidebar_items_text_detail">ADD-ONS</p>
          </div>
        </div>
        <div className="tracker_sidebar_items">
          <span className="tracker_sidebar_items_circle">4</span>
          <div className="tracker_sidebar_items_text">
            <p className="tracker_sidebar_items_text_step">STEP 4</p>
            <p className="tracker_sidebar_items_text_detail">SUMMARY</p>
          </div>
        </div>
      </div>
      <div className="tracker_step">{children}</div>
    </div>
  );
};

export default Tracker;
