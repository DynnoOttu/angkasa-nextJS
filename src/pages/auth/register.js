import Image from "next/image"
import iconAuth from "../../assets/icon/iconauth.png"
import logo from "../../assets/images/logo.png"
import Link from 'next/link'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import { useState } from "react";
import axios from "axios";

function Register() {
    const url = process.env.NEXT_PUBLIC_BASE_URL;
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [agree, setAgree] = useState(false);
    const [loading, setLoading] = useState(false);
    const checkboxHandler = () => {
        setAgree(!agree);
    };
    const btnHandler = () => {
        alert("Accept terms and condition");
    };
    const formData = {
        email: email,
        name: name,
        password: password,
    };
    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const result = await axios.post(url + "/auth/register", formData, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const userRegister = result.data.data;
            toast.success("Register Success", { position: toast.POSITION.TOP_RIGHT });
            console.log("REGISTER SUCCESS");
            router.push("/auth/login");
            setLoading(false);
        } catch (error) {
            console.log("REGISTER FAILD");
            toast.error("Your email has been registered, please login", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: false,
            });
            toast(error.response.data);
            setLoading(false);
        }
    }
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
                                <h1 className="mb-5">Register</h1>
                                <form onSubmit={handleRegister}>
                                    <div className="mb-3 mt-3">
                                        <input type="text" className="form-control form" id="fullname" name="fullname" placeholder="Fullname" autoComplete="off" value={name} onChange={(e) => setName(e.target.value)} required />
                                    </div>
                                    <div className="mb-3">
                                        <input type="email" className="form-control form" id="emaill" name="emaill" placeholder="Email" autoComplete="none" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                    <div className="mb-3 mt-3">
                                        <input type="password" className="form-control form" id="password" name="password" placeholder="Password" autoComplete="off" value={password} onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                    <button type="submit" className="btn siginup mb-4 mt-4 text-center" style={{ backgroundColor: "#2395FF", color: "white" }} onClick={btnHandler}>{loading ? "Loading..." : " Sign Up"}</button>
                                    <div className="form-check mb-3">
                                        <label className="form-check-label">
                                            <input className="form-check-input remember" type="checkbox" name="remember" onChange={checkboxHandler} /> Accept terms and condition
                                        </label>
                                    </div>
                                </form>
                                <div className="border mt-5 mb-5"></div>
                                <div className="sigin">
                                    <p className="text-center mt-5 mb-2">Already have an account?</p>
                                    <Link href="/auth/login">
                                        <button type="submit" className="btn signin mb-4 mt-4 text-center" style={{ backgroundColor: "white", color: "#2395FF", borderColor: "#2395FF" }}>Sign In</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register
