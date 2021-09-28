const Header = ({ intro, title, subtitle }) => {
  return (
    <header className="d-flex flex-column p-4">
      {intro && <h5 className="text-primary font-weight-bold m-0">{intro}</h5>}
      <h1>{title}</h1>
      {subtitle && <h6 className="font-weight-normal m-0">{subtitle}</h6>}
    </header>
  );
};

export default Header;
