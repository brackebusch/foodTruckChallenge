import { useState, useEffect } from "react"
// import { foodTruckData } from "../data/foodTruckData"
// import { fetchFoodTruckData } from '../api/foodtrucks'
// import { fetchPoliceData } from "../api/police"
// import { fetchPoliceData } from "../api/police"
import foodTruckData from '../data/foodTruckData.json'
import policeData from '../data/policeData.json'
import { FoodTruckCard } from "./foodTruckCard/foodTruckCard"
import { getDistanceFromLatLonInKm } from '../utils'
import { PoliceReportCard } from "./policeReportCard/policeReportCard"
import './componentBase.css'

const FoodTruckPublicSafety = () => {
    const [matchingFoodTrucks, setMatchingFoodTrucks] = useState(foodTruckData);
    const [filteredPoliceData, setFilteredPoliceData] = useState(foodTruckData);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedFoodTruckId, setSelectedFoodTruckId] = useState(null)

    useEffect(() => {
        const delayedSearchFilter = setTimeout(() => {
            const filteredFoodTrucks = foodTruckData.filter(datum => 
                (datum.applicant.includes(searchTerm) ||
                datum.fooditems.includes(searchTerm)) &&
                datum.status !== "EXPIRED"
            )
            setMatchingFoodTrucks(filteredFoodTrucks)
        }, 500)

        return clearTimeout(delayedSearchFilter)
    }, [searchTerm])     

    const handleFoodTruckClick = ({foodLat, foodLong, id}) => {
        const filteredPoliceData = policeData.filter(datum => {
            return getDistanceFromLatLonInKm(datum.latitude, datum.longitude, foodLat, foodLong) < 1
        })
        setFilteredPoliceData(filteredPoliceData);
        setSelectedFoodTruckId(id)
    }

    return (
        <div className="mainContent">
            <h1>Food Truck Public Safety</h1>
            <div>
                <label htmlFor='searchValue'>
                    Search by food type or foodtruck name
                    <br/>
                    <input style={{border: '1px solid gray', borderRadius: '2px', height: '1rem', padding: '.5rem'}} type='text' name='searchValue' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
                </label>
            </div>
            {matchingFoodTrucks.map(foodTruck =>
            {
                console.log(foodTruck)
                return (
                    <div>
                    <FoodTruckCard 
                        key={foodTruck.objectid} 
                        foodTruckData={foodTruck} 
                        onClick={() => {
                            handleFoodTruckClick({foodLat: foodTruck.latitude, foodLong: foodTruck.longitude, id: foodTruck.objectid})
                        }} 
                    />
                    {selectedFoodTruckId === foodTruck.objectid (
                        filteredPoliceData.map(policeReport => 
                            <PoliceReportCard key={policeReport.row_id} policeReport={policeReport} />
                        )
                    )}
                </div>

                )
            }
            )}

        </div>
    )
}

export default FoodTruckPublicSafety;
