import "./style.css";

export const Card = ({ transaction, handTransaction }) => {
  const { description, type, value } = transaction;
  // console.log(type);
  const formatedValue = Math.abs(value).toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
  console.log(formatedValue);
  return (
    <li className={`${type == "entrada" ? "entry" : ""}`}>
      <div>
        <h3 className="font-title-3">{description}</h3>
        <div>
          <span className="font-body">{formatedValue}</span>
          <button onClick={() => handTransaction(transaction)}></button>
        </div>
      </div>
      <span className="font-body">{`${
        type == "entrada" ? "Entrada" : "Despesa"
      }`}</span>
    </li>
  );
};
