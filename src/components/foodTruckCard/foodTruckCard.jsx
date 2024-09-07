export const FoodTruckCard = ({foodTruckData}) => {
    return (
        <div className="foodTruckCard">
            <h2>{foodTruckData.applicant}</h2>
            <span>{foodTruckData.fooditems}</span>
        </div>
    )
}