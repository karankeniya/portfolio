'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Mail, Phone, ExternalLink, ChevronDown, Download, TrendingUp, BarChart, ChevronRight } from 'lucide-react';
import AnimatedBackground from '@/components/AnimatedBackground';
import Splash from '@/components/Splash';

const DATA = {
  name: "Karan Keniya",
  title: "MS Business Analytics Candidate | Data & Marketing Analyst",
  location: "Montclair, New Jersey",
  email: "keniakaran@gmail.com",
  phone: "8623481568",
  linkedin: "www.linkedin.com/in/karan-keniya",
  summary: "Turning complex business data into clear stories that drive growth blending analytics, creativity, and strategy. With hands-on expertise in Power BI, Tableau, SQL, Python, and CRM platforms, I bridge the space between technical problem-solving and business impact.",
  achievements:[
    { title: "Revenue Growth", metric: "~$50k", desc: "Monthly recurring revenue secured in 6 months", icon: TrendingUp },
    { title: "Reporting Efficiency", metric: "50%", desc: "Cut reporting time in half via BI dashboards", icon: BarChart },
  ],
  experience:[
    {
      company: "GBCS Group", role: "Marketing Specialist", dates: "June 2025 - August 2025", location: "Calgary, Canada", bullets: []
    },
    {
      company: "archstore", role: "Senior Marketing Analyst", dates: "May 2022 - August 2024", location: "India",
      bullets:[
        "Led marketing efforts for an AI platform connecting architecture vendors with retailers.",
        "Leveraged CRMs and Google Ads to boost platform visibility and drive engagement.",
        "Launched two offices in six months, securing client deals worth ~$50,000 in monthly recurring revenue."
      ]
    },
    {
      company: "WNS", role: "Data Analyst", dates: "September 2021 - April 2022", location: "Mumbai, India",
      bullets:[
        "Collaborated with major airline partners to define project goals and deliver targeted marketing strategies.",
        "Developed and executed email marketing campaigns to nurture leads and drive promotional efforts.",
        "Analyzed airline industry trends to align marketing strategies with customer needs."
      ]
    },
    {
      company: "Ramniklal Brothers", role: "Product Analyst", dates: "January 2020 - August 2021", location: "India",
      bullets:[
        "Utilized persuasive selling techniques to effectively upsell and cross-sell complementary products.",
        "Contributed to the planning and execution of in-store promotions and marketing campaigns."
      ]
    }
  ],
  education:[
    { inst: "Montclair State University", deg: "MS, Business Analytics", date: "Sept 2024 - May 2026" },
    { inst: "University of Mumbai", deg: "Bachelor’s in Management Studies", date: "July 2017 - May 2020" }
  ],
  skills:["Tableau", "Microsoft Power BI", "Microsoft Excel", "SQL", "Python", "Google Analytics", "CRM Platforms"]
};

export default function Portfolio() {
  const [loading, setLoading] = useState(true);
  const[expandedExp, setExpandedExp] = useState<number | null>(1);

  return (
    <>
      <AnimatePresence>
        {loading && <Splash onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <main className="relative min-h-screen text-white/90 font-sans">
          <AnimatedBackground />
          <div className="max-w-5xl mx-auto px-6 py-24 sm:py-32 space-y-32">
            
            {/* HERO */}
            <motion.section initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/50">{DATA.name}</h1>
                <p className="text-xl sm:text-2xl text-blue-400 font-medium">{DATA.title}</p>
              </div>
              <div className="flex flex-wrap gap-4 text-sm text-white/60">
                <span className="flex items-center gap-2 border border-white/10 bg-white/5 px-3 py-1.5 rounded-full"><MapPin size={16}/> {DATA.location}</span>
                <span className="flex items-center gap-2 border border-white/10 bg-white/5 px-3 py-1.5 rounded-full"><Mail size={16}/> {DATA.email}</span>
                <a href={`https://${DATA.linkedin}`} target="_blank" className="flex items-center gap-2 border border-blue-500/30 bg-blue-500/10 text-blue-300 px-3 py-1.5 rounded-full hover:bg-blue-500/20 transition"><ExternalLink size={16}/> LinkedIn</a>
              </div>
              <p className="text-lg leading-relaxed max-w-3xl text-white/70">{DATA.summary}</p>
              <div className="flex items-center gap-4 pt-4">
                <button onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })} className="px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition">View Experience</button>
              </div>
            </motion.section>

            {/* IMPACT */}
            <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="grid sm:grid-cols-2 gap-6">
              {DATA.achievements.map((ach, i) => (
                <div key={i} className="group p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-blue-500/50 transition-colors relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full group-hover:bg-blue-500/20 transition" />
                  <ach.icon className="text-blue-400 mb-4" size={32} />
                  <h3 className="text-4xl font-bold text-white mb-2">{ach.metric}</h3>
                  <p className="text-lg font-medium text-white/90">{ach.title}</p>
                  <p className="text-sm text-white/50">{ach.desc}</p>
                </div>
              ))}
            </motion.section>

            {/* EXPERIENCE */}
            <motion.section id="experience" className="space-y-12" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold tracking-tight">Experience</h2>
              <div className="space-y-6">
                {DATA.experience.map((exp, i) => (
                  <div key={i} className="border border-white/10 rounded-2xl bg-white/[0.02] overflow-hidden">
                    <button onClick={() => setExpandedExp(expandedExp === i ? null : i)} className="w-full text-left p-6 flex justify-between items-center hover:bg-white/[0.02] transition">
                      <div>
                        <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                        <p className="text-blue-400 mt-1">{exp.company} <span className="text-white/40 ml-2 text-sm">{exp.dates}</span></p>
                      </div>
                      <ChevronDown className={`transform transition-transform ${expandedExp === i ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {expandedExp === i && exp.bullets.length > 0 && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="px-6 pb-6 text-white/70 space-y-3">
                          {exp.bullets.map((bullet, j) => (
                            <p key={j} className="flex items-start gap-3"><ChevronRight className="mt-1 flex-shrink-0 text-blue-500" size={16} /><span>{bullet}</span></p>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* SKILLS & EDU */}
            <div className="grid md:grid-cols-2 gap-12">
              <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                <h2 className="text-3xl font-bold tracking-tight mb-8">Top Skills</h2>
                <div className="flex flex-wrap gap-3">
                  {DATA.skills.map((skill, i) => (
                    <span key={i} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium">{skill}</span>
                  ))}
                </div>
              </motion.section>
              <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                <h2 className="text-3xl font-bold tracking-tight mb-8">Education</h2>
                <div className="space-y-6">
                  {DATA.education.map((edu, i) => (
                    <div key={i} className="relative pl-6 border-l border-white/20">
                      <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[6.5px] top-2" />
                      <h3 className="text-lg font-semibold">{edu.inst}</h3>
                      <p className="text-white/70 mt-1">{edu.deg}</p>
                      <p className="text-sm text-white/40 mt-1">{edu.date}</p>
                    </div>
                  ))}
                </div>
              </motion.section>
            </div>
          </div>
        </main>
      )}
    </>
  );
}