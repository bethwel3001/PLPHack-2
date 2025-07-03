import { motion } from 'framer-motion';
import { SparklesIcon, LightBulbIcon, AcademicCapIcon } from '@heroicons/react/24/outline';

const AICompanion = () => {
  return (
    <div className="py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Your AI Study Companion
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Ask me anything about your homework or studies!
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full">
              <SparklesIcon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                How can I help you today?
              </h3>
              <div className="mt-4">
                <textarea
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
                  rows={4}
                  placeholder="Ask me anything about math, science, history, or any other subject..."
                />
                <button className="mt-4 px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition">
                  Ask Question
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Math Help",
              description: "Get step-by-step solutions to algebra, calculus, and more.",
              icon: AcademicCapIcon,
            },
            {
              title: "Science Explanations",
              description: "Understand complex concepts in physics, chemistry, and biology.",
              icon: LightBulbIcon,
            },
            {
              title: "Homework Checker",
              description: "Verify your answers and get explanations for mistakes.",
              icon: SparklesIcon,
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="bg-primary-100 dark:bg-primary-900/30 p-2 rounded-full mr-3">
                  <feature.icon className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default AICompanion;