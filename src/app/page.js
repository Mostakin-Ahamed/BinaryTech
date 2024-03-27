"use client"
import Image from "next/image";
// import banner1 from '@/assets/banner1.jpg';
// import banner2 from '@/assets/banner2.jpg';
// import banner3 from '@/assets/banner3.png';
import banner4 from '../assets/banner4.jpg';
import f1 from '../assets/f1.png';
import f2 from '../assets/f2.png';
import f3 from '../assets/f3.png';
import f4 from '../assets/f4.png';

import popular1 from '../assets/p1.png'
import popular2 from '../assets/p2.png'
import popular3 from '../assets/p3.png'
import popular4 from '../assets/p4.png'
import popular5 from '../assets/p5.png'
import popular6 from '../assets/p6.png'


const HomePage = () => {

  return (
    <div className=" mx-auto text-center">
      <div className=" ">
        <Image src={banner4} alt="banner.jpg"></Image>
      </div>
      <div className="w-10/12 mx-auto flex justify-evenly my-10">
        <a><Image src={f1} width={300} height={150} alt="feature.jpg"></Image></a>
        <a><Image src={f2} width={300} height={150} alt="feature.jpg"></Image></a>
        <a><Image src={f3} width={300} height={150} alt="feature.jpg"></Image></a>
        <a><Image src={f4} width={300} height={150} alt="feature.jpg"></Image></a>
      </div>
      <div className="mt-10">
        <div className=" text-center mb-16 ">
          <p className="font-semibold  text-xl">Featured <span className="text-blue-500"> Category</span> </p>
          <p className="font-sans ">Get Your Desired Product From Featured Category! </p>
        </div>
        <div className=" flex gap-2 justify-evenly  w-9/12 mx-auto ">
          <div className="card relative popular w-2/12 bg-base-100 ">
            <figure className="px-10 pt-10">
              <Image src={popular1} width={48} height={48} alt="feature.jpg"></Image>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Home Appliances</h2>
            </div>
          </div>
          <div className="card popular w-2/12 bg-base-100 ">
            <figure className="px-10 pt-10">
              <Image src={popular2} width={48} height={48} alt="feature.jpg"></Image>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Laptop</h2>
            </div>
          </div>
          <div className="card popular w-2/12 bg-base-100 ">
            <figure className="px-10 pt-10">
              <Image src={popular3} width={48} height={48} alt="feature.jpg"></Image>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">TV</h2>
            </div>
          </div>
          <div className="card popular w-2/12 bg-base-100 ">
            <figure className="px-10 pt-10">
              <Image src={popular4} width={48} height={48} alt="feature.jpg"></Image>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Mobile Phone</h2>
            </div>
          </div>
          <div className="card popular w-2/12 bg-base-100  ">
            <figure className="px-10 pt-10">
              <Image src={popular5} width={48} height={48} alt="feature.jpg"></Image>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Headphone</h2>
            </div>
          </div>
          <div className="card popular w-2/12 bg-base-100 ">
            <figure className="px-10 pt-10">
              <Image src={popular6} width={48} height={48} alt="feature.jpg"></Image>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Gaming Console</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Our Popular products  section*/}

      <div>
        <hr></hr>
        <div className=" text-center mb-16 ">
          <p className="font-semibold  text-xl">Our <span className="text-blue-500"> Popular </span> Products</p>
          <p className="font-sans ">Get Your Desired Product From Popular Category! </p>
        </div>
      </div>

    </div>
  );
};

export default HomePage;