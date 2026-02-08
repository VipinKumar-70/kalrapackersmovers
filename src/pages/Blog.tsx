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
      "Protecting your belongings during a move is crucial. Learn about the types of moving insurance, what they cover, and how to choose the right plan for a stress-free relocation.",
    content:
      "Moving insurance safeguards your items from damage, loss, or theft during relocation. This blog explains basic liability, full value protection, third-party insurance, storage-in-transit coverage, and tips for filing claims, helping you make an informed choice.",
    author: "Kalra Team",
    date: "March 25, 2024",
    readTime: "6 min read",
    category: "Moving Tips & Insurance",
    featured: false,
  },
  {
    id: 5,
    title: "Seasonal Moving: Choosing the Best Time to Move",
    excerpt:
      "Timing your move can affect cost, comfort, and safety. Learn how seasons impact relocation, and get tips for smooth summer, monsoon, and winter moves.",
    content:
      "Seasonal factors such as weather, school calendars, and demand affect moving day safety, costs, and convenience. This blog explains how to plan your move during summer, monsoon, and winter for a smooth and stress-free experience.",
    author: "Kalra Team",
    date: "March 28, 2024",
    readTime: "5 min read",
    category: "Moving Tips",
    featured: false,
  },
  {
    id: 6,
    title: "International Moving: A Complete Guide for Stress-Free Relocation",
    excerpt:
      "Moving abroad involves complex logistics, customs, and documentation. Learn how to prepare, pack, and protect your belongings for a smooth international relocation.",
    content:
      "International moving requires careful planning, from documentation and customs clearance to packing and insurance. This guide explains the steps to prepare, downsize, pack, and insure your items for a stress-free international move with Kalra Packers & Movers.",
    author: "Kalra Team",
    date: "March 30, 2024",
    readTime: "6 min read",
    category: "Moving Tips",
    featured: false,
  },
  // New Moving Tips Blog Post Example
  {
    id: 7,
    title: "Master Moving Timeline & Packing Tips for a Stress-Free Move",
    excerpt:
      "Organize your move efficiently with a structured timeline, room-by-room packing strategy, and budget-smart hacks to reduce stress and save time.",
    content:
      "This blog guides you through an 8-week master moving timeline, room-by-room packing strategy, essential moving day checklist, budget-smart packing hacks, and post-move unpacking plan to ensure a smooth relocation with Kalra Packers & Movers.",
    author: "Kalra Team",
    date: "April 1, 2024",
    readTime: "6 min read",
    category: "Moving Tips",
    featured: false,
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
