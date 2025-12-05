import React from "react";
import { motion } from "framer-motion";
import {
  FiClock,
  FiCalendar,
  FiArrowRight,
  FiBookOpen,
  FiTag,
  FiEye,
  FiHeart,
  FiShare2,
} from "react-icons/fi";
import { blogData } from "../data/blogData";

const Blog = () => {
  const BlogCard = ({ post, index }) => (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        type: "spring",
        stiffness: 100,
      }}
      viewport={{ once: true, margin: "-50px" }}
      className="group relative h-full"
    >
      {/* Card background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-3xl border border-gray-100 group-hover:border-blue-200 transition-all duration-500"></div>

      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Image container */}
      <div className="relative overflow-hidden rounded-t-3xl">
        <div className="relative h-56 md:h-64 overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          {/* Category badge */}
          <div className="absolute top-4 left-4 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-gray-800">
            {post.category}
          </div>

          {/* Read time */}
          <div className="absolute top-4 right-4 px-3 py-1.5 bg-black/70 backdrop-blur-sm rounded-full text-sm text-white flex items-center gap-1">
            <FiClock className="text-xs" />
            {post.readTime}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative p-6 md:p-8">
        {/* Date */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
          <FiCalendar className="text-gray-400" />
          <span>{post.date}</span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-950 transition-colors duration-300 line-clamp-2">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {post.tags?.slice(0, 2).map((tag, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full flex items-center gap-1"
            >
              <FiTag className="text-xs" />
              {tag}
            </span>
          ))}
          {post.tags?.length > 2 && (
            <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
              +{post.tags.length - 2} more
            </span>
          )}
        </div>

        {/* Stats and CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          {/* Stats */}
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <FiEye className="text-gray-400" />
              <span>{post.views || "1.2k"}</span>
            </div>
            <div className="flex items-center gap-1">
              <FiHeart className="text-gray-400" />
              <span>{post.likes || "48"}</span>
            </div>
          </div>

          {/* Read More */}
          <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300 flex items-center gap-2 group">
            Read Article
            <FiArrowRight className="transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Share button */}
        <button className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2 bg-white rounded-full shadow-sm hover:shadow-md">
          <FiShare2 className="text-gray-600" />
        </button>

        {/* Glow effect */}
        <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 blur-xl"></div>
      </div>
    </motion.article>
  );

  return (
    <section
      id="blog"
      className="relative py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/20 via-transparent to-transparent"></div>

      {/* Floating elements */}
      <motion.div
        className="absolute top-20 left-10 w-3 h-3 bg-blue-400/20 rounded-full"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-32 right-10 w-4 h-4 bg-cyan-400/20 rounded-full"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 border border-blue-200 mb-4">
            <FiBookOpen className="text-blue-600" />
            <span className="text-sm font-medium text-gray-700">
              Blog & Articles
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Latest{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Insights
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            Sharing knowledge, tutorials, and thoughts on modern web development
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {blogData.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>

        {/* Featured Article */}
        {blogData.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16 md:mt-20"
          >
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl overflow-hidden border border-blue-100">
              <div className="flex flex-col lg:flex-row">
                {/* Image */}
                <div className="lg:w-2/5 relative">
                  <div className="h-64 lg:h-full">
                    <img
                      src={blogData[0].image}
                      alt={blogData[0].title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-500/20"></div>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-3/5 p-8 md:p-12">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white mb-4">
                    <span className="text-blue-600 font-semibold">
                      Featured Article
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {blogData[0].title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {blogData[0].excerpt}
                  </p>
                  <div className="flex flex-wrap gap-4 items-center">
                    <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300">
                      Read Full Article
                      <FiArrowRight className="text-lg" />
                    </button>
                    <div className="text-sm text-gray-500">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <FiEye />
                          {blogData[0].views || "2.5k"} views
                        </span>
                        <span className="flex items-center gap-1">
                          <FiHeart />
                          {blogData[0].likes || "124"} likes
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-6">
            Want to read more about web development, design, and tech?
          </p>
          <button className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
            <FiBookOpen className="text-lg" />
            View All Articles
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
