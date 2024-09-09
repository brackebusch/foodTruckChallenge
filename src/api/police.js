export const fetchPoliceData = async () => {
  const data = await fetch(
    "https://data.sfgov.org/resource/wg3w-h783.json?$order=incident_date DESC"
  );
  return data;
};
