import "./style.css";

export const Header = ({ logo, setInitialPage }) => {
  return (
    <header>
      <div>
        <img src={logo} alt="" />
        <button className="button-small" onClick={() => setInitialPage(true)}>
          Início
        </button>
      </div>
    </header>
  );
};
