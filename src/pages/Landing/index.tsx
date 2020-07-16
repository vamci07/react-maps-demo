import React from "react";
import Map from "components/Map";
import MapBox from "components/MapBox";

type LandingProps = {
  currentTheme: string;
  currentMap: string;
};

export const Landing: React.FunctionComponent<LandingProps> = ({
  currentTheme,
  currentMap,
}) => {
  return (
    <div>
      {currentMap === "google" ? (
        <Map />
      ) : (
        <MapBox currentTheme={currentTheme} />
      )}
    </div>
  );
};
