export const FoodTruckCard = ({ foodTruckData, handleFoodTruckClick }) => {
  const cardClick = () => {
    handleFoodTruckClick({
      foodLat: foodTruckData.latitude,
      foodLong: foodTruckData.longitude,
      id: foodTruckData.objectid,
    });
  };

  return (
    <div
      id={foodTruckData.objectid}
      className="foodTruckCard"
      tabIndex={0}
      onClick={(e) => {
        e.stopPropagation();
        cardClick();
      }}
      onKeyUp={(e) => {
        if (e.key === "Enter") {
          cardClick();
        }
      }}
    >
      <h2>{foodTruckData.applicant}</h2>
      <ul>
        <li className="foodDescription">
          <strong>Food Types:</strong>
          &nbsp;{foodTruckData.fooditems}
        </li>
        <li>
          <strong>Location:</strong>
          &nbsp;{foodTruckData.address}
        </li>
        {foodTruckData.dayshours && (
          <li>
            <strong>Hours</strong>
            &nbsp;
            {foodTruckData.dayshours}
          </li>
        )}
      </ul>
    </div>
  );
};
