import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import Hero from './Hero';

const modules = [
  { number: '01', title: 'Giới thiệu', copy: 'Tổng quan cá nhân và định hướng học tập.', tab: 'home' },
  { number: '02', title: 'Dự án & Bài tập', copy: 'Các bài tập thực hành môn học và báo cáo chi tiết.', tab: 'projects' },
  { number: '03', title: 'Tổng kết', copy: 'Suy ngẫm cá nhân, bài học rút ra và cam kết liêm chính.', tab: 'summary' },
];

const hobbies = [
  { label: 'Đọc sách', emoji: '📖', bg: 'bg-rose-50/80 border-rose-200 text-rose-800' },
  { label: 'Nghe nhạc', emoji: '🎵', bg: 'bg-indigo-50/80 border-indigo-200 text-indigo-800' },
  { label: 'Chụp ảnh', emoji: '📷', bg: 'bg-amber-50/80 border-amber-200 text-amber-800' },
  { label: 'Cà phê cuối tuần', emoji: '☕', bg: 'bg-pink-50/80 border-pink-200 text-pink-800' },
  { label: 'Khám phá điều mới', emoji: '🧭', bg: 'bg-sky-50/80 border-sky-200 text-sky-800' },
];

export default function HomeTab({ setActiveTab }) {
  const { student } = portfolioData;
  return (
    <div>
      <Hero student={student} setActiveTab={setActiveTab} />
      
      {/* Section Giới thiệu bản thân với 3 mục chính */}
      <section className="px-5 pb-20 sm:px-8 xl:px-12 xl:pb-24">
        <div className="mx-auto max-w-[1220px] space-y-8">
          
          {/* Welcome Banner */}
          <motion.div
            className="glass-panel rounded-glass-lg p-6 sm:p-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-display text-xl sm:text-2xl font-bold leading-relaxed text-charcoal">
              Xin chào thầy cô và các bạn! Chào mừng mọi người cùng đến với portfolio khám phá hành trình học tập đầy thú vị của em!
            </p>
          </motion.div>

          <div className="grid gap-8">
            {/* Mục 1: Giới thiệu bản thân */}
            <motion.article
              className="glass-panel rounded-glass-lg p-7 sm:p-10"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
            >
              <div className="flex items-center gap-3">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-charcoal">Giới thiệu bản thân</h2>
              </div>
              <div className="mt-5 space-y-4 text-base leading-8 text-charcoal">
                <p>
                  Em tên là Nguyễn Thị Trà My, một sinh viên năm nhất ngành Ngôn ngữ Anh tại Trường Đại học Ngoại ngữ - Đại học Quốc gia Hà Nội, hay còn được biết đến với cái tên thân thuộc là ULIS.
                </p>
                <p>
                  Em là người thích tìm tòi kiến thức, khám phá đa dạng văn hóa, học tập ngôn ngữ mới và kết giao thật nhiều bạn bè. Ngoài những giờ bị “deadline dí”, em thích dành thời gian rảnh để thư giãn với những sở thích nho nhỏ như đi cà phê với bạn bè, đọc sách, nghe nhạc, xem bóng đá hoặc đơn giản chỉ là “nạp lại năng lượng” bằng một giấc ngủ thật ngon!
                </p>
              </div>

              {/* Hobby Chips */}
              <div className="mt-7 flex flex-wrap gap-3 pt-2">
                {hobbies.map((hobby) => (
                  <span
                    key={hobby.label}
                    className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-bold shadow-sm backdrop-blur-md transition duration-200 hover:-translate-y-0.5 ${hobby.bg}`}
                  >
                    <span>{hobby.emoji}</span>
                    <span>{hobby.label}</span>
                  </span>
                ))}
              </div>
            </motion.article>

            {/* Mục 2: Mục tiêu của Portfolio */}
            <motion.article
              className="glass-panel rounded-glass-lg p-7 sm:p-10"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1 }}
            >
              <div className="flex items-center gap-3">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-charcoal">Mục tiêu của Portfolio</h2>
              </div>
              <p className="mt-5 text-base leading-8 text-charcoal">
                Portfolio này không chỉ đơn giản là tập hợp các bài tập em đã làm trong bộ môn Nhập môn Công nghệ số và Ứng dụng Trí tuệ nhân tạo, mà chính là cuốn nhật ký ghi lại hành trình em khám phá và thử nghiệm, dần dần làm chủ công nghệ số, từng bước biến những kiến thức lý thuyết trên giảng đường thành sản phẩm thực tế ứng dụng cho cuộc sống học tập tại ULIS và công việc tương lai.
              </p>
            </motion.article>

            {/* Mục 3: Mục tiêu học tập và định hướng phát triển */}
            <motion.article
              className="glass-panel rounded-glass-lg p-7 sm:p-10"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.2 }}
            >
              <div className="flex items-center gap-3">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-charcoal">Mục tiêu học tập và định hướng phát triển</h2>
              </div>
              <div className="mt-5 space-y-4 text-base leading-8 text-charcoal">
                <p>
                  Thông qua học phần, em mong muốn không chỉ nắm vững những kiến thức nền tảng về công nghệ số và AI, mà còn biết cách vận dụng các công cụ phù hợp để hỗ trợ việc học, nâng cao hiệu quả làm việc và giải quyết các vấn đề trong thực tế. Sau mỗi bài học, em sẽ có thể tự tin hơn trong việc khai thác công nghệ một cách chủ động, sáng tạo và có trách nhiệm.
                </p>
                <p>
                  Về lâu dài, em mong muốn xây dựng cho bản thân tư duy học tập suốt đời, luôn sẵn sàng thích nghi với sự phát triển không ngừng của công nghệ. Là một sinh viên ngành Ngôn ngữ Anh, em tin rằng việc kết hợp năng lực ngoại ngữ với kỹ năng số và khả năng ứng dụng AI sẽ là một lợi thế quan trọng, giúp em học tập hiệu quả hơn tại ULIS, mở rộng cơ hội nghề nghiệp trong tương lai và từng bước trở thành một người học chủ động trong thời đại số.
                </p>
              </div>
            </motion.article>
          </div>

        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 xl:px-12 xl:py-28">
        <div className="mx-auto max-w-[1220px]">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7"><p className="editorial-label">Điều hướng Hồ sơ</p><h2 className="mt-4 font-display text-5xl font-bold tracking-[-0.02em] sm:text-6xl">Khám phá Hồ sơ</h2></div>
            <p className="max-w-md text-sm leading-7 text-muted-dark lg:col-span-5 lg:justify-self-end">Khám phá hành trình học tập qua các bài tập môn học, quá trình thực hành và phần tổng kết rút kinh nghiệm.</p>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {modules.map((item, index) => (
              <motion.button type="button" key={item.number} onClick={() => setActiveTab(item.tab)} className="glass-card group min-h-72 rounded-glass p-7 text-left" initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ delay: index * 0.06, duration: 0.5 }} whileTap={{ scale: 0.98 }}>
                <span className="font-display text-7xl font-bold tracking-[-0.03em] text-primary/20">{item.number}</span>
                <div className="mt-16 flex items-start justify-between gap-4"><div><h3 className="font-display text-2xl font-bold">{item.title}</h3><p className="mt-3 text-sm leading-6 text-muted-dark">{item.copy}</p></div><ArrowUpRight size={17} className="mt-1 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>
      <section className="px-5 pb-24 pt-8 sm:px-8 xl:px-12 xl:pb-32 xl:pt-12">
        <div className="glass-panel mx-auto flex min-h-80 max-w-[1220px] items-center justify-center rounded-glass-lg p-10 text-center">
          <div>
            <p className="editorial-label">Châm ngôn Học tập</p>
            <p className="mt-6 max-w-4xl font-display text-2xl font-bold leading-relaxed tracking-[-0.02em] sm:text-4xl">“Học từ ngày hôm qua, sống cho ngày hôm nay, hy vọng vào ngày mai. Điều quan trọng là không ngừng đặt câu hỏi.”</p>
            <p className="mt-6 text-sm font-semibold tracking-widest text-muted-dark uppercase">— Albert Einstein —</p>
          </div>
        </div>
      </section>
    </div>
  );
}
