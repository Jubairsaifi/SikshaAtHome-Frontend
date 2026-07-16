import React from "react";
import { useNavigate } from "react-router-dom";
import { FaCalendarAlt, FaUser, FaBookOpen, FaLightbulb, FaLaptop } from "react-icons/fa";

const Blog = () => {
  const navigate = useNavigate();

  const blogs = [
    {
      id: 1,
      title: "5 Proven Study Tips to Improve Academic Performance",
      author: "Riya Sharma",
      date: "September 25, 2025",
      img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
      excerpt:
        "Struggling to focus on studies? Here are 5 expert-backed techniques to improve concentration, time management, and memory retention.",
    },
    {
      id: 2,
      title: "Why 1-on-1 Learning Works Better Than Traditional Classrooms",
      author: "Karan Mehta",
      date: "October 1, 2025",
      img: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238",
      excerpt:
        "Discover how personalized attention and tailored teaching approaches help students achieve faster and deeper learning outcomes.",
    },
    {
      id: 3,
      title: "The Future of Online Education: What Parents Should Know",
      author: "Ananya Gupta",
      date: "October 3, 2025",
      img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf",
      excerpt:
        "Online tutoring is transforming education globally. Here’s how you can make the most of it for your child’s success.",
    },
    {
      id: 4,
      title: "Building Confidence in Children Through Positive Learning",
      author: "Arjun Nair",
      date: "October 4, 2025",
      img: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238",
      excerpt:
        "Confidence is key to success! Learn how our teaching methods build self-esteem and encourage curiosity in young minds.",
    },
    {
      id: 5,
      title: "Balancing Screen Time and Study Time Effectively",
      author: "Simran Kaur",
      date: "October 5, 2025",
      img: "https://images.unsplash.com/photo-1600185365929-1f27be1cde34",
      excerpt:
        "In today’s digital age, managing screen time is essential. Here’s how students can use technology smartly for learning.",
    },
    {
      id: 6,
      title: "How to Motivate Children to Study at Home",
      author: "Rahul Verma",
      date: "October 5, 2025",
      img: "https://images.unsplash.com/photo-1606761568499-6c1b9d09f8e8",
      excerpt:
        "Motivation drives success! Discover strategies to keep your child focused, inspired, and excited about learning every day.",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800 py-10">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Our Blog</h1>
        <p className="max-w-2xl mx-auto text-lg">
          Insights, tips, and stories from <span className="font-semibold">Siksha At Home</span> —
          empowering students and parents through education.
        </p>
      </section>

      {/* Introduction Section */}
      <section className="container mx-auto px-6 py-12 text-center">
        <h2 className="text-3xl font-bold text-sky-600 mb-4">Welcome to the Siksha Learning Blog</h2>
        <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Here, we share valuable insights, study tips, parenting advice, and success stories to help
          every learner and parent thrive in their educational journey. Whether you’re looking for
          effective study hacks, understanding online learning trends, or parenting wisdom — you’ll
          find it all here!
        </p>
      </section>

      {/* Featured Blog Section */}
      <section className="container mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col lg:flex-row items-center">
          <img
            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b"
            alt="Featured Blog"
            className="w-full lg:w-1/2 h-72 object-cover"
          />
          <div className="p-8 flex-1">
            <h2 className="text-2xl font-bold text-blue-700 mb-3">
              Featured: 5 Proven Study Tips to Improve Academic Performance
            </h2>
            <p className="text-gray-700 mb-4">
              A focused mind learns better! Explore how structured study plans, short breaks,
              and personalized learning methods can boost your child’s academic performance.
            </p>
            <button
              onClick={() => navigate(`/blog/1`)}
              className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition"
            >
              Read More →
            </button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-sky-600 mb-8">Explore Blog Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-100 rounded-xl shadow hover:shadow-md transition">
              <FaBookOpen className="text-blue-600 text-4xl mb-3 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Study Tips</h3>
              <p className="text-gray-600 text-sm">
                Learn how to plan studies effectively, manage time, and stay motivated.
              </p>
            </div>

            <div className="p-6 bg-gray-100 rounded-xl shadow hover:shadow-md transition">
              <FaLightbulb className="text-yellow-500 text-4xl mb-3 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Parenting Guidance</h3>
              <p className="text-gray-600 text-sm">
                Empower parents with tips to support their child’s education journey.
              </p>
            </div>

            <div className="p-6 bg-gray-100 rounded-xl shadow hover:shadow-md transition">
              <FaLaptop className="text-green-500 text-4xl mb-3 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Online Learning</h3>
              <p className="text-gray-600 text-sm">
                Discover how digital education and 1-on-1 classes shape modern learning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-sky-600 text-center mb-10">Latest Articles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
            >
              <img src={blog.img} alt={blog.title} className="w-full h-56 object-cover" />
              <div className="p-6">
                <h2
                  onClick={() => navigate(`/blog/${blog.id}`)}
                  className="text-xl font-semibold mb-2 text-blue-700 hover:text-blue-500 cursor-pointer"
                >
                  {blog.title}
                </h2>
                <div className="flex items-center text-sm text-gray-500 mb-3 gap-4">
                  <span className="flex items-center gap-1">
                    <FaUser /> {blog.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaCalendarAlt /> {blog.date}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-4">{blog.excerpt}</p>
                <button
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    navigate(`/blog/${blog.id}`);
                  }}
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-blue-600 text-white py-16 text-center">
        <h2 className="text-3xl font-semibold mb-4">Stay Updated!</h2>
        <p className="max-w-xl mx-auto mb-6">
          Subscribe to our newsletter to get the latest articles, tips, and education news
          directly in your inbox.
        </p>
        <form className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3 rounded-full text-gray-800 w-full sm:w-auto flex-1 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-white text-blue-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
          >
            Subscribe
          </button>
        </form>
      </section>
    </div>
  );
};

export default Blog;
