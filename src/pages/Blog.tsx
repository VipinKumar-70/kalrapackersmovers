import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight, Clock, Tag, Plus, X } from "lucide-react";

const categories = [
  "All Posts",
  "Moving Tips",
  "Packing Guide",
  "Business Moving",
  "Insurance",
  "Planning",
  "International",
];

const initialPosts = [
  {
    id: 1,
    title: "10 Essential Tips for a Stress-Free Home Move",
    excerpt:
      "Moving homes can be overwhelming, but with proper planning and the right approach, you can make it a smooth experience. Here are our top tips...",
    content:
      "Moving homes can be overwhelming, but with proper planning and the right approach, you can make it a smooth experience. Here are our top tips for a stress-free move: 1. Start early and create a checklist. 2. Declutter before packing. 3. Label boxes clearly. 4. Hire professional movers. 5. Pack an essentials box. 6. Notify important contacts of your move. 7. Take care of utilities. 8. Protect fragile items. 9. Keep important documents handy. 10. Stay positive and flexible throughout the process.",
    author: "Kalra Team",
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "Moving Tips",
    featured: true,
  },
  {
    id: 2,
    title: "How to Choose Your Home According to Vastu Shastra",
    excerpt:
      "Moving to a new home marks a fresh beginning. This guide explains how Vastu Shastra can help you choose a house that brings peace, prosperity, and positive energy.",
    content:
      "Moving to a new home is more than shifting boxes; it is a transition into a new phase of life. This blog explains how Vastu Shastra helps you select a home that supports health, wealth, and happiness, along with practical tips for entrances, kitchens, bedrooms, and moving day rituals.",
    author: "Kalra Team",
    date: "March 20, 2024",
    readTime: "6 min read",
    category: "Vastu & Moving Tips",
    featured: false,
  },
  {
    id: 3,
    title:
      "How to Place Items According to Vastu: The Art of Positive Arrangement",
    excerpt:
      "Unpacking randomly can disturb energy flow. Learn how correct furniture and item placement according to Vastu Shastra can improve health, sleep, and harmony in your new home.",
    content:
      "After moving into a new home, correct placement of furniture and household items is crucial. This guide explains room-by-room Vastu principles for living rooms, bedrooms, kitchens, and handling negative items to maintain positive energy.",
    author: "Kalra Team",
    date: "March 22, 2024",
    readTime: "6 min read",
    category: "Vastu & Moving Tips",
    featured: false,
  },
  {
    id: 4,
    title: "Understanding Moving Insurance: What You Need to Know",
    excerpt:
      "Protect your belongings during the move with the right insurance coverage. Learn about different types of coverage and what's included...",
    content:
      "Moving insurance provides peace of mind during your relocation. There are different types: basic carrier liability, declared value protection, and full value protection. Review your policy, understand what’s covered, and consider purchasing additional coverage for valuable items.",
    author: "Insurance Advisor",
    date: "February 28, 2024",
    readTime: "6 min read",
    category: "Insurance",
  },
  {
    id: 5,
    title: "Seasonal Moving: Best Times to Relocate",
    excerpt:
      "Timing your move can significantly impact cost and convenience. Discover the best seasons for moving and how to plan accordingly...",
    content:
      "The best time to move is typically during the off-peak seasons, such as fall or winter, when moving companies offer lower rates and greater availability. Avoid summer and month-end dates if possible. Plan ahead and book your movers early for the best experience.",
    author: "Moving Consultant",
    date: "February 20, 2024",
    readTime: "4 min read",
    category: "Planning",
  },
  {
    id: 6,
    title: "International Moving: A Complete Guide",
    excerpt:
      "Moving abroad involves unique challenges and requirements. Our guide covers everything from documentation to customs clearance...",
    content:
      "International moving requires careful planning. Research visa requirements, customs regulations, and shipping options. Hire a reputable international mover, prepare your documents, and create an inventory of your belongings. Consider insurance and plan for arrival logistics.",
    author: "International Team",
    date: "February 15, 2024",
    readTime: "12 min read",
    category: "International",
  },
  // New Moving Tips Blog Post Example
  {
    id: 7,
    title: "Moving Tips: How to Organize Your Move Efficiently",
    excerpt:
      "Organization is key to a successful move. Start by creating a checklist, labeling boxes, and scheduling tasks ahead of time. These simple steps can save you time and reduce stress...",
    content:
      "To organize your move efficiently, begin by drafting a detailed checklist of all tasks. Label boxes by room and contents, and schedule tasks such as packing, cleaning, and utility transfers ahead of time. Use color-coded labels for quick identification. Keep important documents and valuables in a separate, easily accessible box. Regularly review your checklist to stay on track and adjust as needed. These steps will help you save time and minimize stress throughout your move.",
    author: "Swift Shift Team",
    date: "April 2, 2024",
    readTime: "6 min read",
    category: "Moving Tips",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const Blog = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [blogPosts, setBlogPosts] = useState(initialPosts);
  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
    author: "",
    category: categories[1],
  });

  const filteredPosts =
    selectedCategory === "All Posts"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  const handleAddBlog = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPost.title || !newPost.content || !newPost.author) return;
    setBlogPosts([
      {
        id: blogPosts.length + 1,
        title: newPost.title,
        excerpt: newPost.content.slice(0, 100) + "...",
        content: newPost.content,
        author: newPost.author,
        date: new Date().toLocaleDateString(),
        readTime: "3 min read",
        category: newPost.category,
      },
      ...blogPosts,
    ]);
    setShowModal(false);
    setNewPost({ title: "", content: "", author: "", category: categories[1] });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div {...fadeInUp}>
            <h1 className="text-5xl font-bold mb-6">Moving Blog</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Expert advice, tips, and insights to make your moving experience
              smooth and stress-free. Learn from the professionals who know
              moving best.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <motion.div {...fadeInUp} className="lg:col-span-1">
              <Card className="bg-[#f1f2f6] mb-8">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-foreground">
                    Categories
                  </h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
                          selectedCategory === category
                            ? "bg-primary text-primary-foreground text-white"
                            : "text-muted-foreground hover:bg-[#ffffff] hover:text-foreground"
                        }`}
                        onClick={() => setSelectedCategory(category)}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-[#f1f2f6]">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-foreground">
                    Subscribe
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Get the latest moving tips and updates delivered to your
                    inbox.
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full p-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <Button className="w-full bg-gradient-primary text-white">
                      Subscribe
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Blog Posts */}
            <div className="lg:col-span-3">
              {/* Featured Post */}
              {filteredPosts
                .filter((post) => post.featured)
                .map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="mb-12"
                  >
                    <Card className="bg-[#f1f2f6] hover:shadow-lg transition-all duration-300 overflow-hidden">
                      <CardContent className="p-0">
                        <div className="bg-gradient-primary text-white p-6">
                          <div className="flex items-center space-x-2 mb-3">
                            <Tag className="h-4 w-4" />
                            <span className="text-sm">Featured Post</span>
                          </div>
                          <h2 className="text-3xl font-bold mb-4">
                            {post.title}
                          </h2>
                          <p className="text-blue-100 mb-4 leading-relaxed">
                            {post.excerpt}
                          </p>
                          <div className="flex items-center space-x-6 text-sm text-blue-100">
                            <div className="flex items-center space-x-2">
                              <User className="h-4 w-4" />
                              <span>{post.author}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Calendar className="h-4 w-4" />
                              <span>{post.date}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Clock className="h-4 w-4" />
                              <span>{post.readTime}</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}

              {/* Regular Posts Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredPosts
                  .filter((post) => !post.featured)
                  .map((post, index) => (
                    <motion.div
                      key={post.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <Card className="h-full bg-[#f1f2f6] hover:shadow-lg transition-all duration-300 group">
                        <CardContent className="p-6">
                          <div className="flex items-center space-x-2 mb-3">
                            <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">
                              {post.category}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                            {post.title}
                          </h3>
                          <p className="text-muted-foreground mb-4 leading-relaxed">
                            {post.excerpt}
                          </p>
                          <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                            <div className="flex items-center space-x-4">
                              <div className="flex items-center space-x-1">
                                <User className="h-3 w-3" />
                                <span>{post.author}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Calendar className="h-3 w-3" />
                                <span>{post.date}</span>
                              </div>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="h-3 w-3" />
                              <span>{post.readTime}</span>
                            </div>
                          </div>
                          <Link to={`/blog/${post.id}`}>
                            <Button
                              variant="ghost"
                              className="p-0 h-auto font-medium text-primary hover:text-white group"
                            >
                              Read More
                              <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                          </Link>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest moving tips, industry
              insights, and special offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary-glow"
              />
              <Button className="bg-white text-primary hover:bg-primary-glow hover:text-white shadow-hero">
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Add Blog Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg shadow-2xl w-full max-w-lg p-8 relative"
          >
            <button
              className="absolute top-4 right-4 text-muted-foreground hover:text-primary"
              onClick={() => setShowModal(false)}
            >
              <X className="h-6 w-6" />
            </button>
            <h2 className="text-2xl font-bold mb-6 text-foreground">
              Add New Blog Post
            </h2>
            <form onSubmit={handleAddBlog} className="space-y-4">
              <input
                type="text"
                placeholder="Title"
                className="w-full p-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                value={newPost.title}
                onChange={(e) =>
                  setNewPost((prev) => ({ ...prev, title: e.target.value }))
                }
                required
              />
              <textarea
                placeholder="Content"
                className="w-full p-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                rows={4}
                value={newPost.content}
                onChange={(e) =>
                  setNewPost((prev) => ({ ...prev, content: e.target.value }))
                }
                required
              />
              <input
                type="text"
                placeholder="Author"
                className="w-full p-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                value={newPost.author}
                onChange={(e) =>
                  setNewPost((prev) => ({ ...prev, author: e.target.value }))
                }
                required
              />
              <select
                className="w-full p-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                value={newPost.category}
                onChange={(e) =>
                  setNewPost((prev) => ({ ...prev, category: e.target.value }))
                }
              >
                {categories.slice(1).map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
              <Button type="submit" className="w-full bg-gradient-primary">
                Add Post
              </Button>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Blog;
