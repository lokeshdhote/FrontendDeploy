import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { createProduct } from '../store/Actions/productAction';
import { toast } from 'react-toastify';

const CreateProduct = () => {
    const {data} = useSelector((state)=>state.productReducer)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    // Define individual state hooks for each form input
    const [price, setPrice] = useState('');
    const [title, setTitle] = useState('');
    const [rating, setRating] = useState('');
    const [categoryGender, setCategoryGender] = useState('');
    const [brand, setBrand] = useState('');
    const [description, setDescription] = useState('');
    const [specification, setSpecification] = useState('');
    const [availability, setAvailability] = useState('');
    const [category, setCategory] = useState('');
    const [img, setImg] = useState('');

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(createProduct({price,rating,title,brand,description,specification,availability,categoryGender,category,img}))
        navigate("/");
        toast.success("product created")
       
        
    };

    return (
        <div className='bg-emerald-700 py-[2vw] '>
        <form className="flex flex-col items-center gap-4 p-6 bg-white shadow-lg rounded-md max-w-lg mx-auto " onSubmit={handleSubmit}>
            <h2 className="text-2xl font-bold mb-4">Create a New Product</h2>
            
            <div className="w-full">
                <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price:</label>
                <input 
                    type="text" 
                    id="price" 
                    name="price" 
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
            </div>
            
            <div className="w-full">
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title:</label>
                <input 
                    type="text" 
                    id="title" 
                    name="title" 
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            
            <div className="w-full">
                <label htmlFor="rating" className="block text-sm font-medium text-gray-700">Rating:</label>
                <input 
                    type="text" 
                    id="rating" 
                    name="rating" 
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                />
            </div>
            
            <div className="w-full">
                <label htmlFor="categoryGender" className="block text-sm font-medium text-gray-700">Category Gender:</label>
                <input 
                    type="text" 
                    id="categoryGender" 
                    name="categoryGender" 
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    value={categoryGender}
                    onChange={(e) => setCategoryGender(e.target.value)}
                />
            </div>
            
            <div className="w-full">
                <label htmlFor="brand" className="block text-sm font-medium text-gray-700">Brand:</label>
                <input 
                    type="text" 
                    id="brand" 
                    name="brand" 
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                />
            </div>
            
            <div className="w-full">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description:</label>
                <textarea 
                    id="description" 
                    name="description" 
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            
            <div className="w-full">
                <label htmlFor="specification" className="block text-sm font-medium text-gray-700">Specification:</label>
                <textarea 
                    id="specification" 
                    name="specification" 
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    value={specification}
                    onChange={(e) => setSpecification(e.target.value)}
                />
            </div>
            
            <div className="w-full">
                <label htmlFor="availability" className="block text-sm font-medium text-gray-700">Availability:</label>
                <input 
                    type="text" 
                    id="availability" 
                    name="availability" 
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    value={availability}
                    onChange={(e) => setAvailability(e.target.value)}
                />
            </div>
            
            <div className="w-full">
                <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category:</label>
                <input 
                    type="text" 
                    id="category" 
                    name="category" 
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                />
            </div>
            
            <div className="w-full">
                <label htmlFor="img" className="block text-sm font-medium text-gray-700">Upload Image Link:</label>
                <input 
                    type="url" 
                    id="img" 
                    name="img" 
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    value={img}
                    onChange={(e) => setImg(e.target.value)}
                />
            </div>
            
            <div className="w-full flex justify-center mt-4">
                <button 
                    type="submit" 
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                    Submit
                </button>
            </div>
        </form>
        </div>
    );
};

export default CreateProduct;
