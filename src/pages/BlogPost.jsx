import React from 'react'
import { useParams } from 'react-router-dom'
import blogs from '../data/blogs'
import { motion } from 'framer-motion';

export default function BlogPost() {
    const { id } = useParams();
    console.log(id);

    const blog = blogs.find((b) => b.id === id)
    console.log(blog);


    if (!blog) {
        return <h1 className="text-xl text-red-500">Blog not found!</h1>;
    }
    return (
        <section className='p-4 sm:p-12 '>
            <motion.h1
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className='text-3xl font-bold mt-10 sm:mt-5 mb-10 dark:text-[#C9D1D9]'>{blog.title}</motion.h1>
            <div>
                {blog.content.map((item, index) =>
                    item.type === "text" ? (
                        <motion.p
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                            key={index} className='mb-4 font-light tracking-wide leading-relaxed dark:text-[#C9D1D9] '>{item.value}</motion.p>
                    )
                        : (
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                viewport={{ once: true }}
                            >
                                <img key={index} src={item.value} className='mb-4 mt-4 shadow-lg rounded-lg' alt="" />
                            </motion.div>
                        )
                )}
            </div>
        </section>
    )
}
