export const PoliceReportCard = ({ policeReport }) => {
  const incidentDate = new Date(policeReport.incident_datetime);
  // console.log(incidentDate)
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

// analysis_neighborhood:"Tenderloin"
// cad_number:"220210232"
// cnn:"24450000"
// incident_category:"Other Miscellaneous"
// incident_code:"64085"
// incident_date:"2022-01-21T00:00:00.000"
// incident_datetime:"2022-01-21T03:26:00.000"
// incident_day_of_week:"Friday"
// incident_description:"Investigative Detention"
// incident_id:"1113703"
// incident_number:"220045042"
// incident_subcategory:"Other"
// incident_time:"03:26"
// incident_year:"2022"
// intersection:"VAN NESS AVE \\ HAYES ST"
// latitude:"37.7772998550869"
// longitude:"-122.41969356688878"
// point
// :
// {type: 'Point', coordinates: Array(2)}
// police_district:"Northern"
// report_datetime:"2022-01-21T03:26:00.000"
// report_type_code:"II"
// report_type_description:"Initial"
// resolution:"Open or Active"
// row_id:"111370364085"
// supervisor_district:"5"
// supervisor_district_2012:"6"
