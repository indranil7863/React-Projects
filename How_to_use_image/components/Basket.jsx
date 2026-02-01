const Basket = ({ appleCnt, basketName, isFull }) => {
  return (
    <div className="basket">
      <h2>{appleCnt}</h2>
      <p>{basketName}</p>
      {isFull ? <p>"basket-Full"</p> : <p>"basket-Empty</p>}
    </div>
  );
};

export default Basket;
