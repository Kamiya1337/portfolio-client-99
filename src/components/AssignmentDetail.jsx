import { ArrowLeft, ExternalLink, FileText, X } from 'lucide-react';
 
export default function AssignmentDetail({ project, onBack, previewData, onPreview, onClosePreview }) {
  return (
    <div className="min-h-screen px-5 py-10 sm:px-8 xl:px-12 xl:py-16">
      {previewData.isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/55 p-3 backdrop-blur-md sm:p-6" role="dialog" aria-modal="true" aria-label="Xem trước minh chứng">
          <div className="glass-panel flex h-[90vh] w-full max-w-6xl flex-col overflow-hidden rounded-glass-lg">
            <div className="flex items-center justify-between border-b border-border-light px-5 py-4"><div><p className="editorial-label">Xem trước</p><h3 className="mt-1 font-display text-2xl font-bold">{previewData.type === 'pdf' ? 'Báo cáo PDF' : 'Ảnh minh chứng'}</h3></div><div className="flex items-center gap-2"><a href={previewData.url} target="_blank" rel="noreferrer" className="button-secondary">Mở thẻ mới</a><button type="button" aria-label="Đóng xem trước" onClick={onClosePreview} className="icon-button-dark"><X size={18} /></button></div></div>
            <div className="flex min-h-0 flex-1 items-center justify-center overflow-auto bg-white/40 p-4">{previewData.type === 'pdf' ? <iframe src={previewData.url} title="PDF Preview" className="h-full w-full rounded-xl border-0 bg-white" /> : <img src={previewData.url} alt="Minh chứng" className="max-h-full max-w-full rounded-xl object-contain" />}</div>
          </div>
        </div>
      )}
 
      <button type="button" onClick={onBack} className="button-secondary"><ArrowLeft size={17} /> Quay lại danh sách</button>
      <article className="glass-panel mx-auto mt-8 max-w-[1220px] overflow-hidden rounded-glass-lg">
        <header className="grid gap-8 border-b border-border-light p-7 lg:grid-cols-12 lg:p-12">
          <div className="lg:col-span-3"><p className="editorial-label">Bài tập {String(project.id).padStart(2, '0')}</p><p className="mt-2 text-sm text-muted-dark">{project.chapter}</p></div>
          <div className="lg:col-span-8"><h1 className="font-display text-[clamp(2.5rem,5vw,5rem)] font-bold leading-[0.98] tracking-[-0.02em]">{project.title}</h1><p className="mt-6 max-w-3xl text-base leading-8 text-muted-dark">{project.shortDesc}</p></div>
        </header>
        <section className="border-b border-border-light bg-charcoal/5 p-7 lg:p-10">
          <p className="editorial-label">Mục tiêu nhiệm vụ</p>
          <p className="mt-5 text-base leading-8 font-medium text-charcoal">{project.target}</p>
        </section>
        <section className="border-t border-border-light p-7 lg:p-12">
          <p className="editorial-label">Tóm tắt nội dung &amp; Quá trình thực hiện</p>
          <div className="mt-6 max-w-4xl">
            {project.process?.split('\n').map((line, idx) => {
              const trimmed = line.trim();
              if (!trimmed) return <div key={idx} className="h-3" />;

              const isHeader = trimmed.length < 65 && trimmed.endsWith(':') && !trimmed.includes('. ');

              if (isHeader) {
                return (
                  <h4 key={idx} className="mt-7 mb-3 flex items-center gap-2.5 font-display text-lg sm:text-xl font-bold text-charcoal first:mt-0">
                    <span className="text-primary text-base">★</span>
                    <span>{trimmed}</span>
                  </h4>
                );
              }

              return (
                <p key={idx} className="text-base leading-8 text-charcoal/90 mb-2">
                  {trimmed}
                </p>
              );
            })}
          </div>
        </section>
        <section className="border-t border-border-light p-7 lg:p-12">
          <p className="editorial-label">Sản phẩm &amp; Minh chứng</p>
          <div className="mt-6">
            <div className="glass-panel flex flex-col sm:flex-row sm:items-center justify-between gap-6 rounded-2xl p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-charcoal/5 text-charcoal">
                  <FileText size={22} />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-charcoal">Báo cáo bài tập hoàn thiện</h3>
                  <p className="text-xs text-muted-dark mt-1">Định dạng tài liệu học thuật PDF chứa nội dung chi tiết bài làm.</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                {(!project.report || project.report === 'Sẽ cập nhật sau') ? (
                  <span className="status-muted">Sẽ cập nhật sau</span>
                ) : project.report === 'Không yêu cầu' ? (
                  <span className="status-muted">Không yêu cầu</span>
                ) : (
                  <a 
                    href={project.report} 
                    onClick={(event) => onPreview(event, project.report, 'pdf')} 
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-charcoal px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.1em] text-white hover:bg-primary transition duration-200"
                  >
                    Xem báo cáo <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}
