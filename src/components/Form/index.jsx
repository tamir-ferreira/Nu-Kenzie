import "./style.css";

export const Form = () => {
  return (
    <form action="">
      <div>
        <label className="font-caption" htmlFor="">
          Descrição
        </label>
        <input type="text" placeholder="Digite aqui sua descrição" />
        <p className="font-body">Ex: Compra de roupas</p>
      </div>
      <div>
        <div>
          <div>
            <label className="font-caption" htmlFor="">
              Valor
            </label>
            <label className="font-caption currency">
              <input type="text" />
            </label>
          </div>
          <div>
            <label className="font-caption" htmlFor="">
              Tipo do Valor
            </label>
            <select name="" id="">
              <option value="">Entrada</option>
              <option value="">Despesa</option>
            </select>
          </div>
        </div>
      </div>
      <button className="button-big">Inserir valor</button>
    </form>
  );
};
