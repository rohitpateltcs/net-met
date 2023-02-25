import CardItems from "@/components/CardItems";
import React from "react";

const HomePage = () => {
  return (
    <div className="">
      <div className="bg-red-500 ">
        <img
          src="https://m.media-amazon.com/images/I/61Ly9zlsGxL._SX1500_.jpg"
          alt=""
          className="w-full h-40 lg:h-52 xl:h-60"
        />
      </div>
      <div>
        <h1>Top Courses</h1>
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <CardItems />
          <CardItems />
          <CardItems />
          <CardItems />
          <CardItems />
          <CardItems />
          <CardItems />
          <CardItems />
          <CardItems />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
