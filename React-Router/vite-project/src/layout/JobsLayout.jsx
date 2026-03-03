import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Spinner from "../components/Spinner";

const JobsLayout = () => {
  const navigation = useNavigation();
  return (
    <div>
      <h2>Job Openings</h2>
      <p>List of current job opening in our company.</p>
      {navigation.state === "loading" && <Spinner />}
      <Outlet />
    </div>
  );
};

export default JobsLayout;
