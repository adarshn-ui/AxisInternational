import { motion } from 'motion/react';
import { useRef } from 'react';
import {
  Cpu,
  Wifi,
  Hammer,
  TrendingUp,
  Fuel,
  Camera,
  ArrowRight,
} from 'lucide-react';
import { useInView } from '../hooks/useInView';

export function Divisions() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const divisions = [
    {
      icon: Cpu,
      title: 'Managed Software Platforms',
      description: 'Enterprise solutions, cloud infrastructure, and digital transformation services',
      image: 'https://images.unsplash.com/photo-1759752394755-1241472b589d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMHBsYXRmb3JtJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2NTM3MjAwMHww&ixlib=rb-4.1.0&q=80&w=1080',
      gradient: 'from-red-600 to-red-500',
    },
    {
      icon: Wifi,
      title: 'IoT, Cloud Infra, Data Centers',
      description: 'Smart systems, connected devices, and intelligent automation platforms',
      image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800',
      gradient: 'from-red-700 to-red-600',
    },
    {
      icon: Hammer,
      title: 'Contracting',
      description: 'Construction, infrastructure development, and project management excellence',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800',
      gradient: 'from-red-600 to-red-700',
    },
    {
      icon: TrendingUp,
      title: 'Material & Equipment Trading',
      description: 'International trade, procurement, and supply chain optimization',
      image: 'https://images.unsplash.com/photo-1759159091728-e2c87b9d9315?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZXF1aXBtZW50JTIwbWFjaGluZXJ5fGVufDF8fHx8MTc2NTQ3MzUyNHww&ixlib=rb-4.1.0&q=80&w=1080',
      gradient: 'from-red-500 to-red-600',
    },
    {
      icon: Fuel,
      title: 'Oil & Gas',
      description: 'Upstream, downstream operations, and energy sector consulting',
      image: 'https://images.unsplash.com/photo-1614568110304-b43ea3952e0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaWwlMjByaWclMjBlbmVyZ3l8ZW58MXx8fHwxNzY1NDc3MTk5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      gradient: 'from-red-800 to-red-700',
    },
    {
      icon: Camera,
      title: 'Security & Surveillance Systems',
      description: 'CCTV, access control, barriers, and comprehensive security solutions',
      image: 'https://images.unsplash.com/photo-1549109926-58f039549485?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXJ2ZWlsbGFuY2UlMjBjYW1lcmElMjBzZWN1cml0eXxlbnwxfHx8fDE3NjU0NzMzNjF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      gradient: 'from-red-600 to-red-500',
    },
  ];

  return (
    <section id="divisions" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-red-100 text-red-700 rounded-full mb-4 text-sm sm:text-base">
            Our Divisions
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-6 px-4">
            Comprehensive Solutions
            <br />
            <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
              Across All Sectors
            </span>
          </h2>
          <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Explore our diverse portfolio of services, each backed by expertise and innovation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {divisions.map((division, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-gray-900 h-80 sm:h-96 cursor-pointer"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${division.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80"></div>
              </div>

              {/* Content */}
              <div className="relative h-full p-6 sm:p-8 flex flex-col justify-end">
                <div className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${division.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <division.icon className="text-white" size={24} />
                </div>

                <h3 className="text-xl sm:text-2xl text-white mb-3">
                  {division.title}
                </h3>

                <p className="text-sm sm:text-base text-gray-300 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {division.description}
                </p>

                <div className="flex items-center gap-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Learn More</span>
                  <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                </div>
              </div>

              {/* Gradient Overlay on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${division.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}