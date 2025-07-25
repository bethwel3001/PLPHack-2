import { motion } from 'framer-motion';
import Button from '../components/common/Button';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { 
  AcademicCapIcon,
  LightBulbIcon,
  ClockIcon,
  CodeBracketIcon,
  ChartBarIcon,
  ChatBubbleLeftRightIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';
import { FaHandshake, FaHeart } from "react-icons/fa";
const Home = () => {
  const { user } = useAuth();

  const partners = [
    { name: "Deepeseek", logo: "🎓" },
    { name: "PLP", logo: "🔬" },
    { name: "LakeHub", logo: "📚" },
    { name: "Google Edu", logo: "🔍" },
  ];

  const testimonials = [
  {
    quote: "StudyBot made revision feel like a game. I genuinely look forward to using it every day!",
    author: "Liam K.",
    avatar: "L"
  },
  {
    quote: "I went from failing grades to top of my class in 3 weeks. This app works wonders.",
    author: "Fatima A.",
    avatar: "F"
  }
];

  const stats = [
    { value: "92%", label: "Student Satisfaction" },
    { value: "4.8/5", label: "Average Rating" },
    { value: "10K+", label: "Active Users" },
    { value: "50+", label: "Subjects Covered" }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Floating bubbles background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              x: [0, i % 2 === 0 ? 15 : -15, 0],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute rounded-full bg-indigo-500/10 dark:bg-indigo-400/10"
            style={{
              width: `${10 + Math.random() * 30}px`,
              height: `${10 + Math.random() * 30}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Hero Section - Full Screen */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="container mx-auto px-6 py-24 z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-block mb-6"
            >
              <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-sm font-semibold px-4 py-2 rounded-full">
                AI-Powered Learning
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
            >
              Smarter Studying <br />
              <motion.span 
                className="bg-gradient-to-r from-indigo-600 to-emerald-500 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
              >
                Starts Here
              </motion.span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10"
            >
              Your personal AI tutor that adapts to your learning style, helps with homework, and tracks your progress.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row justify-center items-center gap-4"
            >
              {user ? (
                <Link to="/dashboard" className="w-full sm:w-auto">
                  <Button variant="primary" size="xl" className="w-full sm:w-auto">
                    Go to Dashboard
                  </Button>
                </Link>
              ) : (
                <>
                  <Link to="/login" className="w-full sm:w-auto">
                    <Button variant="primary" size="xl" className="w-full sm:w-auto">
                      Get Started Free
                    </Button>
                  </Link>
                  <Link to="/ai-companion" className="w-full sm:w-auto">
                    <Button variant="secondary" size="xl" className="w-full sm:w-auto">
                      Try AI Demo
                    </Button>
                  </Link>
                </>
              )}
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="mt-16"
            >
              <div className="relative w-full max-w-4xl mx-auto h-64 md:h-96 bg-gradient-to-br from-indigo-500 to-emerald-400 rounded-3xl shadow-2xl overflow-hidden">
                <motion.div
                  animate={{
                    x: [0, 20, 0],
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    repeatType: 'reverse',
                  }}
                  className="absolute inset-0 opacity-10 bg-grid-pattern"
                />
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg max-w-md w-full"
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center mr-3">
                        <span className="text-indigo-600 dark:text-indigo-300">🤖</span>
                      </div>
                      <h3 className="text-lg font-semibold">StudyBot AI</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">"Explain calculus concepts in simple terms with real-world examples."</p>
                    <Link to="/ai-companion" className="w-full sm:w-auto">
                    <Button variant="primary" size="md" fullWidth>
                    Ask studybot Anything
                    </Button></Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 text-center"
              >
                <p className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">{stat.value}</p>
                <p className="text-gray-600 dark:text-gray-300">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Transform Your <span className="text-indigo-600 dark:text-indigo-400">Learning Experience</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              StudyBot adapts to your unique needs and helps you master any subject
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Homework Helper",
                description: "Get instant explanations for any problem with step-by-step solutions across all subjects.",
                icon: AcademicCapIcon,
                color: "from-indigo-500 to-indigo-600"
              },
              {
                title: "Progress Tracker",
                description: "Visual analytics show your strengths and areas for improvement with actionable insights.",
                icon: ChartBarIcon,
                color: "from-emerald-500 to-emerald-600"
              },
              {
                title: "24/7 Tutor",
                description: "Personalized learning assistance whenever you need it, with instant response times.",
                icon: ClockIcon,
                color: "from-amber-500 to-amber-600"
              },
              {
                title: "Code Debugging",
                description: "Get detailed explanations for coding errors and learn best practices in real-time.",
                icon: CodeBracketIcon,
                color: "from-blue-500 to-blue-600"
              },
              {
                title: "Concept Visualization",
                description: "Complex ideas explained through interactive diagrams and visual representations.",
                icon: LightBulbIcon,
                color: "from-purple-500 to-purple-600"
              },
              {
                title: "Personalized Learning",
                description: "Adaptive learning paths tailored to your knowledge level and preferred learning style.",
                icon: ChatBubbleLeftRightIcon,
                color: "from-pink-500 to-pink-600"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 transition-all"
              >
                <div className={`w-16 h-16 rounded-xl mb-6 flex items-center justify-center text-white bg-gradient-to-br ${feature.color}`}>
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{feature.description}</p>
                <Link to="/features" className="inline-flex items-center text-indigo-600 dark:text-indigo-400 font-medium hover:underline group">
                  Learn more
                <ArrowRightIcon className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link to="/login">
              <Button variant="primary" size="xl" icon={ArrowRightIcon} iconPosition="right">
            Start Learning Smarter Today
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
<section className="min-h-screen flex items-center justify-center py-24 bg-white dark:bg-gray-900">
  <div className="container mx-auto px-6">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center mb-12"
    >
      <h3 className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
        TRUSTED BY LEADING INSTITUTIONS
      </h3>
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
      Our Education Partners
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
      We collaborate with top academic institutions to bring you the best learning resources
      </p>
    </motion.div>

    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
    >
      {partners.map((partner, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-md flex flex-col items-center justify-center border border-gray-200 dark:border-gray-600"
        >
          <span className="text-5xl mb-4">{partner.logo}</span>
          <h4 className="text-xl font-medium text-gray-900 dark:text-white">{partner.name}</h4>
        </motion.div>
      ))}
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-16"
    >
      <Link to="/partners">
        <Button variant="gradient" size="lg" icon={<FaHandshake className="mr-2" />}>
          Become a Partner
        </Button>
      </Link>
      <a href="/donate">
        <Button variant="gradient" size="lg" icon={<FaHeart className="mr-2" />}>
          Donate
        </Button>
      </a>
    </motion.div>
  </div>
</section>

      {/* Testimonials */}
  <section className="py-20 bg-gradient-to-br from-gray-900 via-indigo-900 to-indigo-800 text-white">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
      className="text-center mb-16"
    >
      <motion.h2
        initial={{ y: -20 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight"
      >
        What <span className="text-emerald-400">Students Say</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-lg md:text-xl text-indigo-200 max-w-2xl mx-auto"
      >
        Real voices from learners transforming their study journey with StudyBot.
      </motion.p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {testimonials.slice(0, 2).map((testimonial, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.6, 
            delay: index * 0.15,
            type: "spring",
            stiffness: 100
          }}
          viewport={{ once: true, margin: "-50px" }}
          whileHover={{ scale: 1.02 }}
          className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 shadow-xl backdrop-blur-md relative"
        >
          <div className="absolute -top-8 -left-8 w-24 h-24 bg-emerald-400 opacity-10 blur-2xl rounded-full pointer-events-none" />
          <div className="relative z-10">
            <p className="text-xl md:text-2xl italic font-light leading-relaxed text-indigo-100 mb-6">
              “{testimonial.quote}”
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-white font-bold text-lg mr-4 shadow-md">
                {testimonial.avatar}
              </div>
              <p className="text-emerald-300 font-semibold text-base">
                {testimonial.author}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>
      <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Transform Your Learning?</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10">
              Join thousands of students achieving academic success with StudyBot
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to={user ? "/dashboard" : "/login"} className="w-full sm:w-auto">
                <Button variant="primary" size="xl" className="w-full sm:w-auto">
                  {user ? "Continue Learning" : "Get Started Free"}
                </Button>
              </Link>
              <Link to="/ai-companion" className="w-full sm:w-auto">
                <Button variant="white" size="xl" className="w-full sm:w-auto">
                  Watch Demo
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400">
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-white mb-6">StudyBot</h3>
              <p className="mb-6">The intelligent study companion that helps you learn faster and retain more.</p>
              <div className="flex space-x-4">
                {['Twitter', 'LinkedIn', 'GitHub', 'Instagram'].map((social, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    whileHover={{ y: -3 }}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {social}
                  </motion.a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Product</h4>
              <ul className="space-y-2">
                {['Features', 'Pricing', 'AI Companion', 'Mobile App'].map((item, index) => (
                  <motion.li key={index} whileHover={{ x: 3 }}>
                    <Link to={`/${item.toLowerCase().replace(' ', '-')}`} className="hover:text-white block">
                      {item}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Resources</h4>
              <ul className="space-y-2">
                {['Blog', 'Tutorials', 'Help Center', 'Webinars'].map((item, index) => (
                  <motion.li key={index} whileHover={{ x: 3 }}>
                    <Link to={`/resources/${item.toLowerCase().replace(' ', '-')}`} className="hover:text-white block">
                      {item}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Company</h4>
              <ul className="space-y-2">
                {['About', 'Careers', 'Privacy', 'Terms'].map((item, index) => (
                  <motion.li key={index} whileHover={{ x: 3 }}>
                    <Link to={`/company/${item.toLowerCase()}`} className="hover:text-white block">
                      {item}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p>© {new Date().getFullYear()} studybot. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-4 mt-4 md:mt-0">
              <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white">Terms of Service</Link>
              <Link to="/contact" className="hover:text-white">Contact Us</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;