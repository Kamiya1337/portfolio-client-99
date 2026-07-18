import { FolderTree, Search, MessageSquare, Users, PenTool, ShieldCheck, Cpu } from 'lucide-react';

export const portfolioData = {
  student: {
    name: "Nguyễn Thị Trà My",
    id: "25040887",
    major: "Ngôn Ngữ và Văn hóa Anh",
    university: "Trường Đại học Ngoại Ngữ - Đại học Quốc gia Hà Nội",
    shortUniversity: "ULIS - VNU",
    academicYear: "2025–26",
    bio: "Sinh viên ngành Ngôn Ngữ và Văn hóa Anh tại Trường Đại học Ngoại Ngữ - Đại học Quốc gia Hà Nội.",
    skills: ["React & Web Dev", "AI Tools (ChatGPT, Gemini)", "Digital Literacy", "Research", "Team Collaboration"]
  },
  overview: [
    { id: 1, title: "Quản lý dữ liệu", desc: "Máy tính, tệp và thư mục", icon: FolderTree },
    { id: 2, title: "Khai thác thông tin", desc: "Tìm kiếm & đánh giá dữ liệu", icon: Search },
    { id: 3, title: "Tư duy AI", desc: "Prompt engineering hiệu quả", icon: MessageSquare },
    { id: 4, title: "Hợp tác trực tuyến", desc: "Làm việc nhóm trong môi trường số", icon: Users },
    { id: 5, title: "Sáng tạo nội dung", desc: "Tạo sản phẩm số với AI", icon: PenTool },
    { id: 6, title: "Liêm chính học thuật", desc: "An toàn số & AI có trách nhiệm", icon: ShieldCheck },
    { id: 7, title: "AI trong Kỹ thuật", desc: "Ứng dụng AI vào Khoa học & CN", icon: Cpu },
  ],
  projects: [
    {
      id: 1,
      title: "Bài 1: Thao tác cơ bản với tệp tin và thư mục",
      chapter: "Chương 1 & 2",
      shortDesc: "Tổ chức không gian làm việc số và thiết lập quy tắc quản lý dữ liệu cá nhân.",
      skills: ["Quản lý hệ điều hành", "Tổ chức dữ liệu", "Quy tắc đặt tên"],
      target: "Biết cách thao tác cơ bản (như tạo, xóa bỏ, khôi phục và sao lưu) với hệ thống thư mục máy tính; xây dựng và rèn luyện thói quen sắp xếp dữ liệu học tập cá nhân một cách khoa học, đặt tên có hệ thống, giúp dễ dàng tìm kiếm và hạn chế sự cố nhầm/lạc mất tài liệu khi cần.",
      process: `Xác định công cụ thực hành:
File Explorer, Recycle Bin, các tổ hợp phím tắt trên bàn phím và các ổ lưu trữ trong hệ thống máy tính.

Quá trình thực hành kèm minh chứng:
Thực hiện các thao tác theo yêu cầu bài tập: Truy cập ứng dụng và ổ đĩa, tạo thư mục/tệp/tệp con, đổi tên, sao chép, di chuyển, xóa và khôi phục tệp. Mỗi thao tác đều đi kèm ảnh minh chụp màn hình mô tả cụ thể quá trình thực hiện.

Phân tích kết quả và kết luận:
Nắm được sự khác biệt về vai trò của các thao tác trên thư mục và tệp tin. Rút ra kết luận về ý nghĩa thực tế to lớn của kỹ năng này đối với sinh viên đại học.`,
      evidenceImg: "/images/Bài 1.png",
      report: "/docs/bai-1.pdf",
      status: "Đang hoàn thiện"
    },
    {
      id: 2,
      title: "Bài 2: Tìm kiếm và đánh giá thông tin học thuật",
      chapter: "Chương 2",
      shortDesc: "Áp dụng toán tử tìm kiếm nâng cao và đánh giá nguồn tin học thuật.",
      skills: ["Toán tử tìm kiếm", "Đánh giá CRAAP", "Phân tích tài liệu"],
      target: "Phát triển kỹ năng tìm kiếm và đánh giá thông tin học thuật từ các nguồn đáng tin cậy - một kỹ năng đặc biệt quan trọng dành cho sinh viên ngành Ngôn ngữ thường xuyên phải nghiên cứu và tham khảo số lượng tài liệu lớn, tránh rủi ro sử dụng dữ liệu từ nguồn tin thiếu tin cậy.",
      process: `Xác định chủ đề và phạm vi tìm kiếm:
Chủ đề lựa chọn thuộc lĩnh vực giáo dục ngôn ngữ và AI, phù hợp với ngành Ngôn ngữ Anh: “Ảnh hưởng của AI đối với ngôn ngữ học”.
Phạm vi tìm kiếm được giới hạn vào các nghiên cứu về ứng dụng và tác động của AI trong lĩnh vực ngôn ngữ học, sử dụng các Từ khóa tìm kiếm chính bằng tiếng Anh và các Từ khóa tiếng Việt để tham khảo thêm.

Quá trình thực hành:
- Bước 1: Thu thập 10 tài liệu tham khảo từ 4 nguồn khác nhau (Cơ sở dữ liệu học thuật Google Scholar, Tạp chí khoa học chuyên ngành, Sách chuyên khảo, nguồn mở trên Internet.)
- Bước 2: Phân tích độ tin cậy của 10 tài liệu đã thu thập dựa trên 5 tiêu chí CRAAP (Currency, Relevance, Accuracy, Authority, Purpose). Đánh giá mỗi tiêu chí riêng lẻ thể hiện độ tin cậy cao hay thấp.
- Bước 3: Tổng hợp lại các nguồn thông tin thành một bảng với đánh giá tổng quan và xếp hạng độ tin cậy từ thấp nhất đến cao nhất theo thang từ 1 → 10.

Kết luận và danh mục tham khảo:
Đưa ra kết luận tổng quan về các tài liệu đã đánh giá và cung cấp danh mục các tài liệu tham khảo được sắp xếp và định dạng chuẩn Harvard ở trang cuối báo cáo.`,
      evidenceImg: "/images/Bài 2.png",
      report: "/docs/bai-2.pdf",
      status: "Đang hoàn thiện"
    },
    {
      id: 3,
      title: "Bài 3: Viết prompt hiệu quả cho các tác vụ học tập",
      chapter: "Chương 3",
      shortDesc: "Kỹ thuật giao tiếp với mô hình ngôn ngữ lớn (LLMs).",
      skills: ["Prompt Engineering", "Tư duy phân tích", "Sử dụng GenAI"],
      target: "Phát triển kỹ năng viết prompt thông minh, đặt câu hỏi rõ ràng, có ngữ cảnh và áp dụng các kỹ thuật prompting nâng cao để khai thác hiệu quả khả năng của các mô hình AI phục vụ học tập.",
      process: `Lựa chọn tác vụ viết prompt:
Với mỗi tác vụ học tập yêu cầu (tóm tắt tài liệu, giải thích khái niệm và tạo bộ câu hỏi ôn tập), em chọn ra 3 đề tài cụ thể và phân tích tổng quan mục tiêu lẫn khó khăn của AI đối với từng tác vụ. Cụ thể 3 tác vụ đã lựa chọn:
- Tác vụ 1: “Tóm tắt bài đọc học thuật về 'Critical Period Hypothesis in SLA'.”
- Tác vụ 2: “Phân biệt khái niệm 'Nghĩa học (Semantics) và Ngữ dụng học (Pragmatics)'.”
- Tác vụ 3: “Tạo bộ câu hỏi ôn tập chủ đề 'Communicative Language Teaching - CLT'.”

Xây dựng prompts:
Với mỗi tác vụ, thiết kế các phiên bản prompt theo 3 mức độ từ cơ bản đến nâng cao:
- Mức độ 1: Prompt cơ bản - đơn giản, ngắn gọn.
- Mức độ 2: Prompt cải tiến - chi tiết hơn, có cấu trúc.
- Mức độ 3: Prompt nâng cao - áp dụng các kỹ thuật prompt engineering như role prompting, chain-of-thought, few-shot examples.

Thử nghiệm và so sánh:
Tiến hành chạy thực nghiệm hệ thống prompt bằng phần mềm ChatGPT, sau đó tạo bảng đối chiếu kết quả đầu ra giữa mỗi cấp độ prompt cho từng tác vụ. Từ đó, rút ra đánh giá thực nghiệm về ưu, nhược điểm của mỗi cấp độ prompt cơ bản, cải tiến và nâng cao.

Phân tích và đúc kết:
Dựa vào kết quả so sánh, phân tích nguyên nhân tạo nên sự khác biệt về hiệu quả là dựa vào 3 yếu tố cốt lõi trong kỹ thuật ra lệnh, từ đó rút ra bộ 3 nguyên tắc viết prompt hiệu quả:
- Nguyên tắc 1: Luôn đặt ra chỉ dẫn rõ ràng và cụ thể (Clarity and Specificity).
- Nguyên tắc 2: Cung cấp ngữ cảnh cho AI (Provide Context).
- Nguyên tắc 3: Xác định rõ vai trò và đối tượng cho AI (Define Role and Audience).`,
      evidenceImg: "/images/Bài 3.png",
      report: "/docs/bai-3.pdf",
      status: "Đang hoàn thiện"
    },
    {
      id: 4,
      title: "Bài 4: Sử dụng công cụ hợp tác trực tuyến cho dự án nhóm",
      chapter: "Chương 4",
      shortDesc: "Sử dụng các nền tảng số để quản lý dự án và làm việc nhóm.",
      skills: ["Quản lý dự án", "Giao tiếp số"],
      target: "Phối hợp hiệu quả với nhóm qua các công cụ hợp tác trực tuyến; thể hiện năng lực quản lý, điều phối dự án nhóm có hệ thống và kế hoạch.",
      process: `Giới thiệu dự án và công cụ:
Dự án lựa chọn: Hoàn thiện Reading Package của bộ môn “Viết luận đại học” với nhóm gồm 3 thành viên.
- Công cụ quản lý dự án: Trello
- Công cụ soạn thảo tài liệu cộng tác: Google Docs
- Công cụ lưu trữ và chia sẻ tệp: Google Drive
- Công cụ giao tiếp nhóm: Messenger, Google Meet

Quá trình làm việc nhóm:
Em phân tích cụ thể từng công cụ hợp tác có vai trò như thế nào và đã được ứng dụng ra sao trong quá trình làm việc nhóm. Mỗi ứng dụng và quá trình sử dụng chi tiết đều được đính kèm những hình ảnh minh chứng và minh họa cụ thể cùng với tài khoản cá nhân được hiển thị, thể hiện rõ ràng quá trình hợp tác người thật việc thật.

Phân tích thách thức, giải pháp và kết luận:
Phân tích và đánh giá sâu sắc 3 thách thức và 3 giải pháp trong quá trình hợp tác nhóm, tổng quát bao gồm:
- Khó khăn trong việc theo dõi tiến độ và đảm bảo các thành viên hoàn thành công việc đúng hạn → Giải pháp Trello.
- Khó khăn trong việc thống nhất nội dung và tránh trùng lặp thông tin → Giải pháp Google Docs.
- Hạn chế trong giao tiếp trực tuyến và nguy cơ hiểu sai yêu cầu công việc → Giải pháp Google Meet.

Từ đó, rút ra kinh nghiệm về cách quản lý và sử dụng công cụ cho dự án nhóm, kết luận rằng năng lực sử dụng công cụ hợp tác trực tuyến là kỹ năng cần thiết cho mỗi sinh viên xuyên suốt quá trình học tập.`,
      evidenceImg: "/images/Bài 4.png",
      report: "/docs/bai-4.pdf",
      status: "Đang hoàn thiện"
    },
    {
      id: 5,
      title: "Bài 5: Sử dụng AI tạo sinh để hỗ trợ sáng tạo nội dung",
      chapter: "Chương 5",
      shortDesc: "Tạo ra các sản phẩm truyền thông số có sự hỗ trợ của Trí tuệ nhân tạo.",
      skills: ["Thiết kế số", "Tạo sinh hình ảnh/văn bản", "Công cụ thiết kế AI"],
      target: "Sử dụng các công cụ AI tạo sinh để hỗ trợ quá trình sáng tạo nội dung số trong khi đảm bảo các vấn đề liêm chính và đạo đức liên quan.",
      process: `Giới thiệu dự án và công cụ:
- Dự án thiết kế: infographic + bài thuyết trình ngắn chủ đề “Ứng dụng AI trong việc nâng cao kỹ năng nói tiếng Anh của sinh viên đại học”.
- Xác định công cụ AI sử dụng và tạo bảng phân tích vai trò cụ thể: ChatGPT, Google Gemini, Adobe Firefly, Canva AI (vai trò tổng quát: hỗ trợ tìm ý tưởng, xây dựng nội dung, tạo chất liệu hình ảnh minh họa, tối ưu bố cục thiết kế.)

Quá trình sử dụng AI:
Quy trình thực hiện được chia thành 4 bước: xác định chủ đề, tạo bản nháp nội dung, tạo chất liệu hình ảnh, sau đó tích hợp và chỉnh sửa trên Canva.
Báo cáo đã ghi chú rõ từng bước, kèm ảnh minh chứng cụ thể từ quá trình prompting đến sản phẩm hoàn thiện cuối cùng. Các câu lệnh đầu vào cho AI được trích dẫn lại đầy đủ, đi cùng với kết quả đầu ra của AI và chi tiết cách bản thân xử lí, chỉnh sửa cho phù hợp với dấu ấn cá nhân.

So sánh và phân tích:
Em tạo bảng so sánh cụ thể điểm mạnh, điểm yếu và cách sử dụng hiệu quả của từng công cụ AI đã sử dụng. Từ những so sánh riêng đó, em rút ra vai trò chung của AI trong sáng tạo (rút ngắn thời gian), những phần AI đã làm tốt (gợi ý ý tưởng, viết nháp, tạo phương án đầu, so sánh nhiều cách trình bày) và còn hạn chế (khả năng đánh giá chính xác thực tế, hiểu sắc thái bối cảnh thật, mức độ độc đáo của thiết kế.)

Đạo đức AI và kết luận:
Sau dự án, em rút ra 3 vấn đề đạo đức cốt lõi:
1) Phải khai báo rõ việc có sử dụng AI trong quá trình sáng tạo.
2) Không coi hình ảnh hoặc nội dung do AI tạo ra là bằng chứng học thuật nếu chưa được kiểm chứng.
3) Không sao chép nguyên văn toàn bộ kết quả AI mà không biên tập, đánh giá lại, sản phẩm cuối cùng phải có đóng góp cá nhân trên 50%.

Từ đây, em nhận thấy vai trò quan trọng của người học để kiểm tra, đánh giá và tinh chỉnh sản phẩm mà AI cung cấp. Khi được sử dụng có trách nhiệm, AI tạo sinh là công cụ mạnh mẽ giúp sinh viên làm việc nhanh hơn, sáng tạo hơn và rèn luyện tư duy biên tập tốt hơn.`,
      evidenceImg: "/images/Bài 5.png",
      report: "/docs/bai-5.pdf",
      status: "Đang hoàn thiện"
    },
    {
      id: 6,
      title: "Bài 6: Sử dụng AI có trách nhiệm trong học tập và nghiên cứu",
      chapter: "Chương 6",
      shortDesc: "Hiểu và áp dụng các quy tắc đạo đức khi sử dụng công nghệ và AI.",
      skills: ["Xây dựng nguyên tắc", "Liêm chính học thuật", "Đạo đức AI"],
      target: "Lĩnh hội kiến thức về giới hạn đạo đức của AI, hiểu rõ ranh giới giữa hỗ trợ hợp lý và gian lận học thuật để sử dụng Trí tuệ nhân tạo một cách có đạo đức và trách nhiệm trong học tập và nghiên cứu.",
      process: `Nghiên cứu chính sách VNU:
Thông qua nghiên cứu chính sách của VNU về việc sử dụng Trí tuệ nhân tạo trong học tập và nghiên cứu, em xác định được rằng ĐHQGHN không cấm tuyệt đối việc sử dụng AI trong học tập, mà khuyến khích các sinh viên trang bị kiến thức số nền tảng song song với đảm bảo đạo đức AI và liêm chính học thuật.

Thực hiện nhiệm vụ học tập cùng AI:
- Nhiệm vụ: Chuẩn bị nội dung thuyết trình ngắn tiếng Anh: “The role of English podcasts and short videos in improving students’ listening and speaking confidence”.
- Công cụ sử dụng: ChatGPT, Google Gemini, Canva AI.
Mỗi công cụ đều được quy định mục đích sử dụng và cách kiểm soát rõ ràng trong bảng báo cáo, liên tục nhấn mạnh AI chỉ đóng vai trò hỗ trợ dàn ý, gợi ý diễn đạt, phản biện luận điểm và đề xuất bố cục; tuyệt đối không bê nguyên văn phản hồi của AI làm sản phẩm cuối cùng. Bản thân người sử dụng là em vẫn đóng vai trò cốt lõi đọc lại, chỉnh sửa, bổ sung ví dụ cá nhân và đối chiếu với yêu cầu của học phần cho phù hợp, đảm bảo nguyên tắc đạo đức số.
Các bước sử dụng AI, prompt sử dụng, kết quả đầu ra và phiên bản tự chỉnh sửa cá nhân được liệt kê đầy đủ bằng bảng biểu, đi kèm minh chứng ảnh chụp cụ thể từ các bước trung gian cho tới sản phẩm cuối cùng.

Vấn đề đạo đức và nguyên tắc cá nhân:
Em đi sâu phân tích 3 vấn đề đạo đức được đặt ra khi sử dụng AI trong học tập:
1. Ranh giới giữa hỗ trợ hợp lý và gian lận học thuật
2. Vấn đề về quyền sở hữu trí tuệ và trích dẫn
3. Tác động đến quá trình học tập và phát triển kỹ năng

Và sau khi lĩnh hội hoàn toàn kiến thức về ranh giới AI và liêm chính học thuật, em tự đặt ra bộ 7 nguyên tắc cá nhân về việc sử dụng AI có trách nhiệm trong học tập:
1) Chỉ sử dụng AI khi đề bài cho phép hoặc không cấm. Nếu chưa rõ, cần hỏi lại giảng viên.
2) Luôn ghi rõ công cụ AI đã dùng, mục đích dùng và mức độ ảnh hưởng đến bài làm.
3) Không nộp nguyên văn đầu ra AI. Mọi nội dung phải được đọc lại, chỉnh sửa và viết bằng hiểu biết của bản thân.
4) Không đưa dữ liệu cá nhân, bài làm riêng tư hoặc tài liệu chưa được phép công khai vào công cụ AI.
5) Không dùng AI để tạo nguồn giả, trích dẫn giả hoặc làm sai lệch thông tin học thuật.
6) Luôn kiểm chứng thông tin quan trọng bằng nguồn chính thức, tài liệu học thuật hoặc hướng dẫn của môn học.
7) Dùng AI để học sâu hơn, không dùng AI để né tránh quá trình tư duy, luyện tập và chịu trách nhiệm cá nhân.

Infographic và kết luận:
File báo cáo đã đính kèm 1 infographic về 7 nguyên tắc sử dụng AI đúng đắn trong học tập.
Qua bài học, ta kết luận AI tạo sinh là công cụ hỗ trợ hữu ích khi sinh viên sử dụng AI một cách minh bạch, có kiểm chứng và dấu ấn đóng góp cá nhân rõ ràng. Khi được sử dụng đúng cách, AI có thể giúp việc học tiếng Anh trở nên chủ động hơn, nhưng không thể thay thế sự luyện tập, tư duy phản biện và thái độ trung thực của người học.`,
      evidenceImg: "/images/Bài 6.png",
      report: "/docs/bai-6.pdf",
      status: "Đang hoàn thiện"
    }
  ],
  rubric: [
    { criteria: "Thiết kế và cấu trúc Portfolio", excellent: "Chuyên nghiệp, sáng tạo, điều hướng tốt, UI/UX hiện đại.", status: "Hoàn thiện 90%", action: "Bổ sung ảnh minh họa thực tế" },
    { criteria: "Bài 1: Quản lý tệp/thư mục", excellent: "Cấu trúc tối ưu, quy tắc đặt tên rõ ràng, minh họa sắc nét.", status: "Chưa có ảnh", action: "Chụp ảnh màn hình cấu trúc thư mục trên máy tính" },
    { criteria: "Bài 2: Tìm kiếm & Đánh giá", excellent: "Bảng đánh giá CRAAP chi tiết, dùng toán tử nâng cao hiệu quả.", status: "Đang viết báo cáo", action: "Hoàn thiện file PDF báo cáo CRAAP" },
    { criteria: "Bài 3: Viết Prompt hiệu quả", excellent: "So sánh rõ ràng trước/sau, phân tích lỗi và cải tiến sâu sắc.", status: "Thiếu dữ liệu", action: "Chụp ảnh màn hình đoạn chat với AI" },
    { criteria: "Bài 4: Hợp tác trực tuyến", excellent: "Minh chứng rõ việc chia task, họp nhóm và quản lý tiến độ.", status: "Thiếu dữ liệu", action: "Chụp ảnh Trello/Notion nhóm" },
    { criteria: "Bài 5: Sáng tạo nội dung với AI", excellent: "Sản phẩm đẹp, sáng tạo, trích dẫn rõ phần nào dùng AI.", status: "Chưa có sản phẩm", action: "Upload video/hình ảnh hoàn thiện" },
    { criteria: "Bài 6: AI có trách nhiệm", excellent: "Bộ nguyên tắc cá nhân chặt chẽ, tư duy phản biện cao.", status: "Đang soạn thảo", action: "Viết chi tiết bộ 5 nguyên tắc ra Word" },
  ]
};
