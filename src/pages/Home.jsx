import { motion } from 'framer-motion';
import Button from '../components/common/Button';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
const Home = () => {
  const { user } = useAuth();

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="text-center py-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
          >
            AI-Powered Study Assistant for <span className="text-primary-600 dark:text-primary-400">Students</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10"
          >
            Get personalized homework help, track your progress, and achieve better grades with our intelligent study companion.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            {user ? (
              <Link to="/dashboard">
                <Button variant="primary" size="lg">
                  Go to Dashboard
                </Button>
              </Link>
            ) : (
              <>


            <Link to="/ai-companion">
              <Button variant="primary" size="lg">
                Try AI Companion Now
              </Button>
            </Link>
                <Link to="/login">
                  <Button variant="outline" size="lg">
                    Login
                  </Button>
                </Link>
              </>
            )}
          </motion.div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">How StudyBot Helps You</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Homework Assistance",
                description: "Get step-by-step explanations for your homework problems across all subjects.",
                icon: "📚",
              },
              {
                title: "Progress Tracking",
                description: "Visualize your academic performance with detailed analytics and insights.",
                icon: "📊",
              },
              {
                title: "Personalized Learning",
                description: "Adaptive learning paths tailored to your strengths and weaknesses.",
                icon: "🎯",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary-50 dark:bg-gray-800 rounded-xl p-8 md:p-12 my-16 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Ready to boost your grades?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of students who are achieving better results with StudyBot.
            </p>
            <Link to={user ? "/dashboard" : "/signup"}>
              <Button variant="primary" size="lg">
                {user ? "Continue Learning" : "Start Free Trial"}
              </Button>
            </Link>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default Home;