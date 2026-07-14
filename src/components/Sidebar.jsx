import { BookOpen, CheckSquare, FileCheck, Home, Menu, MessageSquare, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const navItems = [
  { id: 'home', icon: Home, label: 'Overview' },
  { id: 'projects', icon: BookOpen, label: 'Assignments' },
  { id: 'evidence', icon: FileCheck, label: 'Evidence' },
  { id: 'rubric', icon: CheckSquare, label: 'Rubric' },
  { id: 'summary', icon: MessageSquare, label: 'Reflection' },
];

export default function Sidebar({ activeTab, setActiveTab, isMobileOpen, setIsMobileOpen }) {
  const { student } = portfolioData;
  const selectTab = (id) => {
    setActiveTab(id);
    setIsMobileOpen(false);
  };

  return (
    <>
      <header className="portfolio-mobile-header glass-panel sticky top-0 z-[60] mx-3 mt-3 flex h-16 items-center justify-between rounded-glass px-5 md:hidden">
        <div>
          <p className="font-display text-lg font-bold">{student.name}</p>
          <p className="mt-0.5 text-[9px] font-bold uppercase tracking-[0.16em] text-muted-dark">English Language & Culture Learning Portfolio</p>
        </div>
        <button type="button" aria-label={isMobileOpen ? 'Đóng menu' : 'Mở menu'} aria-expanded={isMobileOpen} onClick={() => setIsMobileOpen(!isMobileOpen)} className="icon-button-dark">
          {isMobileOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
      </header>

      <aside className={`portfolio-sidebar glass-panel fixed inset-y-0 left-0 z-50 m-0 flex w-[min(300px,88vw)] flex-col rounded-none px-4 py-5 text-charcoal transition-transform duration-300 md:m-4 md:w-[252px] md:translate-x-0 md:rounded-glass-lg ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="border-b border-border-light px-3 pb-7 pt-2">
          <p className="font-display text-3xl font-bold tracking-[-0.02em]">Portfolio</p>
          <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.16em] text-muted-dark">Academic Year {student.academicYear}</p>
          <div className="mt-8 flex items-center gap-3">
            <img src="/images.jpg" alt={`${student.name} portfolio owner`} className="h-12 w-12 rounded-2xl object-cover shadow-glow" />
            <div className="space-y-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-muted-dark">
              <p className="text-charcoal">{student.name}</p>
              <p>{student.shortUniversity}</p>
            </div>
          </div>
          <div className="mt-5 space-y-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-muted-dark">
            <p>{student.major}</p>
          </div>
        </div>

        <nav className="flex-1 px-1 py-7" aria-label="Portfolio sections">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = item.id === activeTab;
            return (
              <button type="button" key={item.id} onClick={() => selectTab(item.id)} className={`group relative flex w-full items-center gap-3 rounded-2xl px-4 py-3.5 text-left text-[11px] font-bold uppercase tracking-[0.13em] transition duration-200 ${isActive ? 'text-charcoal' : 'text-muted-dark hover:bg-white/35 hover:text-charcoal'}`}>
                {isActive && <motion.span layoutId="active-nav-blob" className="absolute inset-0 rounded-2xl bg-primary-mint/70 shadow-glow" transition={{ type: 'spring', stiffness: 420, damping: 32 }} />}
                <span className="relative z-10 flex items-center gap-3">
                <Icon size={17} strokeWidth={1.7} />
                <span>{String(index + 1).padStart(2, '0')} {item.label}</span>
                </span>
              </button>
            );
          })}
        </nav>

        <div className="border-t border-border-light px-3 py-5">
          <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-muted-dark">Editorial Academic Archive</p>
        </div>
      </aside>

      {isMobileOpen && <button type="button" aria-label="Đóng menu" className="portfolio-mobile-overlay fixed inset-0 z-40 bg-charcoal/35 backdrop-blur-sm md:hidden" onClick={() => setIsMobileOpen(false)} />}
    </>
  );
}
