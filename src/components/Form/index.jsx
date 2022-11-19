import "./style.css";

export const Form = ({
  /*   listTransaction,
  setListTransactions, */
  addTransaction,
}) => {
  const captureData = (event) => {
    const transaction = {};
    const [...targets] = event.target;
    targets.map((target) => {
      if (target.localName == "input" || target.localName == "select") {
        transaction[target.id] = target.value;
        target.value = "";
      }
    });
    // console.log(transaction);

    // let { type, value } = transaction;
    if (transaction.type == "entrada") {
      transaction.value = Number(transaction.value);
    } else {
      transaction.value = Number(transaction.value) * -1;
    }

    // transaction.value = Number(transaction.value);
    // console.log(transaction);
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
        <input
          id="description"
          type="text"
          placeholder="Digite aqui sua descrição"
          required
        />
        <p className="font-body">Ex: Compra de roupas</p>
      </div>
      <div>
        <div>
          <div>
            <label className="font-caption" htmlFor="value">
              Valor
            </label>
            <input id="value" type="number" step="0.01" required />
            <label className="font-caption currency"></label>
          </div>
          <div>
            <label className="font-caption" htmlFor="type">
              Tipo do Valor
            </label>
            <select id="type" required>
              <option value="entrada">Entrada</option>
              <option value="saida">Despesa</option>
            </select>
          </div>
        </div>
      </div>
      <button type="submit" className="button-big">
        Inserir valor
      </button>
    </form>
  );
};
