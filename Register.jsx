import React from "react";
import header_logo from "./rC-removebg-preview.png";
import "./Register.css";
import { Country, State, City } from "country-state-city";

import Select from "react-select";
import { useState } from "react";

const Register = (props) => {
  const age = [
    { value: "Age 15-20", label: "Age 15-20" },
    { value: "Age 20-25", label: "Age 20-25" },
    { value: "Age 26-30", label: "Age 26-30" },
    { value: "Age 31-35", label: "Age 31-35" },
    { value: "Age 35", label: "Age 35" },
  ];
  const marital = [
    { value: "Yes", label: "Yes" },
    { value: "No", label: "No" },
  ];

  const gender = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
  ];

  const occupation = [
    { value: "Student", label: "Student" },
    { value: "Employed", label: "Employed" },
    { value: "Business", label: "Business" },
    { value: "Professional", label: "Professional" },
  ];

  const department = [
    { value: "Media", label: "Media" },
    { value: "Prayer", label: "Prayer" },
    { value: "Mass Choir and Orchestra", label: "Mass Choir and Orchestra" },
    { value: "Sound and Technical", label: "Sound and Technical" },
    { value: "Protocol", label: "Protocol" },
    { value: "Ushering", label: "Ushering" },
    { value: "Security", label: "Security" },
  ];
  const [value, setValue] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [resultsPerPage, setResultPerPage] = useState("yes");

  return (
    <div className="container">
      <div className="header">
        <img src={header_logo} alt="RC" height="100px" width="100%" />
        <h1>***REFRESH CONFERENCE'23***</h1>
        <h3>VOLUNTEERS REGISTRATION</h3>
      </div>

      <form action="https://formsubmit.co/aaronak497@gmail.com" method="POST">
        <p>Kindly fill your personal details below</p>

        <label htmlFor="Firstname">First Name*</label>
        <input
          autoFocus
          required
          id="name"
          type="text"
          name="Firstname"
          placeholder="firstname e.g Emmanuel"></input>
        <label htmlFor="Lastname">Last Name*</label>
        <input
          required
          id="name"
          type="text"
          name="Lastname"
          placeholder="lastname e.g Ayetan"></input>
        <label htmlFor="Email">Email*</label>
        <input
          required
          autoComplete="email"
          id="name"
          type="email"
          name="Email"
          placeholder="example@gmail.com"></input>
        <label htmlFor="Gender"> Gender</label>
        <Select
          name="Gender"
          className="select_input"
          required
          options={gender}
          placeholder="--Select Option--"
          defaultValue={value}
          onChange={setValue}
        />

        <label htmlFor="Age_Range">Age Range</label>
        <Select
          name="Age_Range"
          className="select_input"
          required
          options={age}
          placeholder="Select Age"
          defaultValue={value}
          onChange={setValue}
          // isSearchable
        />

        <label htmlFor="Phone_Number">Phone</label>
        <input type="tel" id="phone" name="Phone_Number"></input>

        <label htmlFor="Country">Country of Residence*</label>

        <Select
          name="Country"
          className="select_input"
          required
          options={Country.getAllCountries()}
          getOptionLabel={(options) => {
            return options["name"];
          }}
          getOptionValue={(options) => {
            return options["name"];
          }}
          value={selectedCountry}
          onChange={(item) => {
            setSelectedCountry(item);
          }}
        />

        <label htmlFor="State">State of Residence*</label>
        <Select
          name="State"
          className="select_input"
          required
          options={State?.getStatesOfCountry(selectedCountry?.isoCode)}
          getOptionLabel={(options) => {
            return options["name"];
          }}
          getOptionValue={(options) => {
            return options["name"];
          }}
          value={selectedState}
          onChange={(item) => {
            setSelectedState(item);
          }}
        />
        <label htmlFor="Town">Town of Residence*</label>
        <Select
          name="Town"
          className="select_input"
          required
          options={City.getCitiesOfState(
            selectedState?.countryCode,
            selectedState?.isoCode
          )}
          getOptionLabel={(options) => {
            return options["name"];
          }}
          getOptionValue={(options) => {
            return options["name"];
          }}
          value={selectedCity}
          onChange={(item) => {
            setSelectedCity(item);
          }}
        />

        <label htmlFor="Marital">Marital Status*</label>
        <Select
          name="Marital"
          className="select_input"
          required
          options={marital}
          placeholder="--Select Option--"
          defaultValue={value}
          onChange={setValue}
          // isSearchable
        />

        <label htmlFor="Occupation">Occupation*</label>
        <Select
          name="Occupation"
          className="select_input"
          required
          options={occupation}
          placeholder="--Select Option--"
          defaultValue={value}
          onChange={setValue}
          // isSearchable
        />

        <label htmlFor="Volunteer">
          Will you like to serve as a volunteer?
        </label>

        <select
          className="picker"
          id="volunteer"
          name="Volunteer"
          onChange={(event) => setResultPerPage(event.target.value)}>
          <option value="hide"> --Select Option--</option>
          <option value={"Yes"}>Yes</option>
          <option value={"No"}>No</option>
        </select>
        {resultsPerPage === "Yes" ? (
          <div className="depart">
            <label htmlFor="Department">Select your Department</label>
            <Select
              name="Department"
              className="select_input"
              required
              options={department}
              placeholder="--Select Option--"
              defaultValue={value}
              onChange={setValue}
              // isSearchable
            />
          </div>
        ) : (
          <></>
        )}

        <div className="bottom">
          <input type="submit" value="Submit" className="submit"></input>
          <button className="reset" type="reset">
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
