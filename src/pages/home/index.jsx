import "./style.css";
import logo from "../../assets/logo.svg";
import illustration from "../../assets/illustration.svg";

export const Home = ({ setInitialPage }) => {
  return (
    <main className="index">
      <div className="left-container">
        <img src={logo} alt="logotipoo Nu Kenzie" />
        <h2 className="font-title-1">
          Centralize o controle das suas finanças
        </h2>
        <p>de forma rápida e segura</p>
        <button
          className={"button-big attention"}
          onMouseEnter={(event) => event.target.classList.toggle("attention")}
          onMouseLeave={(event) => event.target.classList.toggle("attention")}
          onClick={() => setInitialPage(false)}
        >
          Iniciar
        </button>
      </div>
      <img
        id="ilustration"
        src={illustration}
        alt="ilustração do aplicativo Nu Kenzie"
      />
    </main>
  );
};
