import { useState, useEffect } from "react";
import foodTruckData from "../data/foodTruckData.json";
import policeData from "../data/policeData.json";
import { FoodTruckCard } from "./foodTruckCard/foodTruckCard";
import { getDistanceFromLatLonInKm } from "../utils";
import { PoliceReportCard } from "./policeReportCard/policeReportCard";
import "./componentBase.css";

const FoodTruckPublicSafety = () => {
  const [matchingFoodTrucks, setMatchingFoodTrucks] = useState(foodTruckData);
  const [filteredPoliceData, setFilteredPoliceData] = useState(foodTruckData);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFoodTruckId, setSelectedFoodTruckId] = useState(null);

  useEffect(() => {
    // this would typically be an API call, so the debouce setup here is intented
    // to avoid too many unnessary api calls
    const delayedSearchFilter = setTimeout(() => {
      setMatchingFoodTrucks(
        foodTruckData?.filter(
          (datum) =>
            (datum?.applicant
              ?.toLowerCase()
              .includes(searchTerm.toLowerCase()) ||
              datum?.fooditems
                ?.toLowerCase()
                .includes(searchTerm.toLowerCase())) &&
            datum.status !== "EXPIRED"
        )
      );
    }, 500);
    return () => clearTimeout(delayedSearchFilter);
  }, [searchTerm]);

  const handleFoodTruckClick = ({ foodLat, foodLong, id }) => {
    const filteredPoliceData = policeData.filter((datum) => {
      return (
        getDistanceFromLatLonInKm(
          datum.latitude,
          datum.longitude,
          foodLat,
          foodLong
        ) < 1
      );
    });
    setSelectedFoodTruckId(id);
    setFilteredPoliceData(filteredPoliceData);
  };

  // used to make sure police data does not render off screen by
  // flipping location based on distance to edge of window
  const calculateDistance = (foodTruckId) => {
    const parentFoodTruck = document.getElementById(foodTruckId);
    const rect = parentFoodTruck.getBoundingClientRect();
    return window.innerWidth - rect.right >= 620 ? 320 : -620;
  };

  const noPoliceData = filteredPoliceData.length === 0;

  return (
    <div className="mainContent" onClick={() => setSelectedFoodTruckId(null)}>
      <div className="searchSection">
        <h1>Food Truck Public Safety</h1>
        <label htmlFor="searchValue">
          Search by Food Truck Name or Food Type
          <br />
          <input
            className="foodtruckSearch"
            type="text"
            name="searchValue"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
        </label>
      </div>
      <div className="cards">
        {searchTerm &&
          matchingFoodTrucks.map((foodTruck) => (
            <div style={{ position: "relative" }}>
              <FoodTruckCard
                key={foodTruck.objectid}
                foodTruckData={foodTruck}
                handleFoodTruckClick={handleFoodTruckClick}
              />
              {selectedFoodTruckId === foodTruck.objectid && (
                <div
                  className="policeContainer"
                  style={{
                    left: calculateDistance(foodTruck.objectid),
                    top: 8,
                  }}
                >
                  {noPoliceData && (
                    <h3>No police reports found near {foodTruck.applicant}</h3>
                  )}
                  {!noPoliceData && (
                    <>
                      <h3>
                        Police Incidents within 1 Km of {foodTruck.applicant}
                      </h3>
                      {filteredPoliceData.map((policeReport) => (
                        <PoliceReportCard
                          key={policeReport.row_id}
                          policeReport={policeReport}
                        />
                      ))}
                    </>
                  )}
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default FoodTruckPublicSafety;
