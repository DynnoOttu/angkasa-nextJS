import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import dummy1 from "../../assets/dummy/dummy 1.jpg"
import Image from "next/image";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faUser, faChevronRight, faStar, faGear, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";
import Link from "next/link";

function MyProfile() {
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

    const handleRemove = () => {
        removeCookie("token", { path: "/" });
        router.push("/");
    };
    return (
        <>
            <Navbar />
            <div className="main-profile container mt-5 mb-5">
                <>
                    {dataUser?.map((item, index) => (
                        <div className="row wrapper" key={index}>
                            <div className="col-sm-3 left-profile" >
                                <div className="photo">
                                    <Image src={dummy1} alt="photo profile" height={100} width={100} className="foto-profile mb-4" />
                                </div>
                                <div className="detail-profile">
                                    <button type="button" className="btn btn-outline-primary mb-4">Select Photo</button>
                                    <p className="name-profile mb-2">{item.fullname}</p>
                                    <p className="address-profile"><FontAwesomeIcon icon={faLocationDot} style={{ color: "#005eff", }} /> Kupang, Indonesia</p>
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
                                    <div className="menu-profile d-flex mb-2" >
                                        <p className="text-profile"><FontAwesomeIcon icon={faUser} size="xl" style={{ color: "#2395FF", paddingRight: '25px' }} /> Profile</p>
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
                                            <p className="text-logout"><FontAwesomeIcon icon={faRightFromBracket} size="xl" style={{ color: "#ff0000", paddingRight: '25px' }} />  Logout</p>
                                        </Link>

                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-8 right-profile">
                                <p className="profile-blue">PROFILE</p>
                                <p className="profile-black">Profile</p>
                                <div className="row">
                                    <div className="col-sm-6 profile-contact">
                                        <p className="text-contact mb-5">Contact</p>
                                        <form action="">
                                            <div className="mb-5 mt-3">
                                                <label for="email" className="form-label" >Email</label>
                                                <input type="email" className="form-control" id="email" name="email" placeholder={item.email} required />
                                            </div>
                                            <div className="mb-3">
                                                <label for="phone" className="form-label">Phone Number</label>
                                                <input type="number" className="form-control" id="phone" name="pswd" placeholder={item.phone} required />
                                            </div>
                                        </form>
                                    </div>
                                    <div className="col-sm-6 profile-biodata">
                                        <p className="text-biodata mb-5">Biodata</p>
                                        <form action="">
                                            <div className="mb-5 mt-3">
                                                <label for="fullnam" className="form-label">Fullname</label>
                                                <input type="text" className="form-control" id="fullname" name="fullname" placeholder={item.name} required />
                                            </div>
                                            <div className="mb-3">
                                                <label for="city" className="form-label">City</label>
                                                <input type="text" className="form-control" id="city" name="city" placeholder={item.city} required />
                                            </div>
                                            <div className="mb-3">
                                                <label for="address" className="form-label">Address</label>
                                                <input type="text" className="form-control" id="address" name="address" placeholder={item.address} required />
                                            </div>
                                        </form>
                                        <div className="save-profile">
                                            <button type="submit" className="btn btn-primary ">Save</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </>
            </div>
            <Footer />
        </>
    )
}

export default MyProfile
