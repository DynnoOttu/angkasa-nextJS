import Image from "next/image"
import logo2 from "../../assets/icon/logo2.png"
import Navbar from "@/components/navbar/navbar";
import imageShadow from "./../../assets/images/image-shadow.png"
import garuda from "./../../assets/images/logo_garuda.png"
import airAsia from "./../../assets/images/logo_air_asia.png"
import lion from "./../../assets/images/logo_lion.png"
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightArrowLeft, faChevronUp, faSort, faPlaneDeparture, faSuitcase, faBurger, faWifi, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Footer from "@/components/footer/footer";
import Link from 'next/link'
import { useState, useEffect } from "react";
import axios from "axios"

const url = process.env.NEXT_PUBLIC_BASE_URL;
/* animasi */
const callback = function (entries) {
    entries.forEach((entry) => {
        console.log(entry);

        if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeIn");
        } else {
            entry.target.classList.remove("animate-fadeIn");
        }
    });
};
if (typeof window !== "undefined") {
    const observer = new IntersectionObserver(callback);
    const targets = document.querySelectorAll(".js-show-on-scroll");
    targets.forEach(function (target) {
        target.classList.add("opacity-0");
        observer.observe(target);
    });
}

function valuetext(value) {
    return `${value}`;
}


function FindTicket() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [value, setValue] = useState([0, 300]);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    /* get data */

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        await axios
            .get(url + `/tickets/show-all/`)
            .then((res) => {
                console.log(res);
                setLoading(false);
                setData(res.data.data);
            })
            .catch((err) => {
                console.log(err);
                setLoading(true);
            });
    };


    return (
        <>
            <Navbar />
            <div className="change-search">
                <Image src={imageShadow} alt="shadow" />
                <div className="container">
                    <div className="row content">
                        <div className="col-sm-1">
                            <Image src={logo2} alt="logo" className="icon-logo" />
                        </div>
                        <div className="col-sm-9 main-content-transit">
                            <p className="from">From</p>
                            <div className="row">
                                <div className="col-sm-4">
                                    <p>Kota Kupang (KOE)</p>
                                </div>
                                <div className="col-sm-1">
                                    <FontAwesomeIcon icon={faArrowRightArrowLeft} size="lg" style={{ color: 'white' }} />
                                </div>
                                <div className="col-sm-4">
                                    <p>Jakarta (JKT)</p>
                                </div>
                            </div>
                            <span>Monday, 20 July 20</span><span>. 6 Passenger</span><span>. Economy</span>
                        </div>
                        <div className="col-sm-2 Change-Search">
                            <p>Change Search</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sort container">
                <div className="row">
                    <div className="col-sm-3 filter">
                        <div className="title-filter d-flex">
                            <p className="filter-p">Filter</p>
                            <p className="reset-p">Reset</p>
                        </div>
                        <div className="menu-filter">
                            <div className="menu d-flex">
                                <p className="filter-p">Transit</p>
                                <FontAwesomeIcon icon={faChevronUp} style={{ color: '#2395FF' }} />
                            </div>
                            <div className="menu-check d-flex">
                                <p className="title-check">Direct</p>
                                <input className="form-check-input" type="checkbox" />
                            </div>
                            <div className="menu-check d-flex">
                                <p className="title-check">Transit</p>
                                <input className="form-check-input" type="checkbox" />
                            </div>
                            <div className="menu-check d-flex">
                                <p className="title-check">Transit +2</p>
                                <input className="form-check-input" type="checkbox" />
                            </div>
                            <div className="border border-filter"></div>
                        </div>
                        {/*  */}
                        <div className="menu-filter">
                            <div className="menu d-flex">
                                <p className="filter-p">Facilities</p>
                                <FontAwesomeIcon icon={faChevronUp} style={{ color: '#2395FF' }} />
                            </div>
                            <div className="menu-check d-flex">
                                <p className="title-check">Luggage</p>
                                <input className="form-check-input" type="checkbox" />
                            </div>
                            <div className="menu-check d-flex">
                                <p className="title-check">In-Fight Meal</p>
                                <input className="form-check-input" type="checkbox" />
                            </div>
                            <div className="menu-check d-flex">
                                <p className="title-check">Wi-Fi</p>
                                <input className="form-check-input" type="checkbox" />
                            </div>
                            <div className="border border-filter"></div>
                        </div>
                        <div className="menu-filter">
                            <div className="menu d-flex">
                                <p className="filter-p">Transit</p>
                                <FontAwesomeIcon icon={faChevronUp} style={{ color: '#2395FF' }} />
                            </div>
                            <div className="menu-check d-flex">
                                <p className="title-check">Direct</p>
                                <input className="form-check-input" type="checkbox" />
                            </div>
                            <div className="menu-check d-flex">
                                <p className="title-check">Transit</p>
                                <input className="form-check-input" type="checkbox" />
                            </div>
                            <div className="menu-check d-flex">
                                <p className="title-check">Transit +2</p>
                                <input className="form-check-input" type="checkbox" />
                            </div>
                            <div className="border border-filter"></div>
                        </div>
                        {/*  */}
                        <div className="menu-filter">
                            <div className="menu d-flex">
                                <p className="filter-p">Departure Time</p>
                                <FontAwesomeIcon icon={faChevronUp} style={{ color: '#2395FF' }} />
                            </div>
                            <div className="menu-check d-flex">
                                <p className="title-check">00:00 - 06:00</p>
                                <input className="form-check-input" type="checkbox" />
                            </div>
                            <div className="menu-check d-flex">
                                <p className="title-check">06:00 - 12:00</p>
                                <input className="form-check-input" type="checkbox" />
                            </div>
                            <div className="menu-check d-flex">
                                <p className="title-check">12:00 - 18:00</p>
                                <input className="form-check-input" type="checkbox" />
                            </div>
                            <div className="menu-check d-flex">
                                <p className="title-check">18:00 - 24:00</p>
                                <input className="form-check-input" type="checkbox" />
                            </div>
                            <div className="border border-filter"></div>
                        </div>
                        {/*  */}
                        <div className="menu-filter">
                            <div className="menu d-flex">
                                <p className="filter-p">Time Arrvied</p>
                                <FontAwesomeIcon icon={faChevronUp} style={{ color: '#2395FF' }} />
                            </div>
                            <div className="menu-check d-flex">
                                <p className="title-check">00:00 - 06:00</p>
                                <input className="form-check-input" type="checkbox" />
                            </div>
                            <div className="menu-check d-flex">
                                <p className="title-check">06:00 - 12:00</p>
                                <input className="form-check-input" type="checkbox" />
                            </div>
                            <div className="menu-check d-flex">
                                <p className="title-check">12:00 - 18:00</p>
                                <input className="form-check-input" type="checkbox" />
                            </div>
                            <div className="menu-check d-flex">
                                <p className="title-check">18:00 - 24:00</p>
                                <input className="form-check-input" type="checkbox" />
                            </div>
                            <div className="border border-filter"></div>
                        </div>
                        {/*  */}
                        <div className="menu-filter">
                            <div className="menu d-flex">
                                <p className="filter-p">Airlines</p>
                                <FontAwesomeIcon icon={faChevronUp} style={{ color: '#2395FF' }} />
                            </div>
                            <div className="menu-check d-flex">
                                <p className="title-check">Garuda Indonesia</p>
                                <input className="form-check-input" type="checkbox" />
                            </div>
                            <div className="menu-check d-flex">
                                <p className="title-check">Air Asia</p>
                                <input className="form-check-input" type="checkbox" />
                            </div>
                            <div className="menu-check d-flex">
                                <p className="title-check">Lion Air</p>
                                <input className="form-check-input" type="checkbox" />
                            </div>
                            <div className="border border-filter"></div>
                        </div>
                        {/*  */}
                        <div className="menu-filter">
                            <div className="menu d-flex">
                                <p className="filter-p">Ticket Price</p>
                                <FontAwesomeIcon icon={faChevronUp} style={{ color: '#2395FF' }} />
                            </div>
                            <div className="menu-check d-flex">
                                <p className="title-check">Lowest</p>
                                <p className="title-check">Hightes</p>
                            </div>
                            <div className="menu-check d-flex">
                                <p className="title-check">Air Asia</p>
                                <input className="form-check-input" type="checkbox" />
                            </div>
                            <div className="menu-check d-flex">
                                <p className="title-check">Lion Air</p>
                                <input className="form-check-input" type="checkbox" />
                            </div>
                            <div className="border border-filter"></div>
                        </div>
                    </div>
                    <div className="col-sm-9">
                        <div className="title-filter d-flex">
                            <p className="filter-p">Select Ticket <span className="flight-found">(6 flight found)</span> </p>
                            <p className="sort-by">Sort by <FontAwesomeIcon icon={faSort} style={{ color: 'black' }} /></p>
                        </div>
                        {data.map((item, index) => (
                            <div className="menu-select-ticket mb-4" key={index}>
                                <div className="top-select d-flex mb-3">
                                    <Image src={item.airlines_logo} alt="logo garuda" width={100} height={40} />
                                    <p style={{ fontSize: "20px" }}>{item.airlines_name}</p>
                                </div>
                                <div className="flight d-flex">
                                    <div className="row">
                                        <div className="col-sm-2">
                                            <p className="select-check">{item.origin_name}<span> <br />{item.takeoff}</span></p>
                                        </div>
                                        <div className="col-sm-1">
                                            <p className="select-check"><FontAwesomeIcon icon={faPlaneDeparture} /></p>
                                        </div>
                                        <div className="col-sm-2">
                                            <p className="select-check"> {item.destination_name} <br /> <span>{item.landing}</span></p>
                                        </div>
                                        <div className="col-sm-2 mt-1">
                                            <div className="detail-hours">
                                                <p className="hours">{item.duration} <span>(Transit {item.transit})</span></p>
                                            </div>
                                        </div>
                                        <div className="col-sm-1 mt-2 d-flex">
                                            <div className="detail-hours">
                                                <FontAwesomeIcon icon={faSuitcase} style={{ color: '#979797', paddingRight: '4px' }} />
                                                <FontAwesomeIcon icon={faBurger} style={{ color: '#979797', paddingRight: '4px' }} />
                                                <FontAwesomeIcon icon={faWifi} style={{ color: '#979797' }} />
                                            </div>
                                        </div>
                                        <div className="col-sm-2 d-flex">
                                            <div className="sub">
                                                <p>Rp. {item.price}</p>
                                            </div>
                                        </div>
                                        <div className="col-sm-1 d-flex">
                                            <div className="button-select">
                                                <Link href={`../detailticket/${item.id}`} type="button" className="btn select-ticket">Select</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="details-check d-flex">
                                    <p className="title-check me-4" style={{ color: '#2395FF' }}>View Details</p>
                                    <FontAwesomeIcon icon={faChevronDown} style={{ color: '#2395FF', marginTop: '3px' }} />
                                </div>
                            </div>
                        ))}
                        {/*  */}
                        {/*  */}
                    </div>
                </div>
            </div >
            <Footer />
        </>
    )
}

export default FindTicket
