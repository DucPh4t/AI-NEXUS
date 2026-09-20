import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  FileText,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Layers,
  Sparkles,
  ArrowRight,
  Compass,
  Clock,
  TrendingDown,
  Building2,
  Briefcase,
  HardHat,
  Lock,
  ChevronDown,
  Check,
  Zap,
  FileSpreadsheet,
  Calculator,
  Download,
  Quote
} from 'lucide-react';

interface LandingStorytellingProps {
  onGetStarted: () => void;
  onExploreDemo: () => void;
}

export const LandingStorytelling: React.FC<LandingStorytellingProps> = ({
  onGetStarted,
  onExploreDemo,
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [calcFloors, setCalcFloors] = useState<number>(25);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] as const }
  };

  const handleDownloadSampleBoQ = () => {
    const csvContent = "data:text/csv;charset=utf-8," 
      + "STT,Handle_CAD,Ten_Phong,Chu_Vi_m,Chieu_Cao_m,Khau_Tru_Cua_Di_m2,Khau_Tru_Cua_So_m2,Dien_Tich_Son_Tinh_m2\n"
      + "1,LWPOLYLINE #8F31,Phong Khach A101,26.50,3.20,-1.98,-2.24,80.58\n"
      + "2,LWPOLYLINE #4A9C,Phong Ngu Master A102,18.40,3.20,-1.98,-2.30,54.60\n"
      + "3,LWPOLYLINE #3B12,Phong Ngu Phu A103,15.20,3.20,-1.98,-1.80,44.86\n"
      + "4,LWPOLYLINE #6C44,Hanh Lang,21.80,3.20,-3.96,0.00,65.80\n";
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "DuAn_Landmark_BoQ_Son_TCVN8652.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id="storytelling" className="bg-[#0c0e12] text-white overflow-hidden drafting-grid-dark">
      {/* ─────────────────────────────────────────────────────────────
          1. BỐI CẢNH & ĐỐI CHIẾU: THỦ CÔNG VS AI SPATIAL TAKE-OFF
      ───────────────────────────────────────────────────────────── */}
      <section className="py-14 sm:py-20 border-b border-white/10 bg-[#0a0c10] relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#ffc474] bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30">
              Đối chiếu Thực tế // Đo tay vs AI
            </span>
            <h2 className="font-serif-cormorant text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight mt-3 leading-[1.15]">
              Rút ngắn thời gian bóc tách từ 14 ngày còn 2 giờ.
            </h2>
            <p className="text-sm sm:text-base text-white/70 mt-3 leading-relaxed font-sans-tight max-w-2xl mx-auto">
              Bóc tách diện tích sơn hoàn thiện là công tác tiêu tốn nhiều thời gian nhất nhưng lại dễ phát sinh sai lệch và tranh chấp nhất khi nghiệm thu quyết toán.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Cột 1: Đo tay truyền thống */}
            <motion.div 
              {...fadeInUp}
              className="p-6 sm:p-7 rounded-2xl border border-white/10 bg-[#12141a]/90 relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="font-mono text-xs font-bold text-white/70 uppercase tracking-wider">
                      Đo tay thủ công (PLINE & Excel)
                    </span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-rose-500/10 text-rose-300 border border-rose-500/20">
                    Rủi ro cao
                  </span>
                </div>

                <div className="space-y-4 mt-5">
                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-rose-400 mt-1 shrink-0" />
                    <div>
                      <h4 className="text-sm font-semibold text-white">14 ngày bóc tách cho toà tháp 25 tầng</h4>
                      <p className="text-xs text-white/60 mt-1">Kỹ sư phải bo từng góc phòng, tự tính nhẩm trừ từng cửa đi và cửa sổ trên hàng chục mặt bằng.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-4 h-4 text-amber-400 mt-1 shrink-0" />
                    <div>
                      <h4 className="text-sm font-semibold text-white">Sai số 3.5% – 6.0% diện tích lỗ mở</h4>
                      <p className="text-xs text-white/60 mt-1">Dễ bỏ sót cửa hoặc tính trùng vách giáp ranh, dẫn đến thiếu hụt vật tư hoặc đội chi phí công trình.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <FileSpreadsheet className="w-4 h-4 text-white/50 mt-1 shrink-0" />
                    <div>
                      <h4 className="text-sm font-semibold text-white">Con số chết Excel – Khó giải trình</h4>
                      <p className="text-xs text-white/60 mt-1">Khi Ban kiểm toán hoặc Chủ đầu tư chất vấn, kỹ sư phải mất 3 ngày mở lại từng bản vẽ để đo tay đối chứng.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 text-xs font-mono text-white/40">
                Hiệu suất: Thấp · Rủi ro quyết toán cao
              </div>
            </motion.div>

            {/* Cột 2: AI Spatial Take-off */}
            <motion.div 
              {...fadeInUp}
              className="p-6 sm:p-7 rounded-2xl border border-amber-300/35 bg-[#141722] relative flex flex-col justify-between shadow-[0_10px_35px_rgba(255,196,116,0.08)]"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ffc474] shadow-[0_0_8px_rgba(255,196,116,0.6)]" />
                    <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                      AI Spatial Take-off Platform
                    </span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                    Chính xác 99.8%
                  </span>
                </div>

                <div className="space-y-4 mt-5">
                  <div className="flex items-start gap-3">
                    <Zap className="w-4 h-4 text-[#ffc474] mt-1 shrink-0" />
                    <div>
                      <h4 className="text-sm font-semibold text-white">2 giờ hoàn tất toàn bộ toà tháp</h4>
                      <p className="text-xs text-white/70 mt-1">Đọc trực tiếp vector DXF, tự động khép kín đa giác phòng và khấu trừ lỗ mở chỉ sau 1 click nạp file.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 mt-1 shrink-0" />
                    <div>
                      <h4 className="text-sm font-semibold text-white">Chuẩn hóa 100% theo TCVN 8652:2012</h4>
                      <p className="text-xs text-white/70 mt-1">Tự động nhận diện cửa đi A-DOOR và cửa sổ A-WINDOW để trừ chính xác từng cm² diện tích sơn tường.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#ffc474] mt-1 shrink-0" />
                    <div>
                      <h4 className="text-sm font-semibold text-white">Liên kết 2 chiều CAD ⇄ BoQ</h4>
                      <p className="text-xs text-white/70 mt-1">Bấm vào bất kỳ dòng nào trong bảng dự toán sẽ tự động highlight phòng tương ứng trên bản vẽ CAD.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 text-xs font-mono text-[#ffc474]">
                Hiệu suất: Tăng 10x · Minh bạch kiểm toán 100%
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. QUY TRÌNH 4 BƯỚC KHÉP KÍN (WORKFLOW)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-14 sm:py-20 border-b border-white/10 bg-[#0e1015] relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#ffc474] bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30">
              Quy trình Tự động Hóa
            </span>
            <h2 className="font-serif-cormorant text-3xl sm:text-4xl font-semibold text-white tracking-tight mt-3">
              Từ file CAD 2D thô đến bảng dự toán hoàn chỉnh
            </h2>
            <p className="text-sm text-white/70 mt-2 font-sans-tight">
              Bốn bước xử lý khép kín, loại bỏ toàn bộ các công đoạn đo vẽ và nhập liệu thủ công.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                step: '01',
                title: 'Nạp Vector DXF Gốc',
                desc: 'Đọc trực tiếp thực thể AutoCAD (LWPOLYLINE, LINE, TEXT) từ file DXF R12–2024. Không qua raster pixel.',
                badge: 'Vector AC1032',
                icon: FileText
              },
              {
                step: '02',
                title: 'Phân tích Không gian AI',
                desc: 'Tự động khép kín đa giác phòng, vá các khe hở ≤ 50mm và phân loại cửa đi, cửa sổ theo layer.',
                badge: 'Spatial Engine',
                icon: Layers
              },
              {
                step: '03',
                title: 'Kỹ sư Thẩm định (HITL)',
                desc: 'Cảnh báo các vị trí bất thường để kỹ sư trực tiếp phê duyệt hoặc hiệu chỉnh đỉnh chỉ trong 1 click.',
                badge: 'Auditing 1-Click',
                icon: ShieldCheck
              },
              {
                step: '04',
                title: 'Xuất BoQ & Đơn giá',
                desc: 'Tính toán diện tích sơn theo TCVN 8652:2012, định mức thùng sơn và xuất hồ sơ Excel đầy đủ công thức sống.',
                badge: 'Live BoQ Export',
                icon: FileSpreadsheet
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  {...fadeInUp}
                  className="p-5 rounded-xl border border-white/10 bg-[#12141a] hover:border-amber-300/30 transition-all group flex flex-col justify-between shadow-lg"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-2xl font-bold text-white/20 group-hover:text-[#ffc474] transition-colors">
                        {item.step}
                      </span>
                      <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#ffc474]">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>
                    <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-xs text-white/65 leading-relaxed font-sans-tight">{item.desc}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/5">
                    <span className="inline-block text-[10px] font-mono text-amber-300/80 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                      {item.badge}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. BENTO-GRID: 3 TRỤ CỘT KỸ THUẬT CỐT LÕI
      ───────────────────────────────────────────────────────────── */}
      <section id="detection" className="py-14 sm:py-20 border-b border-white/10 bg-[#0c0e12] relative scroll-mt-14">
        <div id="estimate" className="scroll-mt-20" />
        <div id="traceability" className="scroll-mt-20" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#ffc474] bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30">
              Công nghệ Lõi
            </span>
            <h2 className="font-serif-cormorant text-3xl sm:text-4xl font-semibold text-white tracking-tight mt-3">
              Ba Nền tảng Kỹ thuật Độc bản
            </h2>
            <p className="text-sm text-white/70 mt-2 font-sans-tight">
              Đảm bảo số liệu bóc tách chuẩn xác đến từng đỉnh hình học, vững vàng trước mọi đợt thanh tra quyết toán.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Trụ cột 1: TCVN 8652:2012 */}
            <motion.div
              {...fadeInUp}
              className="p-6 rounded-2xl bg-[#13151d] border border-white/10 shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-[#ffc474] mb-4">
                  <Calculator className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono text-[#ffc474] font-bold">TCVN 8652:2012</span>
                <h3 className="text-lg font-bold text-white mt-1">Khấu trừ Lỗ mở Tự động</h3>
                <p className="text-xs text-white/70 mt-2.5 leading-relaxed font-sans-tight">
                  Áp dụng nghiêm ngặt công thức tiêu chuẩn: Diện tích sơn tường = Chu vi × Chiều cao tầng - Diện tích toàn bộ cửa đi và cửa sổ kiến trúc.
                </p>

                <div className="mt-4 p-3 rounded-lg bg-[#0c0e12] border border-white/10 font-mono text-xs text-white/80 space-y-1">
                  <div className="text-amber-300 font-semibold">S_sơn = (P × H) - Σ(S_cửa)</div>
                  <div className="text-[11px] text-white/50">Cửa D01: 0.9m × 2.2m = -1.98 m²</div>
                  <div className="text-[11px] text-white/50">Cửa W02: 1.6m × 1.4m = -2.24 m²</div>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-white/10 text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5" /> Khấu trừ tự động 100%
              </div>
            </motion.div>

            {/* Trụ cột 2: Kỹ sư Thẩm định (HITL) */}
            <motion.div
              {...fadeInUp}
              className="p-6 rounded-2xl bg-[#141722] border border-amber-300/35 shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#ffc474]/15 border border-[#ffc474]/30 flex items-center justify-center text-[#ffc474] mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono text-[#ffc474] font-bold">HUMAN-IN-THE-LOOP</span>
                <h3 className="text-lg font-bold text-white mt-1">Kỹ sư Toàn quyền Thẩm định</h3>
                <p className="text-xs text-white/70 mt-2.5 leading-relaxed font-sans-tight">
                  AI gợi ý - Kỹ sư quyết định. Hệ thống tự động khoanh vùng các vị trí tường hở, ranh giới chưa khép kín để kỹ sư phê duyệt hoặc nắn đỉnh chỉ với 1 click.
                </p>

                <div className="mt-4 p-3 rounded-lg bg-[#0c0e12] border border-amber-500/20 font-mono text-xs space-y-1.5">
                  <div className="flex justify-between items-center text-amber-300">
                    <span>⚠️ Khe hở tường #A103:</span>
                    <span className="font-bold">24 mm</span>
                  </div>
                  <div className="text-[11px] text-emerald-400">✓ AI đã tự vá snapping &lt; 50mm</div>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-white/10 text-xs font-mono text-[#ffc474] flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5" /> Không bao giờ tin mù quáng vào AI
              </div>
            </motion.div>

            {/* Trụ cột 3: Truy vết 2 Chiều */}
            <motion.div
              {...fadeInUp}
              className="p-6 rounded-2xl bg-[#13151d] border border-white/10 shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
                  <Sparkles className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono text-emerald-400 font-bold">2-WAY TRACEABILITY</span>
                <h3 className="text-lg font-bold text-white mt-1">Truy vết Ngược CAD ⇄ BoQ</h3>
                <p className="text-xs text-white/70 mt-2.5 leading-relaxed font-sans-tight">
                  Mỗi con số trong bảng tính Excel đều gắn vĩnh viễn với Handle thực thể CAD DXF gốc. Khi thanh tra chất vấn, click vào dòng dự toán là bản vẽ tự zoom đến phòng tương ứng.
                </p>

                <div className="mt-4 p-3 rounded-lg bg-[#0c0e12] border border-white/10 font-mono text-xs text-white/80 space-y-1">
                  <div className="text-emerald-400 font-semibold">Handle DXF: #8F31</div>
                  <div className="text-[11px] text-white/50">Dòng BoQ #1: Phòng Khách A101</div>
                  <div className="text-[11px] text-white/50">Độ tin cậy: 98% · Đã kiểm định</div>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-white/10 text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5" /> Minh bạch kiểm toán 100%
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. HIỆU QUẢ KINH TẾ (ROI CALCULATOR) & MẪU DỰ TOÁN BOQ
      ───────────────────────────────────────────────────────────── */}
      <section id="roi-assurance" className="py-14 sm:py-20 border-b border-white/10 bg-[#0e1017] relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#ffc474] bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30">
              Hiệu quả Kinh tế // ROI Bảo chứng
            </span>
            <h2 className="font-serif-cormorant text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight mt-3">
              Dự tính Tiết kiệm theo Quy mô Dự án
            </h2>
            <p className="text-white/65 text-xs sm:text-sm mt-2 font-sans-tight">
              Kéo thanh trượt để xem ngay số giờ công, chi phí nhân sự và lượng vật tư sơn được bảo vệ.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* ROI Slider Panel (7 cols) */}
            <motion.div
              {...fadeInUp}
              className="lg:col-span-7 p-6 sm:p-8 rounded-2xl border border-white/10 bg-[#12141c] shadow-2xl space-y-6"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/10">
                <div>
                  <span className="text-xs font-mono text-white/50 block">Quy mô công trình</span>
                  <span className="text-2xl font-bold font-mono text-[#ffc474]">{calcFloors} Tầng</span>
                </div>
                <div className="text-right">
                  <span className="text-xs font-mono text-white/50 block">Diện tích sàn ước tính</span>
                  <span className="text-sm font-mono text-white/90 font-semibold">
                    ~{(calcFloors * 1400).toLocaleString('vi-VN')} m² sàn
                  </span>
                </div>
              </div>

              {/* Slider Input */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono text-white/60">
                  <span>5 tầng (Thấp tầng)</span>
                  <span className="text-[#ffc474] font-bold">{calcFloors} tầng</span>
                  <span>50 tầng (Toà tháp cao cấp)</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="50"
                  step="1"
                  value={calcFloors}
                  onChange={(e) => setCalcFloors(Number(e.target.value))}
                  className="w-full h-2.5 bg-[#1e2230] rounded-lg appearance-none cursor-pointer accent-[#ffc474]"
                />
              </div>

              {/* 3 Metrics Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3.5 rounded-xl bg-[#161822] border border-white/10 text-center">
                  <span className="text-xs text-white/60 font-sans-tight block">Thời gian bóc tách</span>
                  <div className="text-lg font-bold font-mono text-emerald-400 mt-1">
                    {(calcFloors * 0.1).toFixed(1)} giờ
                  </div>
                  <span className="text-[10px] text-white/40 font-mono">thay vì {calcFloors * 4} giờ đo tay</span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#161822] border border-white/10 text-center">
                  <span className="text-xs text-white/60 font-sans-tight block">Giờ công tiết kiệm</span>
                  <div className="text-lg font-bold font-mono text-[#ffc474] mt-1">
                    {Math.round(calcFloors * 3.8)} giờ
                  </div>
                  <span className="text-[10px] text-white/40 font-mono">giảm 92% khối lượng</span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#161822] border border-white/10 text-center">
                  <span className="text-xs text-white/60 font-sans-tight block">Chi phí bảo vệ được</span>
                  <div className="text-lg font-bold font-mono text-white mt-1">
                    ~{Math.round(calcFloors * 7.5)} tr VNĐ
                  </div>
                  <span className="text-[10px] text-white/40 font-mono">chống hao hụt vật tư</span>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-300 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Hoàn vốn (Payback) ngay từ dự án đầu tiên sau 1 lần xuất hồ sơ thầu.</span>
              </div>
            </motion.div>

            {/* BoQ Sample Preview Card (5 cols) */}
            <motion.div
              {...fadeInUp}
              className="lg:col-span-5 p-6 rounded-2xl border border-white/10 bg-[#12141a] shadow-2xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <FileSpreadsheet className="w-4 h-4 text-[#ffc474]" />
                    <span className="font-mono text-xs font-bold text-white">Mẫu Hồ Sơ BoQ Excel</span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/15 px-2 py-0.5 rounded border border-emerald-500/30">
                    Công thức sống
                  </span>
                </div>

                <p className="text-xs text-white/70 mt-3 font-sans-tight">
                  Bảng dự toán xuất ra chứa công thức `=ROUND(...)` nguyên bản, sẵn sàng nộp cho Ban quản lý dự án hoặc Chủ đầu tư.
                </p>

                {/* Mini Preview Table */}
                <div className="mt-4 rounded-lg border border-white/10 overflow-hidden text-[11px] font-mono">
                  <div className="bg-[#181a24] text-white/60 px-3 py-1.5 font-bold border-b border-white/10 grid grid-cols-3">
                    <span>Phòng / Handle</span>
                    <span className="text-right">Khấu trừ cửa</span>
                    <span className="text-right text-[#ffc474]">Sơn thực</span>
                  </div>
                  <div className="divide-y divide-white/5 bg-[#0e1017]">
                    <div className="px-3 py-1.5 grid grid-cols-3 text-white/80">
                      <span className="truncate">A101 (#8F31)</span>
                      <span className="text-right text-rose-400">-4,22 m²</span>
                      <span className="text-right font-bold text-white">80,58 m²</span>
                    </div>
                    <div className="px-3 py-1.5 grid grid-cols-3 text-white/80">
                      <span className="truncate">A102 (#4A9C)</span>
                      <span className="text-right text-rose-400">-4,28 m²</span>
                      <span className="text-right font-bold text-white">54,60 m²</span>
                    </div>
                    <div className="px-3 py-1.5 grid grid-cols-3 text-white/80">
                      <span className="truncate">A103 (#3B12)</span>
                      <span className="text-right text-rose-400">-3,78 m²</span>
                      <span className="text-right font-bold text-white">44,86 m²</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10">
                <button
                  onClick={handleDownloadSampleBoQ}
                  className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer border border-white/20 active:scale-98"
                >
                  <Download className="w-3.5 h-3.5 text-[#ffc474]" />
                  <span>Tải file Excel BoQ mẫu (.csv)</span>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. BẢO CHỨNG ĐỐI TÁC & BẢO MẬT BẢN VẼ
      ───────────────────────────────────────────────────────────── */}
      <section id="security" className="py-14 sm:py-20 border-b border-white/10 bg-[#0a0c10] relative">
        <div id="social-proof" className="scroll-mt-20" />
        <div id="cad-security" className="scroll-mt-20" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Partner Strip */}
          <motion.div {...fadeInUp} className="text-center mb-12">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-white/50 block mb-4">
              Được tin cậy bởi các kỹ sư dự toán tại các tổng thầu hàng đầu
            </span>
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 opacity-60 grayscale hover:grayscale-0 transition-all text-xs sm:text-sm font-mono tracking-widest text-white/80">
              <span className="border border-white/10 px-3 py-1 rounded">COTECCONS</span>
              <span className="border border-white/10 px-3 py-1 rounded">HOA BINH CORP</span>
              <span className="border border-white/10 px-3 py-1 rounded">RICONS</span>
              <span className="border border-white/10 px-3 py-1 rounded">VINGROUP</span>
              <span className="border border-white/10 px-3 py-1 rounded">GAMUDA LAND</span>
            </div>
          </motion.div>

          {/* Testimonial Quote */}
          <motion.div
            {...fadeInUp}
            className="p-6 sm:p-8 rounded-2xl bg-[#13151f] border border-white/10 max-w-3xl mx-auto relative text-center"
          >
            <Quote className="w-8 h-8 text-[#ffc474]/30 mx-auto mb-3" />
            <p className="text-sm sm:text-base text-white/90 italic font-sans-tight leading-relaxed">
              "Trước đây mỗi khi Chủ đầu tư yêu cầu bảo vệ khối lượng sơn toà tháp 25 tầng, phòng QS phải mất 3 ngày đo lại từng phòng. Giờ đây nhờ tính năng đối soát 2 chiều, chỉ cần click vào dòng BoQ là ra ngay phòng CAD với Handle bất biến."
            </p>
            <div className="mt-4 pt-3 border-t border-white/10 text-xs font-mono">
              <span className="text-[#ffc474] font-bold">KTS. Nguyễn Hoàng Nam</span>
              <span className="text-white/50 ml-2">· Trưởng bộ phận Dự toán & Đấu thầu</span>
            </div>
          </motion.div>

          {/* Security Banner */}
          <motion.div
            {...fadeInUp}
            className="mt-8 p-4 sm:p-5 rounded-xl bg-[#12141a] border border-white/10 max-w-3xl mx-auto flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left"
          >
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
              <Lock className="w-5 h-5" />
            </div>
            <div className="text-xs text-white/70">
              <strong className="text-white block sm:inline font-mono">Bảo mật Bản vẽ Tuyệt đối:</strong> Bản vẽ CAD được xử lý trực tiếp trên bộ nhớ máy cục bộ (Client-side Vector Processing). Dữ liệu thiết kế mật của dự án không bao giờ bị lưu trữ hay chia sẻ cho bên thứ ba.
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          6. CÂU HỎI THƯỜNG GẶP (FAQ CỐT LÕI)
      ───────────────────────────────────────────────────────────── */}
      <section id="faq" className="py-14 sm:py-20 border-b border-white/10 bg-[#0e1017] relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-10">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#ffc474] bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30">
              Hỏi đáp Kỹ thuật
            </span>
            <h2 className="font-serif-cormorant text-3xl sm:text-4xl font-semibold text-white tracking-tight mt-3">
              Những câu hỏi thường gặp
            </h2>
          </motion.div>

          <div className="space-y-3">
            {[
              {
                q: 'Phần mềm hỗ trợ định dạng và phiên bản AutoCAD nào?',
                a: 'Ứng dụng hỗ trợ trực tiếp các file AutoCAD DXF từ chuẩn R12 đến 2024 (bao gồm AC1009, AC1015, AC1027, AC1032...). Bạn chỉ cần dùng lệnh SAVEAS hoặc EXPORT ra định dạng DXF từ bất kỳ phần mềm CAD nào (AutoCAD, BricsCAD, ZwCAD) và kéo thả vào hệ thống.'
              },
              {
                q: 'Nếu nét vẽ trên bản vẽ CAD bị hở hoặc phân mảnh thì AI xử lý thế nào?',
                a: 'Hệ thống tích hợp thuật toán Vector Snapping tự động vá các khe hở ≤ 50mm. Với các khe hở lớn hơn hoặc tường bị đứt đoạn, cơ chế Human-in-the-Loop sẽ gắn cờ cảnh báo màu vàng để kỹ sư kiểm tra và bấm nút đóng đa giác chỉ với 1 click.'
              },
              {
                q: 'Hồ sơ khối lượng xuất ra có chỉnh sửa và tích hợp vào dự toán G8/ETA được không?',
                a: 'Có. Hồ sơ xuất ra có định dạng Excel (.xlsx / .csv) chuẩn với các cột mã hiệu, tên phòng, chu vi, diện tích trừ cửa và công thức sống. Bạn có thể copy trực tiếp vào các phần mềm dự toán phổ biến như G8, Acitt, F1 hoặc dự toán nội bộ của doanh nghiệp.'
              }
            ].map((faq, idx) => (
              <motion.div
                key={idx}
                {...fadeInUp}
                className="rounded-xl border border-white/10 bg-[#12141a] overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-white/5 transition-colors cursor-pointer"
                >
                  <span className="text-sm font-semibold text-white">{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#ffc474] shrink-0 transition-transform ${
                      openFaq === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs text-white/70 leading-relaxed font-sans-tight border-t border-white/5 pt-3">
                    {faq.a}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          7. FINAL CALL-TO-ACTION
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-[#090b0e] text-white text-center relative overflow-hidden border-t border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,196,116,0.08)_0%,transparent_70%)] pointer-events-none" />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <h2 className="font-serif-cormorant text-3xl sm:text-5xl font-semibold text-white tracking-tight">
            Sẵn sàng chuyển đổi quy trình bóc tách sơn?
          </h2>
          <p className="text-sm sm:text-base text-white/70 mt-4 max-w-xl mx-auto font-sans-tight">
            Nạp bản vẽ DXF dự án của bạn ngay hôm nay để trải nghiệm tốc độ bóc tách 2 giờ thay vì 14 ngày.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onGetStarted}
              className="amber-button inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold rounded-2xl shadow-[0_8px_30px_rgba(255,196,116,0.35)] cursor-pointer active:scale-95 transition-all"
            >
              <span>Nạp bản vẽ DXF ngay</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onExploreDemo}
              className="dense-panel inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10 rounded-2xl transition-all cursor-pointer shadow-lg border border-white/20 active:scale-95 backdrop-blur-xl"
            >
              <Compass className="w-4 h-4 text-[#ffc474]" />
              <span>Khám phá Dự án mẫu</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
