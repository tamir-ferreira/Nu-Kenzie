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
      </div>
    </div>
  );
};
