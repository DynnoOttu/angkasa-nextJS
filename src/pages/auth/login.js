import Image from "next/image"
import iconAuth from "../../assets/icon/iconauth.png"
import logo from "../../assets/images/logo.png"
import Link from 'next/link'
import { useState } from "react"
import { useRouter } from "next/router";
import { useCookies } from "react-cookie"
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios"

function Login() {
    const router = useRouter();
    const [cookies, setCookie, removeCookie] = useCookies(["user"]);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const notify = () => toast("Loading....");
    const formData = {
        email: email,
        password: password,
    };
    const handleLogin = async (e) => {
        e.preventDefault();
        await axios
            .post(process.env.NEXT_PUBLIC_BASE_URL + "/auth/login", formData, {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((res) => {
                toast.success("Login Success", { position: toast.POSITION.TOP_RIGHT });
                setLoading(false);
                setCookie("token", res.data.data.token, {
                    path: "/",
                });
                setCookie("email", res.data.data.email, {
                    path: "/",
                });
                setCookie("id", res.data.data.id, {
                    path: "/",
                });
                router.push("/findticket/findticket");
            })
            .catch((err) => {
                console.log(err);
                console.log("LOGIN FAILD");
                toast.error("LOGIN FILED", {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: false,
                });
                setLoading(false);
            });
    };

    return (
        <>
            <div className="page">
                <div className="row page-row">
                    <div className="col-sm-6 left-auth">
                        <Image src={iconAuth} alt="icon auth" className="rounded mx-auto d-block img-auth mt-5" />
                    </div>
                    <div className="col-sm-6 right-auth">
                        <div className="contentRight">
                            <div className="imageLogo">
                                <Image src={logo} alt="logo" />
                                <p>Angkasa</p>
                            </div>
                            <div className="form-input">
                                <h1 className="mb-5">Login</h1>
                                <form onSubmit={handleLogin}>
                                    <div className="mb-3">
                                        <input value={email}
                                            onChange={(e) => setEmail(e.target.value)} type="email" className="form-control form" id="emaill" placeholder="Email" autoComplete="none" />
                                    </div>
                                    <div className="mb-3 mt-3">
                                        <input value={password}
                                            onChange={(e) => setPassword(e.target.value)} type="password" className="form-control form" id="fullname" placeholder="Password" autoComplete="off" required />
                                    </div>
                                    <button
                                        onClick={notify} type="submit" className="btn siginup mb-4 mt-4 text-center" style={{ backgroundColor: "#2395FF", color: "white" }}>{loading ? "Loading..." : "Sign In"}</button>
                                </form>
                                <p className="text-center mt-5 mb-2 didyou">Did you forgot your password?</p>
                                <Link href="./forgotpassword" className="text-center tab-reset">Tap here for reset</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
