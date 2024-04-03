import React from 'react';

const page = () => {
    return (
        <div className='w-9/12 mx-auto mt-10'>
            <div >
                <p className="font-semibold text-center text-xl">Add A New <span className="text-blue-500"> Product </span> </p>
            </div>
            <div>
            <form className="w-1/2 lg:w-1/2 md:3/4 mx-auto mt-10">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Product Name</span>
                    </label>
                    <input type="text" name="productName" placeholder="Tour name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Product Category</span>
                    </label>
                    <select name="brandName" className="select select-bordered w-full form-control" required>
                        <option disabled selected>Select Category</option>
                        <option>MotherBoard</option>
                        <option>CPU</option>
                        <option>RAM</option>
                        <option>Graphics Card</option>
                        <option>PSU</option>
                        <option>UPS</option>
                        <option>Casing</option>
                    </select>
                </div>


                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Image URL</span>
                    </label>
                    <input type="text" name="imageURL" placeholder="Image URL" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price </span>
                    </label>
                    <input type="number" name="price" placeholder="Price" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Short Description</span>
                    </label>
                    <textarea name="details" placeholder="Details" className="textarea textarea-bordered textarea-lg w-full " required ></textarea>
                </div>
                {/* <div className="form-control">
                    <label className="label">
                        <span className="label-text"></span>
                    </label>
                    <input type="number" name="hours" placeholder="Duration Hours" className="input input-bordered" required />
                </div> */}
                <div className="form-control mt-6">
                    <button className="btn btn-primary bg-blue-700">Add Product</button>
                </div>
            </form>
            </div>
        </div>
    );
};

export default page;