import { BookOpen, Home, Menu, MessageSquare, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const navItems = [
  { id: 'home', icon: Home, label: 'Giới thiệu' },
  { id: 'projects', icon: BookOpen, label: 'Dự án' },
  { id: 'summary', icon: MessageSquare, label: 'Tổng kết' },
];

export default function Sidebar({ activeTab, setActiveTab, isMobileOpen, setIsMobileOpen }) {
  const { student } = portfolioData;
  const selectTab = (id) => {
    setActiveTab(id);
    setIsMobileOpen(false);
  };

  return (
    <>
      <header className="portfolio-mobile-header border border-white/10 bg-charcoal/95 sticky top-0 z-[60] mx-3 mt-3 flex h-16 items-center justify-between rounded-glass px-5 md:hidden backdrop-blur-xl text-white shadow-md">
        <div>
          <p className="font-display text-lg font-bold text-white">{student.name}</p>
          <p className="mt-0.5 text-[9px] font-bold uppercase tracking-[0.16em] text-slate-400">Hồ sơ Học tập Ngôn ngữ &amp; Văn hóa Anh</p>
        </div>
        <button type="button" aria-label={isMobileOpen ? 'Đóng menu' : 'Mở menu'} aria-expanded={isMobileOpen} onClick={() => setIsMobileOpen(!isMobileOpen)} className="icon-button-dark border-white/10 bg-white/5 text-white hover:bg-white/10">
          {isMobileOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
      </header>
 
      <aside className={`portfolio-sidebar border-r border-white/10 bg-charcoal/95 md:border md:border-white/10 shadow-[0_24px_70px_rgba(0,0,0,0.35)] fixed inset-y-0 left-0 z-50 m-0 flex w-[300px] md:w-[252px] flex-col rounded-none px-4 py-5 text-white backdrop-blur-2xl transition-transform duration-300 md:m-4 md:translate-x-0 md:rounded-glass-lg ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="border-b border-white/10 px-3 pb-7 pt-2">
          <p className="font-display text-3xl font-bold tracking-[-0.02em] text-white">Hồ sơ Học tập</p>
          <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">Năm học {student.academicYear}</p>
          <div className="mt-8 flex items-center gap-3">
            <img src="/images.jpg" alt={`Ảnh cá nhân ${student.name}`} className="h-12 w-12 rounded-2xl object-cover shadow-md border border-white/10" />
            <div className="space-y-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-slate-300">
              <p className="text-white font-bold">{student.name}</p>
              <p className="text-slate-400">{student.shortUniversity}</p>
            </div>
          </div>
          <div className="mt-5 space-y-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-slate-400">
            <p>{student.major}</p>
          </div>
        </div>
 
        <nav className="flex-1 px-1 py-7 space-y-1" aria-label="Các mục hồ sơ">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = item.id === activeTab;
            return (
              <button type="button" key={item.id} onClick={() => selectTab(item.id)} className={`group relative flex w-full items-center gap-3 rounded-2xl px-4 py-3.5 text-left text-[11px] font-bold uppercase tracking-[0.13em] transition duration-200 ${isActive ? 'text-charcoal' : 'text-slate-400 hover:bg-white/5 hover:text-white'}`}>
                {isActive && <motion.span layoutId="active-nav-blob" className="absolute inset-0 rounded-2xl bg-ivory shadow-glow" transition={{ type: 'spring', stiffness: 420, damping: 32 }} />}
                <span className="relative z-10 flex items-center gap-3">
                <Icon size={17} strokeWidth={1.7} />
                <span>{String(index + 1).padStart(2, '0')} {item.label}</span>
                </span>
              </button>
            );
          })}
        </nav>
 
        <div className="border-t border-white/10 px-3 py-5">
          <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-slate-500">Lưu trữ Hồ sơ Học thuật</p>
        </div>
      </aside>
 
      {isMobileOpen && <button type="button" aria-label="Đóng menu" className="portfolio-mobile-overlay fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden" onClick={() => setIsMobileOpen(false)} />}
    </>
  );
}
