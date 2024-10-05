import closeIcon from '../../assets/cross-icon.png'
import './index.scss'
function Modal({ isOpen, setModalOpen }) {
    function handleClick() {
        setModalOpen(false)
    }

    return isOpen ? (
        <div className="blocker" onClick={handleClick}>
            <div className="modal">
                <img
                    className="close-modal"
                    src={closeIcon}
                    alt="close-modal"
                    onClick={handleClick}
                />
                <div className="message">Employee Created !</div>
            </div>
        </div>
    ) : null
}

export default Modal
