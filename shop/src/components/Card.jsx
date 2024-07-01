function Card({ img, data }) {
  return (
    <div className="p-2">
      <div>
        <img src={img} width="80%" />
        <h5>{data.title}</h5>
        <p>{data.price}</p>
      </div>
    </div>
  );
}

export default Card;
