import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import blogs from "../data/blogs";


export default function Blog() {
  return (
    <section className="flex flex-col items-center px-4 py-12 sm:px-12">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-blue-400">My Blog</h1>
        <p className="text-lg text-gray-600 mt-2 dark:text-[#C9D1D9]">Sharing knowledge and insights on web development.</p>
      </motion.div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {blogs.map((blog, index) => (
          <motion.div
            key={blog.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            className="card card-side bg-base-100 shadow-sm dark:bg-[#161B22] dark:text-[#C9D1D9]">
            <div className="card-body">
              <h2 className="card-title mb-4">{blog.title}</h2>
              <p>{blog.description}</p>
              <div className="card-actions justify-end mt-4 items-center">
                <p className="text-xs text-gray-500 dark:text-[#8B949E]">{blog.date}</p>
                <Link to={`/blog/${blog.id}`} className="btn btn-soft bg-blue-500 text-neutral-100 hover:bg-blue-600">Read More</Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Pagination (Optional) */}
      <div className="mt-12">
        <button className="px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-100">Previous</button>
        <span className="mx-4 text-gray-500">1 of 5</span>
        <button className="px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-100">Next</button>
      </div>
    </section>
  );
}
