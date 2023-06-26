import Image from "next/image"
import Link from 'next/link'
import logo from "../../assets/images/logo1.png"
import iconAppStore from "../../assets/icon/appstore.png"
import iconPlayStore from "../../assets/icon/playstore.png"
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';



function Footer() {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="row content-footer">
                        <div className="col-sm-4 main-footer">
                            <Image src={logo} alt="logo" />
                            <p className="detail-footer">Find your Flight and explore the
                                world with us. We will take care of the rest</p>
                            <p className="coppyright">© Ankasa.  All Rights Reserved.</p>
                        </div>
                        <div className="col-sm-2 main-footer ms-5">
                            <p className="text-features">Features</p>
                            <p className="detail-features">Find Ticket</p>
                            <p className="detail-features">My booking</p>
                            <p className="detail-features">Chat</p>
                            <p className="detail-features">Notification</p>
                        </div>
                        <div className="col-sm-3 app-dwonload">
                            <p className="text-features">Download Angkasa app</p>
                            <Image src={iconAppStore} alt="icon app store" className="mb-3" />
                            <Image src={iconPlayStore} alt="icon play store" />
                        </div>
                        <div className="col-sm-2 app-dwonload">
                            <p className="text-features">Follow Us</p>
                            <div className="d-flex" style={{ justifyContent: 'space-between' }}>
                                <FontAwesomeIcon icon={faFacebookF} />
                                <FontAwesomeIcon icon={faTwitter} />
                                <FontAwesomeIcon icon={faInstagram} />
                                <FontAwesomeIcon icon={faYoutube} />
                            </div>
                            <p style={{ marginTop: '160px' }}><FontAwesomeIcon icon={faLocationDot} /> Jakarta Indonesia</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
