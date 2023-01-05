import React, { useEffect } from "react";
import Header from "../../components/organisms/Header";
import getTokenData from "../../utils/getTokenData";

const Dashboard = () => {
  useEffect(() => {
    console.log(getTokenData());
  }, []);

  return (
    <>
      <Header />
      <div>this is dashboard</div>
    </>
  );
};

export default Dashboard;
