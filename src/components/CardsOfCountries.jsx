import {useState} from "react";
import Modal from "./Modal";

const CardsOfCountries = (props) =>{
    const [show, setShow] = useState(false)

    const handleModalClose = (e) => {

        const currentClass = e.target.className

        if (currentClass === 'modal-background' || currentClass === 'close-button') {
            setShow(false)
            document.body.style.overflow = ''
        }
    }

    const handleModalOpen = () => {
        setShow(true)
        document.body.style.overflow = 'hidden'
    }

    return(
        <>
            <div className="CardsOfCountry" onClick={handleModalOpen}>
                <div className="NumberOfCountry">{props.data.number}</div>
                <div className="CountryOfCountry">{props.data.Country}</div>
                <div className="TotalConfirmedOfCountry">{props.data.TotalConfirmed}</div>
            </div>
            {
                show && <div className="modal-background" onClick={handleModalClose}>
                    <Modal props={props.data}/>
                    <div className="close-button">
                        <button type={'button'} className="close-button"  onClick={handleModalClose}>OK</button>
                    </div>
                </div>
            }
        </>
    )
}

export default CardsOfCountries