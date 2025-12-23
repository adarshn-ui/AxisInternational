import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Logo } from './Logo';

function CountUpNumber({ end, duration = 5000, suffix = '' }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const startValue = 0;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const currentCount = Math.floor(progress * end);
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration]);

  return <>{count}{suffix}</>;
}

export function Hero() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    // Complete loading after 5 seconds
    const timer = setTimeout(() => {
      setLoadingComplete(true);
    }, 5200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen pb-16 sm:pb-0 flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-red-950 to-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-950/50 to-slate-900"></div>
      </div>

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-red-400/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      <AnimatePresence mode="wait">
        {!loadingComplete ? (
          // Loading State
          <motion.div
            key="loading"
            className="relative z-10 flex flex-col items-center justify-center gap-6 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
          >
            {/* Logo - Centered */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="scale-75 sm:scale-100 flex justify-center"
            >
              <Logo variant="white" size="large" centerAlign={true} />
            </motion.div>

            {/* Tagline - Centered */}
            <motion.div
              className="text-center"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p className="text-gray-300 tracking-wider text-base sm:text-xl">
                One Axis. Unified Solutions.
              </p>
            </motion.div>

            {/* Loading bar - Centered */}
            <motion.div
              className="w-64 sm:w-80 h-1 bg-white/10 rounded-full overflow-hidden mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-red-500 to-red-600"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 5, ease: 'easeInOut' }}
              />
            </motion.div>
          </motion.div>
        ) : (
          // Main Content
          <motion.div
            key="content"
            className="relative z-10 w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-12 sm:pt-20">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="pb-32 sm:pb-0"
              >
                <h1 className="text-3xl sm:text-5xl lg:text-7xl text-white mb-6 tracking-tight px-4 mt-20 sm:mt-0">
                  Powering Innovation
                  <br />
                  <span className="bg-gradient-to-r from-red-500 via-red-400 to-red-500 bg-clip-text text-transparent">
                    Across Industries
                  </span>
                </h1>

                {/* Animated Moving Banner */}
                <div className="relative overflow-hidden mb-6 sm:mb-8 py-3 sm:py-6">
                  <motion.div
                    className="flex gap-4 sm:gap-8"
                    animate={{
                      x: [0, -2000],
                    }}
                    transition={{
                      duration: 25,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    {/* Repeat the items twice for seamless loop */}
                    {[...Array(2)].map((_, setIndex) => (
                      <div key={setIndex} className="flex gap-4 sm:gap-8 flex-shrink-0">
                        {/* Block 1 */}
                        <div className="px-4 sm:px-8 py-3 sm:py-4 bg-gradient-to-br from-red-600/30 to-red-500/30 backdrop-blur-md border border-red-400/40 rounded-2xl flex items-center gap-2 sm:gap-3 min-w-fit">
                          <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                          <span className="text-white text-sm sm:text-lg whitespace-nowrap">IT & Hardware</span>
                        </div>

                        {/* Block 2 */}
                        <div className="px-4 sm:px-8 py-3 sm:py-4 bg-gradient-to-br from-slate-600/30 to-red-600/30 backdrop-blur-md border border-red-400/40 rounded-2xl flex items-center gap-2 sm:gap-3 min-w-fit">
                          <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                          <span className="text-white text-sm sm:text-lg whitespace-nowrap">Oil & Gas Contracting</span>
                        </div>

                        {/* Block 3 */}
                        <div className="px-4 sm:px-8 py-3 sm:py-4 bg-gradient-to-br from-red-700/30 to-red-500/30 backdrop-blur-md border border-red-400/40 rounded-2xl flex items-center gap-2 sm:gap-3 min-w-fit">
                          <div className="w-2 h-2 bg-red-300 rounded-full animate-pulse"></div>
                          <span className="text-white text-sm sm:text-lg whitespace-nowrap">Integrated Software Platforms</span>
                        </div>

                        {/* Block 4 */}
                        <div className="px-4 sm:px-8 py-3 sm:py-4 bg-gradient-to-br from-red-800/30 to-red-600/30 backdrop-blur-md border border-red-400/40 rounded-2xl flex items-center gap-2 sm:gap-3 min-w-fit">
                          <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                          <span className="text-white text-sm sm:text-lg whitespace-nowrap">Industrial Equipment Trading</span>
                        </div>

                        {/* Block 5 */}
                        <div className="px-4 sm:px-8 py-3 sm:py-4 bg-gradient-to-br from-red-600/30 to-red-700/30 backdrop-blur-md border border-red-400/40 rounded-2xl flex items-center gap-2 sm:gap-3 min-w-fit">
                          <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                          <span className="text-white text-sm sm:text-lg whitespace-nowrap">IoT & Cloud Infrastructures</span>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4 max-w-2xl mx-auto mb-6 sm:mb-12">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-64 px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-full flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl transition-shadow whitespace-nowrap"
                  >
                    Explore Divisions
                    <ArrowRight size={18} />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-64 px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/30 rounded-full hover:bg-white/20 transition-colors flex items-center justify-center whitespace-nowrap"
                  >
                    Contact Us
                  </motion.button>
                </div>
              </motion.div>

              {/* Stats - Positioned below CTA buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute sm:relative top-[58vh] sm:top-auto left-0 sm:left-auto right-0 sm:right-auto flex flex-col sm:flex-row gap-6 sm:gap-16 w-full max-w-xs sm:max-w-6xl px-4 mx-auto justify-center sm:mt-8"
              >
                {[
                  { number: '6+', label: 'Business Divisions' },
                  { number: '1000+', label: 'Projects Delivered' },
                  { number: '50+', label: 'Expert Team' },
                  { number: '15+', label: 'Years Experience' },
                ].map((stat, index) => (
                  <div key={index} className="text-center flex flex-col items-center gap-2">
                    <div className="text-4xl sm:text-5xl text-white">
                      <CountUpNumber end={parseInt(stat.number.replace('+', ''))} />
                      {stat.number.includes('+') ? '+' : ''}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll Indicator */}
      {loadingComplete && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ 
            opacity: { delay: 0.5 },
            y: { duration: 2, repeat: Infinity }
          }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className="text-white/50" size={32} />
        </motion.div>
      )}
    </section>
  );
}