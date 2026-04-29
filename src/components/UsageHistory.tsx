import { ArrowUpRight, Bolt, Download, Filter, AirVent, Waves, Zap, Droplets, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { WEEKLY_TRENDS, APPLIANCES } from '../constants';
import { cn } from '../lib/utils';

const iconMap: Record<string, any> = {
  AirVent,
  Waves,
  Zap,
  Droplets,
  Sparkles
};

export default function UsageHistory() {
  return (
    <div className="space-y-16">
      {/* Hero Insight */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-8 p-10 rounded-sm bg-white/[0.02] border border-white/5 relative overflow-hidden flex flex-col justify-between min-h-[300px]">
          <div className="relative z-10">
            <span className="text-[10px] font-bold tracking-[0.3em] text-primary uppercase mb-6 inline-block">
              Analytical Insight
            </span>
            <h2 className="font-serif text-5xl font-bold leading-tight text-white mt-4 tracking-tighter">
              Efficiency growth of <span className="text-primary italic">12.4%</span> since last cycle.
            </h2>
          </div>
          
          <div className="mt-12 flex gap-12 relative z-10">
            <div>
              <p className="text-[9px] font-medium text-text-muted uppercase tracking-[0.2em]">Avg. Diurnal Energy</p>
              <p className="font-serif text-3xl font-bold text-white mt-1">14.2 <span className="text-sm font-sans tracking-normal opacity-40">kWh</span></p>
            </div>
            <div>
              <p className="text-[9px] font-medium text-text-muted uppercase tracking-[0.2em]">Avg. Diurnal Water</p>
              <p className="font-serif text-3xl font-bold text-white mt-1">420 <span className="text-sm font-sans tracking-normal opacity-40">L</span></p>
            </div>
          </div>

          <div className="absolute top-0 right-0 w-80 h-80 bg-primary opacity-[0.03] rounded-full -mr-32 -mt-32 blur-3xl" />
        </div>

        <div className="md:col-span-4 p-10 rounded-sm bg-primary text-black flex flex-col justify-between min-h-[300px] shadow-2xl">
          <div className="flex justify-between items-start">
            <div className="p-3 bg-black/5 border border-black/5">
              <Bolt className="w-8 h-8" />
            </div>
            <ArrowUpRight className="w-5 h-5 opacity-40" />
          </div>
          <div>
            <p className="font-serif text-5xl font-bold tracking-tighter">$42.00</p>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] mt-2 opacity-60">Estimated Yield</p>
          </div>
        </div>
      </section>

      {/* Usage Trends */}
      <section className="space-y-6">
        <div className="flex items-end justify-between px-2">
          <div>
            <h3 className="font-serif text-2xl text-white">Trend Analysis</h3>
            <p className="text-[10px] uppercase tracking-widest text-text-muted mt-1 underline decoration-primary/40 underline-offset-4">7-Day Resource Comparison</p>
          </div>
          <div className="flex gap-6">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="text-[9px] font-medium text-text-muted uppercase tracking-[0.2em]">Power</span>
            </div>
             <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-white opacity-40" />
              <span className="text-[9px] font-medium text-text-muted uppercase tracking-[0.2em]">Fluid</span>
            </div>
          </div>
        </div>

        <div className="p-8 rounded-sm bg-white/[0.01] border border-white/5 h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={WEEKLY_TRENDS} margin={{ top: 20, right: 0, left: -20, bottom: 0 }}>
              <XAxis 
                dataKey="day" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fontSize: 9, fontWeight: 500, fill: '#737373', letterSpacing: 2 }}
                dy={10}
              />
              <Tooltip 
                cursor={{ fill: 'rgba(255, 255, 255, 0.02)' }}
                contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '0' }}
              />
              <Bar dataKey="energy" fill="#c5a059" radius={[2, 2, 0, 0]} barSize={8} />
              <Bar dataKey="water" fill="rgba(255, 255, 255, 0.1)" radius={[2, 2, 0, 0]} barSize={8} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* Top Consumers */}
      <section className="space-y-8">
        <h3 className="font-serif text-2xl text-white px-2">Asset Allocation</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {APPLIANCES.map((app) => {
            const Icon = iconMap[app.icon] || Bolt;
            return (
              <motion.div 
                key={app.id}
                whileHover={{ y: -4 }}
                className="p-8 rounded-sm bg-card border border-white/5 shadow-xl flex flex-col justify-between"
              >
                <div className="flex justify-between items-start">
                  <div className="w-10 h-10 rounded-sm bg-white/5 flex items-center justify-center text-primary">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className={cn(
                    "text-[9px] font-bold tracking-widest px-2 py-1 rounded-sm uppercase",
                    app.trend === 'up' ? "text-red-400 bg-red-400/5" : "text-emerald-400 bg-emerald-400/5"
                  )}>
                    {app.change}
                  </span>
                </div>
                <div className="mt-10">
                  <h4 className="text-xs font-medium text-white uppercase tracking-widest">{app.name}</h4>
                  <div className="flex items-baseline gap-2 mt-2">
                    <span className="font-serif text-3xl font-bold text-white">{app.consumption}</span>
                    <span className="text-[10px] text-text-muted font-medium uppercase tracking-widest">{app.unit}</span>
                  </div>
                  <div className="w-full bg-white/5 h-px mt-6 relative">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${app.progress}%` }}
                      className="absolute inset-y-0 left-0 bg-primary h-0.5 -mt-px"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Optimization Tip */}
      <section className="p-10 rounded-sm border border-white/10 bg-white/[0.03] flex flex-col md:flex-row gap-8 items-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary opacity-[0.02] transform rotate-45 translate-x-16 -translate-y-16" />
        <div className="flex-shrink-0 w-16 h-16 bg-primary/10 border border-primary/20 rounded-sm flex items-center justify-center">
          <Sparkles className="w-6 h-6 text-primary fill-primary/20" />
        </div>
        <div className="flex-1 text-center md:text-left">
          <h4 className="font-serif text-xl text-white italic">Intelligence Briefing</h4>
          <p className="mt-2 text-text-muted text-sm leading-relaxed max-w-lg">
            Diurnal patterns indicate a concentration of high-load tasks during peak intervals. Automated reallocation to nocturnal cycles is recommended.
          </p>
        </div>
        <button className="bg-primary text-black px-10 py-4 font-bold text-[10px] uppercase tracking-[0.2em] transform active:scale-95 transition-all">
          Execute Policy
        </button>
      </section>
    </div>
  );
}
