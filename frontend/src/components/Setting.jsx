import React, { useState } from "react";
import "../style/setting.css";

const Setting = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (event) => {
        setImage(event.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const auth = localStorage.getItem("user");

  if (auth) {
    // Split the string by space
    const nameParts = auth.split(" ");

    // Assuming the first part is the first name and the last part is the last name
    const firstName = nameParts[0];
    const lastName =
      nameParts.length > 1 ? nameParts[nameParts.length - 1] : "";

    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
  } else {
    console.log("No user information found in localStorage.");
  }


  return (
    <div className="box">
      <div className="container1">
        <div className="title" style={{ color: "black" }}>
          Setting
        </div>
        <div className="content">
          <div className="image-upload">
            <input type="file" id="file" onChange={handleImageChange} />
            <label htmlFor="file" className="image-upload-label">
              {image ? (
                <img src={image} alt="Upload" className="uploaded-image" />
              ) : (
                <span>Upload your image</span>
              )}
            </label>
          </div>
          <form action="#">
            <div className="user-details">
              <div className="input-box">
                <span className="details">Full Name</span>
                <input
                  type="text"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="input-box">
                <span className="details">Address</span>
                <input type="text" placeholder="Enter your address" required />
              </div>
              <div className="input-box">
                <span className="details">Email</span>
                <input type="text" placeholder="Enter your email" required />
              </div>
              <div className="input-box">
                <span className="details">Phone Number</span>
                <input type="text" placeholder="Enter your number" required />
              </div>
              <div className="input-box">
                <span className="details">Old Password</span>
                <input
                  type="password"
                  placeholder="Enter your old password"
                  required
                />
              </div>
              <div className="input-box">
                <span className="details">Confirm Password</span>
                <input
                  type="password"
                  placeholder="Confirm your password"
                  required
                />
              </div>
            </div>
            <div className="gender-details">
              <input type="radio" name="gender" id="dot-1" />
              <input type="radio" name="gender" id="dot-2" />
              <input type="radio" name="gender" id="dot-3" />
              <span className="gender-title">Gender</span>
              <div className="category">
                <label htmlFor="dot-1">
                  <span className="dot one" />
                  <span className="gender">Male</span>
                </label>
                <label htmlFor="dot-2">
                  <span className="dot two" />
                  <span className="gender">Female</span>
                </label>
                <label htmlFor="dot-3">
                  <span className="dot three" />
                  <span className="gender">Prefer not to say</span>
                </label>
              </div>
            </div>
            <div className="button">
              <input type="submit" defaultValue="Register" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Setting;
