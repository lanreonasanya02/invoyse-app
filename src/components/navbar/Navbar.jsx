import { CiDark, CiLight } from "react-icons/ci";
import "./NavBar.css";
import {
  IoNotificationsOutline,
  IoSearch,
  IoSettingsOutline,
} from "react-icons/io5";
import profile from "../../assets/profile.png";
import { TfiAngleDown } from "react-icons/tfi";
import { useState } from "react";
import ProfileModal from "./ProfileModal";

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <nav className="d-flex align-items-center justify-content-between">
      <div className="d-flex align-items-center gap-3 profile-container">
        <img src={profile} alt="profile" />
        <span>
          <span className="d-block">James & Sons</span>
          <span className="switch-text">Switch business</span>
        </span>

        <TfiAngleDown
          className="ms-5 drop-down"
          size={20}
          onClick={() => setIsModalOpen((prev) => !prev)}
        />

        {isModalOpen && (
          <ProfileModal onClose={closeModal} isModalOpen={isModalOpen} />
        )}
      </div>

      <div className="icons">
        <a href="/dashboard" className="menu active">
          <span className="menu-link">
            <IoSearch className="menu-icon" size={28} />
          </span>
        </a>

        <a href="/dashboard" className="menu active">
          <span className="menu-link">
            <IoSettingsOutline className="menu-icon" size={28} />
          </span>
        </a>

        <a href="/dashboard" className="menu active">
          <span className="menu-link">
            <IoNotificationsOutline className="menu-icon" size={28} />
          </span>
        </a>

        <span className="scheme-toggle d-flex align-items-center gap-1 px-2">
          <a href="/dashboard" className="menu active">
            <span className="">
              <CiLight className="light-mode" size={28} color="#FFB600" />
            </span>
          </a>

          <a href="/dashboard" className="menu active">
            <span className="">
              <CiDark className="" size={25} />
            </span>
          </a>
        </span>
      </div>
    </nav>
  );
}
