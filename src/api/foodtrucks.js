export const fetchFoodTruckData = async (searchTerm = "") => {
  const data = await fetch(`https://data.sfgov.org/resource/rqzj-sfat.json`);
  return data;
};
