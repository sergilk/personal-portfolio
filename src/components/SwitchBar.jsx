import sun from "/assets/icons/sun.svg";
import moon from "/assets/icons/moon.svg";

const SwitchBar = ({ setTheme, theme }) => {
  const handleChange = () => {
    setTheme((prevTheme) => !prevTheme);
  };

  return (
    <li className="flex items-center">
      <label
        className="item-card item-hover relative cursor-pointer p-1.5"
        tabIndex="0"
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            handleChange();
          }
        }}
      >
        <input
          className="sr-only"
          type="checkbox"
          role="switch"
          aria-label={theme ? "Light theme is active" : "Dark theme is active"}
          onChange={handleChange}
        />
        <img
          src={theme ? moon : sun}
          className="max-w-4.5 select-none"
          alt={theme ? "Switch to dark theme" : "Switch to Light theme"}
          title={theme ? "Switch to dark theme" : "Switch to Light theme"}
          width={30}
          height={30}
          loading="lazy"
        />
      </label>
    </li>
  );
};

export default SwitchBar;
