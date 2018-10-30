import React from "react";
import MainNav from "../components/MainNav";

const HomePage = ({ productList }) => {
  return (
    <>
      <MainNav />
      <ul>
        {productList.map(pr => (
          <li key={pr.id}>{pr.title}</li>
        ))}
      </ul>
    </>
  );
};

export default HomePage;
