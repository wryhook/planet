import React, { useEffect, useState } from "react";
import { getUserByID, updateUserByID } from "../utils/api";
import {
  InputField,
  MainContent,
  OuterContainer,
  PrimaryButton,
} from "./SharedComponents";

const Account = ({ user }) => {
  const [userObj, setUserObj] = useState(user);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUserByID(user._id, userObj)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  return (
    <OuterContainer>
      <MainContent>
        <h2>Account Settings</h2>
        <form onSubmit={handleSubmit}>
          <InputField
            defaultValue={user.firstName}
            label={"Name"}
            onChange={(e) => {
              setUserObj({ ...userObj, firstName: e.target.value });
            }}
          />
          <InputField
            defaultValue={userObj.lastName}
            label={"Last Name"}
            onChange={(e) => {
              setUserObj({ ...userObj, lastName: e.target.value });
            }}
          />
          <InputField
            defaultValue={userObj.email}
            label={"Email"}
            onChange={(e) => {
              setUserObj({ ...userObj, email: e.target.value });
            }}
          />
          {/* <InputField
            placeholder="Enter new password"
            label={"Password"}
            onChange={(e) => {
              setUserObj({ ...userObj, firstName: e.target.value });
            }}
          />
          <InputField
            placeholder="Confirm new password"
            label={"Confirm Password"}
            onChange={(e) => {
              setUserObj({ ...userObj, firstName: e.target.value });
            }}
          /> */}
          <PrimaryButton type="submit">Save</PrimaryButton>
        </form>
      </MainContent>
    </OuterContainer>
  );
};

export default Account;
