"use client"
import Image from "next/image";
import image1 from "../../assets/loginpage.jpg"
import image2 from "../../assets/google.svg";
import Link from "next/link";
import { signIn } from 'next-auth/react'
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useRouter } from 'next/navigation';






const Login = () => {

    const { signIn, googleSignIn } = useContext(AuthContext)
    const router = useRouter();
    const handleNavigation = () => {

        router.push('/');
      };
    

    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email=form.get('email')
        const password=form.get('password');

        signIn(email, password)
        .then(result =>{
            console.log(result);
            Swal.fire({
                title: 'Success!',
                text: 'Logged in successfully!',
                icon: 'success',
                confirmButtonText: 'Cool'
                
                
              })
              router.push('/');
              
        })
        .catch(error=>{
            // toast.error(error.message);
            console.log(error.message);
            Swal.fire({
                title: 'Error!',
                text: error.message,
                icon: 'error',
                confirmButtonText: 'Cool'
              })
        })
    }

    const handleGoogleLogIn = e => {
        e.preventDefault();
        googleSignIn();
        router.push('/');
        console.log('Logged in successfully');
    }

    return (
        <div className="mb-28 w-9/12 mx-auto">
            <div className="flex justify-center  ">
                <div className="w-1/2 mx-auto ">
                    <Image src={image1} alt="" height={600} width={600} />
                </div>
                <div className=" w-9/12 mt-20 mx-auto">
                    <h2 className="text-3xl my-10 text-center">Please Login!</h2>
                    <form onSubmit={handleLogin} className="w-1/2 lg:w-full md:3/4 mx-auto">
                        <div className="form-control w-1/2 mx-auto mt-6 flex justify-center">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control w-1/2 mx-auto mt-6 flex justify-center">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control w-1/2 mx-auto mt-6 flex justify-center">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <div className="flex justify-center items-center gap-5  w-1/2 mx-auto mt-6">
                        <p className="text-lg">Login with google</p>
                        <button onClick={handleGoogleLogIn} className="btn w-20 btn-ghost"><Image className="h-[25px]" src={image2} alt="" /> </button>
                    </div>
                    <p className="text-center mt-5">Do not have an account? <Link className="text-blue-900" href="/register">Register Here! </Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;  