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
        <button className={"button-big"} onClick={() => setInitialPage(false)}>
          Iniciar
        </button>
      </div>
      <img src={illustration} alt="ilustração do aplicativo Nu Kenzie" />
    </main>
  );
};
