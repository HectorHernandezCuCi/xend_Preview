"use client";

import Image from "next/image";
import PhoneGif from "@/assets/gifs/PhoneGif.gif";
import UserIcon from "@/assets/icons/user.png";
import FeatureCard from "./FeatureCard";
import { motion, Variants, easeOut } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FeatureSection = () => {
  const [sectionRef, sectionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeOut,
      },
    },
  };

  const cardItems = [
    {
      icon: UserIcon,
      title: "Personalización",
      description: "Diseña tu perfil personal con foto, descripción y todos tus datos.",
      color: "from-blue-500 to-cyan-400",
    },
    {
      icon: UserIcon,
      title: "Conexiones",
      description: "Envía o recibe solicitudes de amistad y amplía tu red académica.",
      color: "from-purple-500 to-pink-400",
    },
    {
      icon: UserIcon,
      title: "Grupos Automáticos",
      description: "Crea automáticamente grupos basados en tus materias registradas.",
      color: "from-green-500 to-emerald-400",
    },
    {
      icon: UserIcon,
      title: "Grupos Personalizados",
      description: "Crea tus propios grupos, controla quién puede unirse y personaliza su nombre y descripción.",
      color: "from-orange-500 to-red-400",
    },
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative w-full bg-gradient-to-br from-white via-blue-50 to-indigo-100 py-24 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow delay-1000" />
      
      <motion.div
        ref={sectionRef}
        initial="hidden"
        animate={sectionInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="relative z-10 max-w-7xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-800 to-blue-600 bg-clip-text text-transparent mb-6">
            Conecta, Colabora, Crece
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Crea tu espacio académico ideal y descubre una nueva forma de conectar con tu comunidad universitaria
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 mb-20">
          <motion.div
            variants={itemVariants}
            className="flex-1 relative"
          >
            <div className="relative w-80 h-80 md:w-96 md:h-96 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-[4rem] transform rotate-6 scale-105 opacity-10" />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-[3.5rem] shadow-2xl transform -rotate-3">
                <Image
                  src={PhoneGif}
                  alt="Demo de la aplicación XEND en funcionamiento"
                  fill
                  className="object-cover rounded-[3.5rem] p-2"
                  priority
                />
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full animate-bounce delay-300" />
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            variants={containerVariants}
            className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {cardItems.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <FeatureCard
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                  gradient={item.color}
                  delay={index * 100}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default FeatureSection;