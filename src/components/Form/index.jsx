import { Input } from "./Input";
import { Select } from "./Select";
import "./style.css";

export const Form = ({ addTransaction }) => {
  const captureData = (event) => {
    const transaction = {};
    const [...targets] = event.target;
    targets.map((target) => {
      if (target.localName == "input" || target.localName == "select") {
        transaction[target.id] = target.value;
        target.value = "";
      }
    });
    if (transaction.type == "entrada")
      transaction.value = Number(transaction.value);
    else transaction.value = Number(transaction.value) * -1;

    addTransaction(transaction);
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        captureData(event);
      }}
    >
      <div>
        <label className="font-caption" htmlFor="description">
          Descrição
        </label>
        <Input
          id="description"
          type="text"
          placeholder="Digite aqui sua descrição"
        />
        <p className="font-body">Ex: Compra de roupas</p>
      </div>
      <div>
        <div>
          <div>
            <label className="font-caption" htmlFor="value">
              Valor
            </label>
            <Input id="value" type="number" step="0.01" min="0.01" />
            <label className="font-caption currency"></label>
          </div>
          <div>
            <label className="font-caption" htmlFor="type">
              Tipo do Valor
            </label>
            <Select />
          </div>
        </div>
      </div>
      <button type="submit" className="button-big">
        Inserir valor
      </button>
    </form>
  );
};
