// libraries
import React from "react";
import { Link } from "gatsby";

// components
import Header from "../components/Header";
import Lolly from "../components/Lolly";
import Footer from "../components/Footer";

// styles
import "../styles/HomePage.css";

export default function HomePage() {
  return (
    <>
      <Header />

      <div className="homepage__container">
        <div className="lolly__container">
          <div className="lolly">
            <Lolly
              fillLollyTop="#E97393"
              fillLollyMiddle="#D03F5F"
              fillLollyBottom="#BB3A5F"
            />
          </div>

          <div className="lolly">
            <Lolly
              fillLollyTop="#EB445B"
              fillLollyMiddle="#EE6F47"
              fillLollyBottom="#F5C64D"
            />
          </div>

          <div className="lolly">
            <Lolly
              fillLollyTop="#97E665"
              fillLollyMiddle="#8CCB4C"
              fillLollyBottom="#A8D838"
            />
          </div>

          <div className="lolly">
            <Lolly
              fillLollyTop="#FEEFD6"
              fillLollyMiddle="#B769E4"
              fillLollyBottom="#C55DC1"
            />
          </div>

          <div className="lolly">
            <Lolly
              fillLollyTop="#CE3B53"
              fillLollyMiddle="#D5CFD1"
              fillLollyBottom="#5BA3DA"
            />
          </div>
        </div>

        <Link to="/createNew">
          <input
            type="button"
            value="Make a new lolly to send to a friend"
            className="btn__homepage"
          />
        </Link>
      </div>

      <Footer />
    </>
  );
}
