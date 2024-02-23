import React, {useState} from "react";

const Modal = ({product}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    }

    return(
        <div>
            <button onClick={toggleModal} className="btn add-cart">Ver Resumen</button>
            {isOpen && (<div>
                <div>
                    <p>{product.resumen}</p>
                </div>
            </div>)}
        </div>
    )
}
export default Modal;