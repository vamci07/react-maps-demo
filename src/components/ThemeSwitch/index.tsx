import React from "react";
import "./style.scss";

type ThemeSwitchProps = {
  handleThemeChange: () => void;
};

export const ThemeSwitch: React.FunctionComponent<ThemeSwitchProps> = ({
  handleThemeChange,
}) => {
  return (
    <div style={{ display: "flex", alignItems: "center", marginRight: 12 }}>
      <input
        className="switch-input"
        id="theme-switch"
        type="checkbox"
        onChange={handleThemeChange}
      />
      <label className="switch-control" htmlFor="theme-switch"></label>
    </div>
  );
};
