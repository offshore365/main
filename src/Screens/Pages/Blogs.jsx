import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { blogsData } from "./blogs";
import blogImage from "../../assets/blogs4.png"; // Replace with your actual image path

const BlogCard = ({ post, onClick }) => (
  <article
    className="bg-white rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group cursor-pointer"
    data-aos="fade-up"
  >
    <div className="relative overflow-hidden rounded-3xl">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-[450px] object-cover rounded-3xl"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex flex-col justify-end p-5">
        <h3 className="text-xl text-white font-semibold group-hover:text-slate-200 transition-colors">
          {post.title}
        </h3>
        <p className="text-sm text-white mt-2 mb-4 opacity-90 line-clamp-2">
          {post.description}
        </p>
        <div className="flex items-center justify-between">
          <button
            onClick={onClick}
            className="text-white text-sm regular hover:text-slate-100 flex items-center"
          >
            Read now
            <svg
              className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
          <span className="text-xs text-white regular opacity-90">
            {post.readTime}
          </span>
        </div>
      </div>
    </div>
  </article>
);

const Blogs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    const elements = document.querySelectorAll("[data-aos]");
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add("aos-animate");
      }, index * 100);
    });
  }, []);

  const openModal = (post) => {
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPost(null);
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="py-16 min-h-screen px-4 sm:px-6 md:px-12 lg:px-24 relative overflow-hidden"
        data-aos="fade-up"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12 relative z-10">
          {/* Left Content */}
          <div>
            <div className="inline-block bg-blue-100 rounded-full px-3 py-1 mb-6 sm:mb-8">
              <span className="text-blue-600 regular text-sm">Blogs</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-6 sm:mb-8 text-[#0d3557]">
              Insights & Innovations: Through Our Expert Blogs
            </h1>
            <p className="text-[20px] sm:text-lg md:text-xl mb-8 sm:mb-12 opacity-80 leading-relaxed text-[#0d3557]">
              Stay updated with insights, strategies, and real-world solutions
              from Offshore 365's expert blog. Discover how our global AEC
              support teams drive sustainable growth and seamless project
              execution.
            </p>
          <button
  onClick={() => {
    const section = document.getElementById("blog");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }}
  className="bg-[#006bff] regular hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
  Explore the Blog
</button>

            <p className="mt-16 text-sm sm:text-base md:text-lg text-[#0d3557]">
              Trusted by global AEC leaders—from agile design studios to
              mega-construction firms.
            </p>
          </div>

          {/* Right Image */}
          <div className="relative mx-auto w-full max-w-md">
            <img
              src={blogImage}
              className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              alt="Blog Hero"
            />
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && selectedPost && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-3xl max-w-3xl w-full mx-4 p-6 md:p-10 relative max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-100"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-[#0d3557] hover:text-[#0a2a44] bg-slate-100 hover:bg-slate-200 p-1.5 rounded-full"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <div className="space-y-6">
                <img
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  className="w-full h-64 object-cover rounded-xl"
                />
                <h2 className="text-2xl font-bold text-[#0d3557]">
                  {selectedPost.title}
                </h2>
                <p className="text-[#334155] text-[15px] leading-relaxed whitespace-pre-line">
                  {selectedPost.fullDescription}
                </p>
               
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Blog Grid Section */}
      <main className="max-w-7xl mx-auto px-6 lg:px-8 py-16"  id="blog">

        <section className="mb-16" data-aos="fade-up">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl text-[#0d3557] font-extrabold leading-tight mb-4">
              Latest Articles
            </h1>
            <p className="text-lg text-[#475569] max-w-2xl mx-auto">
              Browse through our latest insights and innovations crafted by
              industry experts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogsData.map((post) => (
              <BlogCard
                key={post.id}
                post={post}
                onClick={() => openModal(post)}
              />
            ))}
          </div>
        </section>
      </main>

      {/* Inline AOS + Clamp CSS */}
      <style jsx>{`
        [data-aos] {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s ease;
        }

        [data-aos].aos-animate {
          opacity: 1;
          transform: translateY(0);
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Blogs;
