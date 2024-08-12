import invoyseLogo from "../../../public/logo.svg";
import invoyseText from "../../assets/invoyse.png";
import { CiDeliveryTruck, CiExport } from "react-icons/ci";
import { LuBarChart4, LuClipboardCheck, LuUsers } from "react-icons/lu";
import { TbCurrencyNaira } from "react-icons/tb";
import { FaBarcode } from "react-icons/fa";
import { BsClipboardX } from "react-icons/bs";
import { GrGroup } from "react-icons/gr";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { IoWalletOutline } from "react-icons/io5";
import { PiElevatorLight } from "react-icons/pi";
import { TfiWrite } from "react-icons/tfi";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { TiHomeOutline } from "react-icons/ti";
import Logo from "../Logo";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="d-flex align-items-center gap-4">
        <Logo width={61} image={invoyseLogo} imageAlt="Adin University Logo" />
        <Logo width={114} image={invoyseText} imageAlt="Adin University Logo" />
      </div>

      <div className="links">
        <a href="/dashboard" className="menu active">
          <span className="menu-link">
            <TiHomeOutline className="menu-icon" size={34} />
            <span>Dashboard</span>
          </span>
        </a>

        <a href="/invoice" className="menu">
          <div className="menu-link">
            <LuClipboardCheck size={34} className="menu-icon" />
            <span>Invoices</span>
          </div>
        </a>

        <a href="/courses">
          <div className="menu-link">
            <TbCurrencyNaira size={34} className="menu-icon" />
            <span>Expenses</span>
          </div>
        </a>

        <a href="/virtual-classes">
          <div className="menu-link">
            <FaBarcode size={34} className="menu-icon" />
            <span>Inventory</span>
          </div>
        </a>

        <a href="/assessments">
          <div className="menu-link">
            <LuUsers size={34} className="menu-icon" />
            <span>Clients</span>
          </div>
        </a>

        <a href="/grades">
          <div className="menu-link">
            <BsClipboardX size={34} className="menu-icon" />
            <span>Quotations</span>
          </div>
        </a>

        <a href="/discussion">
          <div className="menu-link">
            <LuBarChart4 size={34} className="menu-icon" />
            <span>Financial Overview</span>
          </div>
        </a>

        <a href="/announcements">
          <div className="menu-link">
            <CiDeliveryTruck size={34} className="menu-icon" />
            <span>Suppliers</span>
          </div>
        </a>

        <a href="/report">
          <div className="menu-link">
            <GrGroup size={34} className="menu-icon" />
            <span>Manage Staff</span>
          </div>
        </a>

        <a href="/help">
          <div className="menu-link">
            <LiaFileInvoiceSolid size={34} className="menu-icon" />
            <span>Invoice Templates</span>
          </div>
        </a>
        <a href="/settings">
          <div className="menu-link">
            <IoWalletOutline className="menu-icon" size={34} />
            <span>Payment Information</span>
          </div>
        </a>
        <a href="/settings">
          <div className="menu-link">
            <PiElevatorLight className="menu-icon" size={34} />
            <span>Tax</span>
          </div>
        </a>
        <a href="/settings">
          <div className="menu-link">
            <TfiWrite className="menu-icon" size={34} />
            <span>Default Notes</span>
          </div>
        </a>

        <a href="/settings">
          <div className="menu-link">
            <MdOutlineDashboardCustomize className="menu-icon" size={34} />
            <span>Customization Options</span>
          </div>
        </a>

        <a href="#">
          <div className="menu-link logout">
            <CiExport size={34} className="menu-icon" />
            <span className="">Export</span>
          </div>
        </a>
      </div>
    </div>
  );
}
