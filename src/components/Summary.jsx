import { portfolioData } from '../data/portfolioData';

const sections = [
  {
    number: '01',
    label: 'Cảm nhận',
    title: 'Trải nghiệm và Cảm nhận',
    copy: `Quá trình xây dựng Portfolio không chỉ đơn thuần là tổng hợp các bài tập đã hoàn thành trong học phần, mà còn là cơ hội để em nhìn lại toàn bộ hành trình học tập của mình một cách hệ thống. Mỗi nhiệm vụ đều mang đến những trải nghiệm khác nhau, từ việc làm quen với các thao tác công nghệ cơ bản đến vận dụng AI và các công cụ số vào giải quyết những tình huống học tập thực tế. Trong quá trình thực hiện, em nhận ra rằng công nghệ không còn là một lĩnh vực xa lạ, mà đã trở thành người bạn đồng hành hỗ trợ việc học tập hiệu quả hơn khi được sử dụng đúng mục đích và có trách nhiệm.`,
  },
  {
    number: '02',
    label: 'Kiến thức & Kỹ năng',
    title: 'Kiến thức & Kỹ năng đạt được',
    copy: `Sau học phần này, điều em học được không chỉ là cách sử dụng một số công cụ số hay AI, mà quan trọng hơn là tư duy lựa chọn công cụ phù hợp với từng mục tiêu học tập. Em đã rèn luyện được nhiều kỹ năng thiết thực như quản lý và tổ chức dữ liệu cá nhân, tìm kiếm và đánh giá nguồn học thuật đáng tin cậy, xây dựng prompt hiệu quả, hợp tác trực tuyến trong dự án nhóm cũng như khai thác AI tạo sinh một cách minh bạch và có kiểm chứng. Đặc biệt, những kiến thức về liêm chính học thuật và đạo đức AI đã giúp em hiểu rõ rằng công nghệ chỉ thực sự phát huy giá trị khi người sử dụng vẫn giữ vai trò chủ động trong tư duy, đánh giá và chịu trách nhiệm đối với sản phẩm của mình. Đây cũng là những năng lực quan trọng mà em tin sẽ tiếp tục hỗ trợ mạnh mẽ trong cuộc sống học tập và công việc tương lai của em!`,
  },
  {
    number: '03',
    label: 'Tâm đắc & Thách thức',
    title: 'Tâm đắc & Thách thức',
    copy: `Điều em tâm đắc nhất sau khi hoàn thành Portfolio là nhận ra sự thay đổi trong cách tiếp cận công nghệ của bản thân. Nếu trước đây em chủ yếu sử dụng các công cụ số theo thói quen, thì sau học phần này em đã biết cân nhắc mục đích sử dụng, lựa chọn công cụ phù hợp và luôn chú trọng đến tính chính xác, đạo đức cũng như giá trị đóng góp cá nhân trong mỗi sản phẩm.

Bên cạnh đó, quá trình xây dựng Portfolio cũng đặt ra không ít thách thức như việc tổng hợp khối lượng lớn tài liệu, sắp xếp nội dung theo trình tự logic, lựa chọn minh chứng phù hợp và đầu tư nhiều thời gian để hoàn thiện từng phần một cách chỉn chu. Tuy vậy, chính những khó khăn đó đã giúp em rèn luyện tính kiên trì, khả năng quản lý công việc và kỹ năng tự đánh giá quá trình học tập của bản thân. Em tin rằng những kiến thức, kỹ năng và kinh nghiệm tích lũy được từ học phần này sẽ trở thành nền tảng quan trọng để em tiếp tục học tập hiệu quả, thích nghi với sự phát triển của công nghệ và trở thành một người học chủ động trong thời đại số.`,
  },
];

export default function Summary() {
  const { student } = portfolioData;
  return (
    <div className="min-h-screen">
      <header className="px-5 pb-16 pt-20 text-center sm:px-8 xl:px-12 xl:pt-28"><p className="editorial-label">03 Tổng kết</p><h1 className="mt-5 font-display text-[clamp(3rem,7vw,7rem)] font-bold leading-[0.98] tracking-[-0.02em]">Tổng kết &amp; Suy ngẫm</h1><p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-muted-dark">Nhìn lại hành trình học tập, những trải nghiệm, khó khăn đã trải qua và cam kết hoàn thiện Portfolio một cách trung thực.</p></header>
      <main className="mx-auto max-w-5xl px-5 pb-28 sm:px-8">
        <div className="space-y-10">{sections.map((section) => <section key={section.number} className="glass-card grid gap-6 rounded-glass-lg p-7 md:grid-cols-[96px_1fr] md:p-10"><span className="font-display text-5xl font-bold text-primary/35">{section.number}</span><div><p className="editorial-label">{section.label}</p><h2 className="mt-3 font-display text-3xl font-bold tracking-[-0.02em]">{section.title}</h2><p className="mt-7 whitespace-pre-line text-base leading-8 text-charcoal">{section.copy}</p></div></section>)}</div>
        <section className="glass-panel mt-16 rounded-glass-lg p-8 sm:p-12">
          <p className="editorial-label">Liêm chính Học thuật</p>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-[-0.02em]">Cam kết Liêm chính Học thuật</h2>
          <div className="mt-7 space-y-4 whitespace-pre-line text-base italic leading-8 text-muted-dark">
            <p>Em, Nguyễn Thị Trà My, cam kết rằng toàn bộ báo cáo và nội dung trong Portfolio này phản ánh trung thực quá trình học tập và thực hành của bản thân. Trong quá trình thực hiện, em chỉ sử dụng AI như một công cụ hỗ trợ để gợi ý cách trình bày, hỗ trợ sửa code và kiểm tra lại một số nội dung. Bản thân em vẫn phải tự chạy thử Portfolio, rà soát lỗi, thay đổi những chỗ chưa đúng và chỉnh sửa sản phẩm cuối cùng để làm nổi bật dấu ấn cá nhân; tuyệt đối không bê nguyên kết quả AI tạo ra vào bài.</p>
            <p>Đối với em, AI có thể giúp tiết kiệm thời gian và định hướng cách tiếp cận vấn đề, nhưng không thể thay thế hoàn toàn quá trình tự học, tự tư duy và hoàn thành bài làm của người học. Em cam kết không tạo minh chứng giả, không đưa sản phẩm không có thật vào bài làm và báo cáo hoàn toàn trung thực quá trình thực hiện các bài tập của mình.</p>
            <p>Em xin chân thành cảm ơn thầy cô và các bạn đã dành thời gian xem Portfolio này.<br />Trân trọng!</p>
          </div>
          <div className="mt-10 border-t border-border-light pt-6">
            <p className="editorial-label">Sinh viên thực hiện</p>
            <p className="mt-2 font-display text-2xl font-bold">{student.name}</p>
          </div>
        </section>
      </main>
    </div>
  );
}
