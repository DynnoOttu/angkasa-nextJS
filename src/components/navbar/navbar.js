import Image from "next/image"
import iconAuth from "../../assets/icon/iconauth.png"
import logo from "../../assets/images/logo1.png"
import logo2 from "../../assets/icon/logo2.png"
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faBell } from '@fortawesome/free-solid-svg-icons';
import dummy1 from "../../assets/dummy/dummy 1.jpg"
import Link from 'next/link'

function Navbar() {

    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-light">
                <div className="container">
                    <Image src={logo} alt="logo" className="navbar-brand" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <form className="d-flex form-search">
                        <input className="form-control me-2 search" type="text" placeholder={"Where you want to go?"} />
                    </form>
                    <div className="collapse navbar-collapse" id="mynavbar">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <Link href="/findticket/findticket" className="nav-link">Find Ticket</Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/mybooking/mybooking" className="nav-link">My Booking</Link>
                            </li>
                        </ul>
                        <div className="icon-nav">
                            <FontAwesomeIcon icon={faEnvelope} className="icon-envelope" />
                            <FontAwesomeIcon icon={faBell} className="icon-bell" />
                            <Image src={dummy1} height={40} width={40} alt="logo" className="navbar-brand-image" />
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
