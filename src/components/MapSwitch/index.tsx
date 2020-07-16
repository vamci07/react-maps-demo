import React from "react";
import "./style.scss";

type MapSwitchProps = {
  handleMapsRendererChange: () => void;
};

export const MapSwitch: React.FunctionComponent<MapSwitchProps> = ({
  handleMapsRendererChange,
}) => {
  return (
    <div style={{ display: "flex", alignItems: "center", marginRight: 12 }}>
      <input
        className="switch-input"
        id="theme-switch"
        type="checkbox"
        onChange={handleMapsRendererChange}
      />
      <label className="switch-control" htmlFor="theme-switch"></label>
    </div>
  );
};
