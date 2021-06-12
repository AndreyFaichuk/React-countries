import Heart from "../pictures/heartbeat.png";
import Scull from "../pictures/skull.png";
import Recovered from "../pictures/file-medical.png";

const Modal = props => {
    return (
        <div className="modal-card">
            <div className="InfoAboutCountries">
                <h1>{props.props.Country}</h1>
                <div className="TotalInformation">
                    <div className="Total"><img src={Heart} alt="logo"/>
                        <p>Total Confirmed <span>{props.props.TotalConfirmed}</span></p>
                    </div>
                    <div className="Total"><img src={Scull} alt="logo"/>
                        <p>Total Deaths <span className="Death">{props.props.TotalDeaths}</span></p>
                    </div>
                    <div className="Total"><img src={Recovered} alt="logo"/>
                        <p>Total Recovered <span>{props.props.TotalRecovered}</span></p>
                    </div>

                </div>
            </div>
        </div>
    )
}


export default Modal