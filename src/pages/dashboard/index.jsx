import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import pages from "../../config/pages";
import isTokenValid from "../../utils/isTokenValid";

const Dashboard = () => {
  const navigate = useNavigate();

  const valid = isTokenValid();

  useEffect(() => {
    if (!valid) return navigate(pages.index);
  }, []);

  return (
    <>
      <div>this is dashboard</div>
    </>
  );
};

export default Dashboard;
