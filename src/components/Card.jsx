import React from 'react'

export default function Card({ title, description, imgSrc, index }) {
    return (
        <div
            className="card bg-base-100 w-full sm:w-96 shadow-sm">
            <figure>
                <img
                    src={imgSrc}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end mt-6">
                    <button className="btn bg-neutral-100 text-gray-800 hover:bg-neutral-200">Source Code</button>
                    <button className="btn bg-blue-500 text-neutral-100 hover:bg-blue-600">View Live</button>
                </div>
            </div>
        </div>
    );
}
