import { motion } from 'motion/react';
import { useRef } from 'react';
import { Target, Zap, Shield, Globe } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const values = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'Delivering excellence across all sectors with precision and dedication',
    },
    {
      icon: Zap,
      title: 'Innovation First',
      description: 'Leveraging cutting-edge technology to solve complex challenges',
    },
    {
      icon: Shield,
      title: 'Trust & Security',
      description: 'Building lasting relationships through reliability and integrity',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving clients worldwide with local expertise',
    },
  ];

  return (
    <section id="about" className="py-24 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-red-100 text-red-700 rounded-full mb-4 text-sm sm:text-base">
            About Axis International
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-6 px-4">
            Diversified Excellence in
            <br />
            <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
              Every Sector We Touch
            </span>
          </h2>
          <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Axis International stands as a beacon of innovation and reliability across multiple industries.
            From Information Technology and IoT solutions to Oil & Gas operations, from advanced Security
            Systems to Trading and Contracting — we deliver comprehensive solutions that drive success.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow group"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-red-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <value.icon className="text-white" size={28} />
              </div>
              <h3 className="text-xl text-gray-900 mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}