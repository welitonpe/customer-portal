const Header = ({ greetings, title, helper }) => {
  return (
    <header className="d-flex flex-column p-4">
      {greetings && <p className="text-primary font-weight-bold text-uppercase mb-1 greetings">{greetings}</p>}
      <h2 className={`${helper ? "mb-1" : "mb-0"}`}>{title}</h2>
      {helper && <p className="font-weight-normal m-0 helper">{helper}</p>}
    </header>
  );
};

export default Header;
