import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LayoutDashboard, BarChart3, SlidersHorizontal, Settings, Bell } from 'lucide-react';
import { cn } from '../lib/utils';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function Layout({ children, activeTab, onTabChange }: LayoutProps) {
  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'usage', label: 'Usage', icon: BarChart3 },
    { id: 'automations', label: 'Automations', icon: SlidersHorizontal },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="flex flex-col min-h-screen pb-24 max-w-md mx-auto bg-background md:max-w-5xl md:border-x md:border-white/5">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl px-6 py-4 flex items-center justify-between border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-tr from-primary to-[#8e6d31] rounded-sm transform rotate-45" />
          <h1 className="font-serif text-xl tracking-[0.2em] text-white uppercase italic">EcoSync</h1>
        </div>
        <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/5 transition-colors relative">
          <Bell className="w-5 h-5 text-text-muted" />
          <span className="absolute top-2.5 right-2.5 w-1.5 h-1.5 bg-primary rounded-full" />
        </button>
      </header>

      <main className="flex-1 overflow-x-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="p-6 space-y-8"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md md:max-w-5xl bg-background/80 backdrop-blur-md border-t border-white/5 px-6 py-3 z-50">
        <div className="flex justify-between items-center">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={cn(
                "flex flex-col items-center gap-1 p-2 transition-all",
                activeTab === tab.id ? "text-primary" : "text-text-muted hover:text-white"
              )}
              id={`nav-tab-${tab.id}`}
            >
              <tab.icon className={cn("w-5 h-5", activeTab === tab.id && "stroke-[2.5px]")} />
              <span className="text-[9px] font-medium uppercase tracking-[0.2em]">{tab.label}</span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
}
