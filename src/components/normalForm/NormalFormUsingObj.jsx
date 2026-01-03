import React, { useState, useEffect } from "react";
import "./NormalFormUsingObj.css";
export default function NormalForms() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [user, setUser] = useState({});
  function handleInputChange(event) {
    let key = event.target.name;
    let val = event.target.value;
    setUser({ ...user, [key]: val });
  }
  useEffect(() => {
    if (!isSubmitting) return;

    const timer = setTimeout(() => {
      console.log("User Data Sent successfully:", user);
      setIsSubmitting(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [isSubmitting]);

  function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);
  }

  return (
    <div className="normalFormUsingObj-container">
      <h1>Normal Form Demo - using Object</h1>
      <hr />
      <form onSubmit={handleSubmit}>
        <label htmlFor="">UserName</label>
        <input
          type="text"
          name="userName"
          id="userName"
          placeholder="Enter your user Name"
          onChange={handleInputChange}
        />
        <label htmlFor="">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your E-Mail ID"
          onChange={handleInputChange}
        />
        <label htmlFor="">Age</label>
        <input
          type="number"
          name="age"
          id="age"
          placeholder="Enter your Age"
          onChange={handleInputChange}
        />
        <label htmlFor="">Gender</label>
        <input
          type="radio"
          name="gender"
          id="gender-male"
          value="Male"
          onChange={handleInputChange}
        />{" "}
        MALE
        <input
          type="radio"
          name="gender"
          id="gender-female"
          value="Female"
          onChange={handleInputChange}
        />{" "}
        FEMALE
        <label htmlFor="">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter your password"
          onChange={handleInputChange}
        />
        <label htmlFor="">Confirm Password</label>
        <input
          type="password"
          name="confirm-password"
          id="confirm-password"
          placeholder="Re-enter your password"
        />
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
