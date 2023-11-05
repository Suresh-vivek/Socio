import "./NgoHome.css";
import React, { useEffect, useState } from "react";

import Navbar from "./Navbar";
import Children from "../Assets/children.png";
import "./SignUp.css";
import LocationCard from "./Cards/LocationCard";
import Place2 from "../Assets/place2.jpg";
import "./SignUp.css";
import SubmitButton from "./SubmitButton";
import axios from "axios";

const NgoHome = () => {
  const [ngoname, setNgoName] = useState("");
  const [ngoid, setNgoId] = useState("");
  const [ngoidF, setNgoidF] = useState("");
  const [address, setAddress] = useState("");
  const [age, setAge] = useState("");
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [locations, setLocations] = useState([]);
  const [phone, setPhone] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const [detectlocation, setDetectLocation] = useState([]);

  //Location function
  const [currentLocation, setCurrentLocation] = useState([]);
  const handleDetectLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        // Store the latitude and longitude in the currentLocation state
        setCurrentLocation([latitude, longitude]);
      });
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  //Map age to level
  const mapAgeToLabel = (ageValue) => {
    switch (ageValue) {
      case "1":
        return "5-10";
      case "2":
        return "10-15";
      case "3":
        return "15-20";
      default:
        return "All";
    }
  };

  useEffect(() => {
    // Retrieve ngoname from localStorage
    const storedNgoName = localStorage.getItem("ngoname");
    if (storedNgoName) {
      setNgoName(storedNgoName);
    }

    // Retrieve ngoid from localStorage
    const storedNgoId = localStorage.getItem("ngoid");
    if (storedNgoId) {
      setNgoId(storedNgoId);
    }
  }, []);

  const handleImageUpload = (e) => {
    const selectedImage = e.target.files[0]; // Get the selected file
    if (selectedImage) {
      // You can now work with the selected image, e.g., display a preview or upload it to your server.
      console.log("Selected image:", selectedImage);

      // To display a preview of the image, you should set the imagePreview to the state.
      const reader = new FileReader();
      reader.onload = (event) => {
        setImagePreview(event.target.result); // Set imagePreview state
      };
      reader.readAsDataURL(selectedImage);
    }
  };
  // Event handler for age dropdown change
  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  // Event handler for subject checkbox change
  const handleSubjectChange = (e) => {
    const subject = e.target.value;
    if (e.target.checked) {
      // If checkbox is checked, add the subject to the selected subjects
      setSelectedSubjects([...selectedSubjects, subject]);
    } else {
      // If checkbox is unchecked, remove the subject from the selected subjects
      setSelectedSubjects(selectedSubjects.filter((item) => item !== subject));
    }
  };

  const handleAddLocation = (e) => {
    e.preventDefault(); // Prevent the form submission (default behavior)
    if (address && age && phone && selectedSubjects.length > 0) {
      // Only add a new location if all required fields are filled
      const newLocation = {
        image: imagePreview,
        address,
        age,
        phone,
        subjects: selectedSubjects.join(", "),
      };
      setLocations([...locations, newLocation]);

      //post data

      // Clear input fields
    }
    axios
      .post("http://localhost:3004/locations", {
        ngoid: ngoidF,
        ngoaddress: address,
        ngophone: phone,
        age: age,
        subjects: selectedSubjects.join(", "),
        ngoimage: { data: imagePreview, contentType: "image/png" },
        detectlocation: {
          latitude: currentLocation[0],
          longitude: currentLocation[1],
        },
      })
      .then((result) => {
        console.log(result);
        // Clear the input fields
        setNgoidF("");
        setAddress("");
        setAge("");
        setPhone("");
        setSelectedSubjects([]);
        setImagePreview(null);
        alert("Location Added Successfully");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="ngo-outer">
      <div className="ngo-navbar">
        <Navbar images={Children} text="Report the Unreported!!" />
      </div>

      <div className="ngo-button">
        <span className="ngo-button-text">Fill Out the Form Now!!</span>
      </div>

      <div className="ngo-content">
        <div className="ngo-form">
          <span className="ngo-form-heading">Welcome {ngoname}!</span>
          <span className="ngo-form-subheading">Add a Tutoring Location</span>

          <form className="sform ngoform" onSubmit={handleAddLocation}>
            {/* NGO ID*/}
            <div className="Label-signup">
              <label htmlFor="ngoid">NGO ID</label>
            </div>

            <div>
              <input
                type="text"
                placeholder="Enter Your NGO ID"
                autoComplete="off"
                name="ngoid"
                className="form-field-signup"
                onChange={(e) => setNgoidF(e.target.value)}
                value={ngoidF}
              />
            </div>
            {/* NGO Address*/}

            <div className="Label-signup">
              <label htmlFor="address">Address</label>
            </div>

            <div>
              <input
                type="text"
                placeholder="Enter Address"
                autoComplete="off"
                name="address"
                className="form-field-signup"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>

            {/* Phone Number*/}
            <div className="Label-signup">
              <label htmlFor="phone">Your Phone Number</label>
            </div>

            <div>
              <input
                type="text"
                placeholder="Enter Phone Number"
                autoComplete="off"
                name="phone"
                className="form-field-signup"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <span className="Form-text">
              We will never share your Phone number with anyone else
            </span>

            {/* Age Group*/}
            <div className="Label-signup">
              <label htmlFor="age">Select Average Age Group of Kids</label>
            </div>

            <div>
              <span className="age-groups">Age Groups</span>
              <select
                name="age"
                className="form-field-signup1"
                value={age}
                onChange={handleAgeChange}
              >
                <option value="" disabled selected>
                  Choose..
                </option>
                <option value="1">5-10</option>
                <option value="2">10-15</option>
                <option value="3">15-20</option>
                <option value="4">All</option>
              </select>
            </div>

            {/* Subjects*/}

            <div className="Label-signup">
              <label>Select the Preferred Subjects</label>
            </div>

            <div className="subjec">
              <input
                type="checkbox"
                id="subject1"
                name="subject1"
                value="English"
                checked={selectedSubjects.includes("English")}
                onChange={handleSubjectChange}
              />
              <label htmlFor="subject1">English</label>
              <br />
              <input
                type="checkbox"
                id="subject2"
                name="subject2"
                value="Hindi"
                checked={selectedSubjects.includes("Hindi")}
                onChange={handleSubjectChange}
              />
              <label htmlFor="subject2">Hindi</label>
              <br />
              <input
                type="checkbox"
                id="subject3"
                name="subject3"
                value="Math"
                checked={selectedSubjects.includes("Math")}
                onChange={handleSubjectChange}
              />
              <label htmlFor="subject3">Math</label>
              <br />
              <input
                type="checkbox"
                id="subject4"
                name="subject4"
                value="Science"
                checked={selectedSubjects.includes("Science")}
                onChange={handleSubjectChange}
              />
              <label htmlFor="subject4">Science</label>
              <br />
              <input
                type="checkbox"
                id="subject5"
                name="subject5"
                value="SST"
                checked={selectedSubjects.includes("SST")}
                onChange={handleSubjectChange}
              />
              <label htmlFor="subject5">SST</label>
              <br />

              <input
                type="checkbox"
                id="other"
                name="other"
                value="Other"
                checked={selectedSubjects.includes("Other")}
                onChange={handleSubjectChange}
              />
              <label htmlFor="other">Other</label>
              <br />
            </div>

            {/* Image*/}

            <div className="Label-signup">
              <label htmlFor="image">Upload Image of the location</label>
            </div>

            <div>
              <input
                type="file" // Use type "file" for file upload
                accept="image/*" // Specify accepted file types, e.g., images
                name="image" // You can use this name to identify the file input
                className="custom-file-input"
                onChange={(e) => handleImageUpload(e)} // Call a function to handle image upload
              />
            </div>

            <div>
              <button
                onClick={handleDetectLocation}
                className="ngo-form-button"
                type="button"
              >
                Detect Location
              </button>
              {currentLocation.length > 0 && (
                <div>
                  <p className="ngo-form-location">
                    Latitude: {currentLocation[0]}
                  </p>
                  <p className="ngo-form-location">
                    Longitude: {currentLocation[1]}
                  </p>
                </div>
              )}
            </div>

            <div>
              <SubmitButton text="Add Location" type="submit" />
            </div>
          </form>
        </div>
        <div className="ngo-data">
          <div className="ngo-data-heading">Location You have added</div>
          {locations.map((location, index) => (
            <LocationCard
              key={index}
              image={location.image}
              address={location.address}
              age={mapAgeToLabel(location.age)}
              phone={location.phone}
              data={location.subjects}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NgoHome;
