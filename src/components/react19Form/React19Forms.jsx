import React from "react";
import { useActionState } from "react";
async function submitForm(prevState, formData){
  console.log("prev state", prevState);
  let userDetails={
    "username" : formData.get('username'),
    "email" : formData.get('email'),
    "age" : formData.get('age'),
    "gender" : formData.get('gender'),
    "password" : formData.get('password'),
    "confirmPassword" : formData.get('confirmPassword'),
  }
  await new Promise((r)=>setTimeout(r, 3000));

  console.log("user data sent successfully...", userDetails);
  console.log("Form Data type = ", typeof formData);
}
export default function React19Forms() {
  const [state, formAction, isPending] = useActionState(submitForm, {});
  return (
    <div>
      <h1>React 19 Forms Demo - useActionState Hook</h1>
      <form action={formAction}>
        <label htmlFor="">UserName</label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Enter your user Name"
        />
        <label htmlFor="">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your E-Mail ID"
        />
        <label htmlFor="">Age</label>
        <input
          type="number"
          name="age"
          id="age"
          placeholder="Enter your Age"
        />
        <label htmlFor="">Gender</label>
        <input
          type="radio"
          name="gender"
          id="gender-male"
          value="Male"
        />{" "}
        MALE
        <input
          type="radio"
          name="gender"
          id="gender-female"
          value="Female"
        />{" "}
        FEMALE
        <label htmlFor="">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter your password"
        />
        <label htmlFor="">Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          placeholder="Re-enter your password"
        />
        <button type="submit" disabled={isPending}>
          {isPending ? "submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
