import { motion } from 'motion/react';
import { useState, useEffect, useRef } from 'react';
import partnersImage from 'figma:asset/66a0d6ef8982df19b2f81da8b19de096f0ebd3b7.png';
import ciscoSimtronImage from 'figma:asset/8da3372e1ee336cefc340156792a578bd594a74c.png';

function CountUp({ end, duration = 2000, suffix = '' }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTime: number | null = null;
          const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            
            setCount(Math.floor(progress * end));
            
            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(end);
            }
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return <div ref={ref}>{count}{suffix}</div>;
}

export function Partners() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-500 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4 text-gray-900">
              Our Trusted <span className="text-red-600">Partners</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-red-400 mx-auto mb-6" />
            <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
              Collaborating with world-class brands to deliver exceptional solutions
            </p>
          </motion.div>
        </div>

        {/* Infinite Scrolling Carousel */}
        <div className="relative">
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-gray-50 to-transparent z-10" />
          
          {/* Carousel Container - Single flowing banner */}
          <div className="flex overflow-hidden py-8 sm:py-12">
            <motion.div
              className="flex gap-0 items-center"
              animate={{
                x: [-3840, 0],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40,
                  ease: "linear",
                },
              }}
            >
              {/* First complete banner */}
              <div className="flex-shrink-0 h-20 sm:h-32 px-4 sm:px-8">
                <img 
                  src={partnersImage} 
                  alt="Our Partners" 
                  className="h-full w-auto object-contain"
                />
              </div>
              
              <div className="flex-shrink-0 h-20 sm:h-32 px-4 sm:px-8">
                <img 
                  src={ciscoSimtronImage} 
                  alt="Cisco and Simtron" 
                  className="h-full w-auto object-contain"
                />
              </div>

              {/* Second complete banner for seamless loop */}
              <div className="flex-shrink-0 h-20 sm:h-32 px-4 sm:px-8">
                <img 
                  src={partnersImage} 
                  alt="Our Partners" 
                  className="h-full w-auto object-contain"
                />
              </div>

              <div className="flex-shrink-0 h-20 sm:h-32 px-4 sm:px-8">
                <img 
                  src={ciscoSimtronImage} 
                  alt="Cisco and Simtron" 
                  className="h-full w-auto object-contain"
                />
              </div>

              {/* Third complete banner for seamless loop */}
              <div className="flex-shrink-0 h-20 sm:h-32 px-4 sm:px-8">
                <img 
                  src={partnersImage} 
                  alt="Our Partners" 
                  className="h-full w-auto object-contain"
                />
              </div>

              <div className="flex-shrink-0 h-20 sm:h-32 px-4 sm:px-8">
                <img 
                  src={ciscoSimtronImage} 
                  alt="Cisco and Simtron" 
                  className="h-full w-auto object-contain"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 max-w-4xl mx-auto px-4"
        >
          <div className="bg-gradient-to-r from-red-600 to-red-500 rounded-2xl p-6 sm:p-8 shadow-xl">
            <div className="grid grid-cols-3 gap-4 sm:gap-8 text-center text-white">
              <div>
                <div className="text-2xl sm:text-3xl mb-2"><CountUp end={50} suffix="+" /></div>
                <div className="text-red-100 text-xs sm:text-sm">Countries</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl mb-2"><CountUp end={100} suffix="%" /></div>
                <div className="text-red-100 text-xs sm:text-sm">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl mb-2">24/7</div>
                <div className="text-red-100 text-xs sm:text-sm">Support</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}