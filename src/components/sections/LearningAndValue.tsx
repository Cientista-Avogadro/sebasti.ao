"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Cloud, Code2, CheckCircle, BookOpen, Target, Zap, Globe } from "lucide-react";

const currentLearning = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    items: [
      "LLM Integration & Fine-tuning",
      "Prompt Engineering Advanced",
      "AI Agents Development",
      "Computer Vision",
    ],
    progress: 65,
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    items: [
      "AWS Solutions Architect",
      "Azure Fundamentals",
      "Kubernetes & Docker Advanced",
      "CI/CD Pipeline Design",
    ],
    progress: 40,
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Code2,
    title: "Modern Stack",
    items: [
      "Blazor & .NET 8+",
      "React & Next.js Advanced",
      "Rust Programming",
      "Performance Optimization",
    ],
    progress: 50,
    color: "from-orange-500 to-red-500",
  },
];

const valueProps = [
  {
    icon: Zap,
    title: "End-to-End Delivery",
    description: "From architecture to deployment - I ship complete, production-ready systems. No handoffs, no gaps.",
  },
  {
    icon: Globe,
    title: "International Experience",
    description: "Worked with teams and clients across Angola, Brazil, and Europe. Fluent in cross-cultural collaboration.",
  },
  {
    icon: Target,
    title: "Business Impact Focus",
    description: "I don't just write code - I solve business problems. 300+ businesses rely on systems I've built.",
  },
  {
    icon: BookOpen,
    title: "Continuous Learner",
    description: "Always studying the latest tech. Currently diving into AI/ML, Cloud Architecture, and Rust.",
  },
];

export function LearningAndValue() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/[0.02] to-transparent" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-emerald-400 font-mono text-sm tracking-wider mb-4 block">06 — WHY CHOOSE ME</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-zinc-50">
            What Sets Me Apart
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            A unique combination of technical excellence, business understanding, and continuous growth.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="font-display text-2xl font-bold text-zinc-100 mb-8 flex items-center gap-3">
              <Brain className="text-emerald-400" size={28} />
              Currently Learning
            </h3>
            <p className="text-zinc-400 mb-8">
              Constantly expanding my skills to deliver cutting-edge solutions.
            </p>
            
            <div className="space-y-6">
              {currentLearning.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-emerald-500/30 transition-all"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                      <item.icon size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-zinc-100">{item.title}</h4>
                      <p className="text-xs text-zinc-500">{item.progress}% complete</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${item.progress}%` } : {}}
                        transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                        className={`h-full bg-gradient-to-r ${item.color} rounded-full`}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    {item.items.map((subItem) => (
                      <div key={subItem} className="flex items-center gap-2 text-sm text-zinc-400">
                        <CheckCircle size={14} className="text-emerald-500" />
                        {subItem}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="font-display text-2xl font-bold text-zinc-100 mb-8 flex items-center gap-3">
              <Target className="text-emerald-400" size={28} />
              Value Proposition
            </h3>
            <p className="text-zinc-400 mb-8">
              Why I am the right choice for your next project.
            </p>
            
            <div className="space-y-6">
              {valueProps.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-emerald-500/30 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                      <item.icon size={24} className="text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-zinc-100 mb-2">{item.title}</h4>
                      <p className="text-sm text-zinc-400 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
