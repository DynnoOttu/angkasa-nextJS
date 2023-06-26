import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import dummy1 from "../../assets/dummy/dummy 1.jpg"
import Image from "next/image";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faUser, faChevronRight, faStar, faGear, faRightFromBracket, faPlaneDeparture, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";

function MyBooking() {

    const url = process.env.NEXT_PUBLIC_BASE_URL;
    const router = useRouter();
    const [data, setData] = useState([]);
    const [dataUser, setDataUser] = useState([]);
    const [cookies, setCookie, removeCookie] = useCookies(["user"]);
    const [loading, setLoading] = useState(false);
    const token = cookies.token;

    /* get data users */
    useEffect(() => {
        getDataUsers();
    }, []);

    const getDataUsers = async () => {
        await axios
            .get(url + `/users/users/id`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((res) => {
                console.log(res);
                setLoading(false);
                setDataUser(res.data.data);
            })
            .catch((err) => {
                console.log(err);
                setLoading(true);
            });
    };

    /* get data ticket */
    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        await axios
            .get(url + `/bookings/my-booking`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            })
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

    /* logout */
    const handleRemove = () => {
        removeCookie("token", { path: "/" });
        router.push("/");
    };


    return (
        <>
            <Navbar />
            <div className="main-profile container mt-5 mb-5">
                <div className="row wrapper">
                    <div className="col-sm-3 left-profile" >
                        {dataUser?.map((item, index) => (
                            <>
                                <div key={index}>
                                    <div className="photo">
                                        <Image src={dummy1} alt="photo profile" height={100} width={100} className="foto-profile mb-4" />
                                    </div>
                                    <div className="detail-profile">
                                        <button type="button" className="btn btn-outline-primary mb-4">Select Photo</button>
                                        <p className="name-profile mb-2">{item.name}</p>
                                        <p className="address-profile"><FontAwesomeIcon icon={faLocationDot} style={{ color: "#005eff", }} /> {item.address}, {item.city} </p>
                                    </div>
                                    <div className="cards-add d-flex">
                                        <p className="cards">Cards</p>
                                        <p className="add">+Add</p>
                                    </div>
                                    <div className="number-card mb-5">
                                        <p>4441 1235 5512 5551</p>
                                        <div className="x-card d-flex">
                                            <p>X Card</p>
                                            <p>$ 1,440.2</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="menu-profile d-flex mb-3" >
                                            <Link href={"/profile/myprofile"} className="text-profile"><FontAwesomeIcon icon={faUser} size="xl" style={{ color: "#2395FF", paddingRight: '25px' }} /> Profile</Link>
                                            <FontAwesomeIcon icon={faChevronRight} style={{ color: "#2395FF" }} />
                                        </div>
                                        <div className="menu-profile d-flex mb-2" >
                                            <p className="text-riview"><FontAwesomeIcon icon={faStar} size="xl" style={{ color: "#979797", paddingRight: '25px' }} />  My Review</p>
                                            <FontAwesomeIcon icon={faChevronRight} />
                                        </div>
                                        <div className="menu-profile d-flex mb-2" >
                                            <p className="text-riview"><FontAwesomeIcon icon={faGear} size="xl" style={{ color: "#979797", paddingRight: '25px' }} />  Setting</p>
                                            <FontAwesomeIcon icon={faChevronRight} />
                                        </div>
                                        <div className="menu-profile d-flex" >
                                            <Link onClick={handleRemove} href="">
                                                <p className="text-logout"><FontAwesomeIcon icon={faRightFromBracket} size="xl" style={{ color: "#ff0000", paddingRight: '20px', textUnderLine: 'none' }} />  Logout</p>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ))}
                    </div>
                    <div className="col-sm-8" >
                        <div className="content-my-booking mb-4">
                            <p className="title-mybooking">MY BOOKING</p>
                            <div className="my-booking d-flex">
                                <p className="text-my-booking">My Booking</p>
                                <p className="text-order-history">Order History</p>
                            </div>
                        </div>
                        {data?.map((item, index) => (
                            <div className="content-my-booking mb-4" key={index}>
                                <Image src={item.photo} alt="logo garuda" width={100} height={40} />
                                <p className="title-date">{item.airline_name}</p>
                                <div className="country-booking d-flex">
                                    <p className="text-country-left pe-4">{item.origin_name}</p>
                                    <FontAwesomeIcon icon={faPlaneDeparture} style={{ color: '#979797' }} />
                                    <p className="text-country-right ps-4">{item.destination_name}</p>
                                </div>
                                <p className="code-transit">Senin, 27 Juni 2022</p>
                                <div className="status d-flex">
                                    <div className="d-flex">
                                        <p className="status-booking">Status</p>
                                        {item.is_paid == 0 ? (
                                            <Link href={`/payment/${item.id}`}>
                                                <button type="button" className="btn btn-warning waiting">Waiting for payment</button>
                                            </Link>
                                        ) : (
                                            <Link href={`/ticket/${item.id}`}>
                                                <button type="button" className="btn btn-success">Payment Success</button>
                                            </Link>
                                        )}
                                    </div>
                                    <p className="view-details">View Details <FontAwesomeIcon icon={faChevronDown} style={{ color: "#2395FF", }} /></p>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default MyBooking
