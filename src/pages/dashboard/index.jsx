import React, { useEffect } from "react";
import getTokenData from "../../utils/getTokenData";

const Dashboard = () => {
  useEffect(() => {
    console.log(getTokenData());
  }, []);

  return (
    <>
      <div>this is dashboard</div>
    </>
  );
};

export default Dashboard;
