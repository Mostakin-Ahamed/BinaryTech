"use client"
import Image from "next/image";
import image1 from "../../assets/registration.jpg"
import Link from "next/link";
import image2 from "../../assets/google.svg"
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";


const Register = () => {
    const { googleRegister, createUser, user } = useContext(AuthContext);
    console.log(user);
    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        const name = form.get('name');
        const photo = form.get('photoURL');
        const role = 'user'
        const userInfo = { email, role, name, photo }
        

        if (password.length < 6) {
            Swal.fire({
                title: 'Error!',
                text: 'Password must be 6 characters or longer!',
                icon: 'error',
                confirmButtonText: 'Cool'
            })
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            Swal.fire({
                title: 'Error!',
                text: 'Password must be 6 characters or longer!',
                icon: 'error',
                confirmButtonText: 'Cool'
            })
            return;
        }

        createUser(email, password)
            .then(result => {
                fetch('https://binary-tech-server.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userInfo)

                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.insertedId) {
                            Swal.fire({
                                title: 'Success!',
                                text: 'User created successfully!',
                                icon: 'success',
                                confirmButtonText: 'Cool'
                            })
                            updateProfile(result.user, {
                                displayName: name,
                                photoURL: photo
                            })
                                .then(() => console.log("profile updated"))
                                .catch()
                        }
                    })
            })

    }

    const handleGoogleRegister = e => {
        e.preventDefault();
        googleRegister();


    }

    return (
        <div className="mb-32 w-9/12 mx-auto">
            <div className="flex  justify-center " >
                <div className="flex  items-center  w-1/2 mx-auto">
                    <Image src={image1} alt="" width={600} height={600} />
                </div>
                <div className=" w-9/12 mt-10 mx-auto " >
                    <h2 className="text-3xl my-10 text-center">Please Register!</h2>
                    <form onSubmit={handleRegister} className="w-1/2 lg:w-1/2 md:3/4 mx-auto">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name="photoURL" placeholder="Photo URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register with email</button>
                        </div>
                    </form>
                    <div className="flex justify-center items-center gap-5  w-1/2 mx-auto mt-6">
                        <p className="text-lg">Register with google</p>
                        <button onClick={handleGoogleRegister} className="btn w-20 btn-ghost"><Image className="h-[25px]" src={image2} alt="" /></button>
                    </div>
                    <p className="text-center mt-5">Already have an account? <Link className="text-blue-900" href="/login">Login Here! </Link></p>

                </div>
            </div>
        </div>
    );
};

export default Register;