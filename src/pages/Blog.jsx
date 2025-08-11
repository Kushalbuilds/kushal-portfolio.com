import { motion } from 'framer-motion';
import { useState } from 'react';

const Blog = () => {
  const [expandedPost, setExpandedPost] = useState(null);
  
  // Sample blog posts
  const blogPosts = [
    {
      id: 1,
      title: "Mastering the Pixel Art Style in Web Design",
      date: "June 15, 2023",
      excerpt: "Exploring techniques for implementing pixel art aesthetics in modern web applications...",
      content: "Pixel art has made a significant comeback in web design, offering nostalgia while maintaining modern functionality. In this post, I explore various techniques for implementing authentic pixel art aesthetics in your web applications using CSS, SVG, and JavaScript. We'll look at maintaining pixel precision across different devices and how to animate pixel art elements without losing their distinctive crisp edges."
    },
    {
      id: 2,
      title: "Adventures in React: Building Interactive UIs",
      date: "July 23, 2023",
      excerpt: "My journey creating game-like interfaces with React and Framer Motion...",
      content: "React has become my go-to library for creating interactive, game-like interfaces. Combined with animation libraries like Framer Motion, it opens up possibilities for creating truly engaging user experiences. In this post, I share my experience building my portfolio site with a game-inspired UI, including challenges I faced with state management and performance optimization for animations."
    },
    {
      id: 3,
      title: "The Quest for Accessibility in Creative Web Design",
      date: "August 10, 2023",
      excerpt: "How to balance innovative designs with inclusive user experiences...",
      content: "Creating visually striking, game-inspired interfaces presents unique accessibility challenges. In this post, I discuss how I've worked to ensure that creative designs don't compromise accessibility. Topics include keyboard navigation for interactive elements, providing alternative experiences for users with motion sensitivity, and maintaining readable text despite creative typography choices."
    }
  ];
  
  const toggleExpand = (id) => {
    if (expandedPost === id) {
      setExpandedPost(null);
    } else {
      setExpandedPost(id);
    }
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-3xl md:text-4xl font-pixel text-indigo-300 mb-4">QUEST LOG</h1>
        <div className="h-1 w-24 bg-indigo-500 mx-auto"></div>
        <p className="mt-4 text-gray-300 max-w-xl mx-auto">
          Chronicles of my adventures in coding, design, and technology exploration.
        </p>
      </motion.div>
      
      <div className="max-w-3xl mx-auto">
        {blogPosts.map((post) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: post.id * 0.1 }}
            className="mb-8"
          >
            <motion.div 
              className="bg-gray-800 border-2 border-indigo-600 p-6 rounded-lg shadow-neon-blue cursor-pointer"
              whileHover={{ scale: 1.02 }}
              onClick={() => toggleExpand(post.id)}
            >
              <div className="flex justify-between items-start">
                <h2 className="text-xl font-pixel text-indigo-300 mb-2">{post.title}</h2>
                <span className="font-pixel text-xs text-green-400 px-2 py-1 bg-gray-900 rounded-md">
                  {post.date}
                </span>
              </div>
              <p className="text-gray-300 mt-3">
                {expandedPost === post.id ? post.content : post.excerpt}
              </p>
              <div className="mt-4 flex justify-end">
                <button 
                  className="font-pixel text-sm text-blue-400 hover:text-blue-300"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleExpand(post.id);
                  }}
                >
                  {expandedPost === post.id ? "[ CLOSE ]" : "[ READ MORE ]"}
                </button>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
