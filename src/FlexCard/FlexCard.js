import { useState } from "react";
import "./FlexCard.css";
import VirtualCard from "./VirtualCard/VirtualCard";

const FlexCard = () => {
  const [showDetails, setShowDetails] = useState(false);

  const onCheckboxChange = () => {
    setShowDetails((prevState) => !prevState);
  };

  return (
    <>
      <header>
        <h1>Flex card</h1>
        <p>Used for pre-tax purchases</p>
      </header>
      <section>
        <VirtualCard showDetails={showDetails} />
        <div className={showDetails ? "checked" : "unchecked"}>
          <input
            type="checkbox"
            checked={showDetails}
            onChange={onCheckboxChange}
            id="showDetails"
          />
          <label htmlFor="showDetails">Show details</label>
        </div>
      </section>
    </>
  );
};

export default FlexCard;
