import React from "react";
import { motion } from "framer-motion";
import { blogData } from "../data/blogData";

const BlogCard = ({ post, index }) => (
  <motion.article
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="bg-white rounded-2xl overflow-hidden shadow-lg hover-lift group"
  >
    <div className="relative overflow-hidden">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
      />
    </div>

    <div className="p-6">
      <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
        <span>{post.date}</span>
        <span>•</span>
        <span>{post.readTime}</span>
      </div>

      <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
        {post.title}
      </h3>

      <p className="text-gray-600 leading-relaxed mb-4">{post.excerpt}</p>

      <button className="text-primary-600 font-semibold hover:text-primary-700 transition-colors flex items-center gap-2 group">
        Read More
        <span className="transition-transform group-hover:translate-x-1">
          →
        </span>
      </button>
    </div>
  </motion.article>
);

const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Latest Articles
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Insights, tutorials, and thoughts on web development and design
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="border-2 border-primary-500 text-primary-500 px-8 py-4 rounded-full font-semibold hover:bg-primary-500 hover:text-white transition-all duration-300">
            View All Articles
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
