import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import paypal from "../../assets/icon/paypal.png"
import masterCard from "../../assets/icon/master card.png"
import visa from "../../assets/icon/visa.png"
import gopay from "../../assets/icon/Gopay.png"
import Image from "next/image";
import Link from "next/link";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical, faPlaneDeparture } from '@fortawesome/free-solid-svg-icons';
import garuda from "./../../assets/images/logo_garuda.png"
import barcode from "./../../assets/icon/barcode.png"
import Barcode from "react-barcode";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";
import axios from "axios";

function BookingPass() {

    const url = process.env.NEXT_PUBLIC_BASE_URL;
    const router = useRouter();
    const [data, setData] = useState([]);
    const [bar, setBar] = useState("");
    const [cookies, setCookie, removeCookie] = useCookies(["user"]);
    const [loading, setLoading] = useState(false);
    const token = cookies.token;
    const { id } = router.query;

    function handleBarcode(e) {
        setBar(e.target.value);
    }
    /* get data ticket booking */
    useEffect(() => {
        getDataTicketBook();
    }, []);

    const getDataTicketBook = async () => {
        await axios
            .get(url + `/bookings/booking/${id}`, {
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

    return (
        <>
            <Navbar />
            {data?.map((item, index) => (
                <>
                    <div className="container-transaction" key={index}>
                        <div className="main-transaction">
                            <div className="container content-transaction">
                                <div className="d-flex title-booking">
                                    <p className="text-booking">Booking Pass</p>
                                    <FontAwesomeIcon icon={faEllipsisVertical} style={{ color: "#005eff", }} />
                                </div>
                                <div className="row mt-5">
                                    <div className="col-sm-8 content-booking-pass">
                                        <div className="paypal d-flex">
                                            <Image src={item.photo} alt="logo garuda" width={100} height={40} />
                                            <p className="text-country">{item.origin_name}</p>
                                            <FontAwesomeIcon icon={faPlaneDeparture} size="xl" />
                                            <p className="text-country">{item.destination_name}</p>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-4 d-flex col-code">
                                                <div className="detail-code mt-5">
                                                    <p className="title-code">Code</p>
                                                    <p style={{ marginTop: "-20px" }}>AB 221</p>
                                                </div>
                                                <div className="detail-code mt-5">
                                                    <p className="title-code">class</p>
                                                    <p style={{ marginTop: "-20px" }}>{item.flight_class}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-4 d-flex col-code">
                                                <div className="detail-code mt-5">
                                                    <p className="title-code">Terminal</p>
                                                    <p style={{ marginTop: "-20px" }}>A</p>
                                                </div>
                                                <div className="detail-code mt-5">
                                                    <p className="title-code">class</p>
                                                    <p style={{ marginTop: "-20px" }}>Gate 221</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="date-booking mt-5">
                                            <p style={{ color: '#A5A5A5', fontSize: '14px' }}>Departure</p>
                                            <p style={{ marginTop: '-10px' }}>Monday, 20 July ‘20 - 12:33</p>
                                        </div>
                                    </div>
                                    <div className="col-sm-4 content-booking-pass">
                                        <div className="barcode-main d-flex">
                                            <div className="barcode d-flex" style={{ marginLeft: '-20px' }}>
                                                <Barcode
                                                    value={
                                                        bar
                                                            ? bar
                                                            : `${item.id}${item.tickets_id}${item.airline_id} ${item.transit}${item.price}${item.is_paid}`
                                                    }
                                                    lineColor="black"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ))}
            <Footer />
        </>
    )
}

export default BookingPass
