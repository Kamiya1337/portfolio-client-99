import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Sidebar from './components/Sidebar';
import HomeTab from './components/HomeTab';
import ProjectsTab from './components/ProjectsTab';
import Summary from './components/Summary';
import BackgroundStars from './components/BackgroundStars';
import StarClickEffect from './components/StarClickEffect';

const tabTitles = {
  home: '1. Giới thiệu',
  projects: '2. Dự án',
  summary: '3. Tổng kết',
};

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [activeTab]);

  const renderContent = () => {
    switch (activeTab) {
      case 'home': return <HomeTab setActiveTab={setActiveTab} />;
      case 'projects': return <ProjectsTab />;
      case 'summary': return <Summary />;
      default: return <HomeTab setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="portfolio-app aether-bg relative min-h-screen text-charcoal md:flex overflow-hidden">
      <BackgroundStars />
      <StarClickEffect />
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isMobileOpen={isMobileOpen}
        setIsMobileOpen={setIsMobileOpen}
      />
      <div className="portfolio-main relative z-10 min-w-0 flex-1 md:ml-sidebar">
        <header className="portfolio-topbar glass-panel sticky top-0 z-30 mx-4 mt-4 hidden h-16 items-center justify-between rounded-glass px-6 md:flex xl:mx-8 xl:px-8">
          <h1 className="font-display text-2xl font-bold tracking-[-0.02em]">{tabTitles[activeTab]}</h1>
          <span className="editorial-label">Năm học 2025–2026</span>
        </header>
        <motion.main
          key={activeTab}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          {renderContent()}
        </motion.main>
      </div>
    </div>
  );
}
