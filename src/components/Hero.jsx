import { ArrowRight, FileCheck2 } from 'lucide-react';
import { motion } from 'framer-motion';

const headlineWords = ['English', 'Language', '&', 'Culture', 'Learning', 'Portfolio'];

export default function Hero({ student, setActiveTab }) {
  return (
    <section className="px-5 pb-20 pt-12 sm:px-8 md:pt-16 xl:px-12 xl:pb-28">
      <div className="mx-auto max-w-[1220px]">
        <div className="grid gap-7 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-8 xl:col-span-9">
            <p className="editorial-label">Academic Year {student.academicYear}</p>
            <h1 className="mt-6 max-w-5xl font-display text-[clamp(3.4rem,8vw,7.8rem)] font-bold leading-[0.92] tracking-[-0.025em] text-charcoal">
              {headlineWords.map((word, index) => (
                <motion.span
                  key={word}
                  className="mr-[0.18em] inline-block"
                  initial={{ opacity: 0, y: 38, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{ delay: index * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                  {word}
                </motion.span>
              ))}
            </h1>
            <div className="mt-10 space-y-3" aria-hidden="true">
              <div className="h-px w-full bg-border-light" />
              <div className="h-px w-2/3 bg-border-light opacity-70" />
              <div className="h-px w-1/3 bg-border-light opacity-40" />
            </div>
            <motion.div
              className="glass-panel mt-12 max-w-3xl overflow-hidden rounded-glass-lg p-8 sm:p-10"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.65 }}
            >
              <p className="font-display text-2xl font-bold leading-snug sm:text-3xl">Portfolio môn Nhập môn Công nghệ số và Ứng dụng Trí tuệ nhân tạo.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <motion.button whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} type="button" onClick={() => setActiveTab('projects')} className="button-light">Mục bài tập <ArrowRight size={16} /></motion.button>
                <motion.button whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} type="button" onClick={() => setActiveTab('evidence')} className="button-dark-outline">Minh chứng <FileCheck2 size={16} /></motion.button>
              </div>
            </motion.div>
          </div>

          <motion.aside
            className="glass-card rounded-glass-lg p-4 lg:col-span-4 lg:self-end xl:col-span-3"
            initial={{ opacity: 0, x: 36, rotate: 1.5 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ delay: 0.35, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src="/avatar-dinh-thai-son.jpg"
              alt="Nguyễn Thị Trà My portfolio owner"
              className="aspect-[4/5] w-full rounded-[1.25rem] object-cover object-center shadow-glow"
            />
            <p className="editorial-label mt-8">Portfolio Owner</p>
            <h2 className="mt-2 font-display text-3xl font-bold leading-tight">{student.name}</h2>
            <dl className="mt-8 space-y-6">
              <div><dt className="editorial-label">Major</dt><dd className="mt-2 text-sm font-bold leading-6">{student.major}</dd></div>
              <div><dt className="editorial-label">Institution</dt><dd className="mt-2 text-sm font-bold">{student.shortUniversity}</dd><dd className="mt-1 text-xs leading-5 text-muted-dark">{student.university}</dd></div>
            </dl>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
