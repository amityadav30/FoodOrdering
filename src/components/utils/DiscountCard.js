const DiscountCard = (props) => {
  //console.log(props.discount);
  return (
    <div
      onClick={props.onClick}
      className="bg-gray-100 p-4 rounded-md border border-gray-300  m-4"
    >
      <ul className="list-disc ml-4">
        <li>{props.discount.meta}</li>
      </ul>
    </div>
  );
};

export default DiscountCard;
