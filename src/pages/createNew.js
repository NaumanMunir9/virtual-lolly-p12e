// libraries
import React from "react";

// components
import Header from "../components/Header";
import Lolly from "../components/Lolly";

export default function CreateNewPage() {
  return (
    <>
      <Header />
      <div className="createNewPage__container">
        <div>
          <Lolly
            fillLollyTop="#E97393"
            fillLollyMiddle="#D03F5F"
            fillLollyBottom="#BB3A5F"
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
              value="#E97393"
            />
          </label>

          <label htmlFor="flavourMiddle" className="pickerLabel">
            <input
              type="color"
              name="flavourMiddle"
              id="flavourMiddle"
              className="colorPicker"
              value="#D03F5F"
            />
          </label>

          <label htmlFor="flavourBottom" className="pickerLabel">
            <input
              type="color"
              name="flavourBottom"
              id="flavourBottom"
              className="colorPicker"
              value="#BB3A5F"
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
              />
            </div>

            <div className="form__details__message">
              <label htmlFor="message">Say Something Nice</label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
              ></textarea>
            </div>

            <div className="form__details__from">
              <label htmlFor="senderName">From</label>
              <input
                type="text"
                name="senderName"
                id="senderName"
                placeholder="From your friend..."
              />
            </div>
          </div>

          <input
            type="submit"
            value="freeze this lolly and get a link"
            className="freeze__lolly__btn"
          />
        </div>
      </div>
    </>
  );
}
