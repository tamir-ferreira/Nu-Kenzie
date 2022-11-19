import { Button } from "../Button";
import "./style.css";

export const Summary = ({ filterType, setFilterType }) => {
  return (
    <div>
      <h3 className="font-title-3">Resumo financeiro</h3>
      <div>
        <Button
          type={"todos"}
          filterType={filterType}
          setFilterType={setFilterType}
        >
          Todos
        </Button>
        <Button
          type={"entrada"}
          filterType={filterType}
          setFilterType={setFilterType}
        >
          Entradas
        </Button>
        <Button
          type={"saida"}
          filterType={filterType}
          setFilterType={setFilterType}
        >
          Despesas
        </Button>

        {/* <button
          className={`button-small ${
            filterType === "todos" ? "button-selected" : ""
          }`}
          onClick={() => setFilterType("todos")}
        >
          Todos
        </button>
        <button
          className={`button-small ${
            filterType === "entrada" ? "button-selected" : ""
          }`}
          onClick={() => setFilterType("entrada")}
        >
          Entradas
        </button>
        <button
          className={`button-small ${
            filterType === "saida" ? "button-selected" : ""
          }`}
          onClick={() => setFilterType("saida")}
        >
          Despesas
        </button> */}
      </div>
    </div>
  );
};
