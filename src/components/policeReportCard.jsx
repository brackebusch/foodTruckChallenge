export const PoliceReportCard = ({ policeReport }) => {
  const incidentDate = new Date(policeReport.incident_datetime);
  return (
    <div className="policeCard">
      <h4>{policeReport.incident_category}</h4>
      <ul>
        <li>
          <strong>Subcategory:</strong>&nbsp;{policeReport.incident_subcategory}
        </li>
        <li>
          <strong>Description:</strong>&nbsp;{policeReport.incident_description}
        </li>
        <li>
          <strong>Intersection:</strong>&nbsp;{policeReport.intersection}
        </li>
        <li>
          <strong>Date:&nbsp;</strong>
          &nbsp;
          {incidentDate.getMonth()}-{incidentDate.getDay()}-
          {incidentDate.getFullYear()}
          &nbsp;at&nbsp;
          {incidentDate.getHours()}:{incidentDate.getMinutes()}
        </li>
        <li>
          <strong>Resolution:</strong> {policeReport.resolution}
        </li>
      </ul>
    </div>
  );
};
