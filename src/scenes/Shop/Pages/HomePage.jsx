import React from "react";
import CollectionsSection from "../Sections/CollectionsSection";
import SliderComponent from "../Sections/SliderSection";
import HotDeal from "../Sections/HotDealSection";
import NewsLetter from "../Sections/NewsLetter";

const HomePage = ({ products, onAddToCart }) => {
  return (
    <>
      <CollectionsSection />
      <SliderComponent products={products} onAddToCart={onAddToCart} />
      <HotDeal />
      <NewsLetter />
    </>
  );
};

export default HomePage;
