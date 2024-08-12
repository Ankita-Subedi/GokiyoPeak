export default function Findform() {
  return (
    <div>
      <>
        <form className="banner-form ">
          <h3>Find new adventure</h3>
          <div className="select-wrapper">
            <i className="fa-solid fa-location-dot select-icon" />
            <select id="region" name="region">
              <option value="">Select a region</option>
              <option value="north">North</option>
              <option value="south">South</option>
              <option value="east">East</option>
              <option value="west">West</option>
            </select>
          </div>
          <div className="select-wrapper">
            <i className="fa-solid fa-calendar-days" />
            <select id="month" name="month">
              <option value="">Select a month</option>
              <option value="january">January</option>
              <option value="february">February</option>
              <option value="march">March</option>
              <option value="april">April</option>
              <option value="may">May</option>
              <option value="june">June</option>
              <option value="july">July</option>
              <option value="august">August</option>
              <option value="september">September</option>
              <option value="october">October</option>
              <option value="november">November</option>
              <option value="december">December</option>
            </select>
          </div>
          <div className="select-wrapper">
            <i className="fa-solid fa-map-pin" />
            <select id="travel-type" name="travel-type">
              <option value="">Select a travel type</option>
              <option value="leisure">Leisure</option>
              <option value="business">Business</option>
              <option value="adventure">Adventure</option>
              <option value="cultural">Cultural</option>
            </select>
          </div>
          <button type="submit">Find Now</button>
        </form>
      </>
    </div>
  );
}
