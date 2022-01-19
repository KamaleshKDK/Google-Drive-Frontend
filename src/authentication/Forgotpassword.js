import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { useFormik } from 'formik';


function Forgotpassword() {
    let navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            password: ''
        },
        onSubmit: async (values) => {
            try {
                let loginData = await axios.post("http://localhost:3000/login", values)
                window.localStorage.setItem("my_token", loginData.data.token)
                navigate("/")
            } catch (error) {
                console.log(error)
            }
        },
    });
    return (

        <>
            <section class="h-100">
                <div class="container h-100">
                    <div class="row justify-content-sm-center h-100">
                        <div class="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
                            <div class="text-center my-5">
                            </div>
                            <div class="card shadow-lg">
                                <div class="card-body p-5">
                                    <h1 style={{ textAlign: "center" }} class="login-heading">Forgot Password</h1>

                                    {/* Form Validation */}
                                    <form onSubmit={formik.handleSubmit}>
                                        <div class="mb-3">
                                            <label class="mb-2 text-muted">New Password</label>
                                            <input type="email" placeholder='Enter a new password'
                                                class="form-control"
                                                onChange={formik.handleChange}
                                                value={formik.values.email}
                                                name="email"
                                                required />
                                        </div>

                                        <div class="d-flex align-items-center">

                                            <button type="submit" class="btn btn-primary ms-auto">
                                                Login
                                            </button>
                                        </div>
                                    </form>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </>

    )
}

export default Forgotpassword;
