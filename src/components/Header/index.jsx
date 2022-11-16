import "./style.css";

export const Header = ({ logo, setInitial }) => {
  return (
    <header>
      <div>
        <img src={logo} alt="" />
        <button className="button-small" onClick={() => setInitial(true)}>
          Início
        </button>
      </div>
    </header>
  );
};
