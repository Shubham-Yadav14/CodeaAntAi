import React from "react";
import Login from "../../components/SignUpComponents/SignUpSidebar";
import SignUpMenu from "../../components/SignUpComponents/SignUpMenu";

function SignUp() {
  return (
    <div className="h-screen grid grid-cols-2 max-lg:grid-cols-1">
      <Login />
      <SignUpMenu/>
    </div>
  );
}

export default SignUp;
