import ua from "/assets/icons/ua.svg";

const Footer = () => {
  return (
    <footer>
      <div className="flex justify-center border-t-2 py-4">
        <p className="text-normal">
          <span>{new Date().getFullYear()} </span>
          <span>| Made with </span>
          <span className="animate-pulse text-red-500 duration-300">
            &#10084;
          </span>
          <span> from</span>
        </p>
        <img
          src={ua}
          className="ml-1 max-w-4"
          alt="Ukrainian flag"
          title="Ukrainian flag"
          width={12}
          height={12}
          loading="lazy"
        />
      </div>
    </footer>
  );
};

export default Footer;
