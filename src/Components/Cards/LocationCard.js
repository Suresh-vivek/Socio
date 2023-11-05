import "./LacationCard.css";

const LocationCard = (props) => {

    return(
        <div className="card">
            <div className="card-image">
                <img src={props.image} alt="Logo" />
            </div>
            <div className="card-content">
                <span className="card-title">{props.address}</span>
                <span className="card-data"><strong>Age Group : </strong> {props.age} Years</span>
                <span className="card-data"><strong>Subjects : </strong>{props.data}</span>
            </div>
        </div> 
    );
};

export default LocationCard;