"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Star, GitFork, Activity, Trophy, Users, MapPin, Building } from "lucide-react";
import { useTranslations } from "next-intl";

const githubStats = {
  username: "Cientista-Avogadro",
  name: "Sebastião de Sousa Moniz",
  company: "DevTest | TailorDeal",
  location: "Luanda, Angola",
  contributions: 719,
  repositories: 121,
  stars: 36,
  followers: 17,
  following: 20,
};

const topLanguages = [
  { name: "TypeScript", percentage: 60, color: "#3178c6" },
  { name: "C#", percentage: 25, color: "#68217a" },
  { name: "JavaScript", percentage: 10, color: "#f7df1e" },
  { name: "Other", percentage: 5, color: "#6e7681" },
];

const achievements = [
  { icon: Star, labelKey: "pullShark", value: "x3" },
  { icon: Users, labelKey: "pairExtra", value: "x3" },
  { icon: Trophy, labelKey: "trophies", value: "4" },
];

const contributionBreakdown = [
  { label: "Commits", percentage: 82, color: "bg-emerald-500" },
  { label: "Pull Requests", percentage: 12, color: "bg-blue-500" },
  { label: "Code Review", percentage: 6, color: "bg-purple-500" },
];

export function GitHubStats() {
  const t = useTranslations("github");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-zinc-900/50 to-transparent" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-emerald-400 font-mono text-sm tracking-wider mb-4 block">{t("label")}</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-zinc-50">
            {t("title")}
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            {t("subtitle")}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800"
          >
            <div className="flex items-start justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">SM</span>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-zinc-100">@{githubStats.username}</h3>
                  <p className="text-zinc-400 text-sm">{githubStats.name}</p>
                  <div className="flex items-center gap-3 mt-1 text-xs text-zinc-500">
                    <span className="flex items-center gap-1">
                      <Building size={12} />
                      {githubStats.company}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={12} />
                      {githubStats.location}
                    </span>
                  </div>
                </div>
              </div>
              <a
                href="https://github.com/Cientista-Avogadro"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-zinc-800 text-zinc-300 hover:bg-zinc-700 transition-colors text-sm font-medium"
              >
                View Profile
              </a>
            </div>

            <div className="grid grid-cols-5 gap-3 mb-8">
              <div className="p-3 rounded-xl bg-zinc-800/50 text-center">
                <div className="text-xl font-bold text-zinc-100">{githubStats.contributions}</div>
                <div className="text-xs text-zinc-500">Contrib.</div>
              </div>
              <div className="p-3 rounded-xl bg-zinc-800/50 text-center">
                <div className="text-xl font-bold text-zinc-100">{githubStats.repositories}</div>
                <div className="text-xs text-zinc-500">Repos</div>
              </div>
              <div className="p-3 rounded-xl bg-zinc-800/50 text-center">
                <div className="text-xl font-bold text-zinc-100">{githubStats.stars}</div>
                <div className="text-xs text-zinc-500">Stars</div>
              </div>
              <div className="p-3 rounded-xl bg-zinc-800/50 text-center">
                <div className="text-xl font-bold text-zinc-100">{githubStats.followers}</div>
                <div className="text-xs text-zinc-500">Followers</div>
              </div>
              <div className="p-3 rounded-xl bg-zinc-800/50 text-center">
                <div className="text-xl font-bold text-zinc-100">{githubStats.following}</div>
                <div className="text-xs text-zinc-500">Following</div>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-sm font-medium text-zinc-400 mb-4">Contribution Breakdown</h4>
              <div className="flex h-3 rounded-full overflow-hidden bg-zinc-800">
                {contributionBreakdown.map((item) => (
                  <div
                    key={item.label}
                    className={`${item.color}`}
                    style={{ width: `${item.percentage}%` }}
                  />
                ))}
              </div>
              <div className="flex justify-between mt-2 text-xs text-zinc-500">
                <span className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-emerald-500" /> Commits 82%
                </span>
                <span className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-blue-500" /> PRs 12%
                </span>
                <span className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-purple-500" /> Reviews 6%
                </span>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium text-zinc-400 mb-4">{t("topLanguages")}</h4>
              <div className="space-y-3">
                {topLanguages.map((lang, index) => (
                  <div key={lang.name}>
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <div 
                          className="w-3 h-3 rounded-full" 
                          style={{ backgroundColor: lang.color }}
                        />
                        <span className="text-sm text-zinc-300">{lang.name}</span>
                      </div>
                      <span className="text-xs text-zinc-500">{lang.percentage}%</span>
                    </div>
                    <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${lang.percentage}%` } : {}}
                        transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: lang.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800">
              <div className="flex items-center gap-3 mb-4">
                <Trophy size={20} className="text-emerald-400" />
                <h3 className="font-display text-lg font-bold text-zinc-100">Achievements</h3>
              </div>
              <div className="space-y-3">
                {achievements.map((item) => (
                  <div key={item.labelKey} className="flex items-center justify-between p-3 rounded-lg bg-zinc-800/50">
                    <div className="flex items-center gap-2">
                      <item.icon size={16} className="text-emerald-400" />
                      <span className="text-sm text-zinc-300">{t(item.labelKey)}</span>
                    </div>
                    <span className="text-sm font-bold text-emerald-400">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800">
              <div className="flex items-center gap-3 mb-4">
                <Activity size={20} className="text-emerald-400" />
                <h3 className="font-display text-lg font-bold text-zinc-100">Contribution Activity</h3>
              </div>
              <p className="text-sm text-zinc-400 mb-4">
                719 contributions in the last year across 50+ repositories
              </p>
              <div className="p-3 rounded-lg bg-zinc-800/50">
                <div className="text-xs text-zinc-500 mb-2">Working with</div>
                <div className="flex flex-wrap gap-2">
                  {["DevTest", "TailorDeal", "GC-LUCAN", "ECO", "LEKA"].map((org) => (
                    <span key={org} className="px-2 py-1 text-xs rounded bg-emerald-500/20 text-emerald-400">
                      @{org}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-transparent border border-emerald-500/20">
              <h4 className="font-semibold text-zinc-100 mb-2">Featured Work</h4>
              <p className="text-sm text-zinc-400 mb-4">
                Contributed to 50+ repositories including enterprise dashboards, e-commerce platforms, and management systems.
              </p>
              <a
                href="https://github.com/Cientista-Avogadro"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <Github size={16} />
                View All Repositories
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
