import SwitchBar from "./SwitchBar";

function Nav({ setTheme, theme }) {
  return (
    <nav className="py-3.5">
      <div className="flex items-center justify-end">
        <ul className="text-normal flex items-center gap-4">
          <li className="underline-animation">
            <a href="#about">About</a>
          </li>
          <li className="underline-animation">
            <a href="#projects">Projects</a>
          </li>
          <li className="underline-animation">
            <a href="#skills">Skills</a>
          </li>
          <SwitchBar setTheme={setTheme} theme={theme} />
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
