import Image from "next/image"
import iconAuth from "../../assets/icon/iconauth.png"
import logo from "../../assets/images/logo.png"

function ForgotPassword() {
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
                                <h1 className="mb-5">Forgot Password</h1>
                                <form>
                                    <div className="mb-3">
                                        <input type="email" className="form-control form" id="emaill" name="emaill" placeholder="Email" autoComplete="none" />
                                    </div>
                                    <button type="submit" className="btn siginup mb-4 mt-4 text-center" style={{ backgroundColor: "#2395FF", color: "white" }}>Send</button>
                                </form>
                                <p className="text-center mt-5 mb-2 didyou">You’ll get message soon on your email</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ForgotPassword
