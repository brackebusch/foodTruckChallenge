
export const PoliceReportCard = (policeReport) => {
    return (
        <div className="policeCard">
            <h1>{policeReport.incident_category}</h1>
            <h3>{policeReport.incident_subcategory}</h3>
            <span>{policeReport.description}</span>
            <span>{policeReport.date}</span>
        </div>
    )
}