import "./style.css";

export const Card = ({ transaction, handTransaction }) => {
  const { description, type, value } = transaction;
  // console.log(type);

  return (
    <li className={`${type == "entrada" ? "entry" : ""}`}>
      <div>
        <h3 className="font-title-3">{description}</h3>
        <div>
          <span className="font-body">R$ {Math.abs(value)}</span>
          <button onClick={() => handTransaction(transaction)}></button>
        </div>
      </div>
      <span className="font-body">{`${
        type == "entrada" ? "Entrada" : "Despesa"
      }`}</span>
    </li>
  );
};
