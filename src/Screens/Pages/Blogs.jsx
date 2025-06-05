import React, { useEffect, useState } from "react";
import blogImage from "../../assets/blog2.png"; // Adjust path if needed

const Offshore365Blog = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Initialize AOS animation library
    const initAOS = () => {
      const elements = document.querySelectorAll("[data-aos]");
      elements.forEach((el, index) => {
        setTimeout(() => {
          el.classList.add("aos-animate");
        }, index * 100);
      });
    };

    initAOS();
  }, []);

  const blogPosts = [
    {
      id: 1,
      category: "Productivity",
      title:
        "Unlocking Global Potential: How Strategic Offshoring with Offshore 365 Empowers Your Business",
      description:
        "Unlocking Global Growth: Strategic Offshoring for the AEC Industry.",
      image: blogImage,
      readTime: "2 minutes",
    },
    {
      id: 2,
      category: "Product",
      title:
        "Unlocking Global Potential: How Strategic Offshoring with Offshore 365 Empowers Your Business",
      description:
        "Unlocking Global Growth: Strategic Offshoring for the AEC Industry.",
      image: blogImage,
      readTime: "5 minutes",
    },
    {
      id: 3,
      category: "Product",
      title:
        "Unlocking Global Potential: How Strategic Offshoring with Offshore 365 Empowers Your Business",
      description:
        "Unlocking Global Growth: Strategic Offshoring for the AEC Industry.",
      image: blogImage,
      readTime: "8 minutes",
    },
    {
      id: 4,
      category: "Productivity",
      title:
        "Unlocking Global Potential: How Strategic Offshoring with Offshore 365 Empowers Your Business",
      description:
        "Unlocking Global Growth: Strategic Offshoring for the AEC Industry.",
      image: blogImage,
      readTime: "7 minutes",
    },
    {
      id: 5,
      category: "Productivity",
      title:
        "Unlocking Global Potential: How Strategic Offshoring with Offshore 365 Empowers Your Business",
      description:
        "Unlocking Global Growth: Strategic Offshoring for the AEC Industry.",
      image: blogImage,
      readTime: "6 minutes",
    },
    {
      id: 6,
      category: "Product",
      title:
        "Unlocking Global Potential: How Strategic Offshoring with Offshore 365 Empowers Your Business",
      description:
        "Unlocking Global Growth: Strategic Offshoring for the AEC Industry.",
      image: blogImage,
      readTime: "5 minutes",
    },
    {
      id: 7,
      category: "Productivity",
      title:
        "Unlocking Global Potential: How Strategic Offshoring with Offshore 365 Empowers Your Business",
      description:
        "Unlocking Global Growth: Strategic Offshoring for the AEC Industry.",
      image: blogImage,
      readTime: "10 minutes",
    },
    {
      id: 8,
      category: "Productivity",
      title:
        "Unlocking Global Potential: How Strategic Offshoring with Offshore 365 Empowers Your Business",
      description:
        "Unlocking Global Growth: Strategic Offshoring for the AEC Industry.",
      image: blogImage,
      readTime: "12 minutes",
    },
    {
      id: 9,
      category: "Product",
      title:
        "Unlocking Global Potential: How Strategic Offshoring with Offshore 365 Empowers Your Business",
      description:
        "Unlocking Global Growth: Strategic Offshoring for the AEC Industry.",
      image: blogImage,
      readTime: "9 minutes",
    },
  ];

  const topArticles = [
    {
      id: 1,
      category: "Product",
      title:
        "How does Offshore 365 work? (Everything you need to know to start scheduling)",
      description:
        "Learn how Offshore 365 makes scheduling simple in just a few steps.",
      image: "/api/placeholder/400/300", // Kept as is since requirement specifies blog posts
      readTime: "6 minutes",
      featured: true,
    },
    {
      id: 2,
      category: "Productivity",
      title: "How to find a meeting time that works for everyone",
      readTime: "6 minutes",
    },
    {
      id: 3,
      category: "Product",
      title: "Book more meetings with Offshore 365 + LinkedIn",
      readTime: "5 minutes",
    },
    {
      id: 4,
      category: "Product",
      title: "How to get the most from your free Offshore 365 plan",
      readTime: "8 minutes",
    },
  ];

  const summarizedBlogContent = {
    title:
      "Unlocking Global Potential: How Strategic Offshoring with Offshore 365 Empowers Your Business",
    image: blogImage,
    summary: `
      Strategic offshoring with Offshore 365 empowers AEC businesses by providing access to specialized global talent, enhancing scalability, and boosting productivity. By leveraging time zone differences, Offshore 365 enables a 24/7 work cycle, ensuring faster project turnaround. It allows in-house teams to focus on core tasks like strategic planning, while offshore teams handle technical tasks, improving efficiency and innovation. Cost savings are achieved without compromising quality, fostering true collaboration through trust and seamless communication.
    `,
    cta: "Ready to transform your AEC business? Contact Offshore 365 for a consultation.",
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen ">
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-xl max-w-2xl w-full mx-4 p-6 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-[#0d3557] hover:text-[#0a2a44]"
            >
              <svg
                className="w-6 h-6"
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
            <img
              src={summarizedBlogContent.image}
              alt={summarizedBlogContent.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold text-[#0d3557] mb-4">
              {summarizedBlogContent.title}
            </h2>
            <p className="text-[#0d3557] mb-6">
              {summarizedBlogContent.summary}
            </p>
            <p className="text-[#0d3557] regular">
              {summarizedBlogContent.cta}
            </p>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <section
          className="py-16 min-h-screen px-4 sm:px-6 md:px-12 lg:px-24 relative overflow-hidden"
          data-aos="fade-up"
        >
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12 relative z-10">

            {/* Left Content - Blog Info */}
            <div>
              <div className="inline-block bg-blue-100 rounded-full px-3 py-1 mb-6 sm:mb-8">
                <span className="text-blue-600  text-sm regular">
                  Blogs
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-6 sm:mb-8 text-[#0d3557]">
                Insights & Innovations:  Through Our Expert Blogs
              </h1>

              <p className="text-[20px] sm:text-lg md:text-xl mb-8 sm:mb-12 opacity-80 leading-relaxed text-[#0d3557]">
                Stay updated with insights, strategies, and real-world solutions
                from Offshore 365's expert blog. Discover how our global AEC
                support teams drive sustainable growth and seamless project
                execution.
              </p>
              <button className="bg-[#006bff] regular hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Explore the Blog
              </button>
              <p className="mt-16 text-sm sm:text-base md:text-lg text-[#0d3557]">
                Trusted by global AEC leaders—from agile design studios to
                mega-construction firms.
              </p>
            </div>

            {/* Right Side - Image */}
            <div className="relative mx-auto w-full max-w-md">
              <img
                src={blogImage}
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </section>

        {/* Latest Articles Section */}
        <section className="mb-16" data-aos="fade-up">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl text-[#0d3557] font-extrabold leading-tight mb-2 sm:mb-8">
              Latest Articles
            </h1>
            <p className="text-lg text-[#0d3557] mb-8">
              Looking for something specific? Check out the filters below!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={post.id}
                className="bg-white rounded-xl p-[5px] border border-gray-200 hover:shadow-lg transition-shadow duration-300 overflow-hidden group cursor-pointer"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-[500px] object-cover rounded-lg"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d3557cc] to-transparent flex flex-col justify-end p-4 transition-all">
                    <h3 className="text-[20px] text-white mb-2 group-hover:text-[#cbd5e1] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-[14px] text-white mb-4 line-clamp-2">
                      {post.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <button
                        onClick={openModal}
                        className="text-white text-[14px] hover:text-[#e2e8f0] flex items-center"
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
                      <span className="text-xs text-white">
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

        </section>
      </main>

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

        [data-aos="fade-up"].aos-animate {
          transform: translateY(0);
        }

        [data-aos="fade-right"].aos-animate {
          transform: translateX(0);
        }

        [data-aos="fade-left"].aos-animate {
          transform: translateX(0);
        }

        [data-aos="fade-right"] {
          transform: translateX(-30px);
        }

        [data-aos="fade-left"] {
          transform: translateX(30px);
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

export default Offshore365Blog;
