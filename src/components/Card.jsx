import React from 'react'

export default function Card({ title, description, imgSrc, index }) {
    return (
        <div
            className="card bg-base-100 dark:bg-[#161B22] w-full sm:w-96 shadow-sm">
            <figure>
                <img
                    src={imgSrc}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end mt-6">
                    <button className=" px-4 py-2 rounded-md bg-neutral-200 text-gray-800 hover:bg-neutral-300">Source Code</button>
                    <button className=" px-4 py-2 rounded-md  bg-blue-500 text-neutral-100 hover:bg-blue-600">View Live</button>
                </div>
            </div>
        </div>
    );
}
