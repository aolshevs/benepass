import "./VirtualCard.css";
import BenepassLogo from "../../assets/logoWhite.svg";
import VisaLogo from "../../assets/visa.svg";

const cardNumber = "2322 5232 1232 1202";

const VirtualCard = ({ showDetails }) => {
  return (
    <section class="card">
      <div class="card-inner">
        <section class="row">
          <img src={BenepassLogo} alt="benepass logo" />
          <div className="virtual-pill">Virtual</div>
        </section>
        <section className="row card-number">
          {showDetails ? <>{cardNumber}</> : <>•••• {cardNumber.slice(15)}</>}
        </section>
        <section className="row date-cvc">
          <div>
            <h2>VALID THRU</h2>
            <p>8/28</p>
          </div>
          <div>
            <h2>CVC</h2>
            <p>{showDetails ? <>{345}</> : <>•••</>}</p>
          </div>
        </section>
        <section className="row footer">
          <div>ZIP 66062</div>
          <img src={VisaLogo} alt="visa logo" />
        </section>
      </div>
    </section>
  );
};

export default VirtualCard;
