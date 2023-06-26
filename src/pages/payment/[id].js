import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import paypal from "../../assets/icon/paypal.png"
import masterCard from "../../assets/icon/master card.png"
import visa from "../../assets/icon/visa.png"
import gopay from "../../assets/icon/Gopay.png"
import Image from "next/image";
import Link from "next/link";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";
import { useState } from "react";
import axios from "axios";

function Transaction() {

    const url = process.env.NEXT_PUBLIC_BASE_URL;
    const [cookies, setCookie, removeCookie] = useCookies(["user"]);
    const router = useRouter();
    const { id } = router.query;
    const token = cookies.token;
    const [loading, setLoading] = useState(false);
    const formData = {
        id: parseInt(id),
        is_paid: 1,
    };
    const handlePayment = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const result = await axios.put(
                url + `/bookings/is_paid/${id}`,
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            console.log("PAYMENT SUCCESS");
            router.push("/mybooking/mybooking");
            setLoading(false);
        } catch (error) {
            console.log("PAYMENT FAILD");
            setLoading(false);
        }
    };


    return (
        <>
            <Navbar />
            <div className="container-transaction">
                <div className="main-transaction">
                    <div className="container content-transaction">
                        <div className="row">
                            <div className="col-sm-6 mt-4">
                                <p>Payment Method</p>
                                <div className="paypal d-flex">
                                    <p>Paypal</p>
                                    <Image src={paypal} alt="paypal" height={30} width={30} />
                                </div>
                                <div className="paypal d-flex">
                                    <div className="title-credit">
                                        <p>Credit Card</p>
                                    </div>
                                    <div className="logo-credit">
                                        <Image src={masterCard} alt="paypal" height={30} width={40} style={{ marginRight: '10px' }} />
                                        <Image src={visa} alt="paypal" height={30} width={40} style={{ marginRight: '10px' }} />
                                        <Image src={gopay} alt="paypal" height={40} width={40} />
                                    </div>
                                </div>
                                <div>
                                    <form>
                                        <div className="mb-3 mt-3">
                                            <label for="credit" className="form-label">Credit Card</label>
                                            <input type="number" className="form-control" id="credit" placeholder="0000 00000" name="credit" />
                                        </div>
                                        <div className="row d-flex">
                                            <div className="col-sm-6">
                                                <div className="mb-3">
                                                    <label for="date" className="form-label">Expiry Date</label>
                                                    <input type="date" className="form-control" id="date" name="date" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="mb-3">
                                                    <label for="cvc" className="form-label">CVC/CVV</label>
                                                    <input type="number" className="form-control" id="cvc" placeholder="000" name="cvc" />
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-sm-6 mt-4">
                                <p>Summary</p>
                                <div className="paypal d-flex mb-4">
                                    <p>Pro (Biled Monthly) <br />
                                        <Link href="#" style={{ marginTop: '-900px' }}>save 20%</Link></p>
                                    <p>$9.00</p>
                                </div>
                                <div className="paypal d-flex mb-4">
                                    <p>Referal Bonouses</p>
                                    <p>$9.00</p>
                                </div>
                                <div className="paypal d-flex mb-4">
                                    <p>Today you pay (US Dollars) <br /> <span style={{ fontSize: "12px" }}>Affter 30 days $5.900</span></p>
                                    <p>$0</p>
                                </div>
                                <Link href={"/mybooking/mybooking"}>
                                    <button type="button" className="btn btn-try " onClick={handlePayment}> {loading ? (
                                        "Loading..."
                                    ) : (
                                        " Try it free for 30 Days"
                                    )}</button>
                                </Link>
                                <p className="text-center"><Link href="#" className="code-promo">Have a code promo?</Link></p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Transaction
