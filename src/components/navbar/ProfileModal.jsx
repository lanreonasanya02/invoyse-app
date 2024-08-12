import PropTypes from "prop-types";
import profile from "../../assets/profile.png";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import "../navbar/Navbar.css";

ProfileModal.propTypes = {
  onClose: PropTypes.func,
  isModalOpen: PropTypes.bool,
};

export default function ProfileModal({ onClose, isModalOpen }) {
  return (
    <>
      {isModalOpen && (
        <div className="modal-container" onMouseLeave={onClose}>
          <button
            onClick={() => {
              //   openSeeDetailsModal();
              //   onClose();
            }}
          >
            <span className="profile-container">
              <img src={profile} alt="profile" className="profile-img" />
              <span>
                <span className="d-block">James & Sons</span>
                <span className="smaller-text">
                  No. 2 Ikeja Street, off Allen Avenue....
                </span>
              </span>
              <IoCheckmarkCircleSharp size={30} />
            </span>
          </button>

          <button
            onClick={() => {
              //   openRemoveModal();
              //   onClose();
            }}
          >
            Remove student
          </button>
        </div>
      )}
    </>
  );
}
