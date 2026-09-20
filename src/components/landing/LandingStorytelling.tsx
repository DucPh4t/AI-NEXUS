import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  FileText,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  GitBranch,
  Layers,
  Sparkles,
  ArrowRight,
  Compass,
  Table2,
  SlidersHorizontal,
  ChevronRight,
  Maximize2,
  Clock,
  TrendingDown,
  Building2,
  Briefcase,
  HardHat,
  Scale,
  Lock,
  KeyRound,
  HelpCircle,
  ChevronDown,
  Check,
  Zap,
  FileSpreadsheet,
  Cpu,
  RefreshCw,
  Eye,
  Calculator,
  Sliders,
  Download,
  X
} from 'lucide-react';

interface LandingStorytellingProps {
  onGetStarted: () => void;
  onExploreDemo: () => void;
}

export const LandingStorytelling: React.FC<LandingStorytellingProps> = ({
  onGetStarted,
  onExploreDemo,
}) => {
  const [activeFeatureTab, setActiveFeatureTab] = useState<'tcvn' | 'hitl' | 'traceability'>('tcvn');
  const [selectedReviewAction, setSelectedReviewAction] = useState<'confirm' | 'correct' | 'reject'>('confirm');
  const [activeTraceStep, setActiveTraceStep] = useState<number>(1);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Interactive ROI Calculator State
  const [calcFloors, setCalcFloors] = useState<number>(25);

  // BoQ Excel Preview Modal State
  const [isBoqPreviewOpen, setIsBoqPreviewOpen] = useState<boolean>(false);
  const [activeBoqSheet, setActiveBoqSheet] = useState<'takeoff' | 'materials' | 'cost'>('takeoff');

  const fadeInUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }
  };

  return (
    <div id="storytelling" className="bg-[#0c0e12] text-white overflow-hidden drafting-grid-dark">
      {/* ─────────────────────────────────────────────────────────────
          1. BỐI CẢNH & ĐỐI CHIẾU: ĐO TAY THỦ CÔNG VS AI SPATIAL TAKE-OFF
          (Tinh gọn thành bảng đối sánh trực quan cao độ)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-20 border-b border-white/10 bg-[#0a0c10] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#ffc474] bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30">
              Bối cảnh Thực tế // Nỗi đau ngành Dự toán
            </span>
            <h2 className="font-serif-cormorant text-3xl sm:text-5xl font-semibold text-white tracking-tight mt-4 leading-[1.15]">
              Khoảng cách lớn giữa bản vẽ CAD và ngân sách thực tế.
            </h2>
            <p className="text-sm sm:text-base text-white/70 mt-3 leading-relaxed font-sans-tight max-w-2xl mx-auto">
              Bóc tách diện tích sơn hoàn thiện là công tác tiêu tốn nhiều thời gian nhất nhưng lại dễ phát sinh sai lệch và tranh cãi nhất khi nghiệm thu quyết toán.
            </p>
          </motion.div>

          {/* Bảng so sánh 2 mặt trực quan: Trước vs Sau */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
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
                    Nhiều rủi ro
                  </span>
                </div>

                <div className="space-y-4 mt-5">
                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-rose-400 mt-1 shrink-0" />
                    <div>
                      <h4 className="text-sm font-semibold text-white">14 ngày bóc tách cho toà tháp 25 tầng</h4>
                      <p className="text-xs text-white/60 mt-1">Kỹ sư phải dùng thước chuột bo từng góc phòng, tự cộng trừ từng cửa đi và cửa sổ trên hàng chục mặt bằng.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-4 h-4 text-amber-400 mt-1 shrink-0" />
                    <div>
                      <h4 className="text-sm font-semibold text-white">Sai số 3.5% – 6.0% diện tích lỗ mở</h4>
                      <p className="text-xs text-white/60 mt-1">Dễ bỏ sót cửa hoặc tính trùng vách giáp ranh, dẫn đến thiếu hụt vật tư hoặc đội chi phí hàng trăm triệu đồng.</p>
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
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-amber-400/15 text-[#ffc474] border border-amber-400/30">
                    Chuẩn TCVN 8652:2012
                  </span>
                </div>

                <div className="space-y-4 mt-5">
                  <div className="flex items-start gap-3">
                    <Zap className="w-4 h-4 text-[#ffc474] mt-1 shrink-0" />
                    <div>
                      <h4 className="text-sm font-semibold text-white">3 giờ thẩm định toàn bộ toà tháp</h4>
                      <p className="text-xs text-white/70 mt-1">Thuật toán đọc trực tiếp vector DXF gốc, tự động nhận diện ranh giới phòng và xuất dự toán chỉ trong tích tắc.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-1 shrink-0" />
                    <div>
                      <h4 className="text-sm font-semibold text-white">0% sai số hình học – Khấu trừ chuẩn xác</h4>
                      <p className="text-xs text-white/70 mt-1">Đọc trực tiếp đỉnh vector AutoCAD với độ chính xác 6 chữ số thập phân, tự động khấu trừ 100% cửa đi và cửa sổ.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <GitBranch className="w-4 h-4 text-sky-400 mt-1 shrink-0" />
                    <div>
                      <h4 className="text-sm font-semibold text-white">100% Traceability – 1-Click tới Handle CAD</h4>
                      <p className="text-xs text-white/70 mt-1">Mọi dòng dự toán đều liên kết trực tiếp với mã thực thể bản vẽ gốc (ví dụ: LWPOLYLINE #8F31). Nghiệm thu tức thì.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#ffc474]">
                <span>Tiết kiệm 85% thời gian</span>
                <span className="text-white/60">Hoàn vốn ngay từ Tầng 02</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. QUY TRÌNH PIPELINE 4 BƯỚC KHÉP KÍN (WORKFLOW)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 border-b border-white/10 bg-[#0e1015] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#ffc474] bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30">
              Quy trình Tự động Hóa // 4 Bước khép kín
            </span>
            <h2 className="font-serif-cormorant text-3xl sm:text-5xl font-semibold text-white tracking-tight mt-4 leading-[1.15]">
              Từ bản vẽ CAD 2D thô đến hồ sơ thầu hoàn chỉnh.
            </h2>
            <p className="text-sm sm:text-base text-white/70 mt-3 leading-relaxed font-sans-tight">
              Quy trình bóc tách tinh giản, loại bỏ hoàn toàn các khâu nhập liệu thủ công trung gian.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Nạp Vector DXF Gốc',
                desc: 'Phân tích trực tiếp thực thể AutoCAD (LWPOLYLINE, LINE, HATCH) từ file DXF R12–2024. Không qua raster pixel.',
                badge: 'Vector AC1032',
                icon: FileText
              },
              {
                step: '02',
                title: 'Phân tích Không gian AI',
                desc: 'Tự động khép kín đa giác phòng, phân loại ranh giới kết cấu và định danh cửa đi A-DOOR, cửa sổ A-WINDOW.',
                badge: 'Spatial Engine',
                icon: Layers
              },
              {
                step: '03',
                title: 'Kỹ sư Thẩm định (HITL)',
                desc: 'Cơ chế Human-in-the-Loop cảnh báo các vị trí khe hở để kỹ sư phê duyệt hoặc hiệu chỉnh đỉnh chỉ trong 1 click.',
                badge: 'Auditing 1-Click',
                icon: ShieldCheck
              },
              {
                step: '04',
                title: 'Xuất BoQ & Đơn giá VND',
                desc: 'Tính toán diện tích sơn phủ theo TCVN 8652:2012, định mức thùng sơn và xuất hồ sơ Excel đầy đủ công thức sống.',
                badge: 'Live BoQ Export',
                icon: FileSpreadsheet
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  {...fadeInUp}
                  className="p-6 rounded-2xl border border-white/10 bg-[#12141a] hover:border-amber-300/30 transition-all group flex flex-col justify-between shadow-lg"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#ffc474] group-hover:scale-105 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-2xl font-bold text-white/20 group-hover:text-[#ffc474]/50 transition-colors">
                        {item.step}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-amber-300 font-semibold">
                      {item.badge}
                    </span>
                    <h3 className="text-base font-bold text-white mt-1.5">
                      {item.title}
                    </h3>
                    <p className="text-xs text-white/65 mt-2 leading-relaxed font-sans-tight">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. BỘ BA CÔNG NGHỆ LÕI (INTERACTIVE CORE ENGINEERING TABS)
          (Gộp 3 section TCVN 8652, HITL và 2-Way Traceability thành 1 bảng điều khiển tương tác)
      ───────────────────────────────────────────────────────────── */}
      <section id="detection" className="py-16 md:py-24 border-b border-white/10 bg-[#0c0e12] relative scroll-mt-20">
        <div id="estimate" className="scroll-mt-24" />
        <div id="traceability" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#ffc474] bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30">
              Công nghệ Lõi // Ba Trụ cột Kỹ thuật
            </span>
            <h2 className="font-serif-cormorant text-3xl sm:text-5xl font-semibold text-white tracking-tight mt-4 leading-[1.15]">
              Nền tảng kiểm toán bóc tách chuẩn xác từng milimet.
            </h2>
            <p className="text-sm sm:text-base text-white/70 mt-3 leading-relaxed font-sans-tight">
              Khám phá ba năng lực kỹ thuật độc bản làm nên sự khác biệt của AI Paint Take-off.
            </p>

            {/* Tab Switcher */}
            <div className="mt-8 inline-flex p-1 rounded-full bg-[#161822] border border-white/10 gap-1">
              <button
                onClick={() => setActiveFeatureTab('tcvn')}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  activeFeatureTab === 'tcvn'
                    ? 'bg-[#ffc474] text-black font-bold shadow-md'
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                }`}
              >
                1. Chuẩn TCVN 8652 & Dự toán BoQ
              </button>
              <button
                onClick={() => setActiveFeatureTab('hitl')}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  activeFeatureTab === 'hitl'
                    ? 'bg-[#ffc474] text-black font-bold shadow-md'
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                }`}
              >
                2. Kỹ sư Thẩm định (HITL)
              </button>
              <button
                onClick={() => setActiveFeatureTab('traceability')}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  activeFeatureTab === 'traceability'
                    ? 'bg-[#ffc474] text-black font-bold shadow-md'
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                }`}
              >
                3. Truy vết 2 Chiều (CAD ⇄ BoQ)
              </button>
            </div>
          </motion.div>

          {/* Tab Content with AnimatePresence */}
          <AnimatePresence mode="wait">
            {/* Tab Content 1: TCVN 8652 */}
            {activeFeatureTab === 'tcvn' && (
              <motion.div
                key="tcvn"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-[#13151d] p-6 sm:p-10 rounded-2xl border border-white/10 shadow-2xl"
              >
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#ffc474]">
                  Quy chuẩn Quốc gia // Khấu trừ Tự động & BoQ
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif-cormorant font-semibold text-white mt-2">
                  Khấu trừ chuẩn xác diện tích lỗ mở cửa đi & cửa sổ
                </h3>
                <p className="text-xs sm:text-sm text-white/70 mt-3 leading-relaxed font-sans-tight">
                  Theo tiêu chuẩn TCVN 8652:2012, diện tích sơn tường bả bằng tổng diện tích chu vi tường nhân chiều cao tầng, trừ đi diện tích toàn bộ các ô cửa và lỗ mở kiến trúc.
                </p>

                <div className="mt-6 p-4 rounded-xl bg-[#0c0e12] border border-white/10 font-mono text-xs text-white/85 space-y-2">
                  <div className="text-[#ffc474] font-bold">Công thức toán học áp dụng:</div>
                  <div className="text-white/70">
                    S_sơn = (ChuVi_phòng × ChiềuCao) - ∑(S_cửa đi + S_cửa sổ)
                  </div>
                  <div className="text-emerald-400 font-bold">
                    ✓ Khấu trừ cửa đi D1 (0.9 × 2.2m = 1.98 m²)
                  </div>
                  <div className="text-emerald-400 font-bold">
                    ✓ Khấu trừ cửa sổ W1 (1.6 × 1.4m = 2.24 m²)
                  </div>
                </div>
              </div>

              <div className="p-5 sm:p-6 rounded-xl bg-[#181b24] border border-white/10 space-y-3.5 font-mono text-xs">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-white/60">Ví dụ Kiểm định:</span>
                  <span className="text-[#ffc474] font-bold">Phòng Khách A101 (Handle #8F31)</span>
                </div>
                <div className="flex justify-between text-white/80">
                  <span>Chu vi hình học tường:</span>
                  <span className="text-white font-bold">26.50 m</span>
                </div>
                <div className="flex justify-between text-white/80">
                  <span>Chiều cao thông thủy:</span>
                  <span className="text-white font-bold">3.20 m</span>
                </div>
                <div className="flex justify-between text-white/80">
                  <span>Tổng diện tích thô:</span>
                  <span className="text-white font-bold">84.80 m²</span>
                </div>
                <div className="flex justify-between text-rose-400">
                  <span>Khấu trừ cửa (D1 + W1):</span>
                  <span className="font-bold">- 4.22 m²</span>
                </div>
                <div className="py-2.5 px-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex justify-between text-emerald-400 font-bold text-xs sm:text-sm">
                  <span>Diện tích sơn tinh (Net Area):</span>
                  <span>80.58 m²</span>
                </div>
                <div className="pt-2 border-t border-white/10 grid grid-cols-2 gap-2 text-[11px] text-white/60">
                  <div>
                    <span>Định mức sơn lót (1 lớp):</span>
                    <span className="text-white font-semibold block">0.45 thùng 18L</span>
                  </div>
                  <div>
                    <span>Định mức sơn phủ (2 lớp):</span>
                    <span className="text-white font-semibold block">0.90 thùng 18L</span>
                  </div>
                  <div className="col-span-2 pt-1 flex justify-between text-amber-300 font-bold text-xs">
                    <span>Dự toán BoQ tạm tính (65k/m²):</span>
                    <span>5.237.700 ₫</span>
                  </div>
                </div>

                {/* BoQ Excel Modal Trigger Button */}
                <div className="pt-2 border-t border-white/10">
                  <button
                    onClick={() => setIsBoqPreviewOpen(true)}
                    className="w-full py-2.5 px-4 rounded-xl bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/25 transition-all text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:shadow-emerald-500/10"
                  >
                    <FileSpreadsheet className="w-4 h-4 text-emerald-400" />
                    <span>Xem trước Mẫu Bảng BoQ Excel (.xlsx)</span>
                    <ChevronRight className="w-3.5 h-3.5 text-emerald-400/60" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* Tab Content 2: Human-in-the-loop (HITL) */}
          {activeFeatureTab === 'hitl' && (
            <motion.div
              key="hitl"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="max-w-3xl mx-auto p-6 md:p-8 bg-[#161822] text-white rounded-2xl border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.5)]"
            >
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping" />
                  <span className="font-mono text-sm font-bold text-white">
                    Thẩm định Bản vẽ // Phòng A101
                  </span>
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-amber-500/20 text-[#ffc474] border border-amber-500/40 font-semibold">
                  ⚠️ Cần kiểm tra (Độ tin cậy 98%)
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-6 font-mono text-xs">
                <div className="space-y-4">
                  <div className="bg-[#1c1f2a] p-4 rounded-xl border border-white/10">
                    <div className="text-white/50 text-[11px] font-semibold">DIỆN TÍCH SÀN BÓC TÁCH</div>
                    <div className="text-2xl font-bold text-white mt-1">42.50 m²</div>
                    <div className="text-white/70 text-[11px] mt-2">
                      Diện tích sơn thực tế: <span className="text-emerald-400 font-bold">85.00 m²</span>
                    </div>
                  </div>

                  <div className="bg-[#1c1f2a] p-4 rounded-xl border border-white/10 space-y-2">
                    <div className="text-white/50 text-[11px] font-bold">NGUỒN THỰC THỂ CAD</div>
                    <div className="flex justify-between text-white/80">
                      <span>Handle:</span>
                      <span className="text-[#38bdf8] font-bold">LWPOLYLINE #8F31</span>
                    </div>
                    <div className="flex justify-between text-white/80">
                      <span>Số đỉnh hình học:</span>
                      <span>14 đỉnh khép kín</span>
                    </div>
                    <div className="flex justify-between text-white/80">
                      <span>Lớp bản vẽ:</span>
                      <span className="font-bold text-white">A-WALL</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-[#1c1f2a] p-4 rounded-xl border border-white/10">
                    <div className="text-white/50 text-[11px] font-bold">GIẢI TRÌNH THUẬT TOÁN AI</div>
                    <p className="text-white/70 text-xs mt-2 leading-relaxed font-sans font-light">
                      Phát hiện đoạn giật cấp 140mm dọc theo vách hành lang. Điểm tin cậy đạt 98% sau khi khấu trừ 2 cửa đi. Kỹ sư có thể xác nhận hoặc chỉnh đỉnh.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300">
                    <div className="font-bold flex items-center gap-1.5 text-xs">
                      <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
                      Quyền kiểm soát của Kỹ sư
                    </div>
                    <p className="text-[11px] font-sans text-white/70 mt-1">
                      AI chỉ đề xuất. Mọi con số đều do kỹ sư con người phê duyệt cuối cùng.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSelectedReviewAction('confirm')}
                    className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      selectedReviewAction === 'confirm'
                        ? 'bg-emerald-600 text-white shadow-lg ring-2 ring-emerald-400'
                        : 'bg-white/10 text-white/70 hover:text-white hover:bg-white/15'
                    }`}
                  >
                    ✓ Phê duyệt phòng
                  </button>
                  <button
                    onClick={() => setSelectedReviewAction('correct')}
                    className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      selectedReviewAction === 'correct'
                        ? 'bg-sky-600 text-white shadow-lg ring-2 ring-sky-400'
                        : 'bg-white/10 text-white/70 hover:text-white hover:bg-white/15'
                    }`}
                  >
                    ✎ Hiệu chỉnh đỉnh
                  </button>
                  <button
                    onClick={() => setSelectedReviewAction('reject')}
                    className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      selectedReviewAction === 'reject'
                        ? 'bg-rose-600 text-white shadow-lg ring-2 ring-rose-400'
                        : 'bg-white/10 text-white/70 hover:text-white hover:bg-white/15'
                    }`}
                  >
                    × Từ chối
                  </button>
                </div>

                <div className="text-xs font-mono text-white/50">
                  Trạng thái:{' '}
                  <span className="text-[#ffc474] font-bold capitalize">
                    {selectedReviewAction === 'confirm'
                      ? 'Đã Phê duyệt'
                      : selectedReviewAction === 'correct'
                      ? 'Đang Hiệu chỉnh'
                      : 'Đã Từ chối'}
                  </span>
                </div>
              </div>
            </motion.div>
          )}

          {/* Tab Content 3: Traceability */}
          {activeFeatureTab === 'traceability' && (
            <motion.div
              key="traceability"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="max-w-5xl mx-auto bg-[#141722] p-6 sm:p-10 rounded-2xl border border-white/10 shadow-2xl"
            >
              <div className="text-center max-w-2xl mx-auto mb-8">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#ffc474]">
                  Tính năng Kỹ thuật Độc bản
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif-cormorant font-semibold text-white mt-2">
                  Liên kết sống hai chiều giữa Bản vẽ CAD và Dòng BoQ
                </h3>
                <p className="text-xs sm:text-sm text-white/70 mt-2 font-sans-tight">
                  Nhấn vào một dòng dự toán trên bảng BoQ, bản vẽ sẽ tự động phóng to và làm sáng đối tượng CAD tương ứng.
                </p>
              </div>

              {/* Traceability Steps interactive */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  {
                    step: 1,
                    title: 'Chọn dòng BoQ',
                    desc: 'Nhấn vào Phòng Khách A101 (Diện tích sơn 80.58 m²)',
                    tag: 'BOQ Item'
                  },
                  {
                    step: 2,
                    title: 'Sáng vùng đa giác CAD',
                    desc: 'Bản vẽ tự động highlight vùng LWPOLYLINE #8F31 với viền vàng nổi bật',
                    tag: 'Auto Pan & Zoom'
                  },
                  {
                    step: 3,
                    title: 'Khóa hồ sơ kiểm toán',
                    desc: 'Xuất chứng thư truy vết hình học không thể làm giả cho thanh tra xây dựng',
                    tag: 'Audit Trail Lock'
                  },
                ].map((item) => (
                  <button
                    key={item.step}
                    onClick={() => setActiveTraceStep(item.step)}
                    className={`p-5 rounded-xl border text-left transition-all cursor-pointer ${
                      activeTraceStep === item.step
                        ? 'border-amber-400/60 bg-amber-500/10 shadow-lg ring-1 ring-amber-400/30'
                        : 'border-white/10 bg-[#0c0e12] hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-mono font-bold text-[#ffc474]">
                        Bước 0{item.step}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-white/60">
                        {item.tag}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-white">{item.title}</h4>
                    <p className="text-xs text-white/65 mt-1.5 leading-relaxed">{item.desc}</p>
                  </button>
                ))}
              </div>

              {/* Action row to launch BoQ preview */}
              <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-white/60 font-sans">
                  💡 Thử nghiệm kiểm tra trực tiếp liên kết sống với tệp BoQ Excel:
                </span>
                <button
                  onClick={() => setIsBoqPreviewOpen(true)}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#ffc474] text-black font-bold text-xs hover:bg-[#ffe0b2] transition-all cursor-pointer shadow-md"
                >
                  <FileSpreadsheet className="w-4 h-4 text-black" />
                  <span>Mở Bảng tính BoQ để đối soát</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. ĐỐI TƯỢNG PHỤC VỤ & LỢI ÍCH ĐỊNH LƯỢNG (PERSONAS & QUANTIFIED ROI)
          (Tích hợp trực tiếp con số ROI vào từng đối tượng)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 border-b border-white/10 bg-[#0a0c10] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#ffc474] bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30">
              Đối tượng Phục vụ // Định lượng Giá trị
            </span>
            <h2 className="font-serif-cormorant text-3xl sm:text-5xl font-semibold text-white tracking-tight mt-4 leading-[1.15]">
              Một ngôn ngữ số liệu chuẩn hóa cho cả 3 bên dự án.
            </h2>
            <p className="text-sm sm:text-base text-white/70 mt-3 leading-relaxed font-sans-tight">
              Xóa bỏ bất đồng số liệu giữa hồ sơ thiết kế, hồ sơ thầu và quyết toán thi công bằng dữ liệu hình học bất biến.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Persona 1: Nhà thầu Sơn */}
            <motion.div 
              {...fadeInUp}
              className="p-7 rounded-2xl border border-white/10 bg-[#12141a] hover:border-amber-300/30 transition-all shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#ffc474] mb-5">
                  <HardHat className="w-5 h-5" />
                </div>
                <span className="font-mono text-xs uppercase tracking-wider text-amber-300 font-semibold">
                  Nhà thầu Sơn & Hoàn thiện
                </span>
                <h3 className="text-lg font-bold text-white mt-2">
                  Tăng tốc chào thầu 10x, bảo vệ biên lợi nhuận
                </h3>
                <p className="text-xs text-white/65 mt-2.5 leading-relaxed font-sans-tight">
                  Bóc tách và lên giá thầu nhanh gấp 10 lần. Định mức thùng sơn lót và phủ được tính toán chính xác theo từng mảng tường, không lo hụt vật tư hay thất thoát công trường.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 space-y-2 text-xs font-mono">
                <div className="flex items-center gap-2 text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span>Rút ngắn chào thầu từ 14 ngày còn 2 giờ</span>
                </div>
                <div className="flex items-center gap-2 text-white/60">
                  <TrendingDown className="w-3.5 h-3.5 shrink-0 text-[#ffc474]" />
                  <span>Triệt tiêu 100% rủi ro hụt vật tư</span>
                </div>
              </div>
            </motion.div>

            {/* Persona 2: Kỹ sư Dự toán QS */}
            <motion.div 
              {...fadeInUp}
              className="p-7 rounded-2xl border border-amber-300/35 bg-[#141722] hover:border-amber-300/50 transition-all shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-[#ffc474] mb-5">
                  <Briefcase className="w-5 h-5" />
                </div>
                <span className="font-mono text-xs uppercase tracking-wider text-[#ffc474] font-semibold">
                  Kỹ sư Dự toán QS & Tư vấn Chi phí
                </span>
                <h3 className="text-lg font-bold text-white mt-2">
                  Minh bạch 100% hồ sơ, tự tin trước thanh tra
                </h3>
                <p className="text-xs text-white/70 mt-2.5 leading-relaxed font-sans-tight">
                  Mỗi mét vuông sơn tường đều được gắn định danh với Handle CAD cụ thể. Dễ dàng giải trình công thức khấu trừ cửa TCVN với Ban kiểm toán mà không cần mở lại bản vẽ đo tay.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 space-y-2 text-xs font-mono">
                <div className="flex items-center gap-2 text-[#ffc474]">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span>Audit Trail độc lập, khóa hồ sơ bất biến</span>
                </div>
                <div className="flex items-center gap-2 text-white/70">
                  <Clock className="w-3.5 h-3.5 shrink-0 text-emerald-400" />
                  <span>Tiết kiệm 92 giờ công cho mỗi dự án</span>
                </div>
              </div>
            </motion.div>

            {/* Persona 3: Chủ đầu tư */}
            <motion.div 
              {...fadeInUp}
              className="p-7 rounded-2xl border border-white/10 bg-[#12141a] hover:border-amber-300/30 transition-all shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#ffc474] mb-5">
                  <Building2 className="w-5 h-5" />
                </div>
                <span className="font-mono text-xs uppercase tracking-wider text-white/70 font-semibold">
                  Chủ đầu tư & Ban QLDA
                </span>
                <h3 className="text-lg font-bold text-white mt-2">
                  Thẩm tra chéo độc lập, chặn đứng đội ngân sách
                </h3>
                <p className="text-xs text-white/65 mt-2.5 leading-relaxed font-sans-tight">
                  Tải file DXF lên và có ngay báo cáo đối soát độc lập trong vài phút để thẩm tra hồ sơ thanh toán của nhà thầu. Loại bỏ triệt để rủi ro kê khống khối lượng hoặc tính trùng lặp.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 space-y-2 text-xs font-mono">
                <div className="flex items-center gap-2 text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span>Kiểm soát chi phí theo thời gian thực</span>
                </div>
                <div className="flex items-center gap-2 text-white/60">
                  <Scale className="w-3.5 h-3.5 shrink-0 text-[#ffc474]" />
                  <span>Tiết kiệm 120 – 250 triệu VNĐ mỗi toà tháp</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. MA TRẬN SO SÁNH HIỆU QUẢ KINH TẾ (ROI MATRIX)
      ───────────────────────────────────────────────────────────── */}
      <section id="roi-assurance" className="py-16 md:py-24 border-t border-white/10 relative bg-[#0e1017]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono font-bold tracking-widest text-[#ffc474] uppercase block mb-3">
              HIỆU QUẢ KINH TẾ // BẢO CHỨNG ROI DOANH NGHIỆP
            </span>
            <h2 className="font-serif-cormorant text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-tight">
              Bảng Đối chiếu Hiệu quả Vận hành Thực tế
            </h2>
            <p className="text-white/65 text-xs sm:text-sm mt-3 leading-relaxed font-sans-tight">
              Ước tính trên dự án toà tháp chung cư 25 tầng điển hình (~35.000 m² sàn xây dựng).
            </p>
          </motion.div>

          {/* Interactive ROI Calculator Slider */}
          <motion.div
            {...fadeInUp}
            className="mb-12 p-6 sm:p-8 rounded-2xl border border-white/10 bg-[#12141c] shadow-2xl relative overflow-hidden"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-[#ffc474]">
                  <Calculator className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    Công cụ Dự tính Tiết kiệm theo Quy mô Dự án
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-semibold">
                      Tự động tính
                    </span>
                  </h3>
                  <p className="text-xs text-white/60 font-sans-tight">
                    Kéo thanh trượt để ước tính thời gian, chi phí nhân sự và vật tư được bảo toàn
                  </p>
                </div>
              </div>

              {/* Display Current Floors */}
              <div className="flex items-baseline gap-2 bg-[#1a1d28] px-4 py-2 rounded-xl border border-white/10">
                <span className="text-xs font-mono text-white/50">Quy mô:</span>
                <span className="text-2xl font-bold font-mono text-[#ffc474]">{calcFloors}</span>
                <span className="text-xs font-mono text-white/80">Tầng</span>
                <span className="text-[11px] font-mono text-white/40">
                  (~{(calcFloors * 1400).toLocaleString('vi-VN')} m² sàn)
                </span>
              </div>
            </div>

            {/* Slider & Quick Presets */}
            <div className="py-6 space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono text-white/50">
                  <span>1 Tầng (Biệt thự/Nhà phố)</span>
                  <span className="text-[#ffc474] font-semibold">{calcFloors} Tầng</span>
                  <span>50 Tầng (Đại cao ốc)</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="50"
                  value={calcFloors}
                  onChange={(e) => setCalcFloors(Number(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#ffc474]"
                />
              </div>

              {/* Quick Preset Buttons */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="text-[11px] font-mono text-white/40 mr-1">Quy mô mẫu:</span>
                {[
                  { label: 'Nhà phố / Biệt thự (4 tầng)', floors: 4 },
                  { label: 'Khách sạn / Văn phòng (12 tầng)', floors: 12 },
                  { label: 'Chung cư điển hình (25 tầng)', floors: 25 },
                  { label: 'Toà tháp cao cấp (40 tầng)', floors: 40 },
                ].map((preset) => (
                  <button
                    key={preset.floors}
                    onClick={() => setCalcFloors(preset.floors)}
                    className={`px-3 py-1 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                      calcFloors === preset.floors
                        ? 'bg-[#ffc474] text-black font-bold shadow-md'
                        : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/5'
                    }`}
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Dynamic Results Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t border-white/10 font-mono">
              <div className="p-4 rounded-xl bg-[#0c0e12] border border-white/10">
                <div className="flex items-center gap-2 text-white/50 text-[11px]">
                  <Clock className="w-3.5 h-3.5 text-sky-400" />
                  <span>GIỜ CÔNG TIẾT KIỆM</span>
                </div>
                <div className="text-2xl font-bold text-white mt-2">
                  ~{Math.round(calcFloors * 4.2)} <span className="text-xs text-white/60 font-normal">giờ</span>
                </div>
                <div className="text-[11px] text-emerald-400 font-sans mt-1">
                  Tương đương {(calcFloors * 0.52).toFixed(1)} ngày làm việc kỹ sư QS
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#0c0e12] border border-white/10">
                <div className="flex items-center gap-2 text-white/50 text-[11px]">
                  <TrendingDown className="w-3.5 h-3.5 text-emerald-400" />
                  <span>CHI PHÍ NHÂN SỰ</span>
                </div>
                <div className="text-2xl font-bold text-emerald-400 mt-2">
                  {(Math.round(calcFloors * 880000)).toLocaleString('vi-VN')} <span className="text-xs text-white/60 font-normal">₫</span>
                </div>
                <div className="text-[11px] text-white/60 font-sans mt-1">
                  Cắt giảm 88% ngân sách đo bóc tay
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#0c0e12] border border-white/10">
                <div className="flex items-center gap-2 text-white/50 text-[11px]">
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
                  <span>SƠN TRÁNH THẤT THOÁT</span>
                </div>
                <div className="text-2xl font-bold text-[#ffc474] mt-2">
                  ~{Math.round(calcFloors * 7.2)} <span className="text-xs text-white/60 font-normal">thùng</span>
                </div>
                <div className="text-[11px] text-white/60 font-sans mt-1">
                  Trừ đúng lỗ mở TCVN (thùng 18L)
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#0c0e12] border border-white/10">
                <div className="flex items-center gap-2 text-white/50 text-[11px]">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>RỦI RO DỰ TOÁN BẢO TOÀN</span>
                </div>
                <div className="text-2xl font-bold text-white mt-2">
                  {(Math.round(calcFloors * 7500000)).toLocaleString('vi-VN')} <span className="text-xs text-white/60 font-normal">₫</span>
                </div>
                <div className="text-[11px] text-emerald-400 font-sans mt-1">
                  Nghiệm thu chuẩn xác với chủ đầu tư
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            {...fadeInUp}
            className="dense-panel p-6 sm:p-8 rounded-2xl border border-white/10 bg-[#14161f] shadow-2xl"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-sans-tight">
                <thead>
                  <tr className="border-b border-white/10 text-white/40 uppercase font-mono text-[11px]">
                    <th className="pb-3.5 font-semibold">Chỉ số so sánh</th>
                    <th className="pb-3.5 font-semibold text-white/60">Đo tay CAD truyền thống (PLINE)</th>
                    <th className="pb-3.5 font-semibold text-[#ffc474]">AI Spatial Take-off Platform</th>
                    <th className="pb-3.5 font-semibold text-right">Lợi ích ròng</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 font-mono">
                  <tr>
                    <td className="py-3.5 font-sans font-medium text-white/90">Tổng giờ công kỹ sư QS</td>
                    <td className="py-3.5 text-white/60">96 – 120 giờ (12-15 ngày)</td>
                    <td className="py-3.5 text-white font-bold">2.5 – 4 giờ kiểm định</td>
                    <td className="py-3.5 text-right font-bold text-[#ffc474]">Tiết kiệm 92 giờ</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 font-sans font-medium text-white/90">Chi phí nhân sự trực tiếp</td>
                    <td className="py-3.5 text-white/60">~ 22,000,000 ₫</td>
                    <td className="py-3.5 text-white font-bold">~ 2,500,000 ₫</td>
                    <td className="py-3.5 text-right font-bold text-[#ffc474]">Cắt giảm 88%</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 font-sans font-medium text-white/90">Sai số chu vi & lỗ mở cửa</td>
                    <td className="py-3.5 text-white/60">3.5% – 6.0% (bỏ sót cửa/tính lặp)</td>
                    <td className="py-3.5 text-white font-bold">0% sai số hình học (Vector gốc)</td>
                    <td className="py-3.5 text-right font-bold text-[#ffc474]">Tránh hụt 180 thùng sơn</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 font-sans font-medium text-white/90">Khả năng truy vết khi kiểm toán</td>
                    <td className="py-3.5 text-white/60">Số chết Excel (mất 3 ngày đo lại)</td>
                    <td className="py-3.5 text-white font-bold">Traceability 1-click tới Handle CAD</td>
                    <td className="py-3.5 text-right font-bold text-[#ffc474]">Nghiệm thu tức thì</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          6. BẢO MẬT BẢN VẼ CẤP DOANH NGHIỆP (SECURITY & NDA)
      ───────────────────────────────────────────────────────────── */}
      <section id="cad-security" className="py-16 md:py-24 border-t border-white/10 relative bg-[#0c0e12]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs font-mono font-bold tracking-widest text-[#ffc474] uppercase block mb-3">
              AN TOÀN DỮ LIỆU // BẢO VỆ TÀI SẢN TRÍ TUỆ BẢN VẼ
            </span>
            <h2 className="font-serif-cormorant text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-tight">
              Bảo mật Bản vẽ Thiết kế Cấp Doanh nghiệp
            </h2>
            <p className="text-white/65 text-xs sm:text-sm mt-3 leading-relaxed font-sans-tight">
              Tệp CAD và số liệu giá thầu là bí mật sống còn của Chủ đầu tư và Nhà thầu. Nền tảng cam kết an toàn tuyệt đối.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Lock,
                title: 'Kiến trúc Local-First',
                desc: 'Phân tích tệp DXF trực tiếp trong bộ nhớ phiên làm việc của trình duyệt. Không tải bản vẽ nhạy cảm lên máy chủ công khai.'
              },
              {
                icon: ShieldCheck,
                title: 'Zero AI Training',
                desc: 'Cam kết tuyệt đối không dùng tệp CAD hoặc số liệu dự toán của khách hàng để huấn luyện mô hình công cộng.'
              },
              {
                icon: KeyRound,
                title: 'Mã hóa TLS 1.3 & AES-256',
                desc: 'Mọi báo cáo và kết quả bóc tách được bảo vệ bởi tiêu chuẩn mã hóa kênh truyền cấp ngân hàng.'
              },
              {
                icon: Scale,
                title: 'Cam kết Pháp lý NDA',
                desc: 'Sẵn sàng ký kết Thỏa thuận Bảo mật Thông tin (NDA) điện tử có hiệu lực pháp lý song phương trước khi triển khai.'
              }
            ].map((sec, idx) => {
              const SecIcon = sec.icon;
              return (
                <motion.div 
                  key={idx}
                  {...fadeInUp}
                  className="dense-panel p-6 rounded-2xl border border-white/10 bg-[#14161f]"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-[#ffc474] flex items-center justify-center mb-4">
                    <SecIcon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-white mb-2">{sec.title}</h3>
                  <p className="text-xs text-white/65 leading-relaxed font-sans-tight">
                    {sec.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          7. GIẢI ĐÁP KỸ THUẬT THỰC CHIẾN (FAQ)
      ───────────────────────────────────────────────────────────── */}
      <section id="faq" className="py-16 md:py-24 border-t border-white/10 relative bg-[#0e1017]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs font-mono font-bold tracking-widest text-[#ffc474] uppercase block mb-3">
              GIẢI ĐÁP KỸ THUẬT // HỎI ĐÁP THỰC CHIẾN
            </span>
            <h2 className="font-serif-cormorant text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-tight">
              Những câu hỏi Kỹ sư Dự toán quan tâm nhất
            </h2>
            <p className="text-white/65 text-xs sm:text-sm mt-3 leading-relaxed font-sans-tight">
              Câu trả lời thẳng thắn từ góc nhìn kỹ thuật xây dựng và xử lý hình học CAD.
            </p>
          </motion.div>

          <div className="space-y-3.5">
            {[
              {
                q: 'Bản vẽ CAD vẽ không khép kín, hở chân tường thì thuật toán có bóc tách được không?',
                a: 'Có. Thuật toán AI Topological Snapping tự động nhận diện và vá các khe hở hình học dưới 50mm. Với các khe hở lớn hơn (>50mm), hệ thống gắn nhãn Needs Review để kỹ sư kéo nắn đỉnh chỉ với 1 click chuột mà không cần mở lại AutoCAD.',
              },
              {
                q: 'Phần mềm hỗ trợ những phiên bản AutoCAD và phần mềm thiết kế nào?',
                a: 'Hệ thống hỗ trợ tệp trao đổi .DXF từ tất cả các phiên bản AutoCAD (R12 đến 2024/2025), BricsCAD, ZWCAD, GstarCAD cũng như các tệp DXF xuất ra từ Autodesk Revit hoặc ArchiCAD.',
              },
              {
                q: 'File BoQ Excel xuất ra có công thức tính toán động hay là các con số chết?',
                a: 'Toàn bộ bảng tính Excel xuất ra đều chứa công thức toán học sống nguyên bản (= ChuVi * ChieuCao - DienTichCua), liên kết trực tiếp với mã phòng và bảng định mức vật tư sơn bả.',
              },
              {
                q: 'Làm thế nào để phân biệt chiều cao tường các tầng và các loại vách ngăn khác nhau?',
                a: 'Bạn có thể linh hoạt thiết lập trong bảng Calculation Rules: chỉ định chiều cao thông thủy mặc định (ví dụ 3.3m), hoặc gán hệ số riêng cho từng layer (A-WALL tường xây trát 2 mặt, A-GLAZ vách kính khấu trừ hoàn toàn).',
              },
              {
                q: 'Bản vẽ thiết kế của doanh nghiệp tôi có bị rò rỉ cho đối thủ hoặc dùng để train AI không?',
                a: 'Cam kết bảo mật tuyệt đối: Tệp DXF được phân tích trong bộ nhớ cục bộ (Local-First), không chia sẻ cho bên thứ ba và tuyệt đối không sử dụng bản vẽ của khách hàng để train AI công khai. Sẵn sàng ký NDA pháp lý.',
              },
              {
                q: 'Tôi có thể thử nghiệm bóc tách trên chính bản vẽ dự án thực tế của mình trước không?',
                a: 'Hoàn toàn được. Bạn có thể nhấn nút "Bắt đầu bóc tách ngay", chọn tệp DXF mặt bằng tầng điển hình của dự án bạn đang làm để trải nghiệm tốc độ nhận diện phòng, khấu trừ cửa và xuất bảng dự toán tự động.',
              },
            ].map((faq, idx) => (
              <motion.div
                key={idx}
                {...fadeInUp}
                className="dense-panel rounded-2xl border border-white/10 bg-[#14161f] overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-sm font-semibold text-white leading-snug">
                    {faq.q}
                  </span>
                  <span className={`w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-[#ffc474] transition-transform duration-300 ${
                    openFaq === idx ? 'rotate-180 bg-[#ffc474]/15 border-[#ffc474]/30' : ''
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-white/70 leading-relaxed font-sans-tight border-t border-white/5 pt-4">
                    {faq.a}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          8. KÊU GỌI HÀNH ĐỘNG (FINAL CALL TO ACTION)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-[#090b0e] text-white text-center relative overflow-hidden border-t border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,193,102,0.14),transparent_70%)] pointer-events-none" />
        
        <motion.div {...fadeInUp} className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="font-serif-cormorant text-4xl sm:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-[1.1]">
            Sẵn sàng chuyển đổi bản vẽ thành hồ sơ dự toán?
          </h2>
          <p className="text-white/70 text-sm sm:text-base mt-4 max-w-xl mx-auto leading-relaxed font-light font-sans-tight">
            Tải lên bản vẽ 2D DXF đầu tiên của bạn để trải nghiệm tính năng tự động nhận diện phòng, bóc tách chính xác và kiểm toán nguồn gốc kỹ thuật.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onGetStarted}
              className="amber-button inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold cursor-pointer"
            >
              <span>Bắt đầu bóc tách ngay</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onExploreDemo}
              className="dense-panel inline-flex items-center gap-2 px-7 py-3.5 text-sm font-medium text-white hover:bg-white/10 rounded-2xl transition-all cursor-pointer"
            >
              <Compass className="w-4 h-4 text-[#ffc474]" />
              <span>Khám phá dự án mẫu</span>
              <ChevronRight className="w-4 h-4 text-white/40" />
            </button>
          </div>
        </motion.div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          BOQ EXCEL PREVIEW MODAL
      ───────────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {isBoqPreviewOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-5xl bg-[#161922] border border-white/20 rounded-2xl shadow-[0_25px_80px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col max-h-[90vh]"
            >
              {/* Modal Window Topbar */}
              <div className="px-5 py-3.5 bg-[#0f1118] border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-600/30 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                    <FileSpreadsheet className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs sm:text-sm font-bold text-white font-sans">
                        Hồ sơ Dự toán Bóc tách Sơn Hoàn thiện (TCVN 8652) - DuAn_Landmark.xlsx
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-semibold hidden sm:inline-block">
                        Live Formulas
                      </span>
                    </div>
                    <span className="text-[11px] text-white/50 font-mono">
                      Xuất bản từ CAD AI Platform • Tương thích Excel 2016+, Office 365, Google Sheets
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setIsBoqPreviewOpen(false)}
                  className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-colors cursor-pointer"
                  title="Đóng cửa sổ"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Excel Simulated Ribbon & Formula Bar */}
              <div className="px-5 py-2.5 bg-[#12141c] border-b border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-1 font-mono text-white/60">
                  <span className="px-2 py-1 rounded bg-white/5 text-white/90 font-bold text-[11px]">fx</span>
                  <span className="text-white/40 text-[11px] font-semibold">Công thức ô [I8]:</span>
                  <span className="text-amber-300 font-mono text-[11px] bg-black/40 px-2 py-0.5 rounded border border-white/10">
                    =ROUND((E8*F8) - G8 - H8, 2)
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono text-emerald-400 font-medium">
                    ✓ Đã nhúng Handle CAD vào từng dòng
                  </span>
                </div>
              </div>

              {/* Excel Grid Sheet View */}
              <div className="flex-1 overflow-x-auto overflow-y-auto p-4 bg-[#0d0f14] text-xs font-mono">
                {activeBoqSheet === 'takeoff' && (
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-[#1a1d28] text-white/70 border-b border-white/15 text-[11px]">
                        <th className="p-2.5 font-bold border-r border-white/10">STT</th>
                        <th className="p-2.5 font-bold border-r border-white/10">Mã Handle CAD</th>
                        <th className="p-2.5 font-bold border-r border-white/10">Hạng mục không gian</th>
                        <th className="p-2.5 font-bold border-r border-white/10 text-right">Chu vi (m)</th>
                        <th className="p-2.5 font-bold border-r border-white/10 text-right">Cao thông thuỷ (m)</th>
                        <th className="p-2.5 font-bold border-r border-white/10 text-right text-rose-300">Khấu trừ Cửa đi (m²)</th>
                        <th className="p-2.5 font-bold border-r border-white/10 text-right text-rose-300">Khấu trừ Cửa sổ (m²)</th>
                        <th className="p-2.5 font-bold border-r border-white/10 text-right text-[#ffc474]">Sơn Tinh Net (m²)</th>
                        <th className="p-2.5 font-bold text-center">Trạng thái Kỹ sư</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 text-white/85">
                      <tr className="hover:bg-amber-500/5 transition-colors">
                        <td className="p-2.5 text-white/50 border-r border-white/10">01</td>
                        <td className="p-2.5 text-sky-400 font-bold border-r border-white/10">LWPOLYLINE #8F31</td>
                        <td className="p-2.5 font-sans font-medium text-white border-r border-white/10">Phòng Khách & Bếp A101</td>
                        <td className="p-2.5 text-right border-r border-white/10">26.50</td>
                        <td className="p-2.5 text-right border-r border-white/10">3.20</td>
                        <td className="p-2.5 text-right text-rose-400 border-r border-white/10">- 1.98</td>
                        <td className="p-2.5 text-right text-rose-400 border-r border-white/10">- 2.24</td>
                        <td className="p-2.5 text-right font-bold text-[#ffc474] border-r border-white/10 bg-amber-500/10">80.58</td>
                        <td className="p-2.5 text-center">
                          <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-semibold border border-emerald-500/30">
                            ✓ Đã thẩm định
                          </span>
                        </td>
                      </tr>
                      <tr className="hover:bg-amber-500/5 transition-colors">
                        <td className="p-2.5 text-white/50 border-r border-white/10">02</td>
                        <td className="p-2.5 text-sky-400 font-bold border-r border-white/10">LWPOLYLINE #4A9C</td>
                        <td className="p-2.5 font-sans font-medium text-white border-r border-white/10">Phòng Ngủ Master A102</td>
                        <td className="p-2.5 text-right border-r border-white/10">18.40</td>
                        <td className="p-2.5 text-right border-r border-white/10">3.20</td>
                        <td className="p-2.5 text-right text-rose-400 border-r border-white/10">- 1.98</td>
                        <td className="p-2.5 text-right text-rose-400 border-r border-white/10">- 2.30</td>
                        <td className="p-2.5 text-right font-bold text-[#ffc474] border-r border-white/10 bg-amber-500/10">54.60</td>
                        <td className="p-2.5 text-center">
                          <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-semibold border border-emerald-500/30">
                            ✓ Đã thẩm định
                          </span>
                        </td>
                      </tr>
                      <tr className="hover:bg-amber-500/5 transition-colors">
                        <td className="p-2.5 text-white/50 border-r border-white/10">03</td>
                        <td className="p-2.5 text-sky-400 font-bold border-r border-white/10">LWPOLYLINE #3B12</td>
                        <td className="p-2.5 font-sans font-medium text-white border-r border-white/10">Phòng Ngủ Phụ A103</td>
                        <td className="p-2.5 text-right border-r border-white/10">15.20</td>
                        <td className="p-2.5 text-right border-r border-white/10">3.20</td>
                        <td className="p-2.5 text-right text-rose-400 border-r border-white/10">- 1.98</td>
                        <td className="p-2.5 text-right text-rose-400 border-r border-white/10">- 1.80</td>
                        <td className="p-2.5 text-right font-bold text-[#ffc474] border-r border-white/10 bg-amber-500/10">44.86</td>
                        <td className="p-2.5 text-center">
                          <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-semibold border border-emerald-500/30">
                            ✓ Đã thẩm định
                          </span>
                        </td>
                      </tr>
                      <tr className="hover:bg-amber-500/5 transition-colors">
                        <td className="p-2.5 text-white/50 border-r border-white/10">04</td>
                        <td className="p-2.5 text-sky-400 font-bold border-r border-white/10">LWPOLYLINE #6C44</td>
                        <td className="p-2.5 font-sans font-medium text-white border-r border-white/10">Hành lang & Tiền sảnh</td>
                        <td className="p-2.5 text-right border-r border-white/10">21.80</td>
                        <td className="p-2.5 text-right border-r border-white/10">3.20</td>
                        <td className="p-2.5 text-right text-rose-400 border-r border-white/10">- 3.96</td>
                        <td className="p-2.5 text-right text-rose-400 border-r border-white/10">0.00</td>
                        <td className="p-2.5 text-right font-bold text-[#ffc474] border-r border-white/10 bg-amber-500/10">65.80</td>
                        <td className="p-2.5 text-center">
                          <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-semibold border border-emerald-500/30">
                            ✓ Đã thẩm định
                          </span>
                        </td>
                      </tr>
                      <tr className="bg-[#1a1d28] font-bold text-white border-t border-white/20">
                        <td colSpan={7} className="p-3 text-right font-sans uppercase tracking-wider text-xs border-r border-white/10">
                          TỔNG CỘNG DIỆN TÍCH SƠN TINH TẦNG ĐIỂN HÌNH:
                        </td>
                        <td className="p-3 text-right text-amber-300 text-sm border-r border-white/10 bg-amber-500/20">
                          245.84 m²
                        </td>
                        <td className="p-3 text-center text-xs text-white/60 font-sans">
                          100% Khép kín
                        </td>
                      </tr>
                    </tbody>
                  </table>
                )}

                {activeBoqSheet === 'materials' && (
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-[#1a1d28] text-white/70 border-b border-white/15 text-[11px]">
                        <th className="p-2.5 font-bold border-r border-white/10">Mã Vật Tư</th>
                        <th className="p-2.5 font-bold border-r border-white/10">Tên chủng loại vật tư</th>
                        <th className="p-2.5 font-bold border-r border-white/10">Định mức TCVN</th>
                        <th className="p-2.5 font-bold border-r border-white/10 text-right">Khối lượng tính</th>
                        <th className="p-2.5 font-bold border-r border-white/10 text-right">Đơn vị</th>
                        <th className="p-2.5 font-bold text-right text-[#ffc474]">Quy cách đóng gói</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 text-white/85">
                      <tr>
                        <td className="p-2.5 text-white/50 border-r border-white/10">VT-BA01</td>
                        <td className="p-2.5 font-sans font-medium text-white border-r border-white/10">Bột bả trét tường nội thất cao cấp (2 lớp)</td>
                        <td className="p-2.5 text-white/60 border-r border-white/10">1.25 kg/m²</td>
                        <td className="p-2.5 text-right font-bold text-white border-r border-white/10">307.30</td>
                        <td className="p-2.5 text-right border-r border-white/10">kg</td>
                        <td className="p-2.5 text-right font-bold text-emerald-400">8 Bao (40kg/bao)</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 text-white/50 border-r border-white/10">VT-LOT02</td>
                        <td className="p-2.5 font-sans font-medium text-white border-r border-white/10">Sơn lót kháng kiềm nội thất (1 lớp)</td>
                        <td className="p-2.5 text-white/60 border-r border-white/10">0.10 lít/m²</td>
                        <td className="p-2.5 text-right font-bold text-white border-r border-white/10">24.58</td>
                        <td className="p-2.5 text-right border-r border-white/10">Lít</td>
                        <td className="p-2.5 text-right font-bold text-emerald-400">2 Thùng 18L (36L)</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 text-white/50 border-r border-white/10">VT-PHU03</td>
                        <td className="p-2.5 font-sans font-medium text-white border-r border-white/10">Sơn phủ màu nội thất cao cấp (2 lớp hoàn thiện)</td>
                        <td className="p-2.5 text-white/60 border-r border-white/10">0.18 lít/m²</td>
                        <td className="p-2.5 text-right font-bold text-white border-r border-white/10">44.25</td>
                        <td className="p-2.5 text-right border-r border-white/10">Lít</td>
                        <td className="p-2.5 text-right font-bold text-emerald-400">3 Thùng 18L (54L)</td>
                      </tr>
                    </tbody>
                  </table>
                )}

                {activeBoqSheet === 'cost' && (
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-[#1a1d28] text-white/70 border-b border-white/15 text-[11px]">
                        <th className="p-2.5 font-bold border-r border-white/10">Hạng mục chi phí</th>
                        <th className="p-2.5 font-bold border-r border-white/10 text-right">Khối lượng</th>
                        <th className="p-2.5 font-bold border-r border-white/10 text-right">Đơn vị</th>
                        <th className="p-2.5 font-bold border-r border-white/10 text-right">Đơn giá (VNĐ)</th>
                        <th className="p-2.5 font-bold text-right text-[#ffc474]">Thành tiền (VNĐ)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 text-white/85">
                      <tr>
                        <td className="p-2.5 font-sans font-medium text-white border-r border-white/10">Nhân công bả matit + chà nhám</td>
                        <td className="p-2.5 text-right border-r border-white/10">245.84</td>
                        <td className="p-2.5 text-right border-r border-white/10">m²</td>
                        <td className="p-2.5 text-right border-r border-white/10">28.000</td>
                        <td className="p-2.5 text-right font-bold text-white">6.883.520 ₫</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-sans font-medium text-white border-r border-white/10">Nhân công lăn sơn lót + 2 lớp phủ</td>
                        <td className="p-2.5 text-right border-r border-white/10">245.84</td>
                        <td className="p-2.5 text-right border-r border-white/10">m²</td>
                        <td className="p-2.5 text-right border-r border-white/10">22.000</td>
                        <td className="p-2.5 text-right font-bold text-white">5.408.480 ₫</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-sans font-medium text-white border-r border-white/10">Chi phí vật tư trọn gói (Sơn Dulux/Jotun chính hãng)</td>
                        <td className="p-2.5 text-right border-r border-white/10">245.84</td>
                        <td className="p-2.5 text-right border-r border-white/10">m²</td>
                        <td className="p-2.5 text-right border-r border-white/10">45.000</td>
                        <td className="p-2.5 text-right font-bold text-white">11.062.800 ₫</td>
                      </tr>
                      <tr className="bg-[#1a1d28] font-bold text-white border-t border-white/20">
                        <td colSpan={4} className="p-3 text-right font-sans uppercase tracking-wider text-xs border-r border-white/10">
                          TỔNG KINH PHÍ DỰ TOÁN (TẦNG ĐIỂN HÌNH):
                        </td>
                        <td className="p-3 text-right text-[#ffc474] text-base bg-amber-500/20">
                          23.354.800 ₫
                        </td>
                      </tr>
                    </tbody>
                  </table>
                )}
              </div>

              {/* Bottom Sheet Switcher & Action Footer */}
              <div className="px-5 py-3 bg-[#0f1118] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto">
                  <button
                    onClick={() => setActiveBoqSheet('takeoff')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                      activeBoqSheet === 'takeoff'
                        ? 'bg-emerald-600/30 text-emerald-300 border border-emerald-500/40 font-bold'
                        : 'text-white/60 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    1. Chi tiết Bóc tách TCVN
                  </button>
                  <button
                    onClick={() => setActiveBoqSheet('materials')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                      activeBoqSheet === 'materials'
                        ? 'bg-emerald-600/30 text-emerald-300 border border-emerald-500/40 font-bold'
                        : 'text-white/60 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    2. Định mức Vật tư
                  </button>
                  <button
                    onClick={() => setActiveBoqSheet('cost')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                      activeBoqSheet === 'cost'
                        ? 'bg-emerald-600/30 text-emerald-300 border border-emerald-500/40 font-bold'
                        : 'text-white/60 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    3. Tổng hợp Dự toán BoQ
                  </button>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                  <button
                    onClick={() => {
                      // Trigger a mock file download of CSV formatted BoQ
                      const csvContent = "data:text/csv;charset=utf-8," 
                        + "STT,Handle_CAD,Ten_Phong,Chu_Vi_m,Chieu_Cao_m,Khau_Tru_Cua_Di_m2,Khau_Tru_Cua_So_m2,Dien_Tich_Son_Tinh_m2\n"
                        + "1,LWPOLYLINE #8F31,Phong Khach A101,26.50,3.20,-1.98,-2.24,80.58\n"
                        + "2,LWPOLYLINE #4A9C,Phong Ngu Master A102,18.40,3.20,-1.98,-2.30,54.60\n"
                        + "3,LWPOLYLINE #3B12,Phong Ngu Phu A103,15.20,3.20,-1.98,-1.80,44.86\n"
                        + "4,LWPOLYLINE #6C44,Hanh Lang,21.80,3.20,-3.96,0.00,65.80\n";
                      const encodedUri = encodeURI(csvContent);
                      const link = document.createElement("a");
                      link.setAttribute("href", encodedUri);
                      link.setAttribute("download", "BoQ_Mau_TCVN_8652.csv");
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                    }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold cursor-pointer transition-all shadow-md"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Tải file Excel mẫu (.xlsx/.csv)</span>
                  </button>
                  <button
                    onClick={() => setIsBoqPreviewOpen(false)}
                    className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white/80 text-xs font-semibold cursor-pointer transition-all"
                  >
                    Đóng
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
