import Image from "next/image"
import Navbar from "@/components/navbar/navbar";
import imageShadow from "./../../assets/images/image-shadow.png"
import Footer from "@/components/footer/footer";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import garuda from "./../../assets/images/logo_garuda.png"
import { faCircleCheck, faPlaneDeparture } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";
import axios from "axios";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";


function DetailTicket() {

    const url = process.env.NEXT_PUBLIC_BASE_URL;
    const router = useRouter();
    const { id } = router.query;
    const [data, setData] = useState([]);
    const [dataUser, setDataUser] = useState([]);
    const [title, setTitle] = useState();
    const [fullname, setFullname] = useState();
    const [nationality, setNationality] = useState();
    const [insurance, setInsurance] = useState(false);
    const [loading, setLoading] = useState(false);
    const [cookies, setCookie, removeCookie] = useCookies(["user"]);
    const token = cookies.token;
    const id_users = cookies.id;
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

    /* get data booking*/
    useEffect(() => {
        getData();
    }, [id]);

    const getData = async () => {
        await axios
            .get(url + `/tickets/show/${id}`)
            .then((res) => {
                console.log(res);
                setData(res.data.data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(id);
                console.log(err);
                setLoading(true);
            });
    };

    const formData = {
        users_id: `${id_users}`,
        tickets_id: id,
        title: title,
        insurance: insurance,
        // total: data[0].price + 2,
        fullname: fullname,
        nationality: nationality,
        is_paid: 0,
    };
    const handleBooking = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const result = await axios.post(
                url + "/bookings/add",
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            router.push("/mybooking/mybooking");
            setLoading(false);
        } catch (error) {
            console.log("BOOKING FAILD");
            setLoading(false);
        }
    };

    return (
        <>
            <Navbar />
            <div className="change-search">
                <Image src={imageShadow} alt="shadow" />
                <div className="container">
                    <div className="row content">
                        <div className="col-sm-12 main-content-transit">
                            <div className="row">
                                <div className="col-sm-7">
                                    <p>Contact Person Details</p>
                                </div>
                                <div className="col-sm-3">
                                    <p>Flight Details</p>
                                </div>
                                <div className="col-sm-2">
                                    <p>View Details</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>

                <div className="content-details-ticket container" >
                    <div className="row mb-5">
                        <div className="col-sm-8 content-left-detail">
                            {dataUser.map((item, index) => (
                                <>
                                    <div className="main-detail-ticket" key={index}>
                                        <form action="">
                                            <div className="mb-3">
                                                <label for="fullname" className="form-label">Fullname</label>
                                                <input type="text" className="form-control" id="fullname" required value={item.fullname} />
                                            </div>
                                            <div className="mb-3 mt-3">
                                                <label for="email" className="form-label">Email:</label>
                                                <input type="email" className="form-control" id="email" required value={item.email} />
                                            </div>
                                            <div className="mb-3">
                                                <label for="phone" className="form-label">Phone</label>
                                                <input type="number" className="form-control" id="phone" required value={item.phone} />
                                            </div>
                                            <div className="alert alert-danger">
                                                <p><FontAwesomeIcon icon={faTriangleExclamation} style={{ color: 'red' }} />  Make sure the customer data is correct.</p>
                                            </div>
                                        </form>
                                    </div>
                                </>
                            ))}
                        </div>
                        <div className="col-sm-4 right-payment">
                            {data.map((item, index) => (
                                <>
                                    <div className="" key={index}>
                                        <div className="menu-select-ticket mb-4">
                                            <div className="top-select d-flex mb-3">
                                                <Image src={item.airlines_logo} alt="logo garuda" width={100} height={40} />
                                                <p></p>
                                            </div>
                                            <div className="flight d-flex">
                                                <div className="row justify-content-start">
                                                    <div className="col-sm-5">
                                                        <p className="select-check" style={{ fontSize: '14px' }}>{item.origin_name} ({item.origin_code})</p>
                                                    </div>
                                                    <div className="col-sm-2">
                                                        <p className="select-check"><FontAwesomeIcon icon={faPlaneDeparture} /></p>
                                                    </div>
                                                    <div className="col-sm-5">
                                                        <p className="select-check" style={{ fontSize: '14px' }}>{item.destination_name} ({item.destination_code})</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex">
                                                <p style={{ fontSize: '12px', color: '#6B6B6B', marginRight: '25px' }}>Sunday, 15 Juni 2023</p>
                                                <p style={{ fontSize: '12px', color: '#6B6B6B' }}>{item.takeoff} - {item.landing}</p>
                                            </div>
                                            <div className="details-check d-flex">
                                                <p className="title-check me-4" style={{ color: '#2395FF' }}>   <FontAwesomeIcon icon={faCircleCheck} style={{ color: '#2395FF', marginTop: '3px' }} /> Refundable</p>
                                            </div>
                                            <div className="details-check-list d-flex">
                                                <p className="title-check me-4" style={{ color: '#2395FF' }}>   <FontAwesomeIcon icon={faCircleCheck} style={{ color: '#2395FF', marginTop: '3px' }} /> Can reschedule</p>
                                            </div>
                                            <div className="total-payment d-flex justify-content-between mt-4">
                                                <p style={{ fontWeight: '500', color: 'black' }}>Total Payment</p>
                                                <p style={{ fontWeight: '500', color: '#2395FF' }}>Rp.{item.price}</p>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ))}
                        </div>
                    </div>
                </div>

            </div>


            <div className="container">
                <h2>Passenger Details</h2>
            </div>

            <div className="content-details-ticket container">
                <div className="row mb-5">
                    <div className="col-sm-8 content-left-passanger">
                        <div className="main-detail-ticket">
                            <div className="alert alert-info d-flex">
                                <div>
                                    <p>Passenger : 1 Adult</p>
                                </div>
                                <div className="d-flex">
                                    <p>Same as contact person</p>
                                </div>
                                <div className="form-check form-switch">
                                    <input className="form-check-input" type="checkbox" id="mySwitch" name="darkmode" value="yes" />
                                </div>
                            </div>
                            <form action="">
                                <div className="mb-3">
                                    <label for="fullname" className="form-label">Fullname</label>
                                    <input type="text" className="form-control" id="fullname" value={fullname}
                                        onChange={(e) => setFullname(e.target.value)} required />
                                </div>
                                <div className="mb-3">
                                    <label for="nationality" className="form-label">Nationality</label>
                                    <input type="text" className="form-control" id="nationality" onChange={(e) => setNationality(e.target.value)} required />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


            <br />

            <div className="content-details-ticket container">
                <div className="row justify-content-center payment">
                    <div className="col-sm-7">
                        <Link href={"/mybooking/mybooking"} onClick={handleBooking}>
                            <button type="button" className="btn btn-process">{loading ? "Loading....." : "Proceed to Payment"}</button>
                        </Link>
                    </div>
                </div>
            </div>
            <br /><br /><br />
            <Footer />
        </ >

    )
}

export default DetailTicket
