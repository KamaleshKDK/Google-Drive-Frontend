import React from 'react'

import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { useFormik } from 'formik';
import './login.css';
import { LinkOff } from '@material-ui/icons';

function Login() {
     let navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: async (values) => {
            try {
                let loginData = await axios.post("http://localhost:3000/login", values)
                window.localStorage.setItem("my_token", loginData.data.token)
                 navigate("/clone-heading")
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
                                    <h1 style={{ textAlign: "center" }} class="login-heading">Login</h1>

                                    {/* Form Validation */}
                                    <form onSubmit={formik.handleSubmit}>
                                        <div class="mb-3">
                                            <label class="mb-2 text-muted">E-Mail Address</label>
                                            <input  type="email"
                                                class="form-control"
                                                onChange={formik.handleChange}
                                                value={formik.values.email}
                                                name="email"
                                                required  />

                                            <div class="invalid-feedback">
                                                Email is invalid
                                            </div>
                                        </div>

                                        <div class="mb-3">
                                            <div class="mb-2 w-100">
                                                <label class="text-muted">Password</label>
                                                <Link  to={"/forgotpassword"} class="float-end">
                                                    Forgot Password?
                                                </Link>
                                            </div>
                                            <input type="password"
                                                onChange={formik.handleChange}
                                                value={formik.values.password}
                                                class="form-control"
                                                name="password" required />
                                            <div class="invalid-feedback">
                                                Password is required
                                            </div>
                                        </div>

                                        <div class="d-flex align-items-center">
                                            <div class="form-check">
                                                <input type="checkbox" name="remember" id="remember" class="form-check-input" />
                                                <label for="remember" class="form-check-label">Remember Me</label>
                                            </div>
                                            <button type="submit" class="btn btn-primary ms-auto">
                                                Login
                                            </button>
                                        </div>
                                    </form>

                                </div>
                                <div class="card-footer py-3 border-0">
                                    <div class="text-center">
                                        Don't have an account?  <Link to={"/register"}><a class="create-btn">Sign Up</a></Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </>

    )
}

export default Login
