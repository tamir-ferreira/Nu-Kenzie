import "./style.css";

export const TotalMoney = ({ listTransactions }) => {
  // console.log(listTransactions);
  let total = "0,00";
  if (listTransactions != "") {
    total = listTransactions.reduce((acc, atual) => {
      return acc + atual.value;
    }, 0);
    console.log(total);
  }
  return (
    <div className="total-money">
      <div>
        <h3 className="font-title-3">Valor total:</h3>
        <span className="font-title-3">{`$ ${total}`} </span>
      </div>
      <p className="font-body">O valor se refere ao saldo</p>
    </div>
  );
};
