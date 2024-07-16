import React, { useState } from "react";
import "../style/register.css"; // Import your CSS styles

const Registration = () => {
  const [isSignup, setIsSignup] = useState(true);

  const handleToggle = () => {
    setIsSignup((prev) => !prev);
  };

  return (
    <div className="registration-body">
      <section className="wrapper">
        <div className="form signup">
          <header>Signup</header>
          <form action="#">
            <input type="text" placeholder="Full name" required="" />
            <input type="text" placeholder="Email address" required="" />
            <input type="password" placeholder="Password" required="" />
            <div className="checkbox">
              <input type="checkbox" id="signupCheck" />
              <label htmlFor="signupCheck">
                I accept all terms &amp; conditions
              </label>
            </div>
            <input type="submit" defaultValue="Signup" />
          </form>
        </div>
        <div className="form login">
          <header>Login</header>
          <form action="#">
            <input type="text" placeholder="Email address" required="" />
            <input type="password" placeholder="Password" required="" />
            <a href="#">Forgot password?</a>
            <input type="submit" defaultValue="Login" />
          </form>
        </div>
      </section>
    </div>
  );
};

export default Registration;
