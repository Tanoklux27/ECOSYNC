import { Zap, Droplets, TrendingUp, Sparkles, CheckCircle2, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { cn } from '../lib/utils';

export default function Dashboard() {
  const data = [
    { name: 'Energy', value: 70, color: '#c5a059' },
    { name: 'Remaining', value: 30, color: 'rgba(255, 255, 255, 0.05)' },
  ];

  const waterData = [
    { name: 'Water', value: 55, color: '#e5e5e5' },
    { name: 'Remaining', value: 45, color: 'rgba(255, 255, 255, 0.02)' },
  ];

  return (
    <div className="space-y-16">
      {/* Luminous Engine Dial */}
      <section className="flex flex-col items-center">
        <div className="relative w-80 h-80 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-primary/5 blur-3xl opacity-50" />
          
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={115}
                outerRadius={125}
                startAngle={225}
                endAngle={-45}
                dataKey="value"
                stroke="none"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Pie
                data={waterData}
                cx="50%"
                cy="50%"
                innerRadius={95}
                outerRadius={105}
                startAngle={225}
                endAngle={-45}
                dataKey="value"
                stroke="none"
              >
                {waterData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          <div className="absolute z-10 text-center">
            <h2 className="font-serif text-6xl font-bold text-white tracking-tighter">12.4</h2>
            <p className="text-[10px] font-medium text-text-muted uppercase tracking-[0.3em] mt-2">kWh Today</p>
            <div className="mt-6 flex items-center justify-center gap-2 text-white/40 font-medium">
              <Droplets className="w-3 h-3" />
              <span className="text-sm font-mono tracking-widest">240L</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-12 mt-12 w-full max-w-sm">
          <div className="space-y-1">
            <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-text-muted">Energy Efficiency</span>
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-3xl text-primary font-bold">88%</span>
              <TrendingUp className="w-4 h-4 text-primary" />
            </div>
          </div>
          <div className="space-y-1 text-right">
            <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-text-muted">Resource Health</span>
            <div className="flex items-baseline justify-end gap-2">
              <span className="font-serif text-3xl text-white font-bold tracking-tight">Optimal</span>
            </div>
          </div>
        </div>
      </section>

      {/* Active Appliances */}
      <section className="space-y-6">
        <div className="flex items-end justify-between px-2">
          <div>
            <h2 className="font-serif text-2xl text-white italic">Active Systems</h2>
            <p className="text-[10px] uppercase tracking-widest text-text-muted mt-1">Status: Operational</p>
          </div>
          <button className="text-primary text-[10px] uppercase tracking-widest font-bold hover:text-white transition-colors">Explorer All</button>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-6 no-scrollbar -mx-6 px-6">
          {[
            { name: 'HVAC', draw: '1.2 kW', icon: Sparkles, active: true },
            { name: 'EV Charger', draw: '7.4 kW', icon: Zap, active: true },
            { name: 'Sprinkler', draw: '0 L/m', icon: Droplets, active: false }
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4 }}
              className="flex-shrink-0 w-64 p-8 rounded-sm bg-card border border-white/5 shadow-2xl"
            >
              <div className="flex justify-between items-start mb-10">
                <div className="w-10 h-10 rounded-sm bg-white/5 flex items-center justify-center text-primary">
                  <item.icon className="w-5 h-5" />
                </div>
                <div className={cn(
                  "w-10 h-5 border rounded-full relative transition-all cursor-pointer",
                  item.active ? "border-primary bg-primary/10" : "border-white/10 bg-white/5"
                )}>
                  <div className={cn(
                    "absolute top-0.5 w-3.5 h-3.5 rounded-full transition-all",
                    item.active ? "left-5.5 bg-primary" : "left-1 bg-white/20"
                  )} />
                </div>
              </div>
              <h3 className="text-sm font-medium text-white uppercase tracking-[0.1em]">{item.name}</h3>
              <div className="mt-6 space-y-3">
                <div className="flex justify-between text-[10px] uppercase tracking-widest">
                  <span className="text-text-muted">Current Load</span>
                  <span className="font-mono text-white">{item.draw}</span>
                </div>
                <div className="w-full bg-white/5 h-px relative">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: item.active ? '66%' : '0%' }}
                    className="absolute inset-y-0 left-0 bg-primary h-0.5 -mt-px"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Refined Insights */}
      <section className="grid md:grid-cols-2 gap-8">
        <motion.div 
          whileHover={{ x: 4 }}
          className="p-10 rounded-sm bg-white/[0.02] border border-white/5 relative overflow-hidden group"
        >
          <div className="relative z-10">
            <p className="text-[10px] uppercase tracking-[0.3em] text-primary mb-3">Optimization</p>
            <h4 className="font-serif text-2xl text-white">Peak Saving Window</h4>
            <p className="text-xs text-text-muted mt-4 leading-relaxed max-w-[220px]">Off-peak rates available from 11 PM. Automate charging to maximize portfolio efficiency.</p>
            <button className="mt-8 text-[10px] uppercase tracking-[0.2em] font-bold border-b border-primary text-primary pb-1 hover:text-white hover:border-white transition-all">
              Initialize Schedule
            </button>
          </div>
          <Zap className="absolute -right-6 -bottom-6 w-40 h-40 text-primary opacity-[0.03] -rotate-12 group-hover:rotate-0 transition-transform duration-700" />
        </motion.div>

        <motion.div 
          whileHover={{ x: 4 }}
          className="p-10 rounded-sm bg-primary text-black relative"
        >
          <div className="flex justify-between items-start">
            <div>
              <Droplets className="w-8 h-8 mb-6" />
              <h4 className="font-serif text-2xl font-bold">Relational Integrity</h4>
            </div>
            <div className="bg-black/10 p-2 border border-black/5">
               <CheckCircle2 className="w-5 h-5" />
            </div>
          </div>
          <p className="text-sm font-medium mt-4">Water monitoring systems show no leakage detected across active nodes.</p>
          <div className="mt-8 flex items-center justify-between">
            <span className="text-[10px] uppercase tracking-[0.3em] font-black">Status: Secured</span>
            <ChevronRight className="w-5 h-5 opacity-50" />
          </div>
        </motion.div>
      </section>
    </div>
  );
}
