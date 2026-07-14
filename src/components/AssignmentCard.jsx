import { ArrowRight, FileText, Image as ImageIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const isAvailable = (value) => Boolean(value && value !== 'Sẽ cập nhật sau' && value !== 'Không yêu cầu');

export default function AssignmentCard({ project, onSelect }) {
  return (
    <motion.article className="glass-card flex min-h-[540px] flex-col rounded-glass-lg p-5" initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }} whileHover={{ y: -6 }}>
      <div className="flex items-center justify-between gap-3">
        <span className="dark-label-box">Assignment {String(project.id).padStart(2, '0')}</span>
        <span className="text-xs text-muted-dark">{project.chapter}</span>
      </div>
      <div className="mt-7 aspect-[4/3] overflow-hidden rounded-[1.25rem] bg-surface-low shadow-inner">
        {isAvailable(project.evidenceImg) ? <img src={project.evidenceImg} alt={`Minh chứng ${project.title}`} className="h-full w-full object-cover transition duration-500 hover:scale-105" /> : <div className="flex h-full items-center justify-center text-muted-dark"><ImageIcon size={30} /></div>}
      </div>
      <h2 className="mt-7 font-display text-2xl font-bold leading-8 tracking-[-0.02em]">{project.title}</h2>
      <p className="mt-4 text-sm leading-7 text-muted-dark">{project.shortDesc}</p>
      <div className="mt-6 flex flex-wrap gap-2">{project.skills?.slice(0, 3).map((skill) => <span key={skill} className="rounded-full border border-white/60 bg-white/35 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.08em] text-muted-dark">{skill}</span>)}</div>
      <div className="mt-auto pt-7">
        {isAvailable(project.report) ? <a href={project.report} target="_blank" rel="noreferrer" className="card-resource-link"><FileText size={13} /> Report</a> : <span className="card-resource-link opacity-50">Report pending</span>}
      </div>
      <button type="button" onClick={() => onSelect(project)} className="mt-3 flex min-h-12 items-center justify-between rounded-xl bg-charcoal px-4 text-[11px] font-bold uppercase tracking-[0.12em] text-white transition duration-200 hover:-translate-y-0.5 hover:bg-primary active:scale-[0.98]">View Case Study <ArrowRight size={16} /></button>
    </motion.article>
  );
}
