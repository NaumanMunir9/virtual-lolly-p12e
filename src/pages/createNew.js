// libraries
import React from "react";

// components
import Header from "../components/Header";
import Lolly from "../components/Lolly";

export default function CreateNewPage() {
  return (
    <div>
      <Header />

      <div>
        <Lolly
          fillLollyTop="#E97393"
          fillLollyMiddle="#D03F5F"
          fillLollyBottom="#BB3A5F"
        />
      </div>

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

      <div className="form">
        <div className="form__details">
          <div>
            <label htmlFor="recipientName">To</label>
            <input
              type="text"
              name="recipientName"
              id="recipientName"
              placeholder="A lolly for..."
            />
          </div>

          <div>
            <label htmlFor="recipientName">To</label>
            <input
              type="text"
              name="recipientName"
              id="recipientName"
              placeholder="A lolly for..."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
