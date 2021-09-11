// libraries
import React, { useState } from "react";

// components
import Header from "../components/Header";
import Lolly from "../components/Lolly";
import Footer from "../components/Footer";

// styles
import "../styles/CreateNewPage.css";

export default function CreateNewPage() {
  // flavour
  const [flavourTop, setFlavourTop] = useState("#E97393");
  const [flavourMiddle, setFlavourMiddle] = useState("#D03F5F");
  const [flavourBottom, setFlavourBottom] = useState("#BB3A5F");

  // form
  const [recipientName, setRecipientName] = useState("");
  const [message, setMessage] = useState("");
  const [senderName, setSenderName] = useState("");

  const handleFormSubmit = () => {
    console.log(`FlavourTop: ${flavourTop}`);
    console.log(`FlavourMiddle: ${flavourMiddle}`);
    console.log(`flavourBottom: ${flavourBottom}`);
    console.log(`recipientName: ${recipientName}`);
    console.log(`message: ${message}`);
    console.log(`senderName: ${senderName}`);
  };

  return (
    <>
      <Header />
      <div className="createNewPage__container">
        <div>
          <Lolly
            fillLollyTop={flavourTop}
            fillLollyMiddle={flavourMiddle}
            fillLollyBottom={flavourBottom}
          />
        </div>

        {/* Flavour Picker */}
        <div className="flavours">
          <label htmlFor="flavourTop" className="pickerLabel">
            <input
              type="color"
              name="flavourTop"
              id="flavourTop"
              className="colorPicker"
              value={flavourTop}
              onChange={(e) => setFlavourTop(e.target.value)}
            />
          </label>

          <label htmlFor="flavourMiddle" className="pickerLabel">
            <input
              type="color"
              name="flavourMiddle"
              id="flavourMiddle"
              className="colorPicker"
              value={flavourMiddle}
              onChange={(e) => setFlavourMiddle(e.target.value)}
            />
          </label>

          <label htmlFor="flavourBottom" className="pickerLabel">
            <input
              type="color"
              name="flavourBottom"
              id="flavourBottom"
              className="colorPicker"
              value={flavourBottom}
              onChange={(e) => setFlavourBottom(e.target.value)}
            />
          </label>
        </div>

        {/* form */}
        <div className="form">
          <div className="form__details">
            <div className="form__details__to">
              <label htmlFor="recipientName">To</label>
              <input
                type="text"
                name="recipientName"
                id="recipientName"
                placeholder="A lolly for..."
                value={recipientName}
                onChange={(e) => setRecipientName(e.target.value)}
              />
            </div>

            <div className="form__details__message">
              <label htmlFor="message">Say Something Nice</label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>

            <div className="form__details__from">
              <label htmlFor="senderName">From</label>
              <input
                type="text"
                name="senderName"
                id="senderName"
                placeholder="From your friend..."
                value={senderName}
                onChange={(e) => setSenderName(e.target.value)}
              />
            </div>
          </div>

          <input
            type="submit"
            value="freeze this lolly and get a link"
            className="freeze__lolly__btn"
            onClick={handleFormSubmit}
          />
        </div>
      </div>

      <Footer />
    </>
  );
}
