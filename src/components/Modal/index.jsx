import { useState } from 'react'
import closeIcon from '../../assets/cross-icon.png'
import './index.scss'
import PropTypes from 'prop-types'

function Modal({ isOpen, setIsModalOpen, modalMsg, modalStyle }) {
    const [isButHovered, setButHovered] = useState(false)

    function handleCloseClick() {
        setButHovered(false)
        setIsModalOpen(false)
    }

    return isOpen ? (
        <div
            className="blocker"
            onClick={handleCloseClick}
            style={{
                backgroundColor:
                    modalStyle?.blockerBackgroundColor || undefined,
            }}
        >
            <div
                className="modal"
                style={{ width: modalStyle?.modalWidth || undefined }}
            >
                <img
                    className="close-modal"
                    src={closeIcon}
                    alt="close-modal"
                    onClick={handleCloseClick}
                />
                <div
                    className="message"
                    style={{
                        color: modalStyle?.textColor || undefined,
                        textAlign: modalStyle?.textAlign || undefined,
                        fontFamily: modalStyle?.fontFamily || undefined,
                        fontWeight: modalStyle?.msgFontWeight || undefined,
                    }}
                >
                    {modalMsg}
                </div>
                <div className="success-checkmark">
                    <div
                        className="check-icon"
                        style={{
                            borderColor:
                                modalStyle?.borderColorAnimation || undefined,
                        }}
                    >
                        <span
                            className="icon-line line-tip"
                            style={{
                                backgroundColor:
                                    modalStyle?.lineColorAnimation || undefined,
                            }}
                        ></span>
                        <span
                            className="icon-line line-long"
                            style={{
                                backgroundColor:
                                    modalStyle?.lineColorAnimation || undefined,
                            }}
                        ></span>
                        <div
                            className="icon-circle"
                            style={{
                                borderColor:
                                    modalStyle?.borderColorAnimation ||
                                    undefined,
                            }}
                        ></div>
                        <div className="icon-fix"></div>
                    </div>
                </div>
                <button
                    className="modal-button"
                    onClick={handleCloseClick}
                    onMouseEnter={() => setButHovered(true)}
                    onMouseLeave={() => setButHovered(false)}
                    style={{
                        fontFamily: modalStyle?.fontFamily || undefined,
                        fontWeight: modalStyle?.buttonFontWeight || undefined,
                        backgroundColor: isButHovered
                            ? modalStyle?.buttonBgColorHovered || undefined
                            : modalStyle?.buttonBgColor || undefined,
                    }}
                >
                    Close
                </button>
            </div>
        </div>
    ) : null
}

export default Modal

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    setIsModalOpen: PropTypes.func.isRequired,
    modalMsg: PropTypes.string.isRequired,
    modalStyle: PropTypes.shape({
        blockerBackgroundColor: PropTypes.string.isRequired,
        modalWidth: PropTypes.string.isRequired,
        textColor: PropTypes.string.isRequired,
        textAlign: PropTypes.string.isRequired,
        fontFamily: PropTypes.string.isRequired,
        msgFontWeight: PropTypes.string.isRequired,
        borderColorAnimation: PropTypes.string.isRequired,
        lineColorAnimation: PropTypes.string.isRequired,
        buttonFontWeight: PropTypes.string.isRequired,
        buttonBgColor: PropTypes.string.isRequired,
        buttonBgColorHovered: PropTypes.string.isRequired,
    }),
}
