import "./style.css";

export const Card = () => {
  return (
    <li>
      <div>
        <h3 className="font-title-3">Description Value</h3>
        <div>
          <span className="font-body">R$ 0,00</span>
          <button></button>
        </div>
      </div>
      <span className="font-body">Entrada</span>
    </li>
  );
};
