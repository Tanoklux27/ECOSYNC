import { Plus, Filter, Leaf, Droplets, Zap, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { AUTOMATIONS } from '../constants';
import { cn } from '../lib/utils';

export default function Automations() {
  return (
    <div className="space-y-16">
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="max-w-xl">
          <span className="inline-block text-[10px] tracking-[0.4em] text-primary uppercase font-bold mb-6">
            System Protocol
          </span>
          <h2 className="font-serif text-6xl text-white italic tracking-tighter mb-8">Automations</h2>
          <p className="text-text-muted text-lg leading-relaxed font-light">
            The Luminous Engine is managing <span className="text-white italic underline decoration-primary/40 underline-offset-8">7 active flows</span> to optimize footprint and grid parity.
          </p>
        </div>
        <div className="flex gap-4">
          <button className="flex items-center gap-3 px-6 py-4 bg-white/5 border border-white/10 rounded-sm font-bold text-[10px] uppercase tracking-[0.2em] text-white hover:bg-white/10 transition-all">
            <Filter className="w-4 h-4" />
            Parameters
          </button>
          <button className="flex items-center gap-3 px-6 py-4 bg-primary text-black rounded-sm font-bold text-[10px] uppercase tracking-[0.2em] transform active:scale-95 transition-all">
            <Plus className="w-4 h-4" />
            New Policy
          </button>
        </div>
      </section>

      <div className="grid md:grid-cols-12 gap-8">
        {/* Featured Automation */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="md:col-span-8 bg-card p-10 rounded-sm border border-white/5 shadow-2xl flex flex-col justify-between min-h-[360px] relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary opacity-[0.02] rounded-full blur-3xl -mr-40 -mt-40 group-hover:opacity-[0.05] transition-all duration-1000" />
          <div className="relative z-10 flex justify-between items-start">
            <div className="flex flex-col gap-1">
              <div className="w-16 h-16 rounded-sm bg-white/5 border border-white/5 text-primary flex items-center justify-center mb-8">
                <Leaf className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-3xl font-bold text-white tracking-tight">Peak Hours Eco Mode</h3>
              <p className="text-text-muted text-sm mt-4 max-w-sm leading-relaxed">Intelligence-driven dimming and HVAC adjustment during peak demand volatility.</p>
            </div>
            <div className="w-12 h-6 border border-primary rounded-full relative cursor-pointer bg-primary/10">
              <div className="absolute top-0.5 left-6 w-4.5 h-4.5 rounded-full bg-primary shadow-lg" />
            </div>
          </div>
          <div className="relative z-10 mt-10 flex items-center gap-6">
             <div className="flex -space-x-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-12 h-12 rounded-sm bg-white/5 border border-white/5 flex items-center justify-center text-text-muted">
                  <Zap className="w-5 h-5" />
                </div>
              ))}
            </div>
            <span className="text-[9px] font-medium text-text-muted uppercase tracking-[0.2em]">12 Connected Nodes</span>
            <div className="ml-auto flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono text-xl text-primary font-black tracking-tighter">-15% kWh</span>
            </div>
          </div>
        </motion.div>

        {/* Second Automation */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="md:col-span-4 bg-white/[0.02] border border-white/5 p-10 rounded-sm flex flex-col justify-between min-h-[360px] group"
        >
          <div className="flex justify-between items-start">
            <div className="w-16 h-16 rounded-sm bg-white/5 border border-white/5 text-white/40 flex items-center justify-center">
              <Droplets className="w-8 h-8" />
            </div>
            <div className="w-12 h-6 border border-white/20 rounded-full relative cursor-pointer bg-white/5">
              <div className="absolute top-0.5 left-6 w-4.5 h-4.5 rounded-full bg-white opacity-40 shadow-sm" />
            </div>
          </div>
          <div>
            <h3 className="font-serif text-2xl font-bold text-white tracking-tight mb-3 italic">Smart Sprinkler</h3>
            <p className="text-text-muted text-xs leading-relaxed uppercase tracking-widest font-medium">Predictive cycle management based on local meteorology.</p>
          </div>
          <div className="pt-8 border-t border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-2">
               <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">80% Precipit.</span>
            </div>
            <span className="text-[9px] font-black text-text-muted uppercase tracking-[0.3em]">Hiberant</span>
          </div>
        </motion.div>
      </div>

      {/* Stats row */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Yield', value: '$4.20' },
          { label: 'Offset', value: '12.4kg' },
          { label: 'Health', value: '94/100', highlight: true },
          { label: 'Stability', value: 'Nominal' }
        ].map((stat, i) => (
          <div key={i} className="p-8 bg-white/[0.01] border border-white/5 rounded-sm shadow-xl">
            <p className="text-[9px] font-medium text-text-muted uppercase tracking-[0.3em] mb-3">{stat.label}</p>
            <p className={cn("font-serif text-3xl font-bold tracking-tighter", stat.highlight ? "text-primary" : "text-white")}>
              {stat.value}
            </p>
          </div>
        ))}
      </section>

      {/* EV scheduled carrd */}
      <section className="relative overflow-hidden rounded-sm bg-black border border-white/5 p-12 text-white min-h-[300px] flex flex-col justify-end group">
        <div className="absolute inset-0 opacity-40 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
        <img 
          src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=1200" 
          alt="EV charging" 
          className="absolute inset-0 w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
        />
        <div className="relative z-20 flex flex-col md:flex-row md:items-center justify-between gap-12">
          <div className="flex items-center gap-8">
            <div className="w-20 h-20 rounded-sm bg-primary flex items-center justify-center shrink-0 shadow-2xl">
               <Zap className="w-10 h-10 text-black fill-black/20" />
            </div>
            <div>
              <h3 className="font-serif text-4xl font-bold tracking-tighter italic">Scheduled Charging</h3>
              <p className="text-white/60 text-sm max-w-md mt-3 font-medium uppercase tracking-widest leading-relaxed">Tariff-optimized cycles initialized between 12:00 AM and 5:00 AM.</p>
            </div>
          </div>
          <div className="flex items-center gap-10 self-end md:self-center">
            <div className="text-right hidden lg:block">
               <p className="text-[9px] font-medium text-white/40 uppercase tracking-[0.4em] mb-2">Next Cycle</p>
               <p className="font-serif text-2xl font-bold tracking-tight">23:45 GMT</p>
            </div>
            <div className="w-14 h-7 border border-primary/40 rounded-full relative cursor-pointer bg-primary/5">
               <div className="absolute top-0.5 left-7 w-5.5 h-5.5 rounded-full bg-primary shadow-primary/20 flex items-center justify-center">
                   <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
               </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="pt-16 pb-8 border-t border-white/5 flex flex-col items-center gap-6">
         <div className="flex items-center gap-3 text-text-muted text-[10px] font-bold uppercase tracking-[0.3em]">
            <ShieldCheck className="w-4 h-4 text-primary" />
            <span>Optimal standards active - EEA Reg 14.4</span>
         </div>
      </footer>
    </div>
  );
}
