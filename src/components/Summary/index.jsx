import "./style.css";

export const Summary = () => {
  return (
    <div>
      <h3 className="font-title-3">Resumo financeiro</h3>
      <div>
        <button className="button-small button-selected">Todos</button>
        <button className="button-small">Entradas</button>
        <button className="button-small">Despesas</button>
      </div>
    </div>
  );
};
