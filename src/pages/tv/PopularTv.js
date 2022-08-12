import React, { useContext } from "react";
import { MovieContext } from "../../Context";
import TvListTemplate from "../../components/templates/tvListTemplate";
import AddToFavouritesIcon from "../../components/cards/icons/addToFavourites";

const PopularTv = () => {
  const { popularTv } = useContext(MovieContext);

  return (
    <>
      <div className="card bg-base-200 m-4">
        <h2 className="text-2xl pt-8 pl-8">Popular Tv</h2>
        <TvListTemplate
          title="Discover Movies"
          tv={popularTv}
          action={(movie) => {
            return <AddToFavouritesIcon movie={movie} />;
          }}
        />
      </div>
    </>
  );
};

export default PopularTv;
