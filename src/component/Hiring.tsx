import SelectInput from "@mui/material/Select/SelectInput";
import profile from "../assets/card.png";
import {fireStore} from "../firebase";
import {addDoc, collection} from "@firebase/firestore"
import React, { useState } from "react";


function Hiring() {

  const [firstName, setFirstName] = useState("");
  


  const handleApply = async(e : any) => {
    e.preventDefault();

    let data = { name: firstName}
    try {
      const docRef = await addDoc(collection(fireStore,"inductionrec"), {
        fName: firstName,
      });
    }
    catch (e) {
      console.log(e);
    }
  }

  return <>
  <div className="mx-3 ">
    <h2 className="text-start fw-bold my-3"> Applicant Form </h2>
  </div>
  <form onSubmit={handleApply}>
  <div className="conatiner mx-3">
    <div className="row g-3">
      <div className="col-5">
        <input
          type="text" 
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="form-control  mb-3"
          placeholder="First name"
          aria-label="First name"
          
        />
        <input
          type="text"
          className="form-control  mb-3"
          placeholder="Last name"
          aria-label="Last name"
        />
        <input
          type="text"
          className="form-control  mb-3"
          placeholder="CNIC Number"
          aria-label="CNIC Number"
        />
      </div>
      <div className="col-5">
        <input
          type="text"
          className="form-control  mb-3"
          placeholder="Father Name"
          aria-label="Father Name"
        />
        <input
          type="text"
          className="form-control  mb-3"
          placeholder="Father's CNIC"
          aria-label="Father's CNIC"
        />
        <input
          type="text"
          className="form-control  mb-3"
          placeholder="Father's Occupation"
          aria-label="Father's Occupation"
        />
      </div>
      <div className="col-2">
        <div className="box">
          <img src={profile} className="img-thumbnail" alt="..." />
        </div>
        <div className="mb-3">
          <input className="form-control" type="file" id="formFile" />
        </div>
      </div>
    </div>
    <div className="row g-3">
      <div className="col-1">
        <p> Gender </p>
      </div>
      <div className="col-2">
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value="option1"
          />
          <label className="form-check-label" htmlFor="inlineRadio1">
            Male
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio2"
            value="option2"
          />
          <label className="form-check-label" htmlFor="inlineRadio2">
            Female
          </label>
        </div>
      </div>
      <div className="col-2">
        <input
          type="text"
          className="form-control  mb-3"
          placeholder="Religion"
          aria-label="Religion"
        />
      </div>
      <div className="col-2">
        <input
          type="text"
          className="form-control  mb-3"
          placeholder="Sect"
          aria-label="Sect"
        />
      </div>
      <div className="col-2">
        <input
          type="text"
          className="form-control  mb-3"
          placeholder="Cast"
          aria-label="Cast"
        />
      </div>
      <div className="col-3">
        <input
          type="text"
          className="form-control  mb-3"
          placeholder="D.O.B"
          aria-label="dob"
        />
      </div>
    </div>
    <div className="row g-3">
      <div className="col-2">
        <input
          type="text"
          className="form-control  mb-3"
          placeholder="Contact No."
          aria-label="Contact No."
        />
      </div>
      <div className="col-10">
        <input
          type="text"
          className="form-control  mb-3"
          placeholder="Postal Address"
          aria-label="Postal Address"
        />
      </div>
    </div>
    <div className="row g-3">
      <h4> Educational Qualifications </h4>
      <div className="col-2">
        <input
          type="text"
          className="form-control  mb-3"
          placeholder="Year"
          aria-label="Year"
        />
      </div>
      <div className="col-2">
        <input
          type="text"
          className="form-control  mb-3"
          placeholder="Degree"
          aria-label="Degree"
        />
      </div>
      <div className="col-2">
        <input
          type="text"
          className="form-control  mb-3"
          placeholder="Subject"
          aria-label="Subject"
        />
      </div>
      <div className="col-2">
        <input
          type="text"
          className="form-control  mb-3"
          placeholder="Grade/C.GPA"
          aria-label="Grade/C.GPA"
        />
      </div>
      <div className="col-4">
        <input
          type="text"
          className="form-control  mb-3"
          placeholder="Univerity/Institution Name"
          aria-label="Univerity/Institution Name"
        />
      </div>
    </div>
    <div className="row g-3">
      <h4> Work Experience </h4>
      <div className="col-3">
        <input
          type="text"
          className="form-control  mb-3"
          placeholder="Organization Name"
          aria-label="Organization Name"
        />
      </div>
      <div className="col-2">
        <input
          type="text"
          className="form-control  mb-3"
          placeholder="Designation"
          aria-label="Designation"
        />
      </div>
      <div className="col-1">
        <input
          type="text"
          className="form-control  mb-3"
          placeholder="From"
          aria-label="From"
        />
      </div>
      <div className="col-1">
        <input
          type="text"
          className="form-control  mb-3"
          placeholder="To"
          aria-label="To"
        />
      </div>
      <div className="col-2">
        <input
          type="text"
          className="form-control  mb-3"
          placeholder="Salary"
          aria-label="Salary"
        />
      </div>
      <div className="col-3">
        <input
          type="text"
          className="form-control  mb-3"
          placeholder="Reason for Leaving"
          aria-label="Reason for Leaving"
        />
      </div>
    </div>
    <div className="row g-3">
      <div className="col-3">
        <input
          type="text"
          className="form-control  mb-3"
          placeholder="Expected Salary"
          aria-label="Expected Salary"
        />
      </div>
    </div>
    <div className=" text-end">
      <button type="submit"> Apply </button>
    </div>
  </div>
  </form>
</>;
}

export default Hiring;
