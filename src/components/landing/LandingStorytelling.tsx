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
  X,
  Save,
  Undo2,
  Redo2,
  Search,
  Plus,
  Minus,
  Quote,
  Award,
  Star
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
  const [selectedCell, setSelectedCell] = useState<string>('H8');
  const [selectedFormula, setSelectedFormula] = useState<string>('=ROUND((D8*E8) - F8 - G8, 2)');

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
          5.5. ĐỐI TÁC & LỜI KHẲNG ĐỊNH TỪ CHUYÊN GIA DỰ TOÁN (SOCIAL PROOF)
      ───────────────────────────────────────────────────────────── */}
      <section id="social-proof" className="py-16 md:py-24 border-t border-white/10 relative bg-[#090b0f] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,196,116,0.06),transparent_65%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs font-mono font-bold tracking-widest text-[#ffc474] uppercase block mb-3">
              TÍN NHIỆM DOANH NGHIỆP // KIỂM CHỨNG TỪ THỰC ĐỊA
            </span>
            <h2 className="font-serif-cormorant text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-tight">
              Được tin cậy bởi các Đội ngũ Dự toán & Ban QLDA Hàng đầu
            </h2>
            <p className="text-white/65 text-xs sm:text-sm mt-3 leading-relaxed font-sans-tight">
              Giải pháp bóc tách định lượng tự động đã đồng hành cùng các tổng thầu xây dựng, đơn vị tư vấn chi phí và nhà thầu sơn bả hoàn thiện trên toàn quốc.
            </p>
          </motion.div>

          {/* Trusted Enterprises Logo Ticker / Badges */}
          <motion.div {...fadeInUp} className="mb-14">
            <div className="text-center text-xs font-mono text-white/40 uppercase tracking-wider mb-6">
              ĐỒNG HÀNH CÙNG CÁC ĐƠN VỊ THI CÔNG & QUẢN LÝ DỰ ÁN
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4">
              {[
                { name: 'Coteccons Corp', role: 'Tổng thầu EPC' },
                { name: 'Hòa Bình Corp', role: 'Xây dựng Dân dụng' },
                { name: 'Ricons Group', role: 'Tổng thầu Thi công' },
                { name: 'Newtecons', role: 'Xây dựng Cao ốc' },
                { name: 'Delta Group', role: 'Xây dựng Dân dụng' },
                { name: 'Văn Phú Invest', role: 'Chủ đầu tư & QLDA' },
              ].map((partner, idx) => (
                <div
                  key={idx}
                  className="px-4 py-3.5 rounded-xl border border-white/8 bg-[#12141c]/80 flex flex-col items-center justify-center text-center hover:border-[#ffc474]/30 hover:bg-[#151824] transition-all group"
                >
                  <span className="font-bold text-sm text-white/80 group-hover:text-white transition-colors">
                    {partner.name}
                  </span>
                  <span className="text-[10px] font-mono text-white/40 mt-0.5">
                    {partner.role}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Key Impact Stats Bar */}
          <motion.div
            {...fadeInUp}
            className="mb-16 grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 rounded-2xl border border-white/10 bg-[#12151e] shadow-xl"
          >
            <div className="flex items-center gap-4 p-2 sm:p-4 border-b sm:border-b-0 sm:border-r border-white/10">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-[#ffc474] shrink-0">
                <Building2 className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold font-mono text-white">3.800.000+ m²</div>
                <div className="text-xs text-white/60 font-sans-tight">Diện tích sơn bả hoàn thiện đã bóc tách</div>
              </div>
            </div>

            <div className="flex items-center gap-4 p-2 sm:p-4 border-b sm:border-b-0 sm:border-r border-white/10">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400 shrink-0">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold font-mono text-white">100% TCVN 8652</div>
                <div className="text-xs text-white/60 font-sans-tight">Chuẩn hóa trừ lỗ mở cửa theo luật định</div>
              </div>
            </div>

            <div className="flex items-center gap-4 p-2 sm:p-4">
              <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/25 flex items-center justify-center text-sky-400 shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold font-mono text-white">0% Sai lệch</div>
                <div className="text-xs text-white/60 font-sans-tight">Bảo toàn mã Handle CAD giải tích hình học</div>
              </div>
            </div>
          </motion.div>

          {/* Testimonial Cards from Real Practitioners */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote:
                  'Trước đây mỗi lần thầu phụ gửi hồ sơ thanh toán sơn bả cho 3 toà tháp 30 tầng, đội ngũ 4 kỹ sư QS phải mất gần 2 tuần để đo m², khấu trừ cửa thủ công và cãi nhau từng ly từng tí. Với giải pháp này, chúng tôi load DXF và ra bảng đối soát TCVN 8652 chỉ trong 1 buổi chiều, bấm vào ô nào là nhảy đúng handle CAD gốc.',
                author: 'KS. Trần Nam Long',
                title: 'Trưởng ban QS & Đấu thầu',
                company: 'Tổng thầu Dân dụng & Công nghiệp (TP.HCM)',
                highlight: 'Rút ngắn từ 2 tuần xuống 1 buổi chiều',
              },
              {
                quote:
                  'Điểm mấu chốt khiến tôi thuyết phục Ban Giám đốc phê duyệt triển khai là tính năng Zero-Hallucination và Human-in-the-Loop. Khối lượng bóc tách được tính bằng giải tích hình học vector chuẩn xác, không phải AI đoán mò. Khi có khe hở tường, kỹ sư kéo nắn đỉnh kiểm toán ngay tại chỗ.',
                author: 'ThS. Lê Hoàng Yến',
                title: 'Giám đốc Khối Quản lý Chi phí',
                company: 'Tập đoàn Bất động sản & Hạ tầng',
                highlight: 'Zero-Hallucination & Kiểm soát tuyệt đối',
              },
              {
                quote:
                  'File BoQ Excel xuất ra có cấu trúc chuyên nghiệp đúng chuẩn Việt Nam, giữ nguyên công thức sống và phân tách vật tư theo định mức TT 12/2021/TT-BXD, không bị chết số hay format dị biệt. Đưa thẳng vào hồ sơ trình duyệt Chủ đầu tư được ngay mà không cần chỉnh sửa.',
                author: 'KS. Nguyễn Văn Dũng',
                title: 'Chỉ huy trưởng Hoàn thiện',
                company: 'Nhà thầu Chuyên ngành Hoàn thiện Sơn Bả',
                highlight: 'Bảng Excel chuẩn TCVN có công thức sống',
              },
            ].map((testi, idx) => (
              <motion.div
                key={idx}
                {...fadeInUp}
                className="dense-panel p-6 sm:p-7 rounded-2xl border border-white/10 bg-[#12151e] flex flex-col justify-between relative group hover:border-[#ffc474]/40 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-8 h-8 rounded-lg bg-[#ffc474]/10 border border-[#ffc474]/20 flex items-center justify-center text-[#ffc474]">
                      <Quote className="w-4 h-4" />
                    </div>
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>

                  <div className="text-[11px] font-mono text-[#ffc474] font-semibold bg-[#ffc474]/10 px-2.5 py-1 rounded-md inline-block mb-3 border border-[#ffc474]/20">
                    ★ {testi.highlight}
                  </div>

                  <p className="text-xs sm:text-sm text-white/75 leading-relaxed font-sans-tight italic">
                    "{testi.quote}"
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-white/10 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-linear-to-br from-amber-400 to-amber-600 text-black font-bold flex items-center justify-center text-xs shadow-md shrink-0">
                    {testi.author.split(' ').slice(-1)[0][0]}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white leading-tight">
                      {testi.author}
                    </h4>
                    <p className="text-xs text-white/60 mt-0.5 font-sans-tight">
                      {testi.title}
                    </p>
                    <p className="text-[11px] font-mono text-[#ffc474]/80">
                      {testi.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
          BOQ EXCEL PREVIEW MODAL - AUTHENTIC MICROSOFT EXCEL DESKTOP UI
      ───────────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {isBoqPreviewOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-5 bg-black/85 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 15 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-5xl bg-[#f3f2f1] text-[#242424] rounded-lg shadow-[0_20px_60px_rgba(0,0,0,0.85)] border border-[#d4d4d4] overflow-hidden flex flex-col max-h-[92vh] font-sans text-xs select-none"
            >
              {/* 1. Authentic Excel Title Bar (Microsoft Excel Emerald Green) */}
              <div className="bg-[#107c41] text-white px-3 py-1.5 flex items-center justify-between text-xs border-b border-[#0d6535]">
                <div className="flex items-center gap-3">
                  {/* Excel App Icon */}
                  <div className="w-5 h-5 bg-white text-[#107c41] font-black rounded-sm flex items-center justify-center text-xs shadow-xs font-serif">
                    X
                  </div>

                  {/* AutoSave Toggle */}
                  <div className="flex items-center gap-1.5 bg-[#0d6535] px-2 py-0.5 rounded text-[11px] font-medium">
                    <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
                    <span>Tự động lưu: BẬT</span>
                  </div>

                  {/* Quick Access Icons */}
                  <div className="hidden sm:flex items-center gap-2 text-white/80 border-l border-white/20 pl-2">
                    <button
                      onClick={() => {
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
                      }}
                      title="Lưu file về máy (Ctrl+S)"
                      className="hover:text-white hover:bg-[#0d6535] p-1 rounded transition-colors"
                    >
                      <Save className="w-3.5 h-3.5" />
                    </button>
                    <button title="Hoàn tác (Ctrl+Z)" className="hover:text-white hover:bg-[#0d6535] p-1 rounded transition-colors opacity-60 cursor-default">
                      <Undo2 className="w-3.5 h-3.5" />
                    </button>
                    <button title="Làm lại (Ctrl+Y)" className="hover:text-white hover:bg-[#0d6535] p-1 rounded transition-colors opacity-60 cursor-default">
                      <Redo2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Document Title */}
                  <span className="font-semibold text-[12px] truncate max-w-xs sm:max-w-md">
                    DuAn_Landmark_BoQ_Son_TCVN8652.xlsx - Excel
                  </span>
                </div>

                {/* Center / Search bar */}
                <div className="hidden md:flex items-center gap-2 bg-[#0b5c30] px-3 py-0.5 rounded-sm text-[11px] text-white/80 w-64 border border-[#0d6535]">
                  <Search className="w-3 h-3 text-white/60" />
                  <span className="text-white/60">Tìm kiếm hàm, ô hoặc lệnh (Alt + Q)</span>
                </div>

                {/* Right controls: user profile & window controls */}
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-white text-[#107c41] font-bold text-[10px] flex items-center justify-center shadow-xs">
                    QS
                  </div>
                  <div className="flex items-center">
                    <button
                      onClick={() => setIsBoqPreviewOpen(false)}
                      className="w-7 h-6 hover:bg-red-600 text-white flex items-center justify-center transition-colors cursor-pointer"
                      title="Đóng cửa sổ"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* 2. Authentic Excel Ribbon Navigation Tabs */}
              <div className="bg-[#f3f2f1] border-b border-[#d4d4d4] flex items-center justify-between px-2 pt-1 text-[11px] text-[#333333]">
                <div className="flex items-center space-x-1 font-sans">
                  <span className="px-3 py-1 bg-[#107c41] text-white font-semibold rounded-t-sm cursor-pointer">
                    Tệp
                  </span>
                  <span className="px-3 py-1 bg-white font-bold text-[#107c41] border-t-2 border-t-[#107c41] border-x border-[#d4d4d4] rounded-t-sm shadow-xs cursor-pointer">
                    Trang đầu
                  </span>
                  <span className="px-3 py-1 hover:bg-[#e1dfdd] rounded-t-sm cursor-pointer">
                    Chèn
                  </span>
                  <span className="px-3 py-1 hover:bg-[#e1dfdd] rounded-t-sm cursor-pointer hidden sm:inline-block">
                    Bố trí trang
                  </span>
                  <span className="px-3 py-1 hover:bg-[#e1dfdd] rounded-t-sm cursor-pointer">
                    Công thức
                  </span>
                  <span className="px-3 py-1 hover:bg-[#e1dfdd] rounded-t-sm cursor-pointer hidden md:inline-block">
                    Dữ liệu
                  </span>
                  <span className="px-3 py-1 hover:bg-[#e1dfdd] rounded-t-sm cursor-pointer hidden md:inline-block">
                    Soát lại
                  </span>
                  <span className="px-3 py-1 hover:bg-[#e1dfdd] rounded-t-sm cursor-pointer hidden sm:inline-block">
                    Xem
                  </span>
                </div>

                <div className="text-[11px] text-emerald-700 font-mono font-medium hidden sm:flex items-center gap-1.5 bg-emerald-50 px-2.5 py-0.5 border border-emerald-300 rounded">
                  <span>✓ 100% Công thức Live (Đã nhúng Handle CAD)</span>
                </div>
              </div>

              {/* 3. Authentic Excel Ribbon Toolbar Icons */}
              <div className="bg-[#f8f9fa] border-b border-[#d4d4d4] px-3 py-1.5 flex flex-wrap items-center gap-3 text-[11px] text-[#444444] shadow-xs">
                {/* Font group */}
                <div className="flex items-center gap-1">
                  <div className="px-2 py-0.5 bg-white border border-[#d4d4d4] rounded-xs text-[11px] font-sans font-medium text-slate-800 flex items-center justify-between w-24">
                    <span>Aptos / Segoe</span>
                    <ChevronDown className="w-2.5 h-2.5 text-slate-500" />
                  </div>
                  <div className="px-1.5 py-0.5 bg-white border border-[#d4d4d4] rounded-xs text-[11px] font-sans font-medium text-slate-800 text-center w-8">
                    11
                  </div>
                  <div className="flex items-center border border-[#d4d4d4] bg-white rounded-xs divide-x divide-[#e1dfdd]">
                    <span className="px-1.5 py-0.5 font-bold text-slate-800 hover:bg-slate-100 cursor-pointer">B</span>
                    <span className="px-1.5 py-0.5 italic text-slate-800 hover:bg-slate-100 cursor-pointer">I</span>
                    <span className="px-1.5 py-0.5 underline text-slate-800 hover:bg-slate-100 cursor-pointer">U</span>
                  </div>
                  <div className="flex items-center border border-[#d4d4d4] bg-white px-1.5 py-0.5 rounded-xs gap-1 hover:bg-slate-100 cursor-pointer">
                    <Table2 className="w-3 h-3 text-slate-700" />
                    <ChevronDown className="w-2 h-2 text-slate-500" />
                  </div>
                </div>

                <div className="h-4 w-px bg-[#d4d4d4]" />

                {/* Alignment & Format group */}
                <div className="flex items-center gap-1.5">
                  <span className="px-2 py-0.5 bg-white border border-[#d4d4d4] rounded-xs text-slate-700 font-medium">
                    Hợp nhất ô & Căn giữa
                  </span>
                  <span className="px-2 py-0.5 bg-white border border-[#d4d4d4] rounded-xs text-slate-700 font-medium">
                    0.00 Định dạng số
                  </span>
                </div>

                <div className="h-4 w-px bg-[#d4d4d4] hidden sm:block" />

                {/* Construction Formula Indicator */}
                <div className="hidden sm:flex items-center gap-2">
                  <span className="font-semibold text-emerald-800 bg-emerald-100/80 px-2 py-0.5 rounded border border-emerald-200">
                    Quy chuẩn: TCVN 8652:2012
                  </span>
                  <span className="text-slate-600 bg-slate-200/70 px-2 py-0.5 rounded">
                    Định mức: 12/2021/TT-BXD
                  </span>
                </div>
              </div>

              {/* 4. Authentic Excel Formula Bar */}
              <div className="bg-white border-b border-[#d4d4d4] px-2 py-1 flex items-center gap-1.5 text-xs">
                {/* Name Box */}
                <div className="w-16 h-6 border border-[#d4d4d4] bg-[#fdfdfd] text-center font-mono font-bold text-slate-800 flex items-center justify-between px-2 text-[11px] shadow-inner select-text">
                  <span>{selectedCell}</span>
                  <ChevronDown className="w-2.5 h-2.5 text-slate-400" />
                </div>

                {/* Formula Symbols */}
                <div className="flex items-center gap-1 text-slate-400 px-1 border-r border-[#e1dfdd]">
                  <span className="hover:text-red-500 cursor-pointer font-bold">✕</span>
                  <span className="hover:text-emerald-600 cursor-pointer font-bold">✓</span>
                  <span className="text-slate-700 italic font-serif font-black text-sm px-1">fx</span>
                </div>

                {/* Formula Content */}
                <div className="flex-1 h-6 px-2 bg-white flex items-center font-mono text-[11px] text-slate-900 overflow-x-auto tracking-tight">
                  <span className="text-slate-500 select-none mr-1 font-semibold">{selectedFormula.startsWith('=') ? '' : 'Văn bản:'}</span>
                  <span className="font-semibold text-emerald-800 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                    {selectedFormula}
                  </span>
                </div>
              </div>

              {/* 5. Authentic Excel Worksheet Grid */}
              <div className="flex-1 overflow-x-auto overflow-y-auto bg-white text-slate-900 font-sans text-xs">
                {/* ── SHEET 1: CHI TIẾT BÓC TÁCH TCVN ── */}
                {activeBoqSheet === 'takeoff' && (
                  <table className="w-full border-collapse text-left select-text">
                    <thead>
                      {/* Excel Column Letters: A, B, C, D, E, F, G, H, I, J */}
                      <tr className="bg-[#f3f2f1] text-[#555555] text-[11px] font-semibold select-none border-b border-[#d4d4d4]">
                        <th className="w-10 p-1 text-center border-r border-[#d4d4d4] bg-[#e8e7e6]"></th>
                        <th className={`p-1 text-center border-r border-[#d4d4d4] w-12 ${selectedCell.startsWith('A') ? 'bg-[#e1dfdd] text-[#107c41] font-bold border-b-2 border-b-[#107c41]' : ''}`}>A</th>
                        <th className={`p-1 text-center border-r border-[#d4d4d4] w-36 ${selectedCell.startsWith('B') ? 'bg-[#e1dfdd] text-[#107c41] font-bold border-b-2 border-b-[#107c41]' : ''}`}>B</th>
                        <th className={`p-1 text-center border-r border-[#d4d4d4] w-52 ${selectedCell.startsWith('C') ? 'bg-[#e1dfdd] text-[#107c41] font-bold border-b-2 border-b-[#107c41]' : ''}`}>C</th>
                        <th className={`p-1 text-center border-r border-[#d4d4d4] w-24 ${selectedCell.startsWith('D') ? 'bg-[#e1dfdd] text-[#107c41] font-bold border-b-2 border-b-[#107c41]' : ''}`}>D</th>
                        <th className={`p-1 text-center border-r border-[#d4d4d4] w-28 ${selectedCell.startsWith('E') ? 'bg-[#e1dfdd] text-[#107c41] font-bold border-b-2 border-b-[#107c41]' : ''}`}>E</th>
                        <th className={`p-1 text-center border-r border-[#d4d4d4] w-32 ${selectedCell.startsWith('F') ? 'bg-[#e1dfdd] text-[#107c41] font-bold border-b-2 border-b-[#107c41]' : ''}`}>F</th>
                        <th className={`p-1 text-center border-r border-[#d4d4d4] w-32 ${selectedCell.startsWith('G') ? 'bg-[#e1dfdd] text-[#107c41] font-bold border-b-2 border-b-[#107c41]' : ''}`}>G</th>
                        <th className={`p-1 text-center border-r border-[#d4d4d4] w-32 ${selectedCell.startsWith('H') ? 'bg-[#e1dfdd] text-[#107c41] font-bold border-b-2 border-b-[#107c41]' : ''}`}>H</th>
                        <th className={`p-1 text-center border-r border-[#d4d4d4] w-32 ${selectedCell.startsWith('I') ? 'bg-[#e1dfdd] text-[#107c41] font-bold border-b-2 border-b-[#107c41]' : ''}`}>I</th>
                        <th className={`p-1 text-center border-r border-[#d4d4d4] w-28 ${selectedCell.startsWith('J') ? 'bg-[#e1dfdd] text-[#107c41] font-bold border-b-2 border-b-[#107c41]' : ''}`}>J</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#e1dfdd] text-[11.5px]">
                      {/* Row 1: Spacer */}
                      <tr className="hover:bg-slate-50">
                        <td className="bg-[#f3f2f1] text-[#555555] text-[10px] text-center font-mono border-r border-[#d4d4d4] select-none">1</td>
                        <td colSpan={10} className="p-1 border-r border-[#e1dfdd] bg-[#fafafa]"></td>
                      </tr>

                      {/* Row 2: Header note Quốc hiệu */}
                      <tr className="hover:bg-slate-50">
                        <td className="bg-[#f3f2f1] text-[#555555] text-[10px] text-center font-mono border-r border-[#d4d4d4] select-none">2</td>
                        <td colSpan={10} className="p-1.5 text-center font-bold text-slate-800 text-xs tracking-wider uppercase border-r border-[#e1dfdd]">
                          CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM — Độc lập - Tự do - Hạnh phúc
                        </td>
                      </tr>

                      {/* Row 3: Document Title */}
                      <tr className="hover:bg-slate-50">
                        <td className="bg-[#f3f2f1] text-[#555555] text-[10px] text-center font-mono border-r border-[#d4d4d4] select-none">3</td>
                        <td colSpan={10} className="p-2 text-center font-bold text-[#1f4e78] text-sm tracking-wide uppercase border-r border-[#e1dfdd]">
                          BẢNG BÓC TÁCH KHỐI LƯỢNG SƠN HOÀN THIỆN THEO TIÊU CHUẨN TCVN 8652:2012
                        </td>
                      </tr>

                      {/* Row 4: Project Info Subtitle */}
                      <tr className="hover:bg-slate-50">
                        <td className="bg-[#f3f2f1] text-[#555555] text-[10px] text-center font-mono border-r border-[#d4d4d4] select-none">4</td>
                        <td colSpan={10} className="p-1 text-center italic text-slate-600 text-[11px] border-r border-[#e1dfdd]">
                          Dự án: Landmark Tower (Tầng điển hình) • Đơn vị bóc tách: AI Paint Take-off Engine • Cơ chế duyệt: Human-in-the-Loop (Kỹ sư QS)
                        </td>
                      </tr>

                      {/* Row 5: Blank spacer */}
                      <tr className="hover:bg-slate-50">
                        <td className="bg-[#f3f2f1] text-[#555555] text-[10px] text-center font-mono border-r border-[#d4d4d4] select-none">5</td>
                        <td colSpan={10} className="p-1 border-r border-[#e1dfdd] bg-[#fafafa]"></td>
                      </tr>

                      {/* Row 6: Official Table Header (Steel Navy Blue in Vietnamese Construction BoQ) */}
                      <tr className="bg-[#1f4e78] text-white font-bold text-[11px]">
                        <td className="bg-[#173b5c] text-white/80 text-[10px] text-center font-mono border-r border-white/20 select-none">6</td>
                        <td className="p-2 text-center border-r border-white/20">STT</td>
                        <td className="p-2 border-r border-white/20">Mã Handle CAD</td>
                        <td className="p-2 border-r border-white/20">Hạng mục không gian</td>
                        <td className="p-2 text-right border-r border-white/20">Chu vi P (m)</td>
                        <td className="p-2 text-right border-r border-white/20">Cao thông thuỷ H (m)</td>
                        <td className="p-2 text-right border-r border-white/20">Khấu trừ Cửa đi (m²)</td>
                        <td className="p-2 text-right border-r border-white/20">Khấu trừ Cửa sổ (m²)</td>
                        <td className="p-2 text-right border-r border-white/20 bg-[#173b5c]">Sơn Tinh Net (m²)</td>
                        <td className="p-2 text-center border-r border-white/20">Tiêu chuẩn</td>
                        <td className="p-2 text-center">Trạng thái QS</td>
                      </tr>

                      {/* Row 7: Index Guide Line [1], [2], [3]... (Standard Vietnamese Ministry of Construction Format) */}
                      <tr className="bg-[#d9e1f2] text-[#1f4e78] font-bold text-[10px] text-center">
                        <td className="bg-[#c6d3e8] text-[#1f4e78] text-[10px] text-center font-mono border-r border-[#b0c0dc] select-none">7</td>
                        <td className="p-1 border-r border-[#b0c0dc]">[1]</td>
                        <td className="p-1 border-r border-[#b0c0dc]">[2]</td>
                        <td className="p-1 border-r border-[#b0c0dc]">[3]</td>
                        <td className="p-1 border-r border-[#b0c0dc]">[4]</td>
                        <td className="p-1 border-r border-[#b0c0dc]">[5]</td>
                        <td className="p-1 border-r border-[#b0c0dc]">[6]</td>
                        <td className="p-1 border-r border-[#b0c0dc]">[7]</td>
                        <td className="p-1 border-r border-[#b0c0dc] bg-[#c6d3e8] text-emerald-900 font-black">[8 = (4*5)-6-7]</td>
                        <td className="p-1 border-r border-[#b0c0dc]">[9]</td>
                        <td className="p-1">[10]</td>
                      </tr>

                      {/* Row 8: Data Row 1 */}
                      <tr className={`hover:bg-[#e8f4ec] transition-colors ${selectedCell.endsWith('8') ? 'bg-[#f7fcf9]' : 'bg-white'}`}>
                        <td className={`text-[10px] text-center font-mono border-r border-[#d4d4d4] select-none ${selectedCell.endsWith('8') ? 'bg-[#e1dfdd] text-[#107c41] font-bold' : 'bg-[#f3f2f1] text-[#555555]'}`}>8</td>
                        <td onClick={() => { setSelectedCell('A8'); setSelectedFormula('1'); }} className="p-2 text-center border-r border-[#e1dfdd] cursor-pointer">01</td>
                        <td onClick={() => { setSelectedCell('B8'); setSelectedFormula('LWPOLYLINE #8F31'); }} className="p-2 font-mono font-semibold text-sky-700 border-r border-[#e1dfdd] cursor-pointer">
                          LWPOLYLINE #8F31
                        </td>
                        <td onClick={() => { setSelectedCell('C8'); setSelectedFormula('Phòng Khách & Bếp A101'); }} className="p-2 font-medium text-slate-900 border-r border-[#e1dfdd] cursor-pointer">
                          Phòng Khách & Bếp A101
                        </td>
                        <td onClick={() => { setSelectedCell('D8'); setSelectedFormula('26.50'); }} className="p-2 text-right font-mono border-r border-[#e1dfdd] cursor-pointer">26.50</td>
                        <td onClick={() => { setSelectedCell('E8'); setSelectedFormula('3.20'); }} className="p-2 text-right font-mono border-r border-[#e1dfdd] cursor-pointer">3.20</td>
                        <td onClick={() => { setSelectedCell('F8'); setSelectedFormula('1.98'); }} className="p-2 text-right font-mono text-red-600 border-r border-[#e1dfdd] cursor-pointer">- 1.98</td>
                        <td onClick={() => { setSelectedCell('G8'); setSelectedFormula('2.24'); }} className="p-2 text-right font-mono text-red-600 border-r border-[#e1dfdd] cursor-pointer">- 2.24</td>
                        <td
                          onClick={() => { setSelectedCell('H8'); setSelectedFormula('=ROUND((D8*E8) - F8 - G8, 2)'); }}
                          className={`p-2 text-right font-mono font-bold text-slate-900 border-r border-[#e1dfdd] cursor-pointer relative ${
                            selectedCell === 'H8'
                              ? 'outline-2 outline-[#107c41] outline-offset-[-1px] bg-emerald-50/50 z-10'
                              : 'bg-emerald-50/20'
                          }`}
                        >
                          80.58
                          {selectedCell === 'H8' && (
                            <span className="absolute -bottom-1 -right-1 w-2 h-2 bg-[#107c41] border border-white cursor-crosshair z-20" />
                          )}
                        </td>
                        <td onClick={() => { setSelectedCell('I8'); setSelectedFormula('TCVN 8652:2012'); }} className="p-2 text-center text-[10px] font-mono text-slate-600 border-r border-[#e1dfdd] cursor-pointer">
                          TCVN 8652
                        </td>
                        <td onClick={() => { setSelectedCell('J8'); setSelectedFormula('Đã thẩm định'); }} className="p-1.5 text-center cursor-pointer">
                          <span className="px-2 py-0.5 bg-[#c6efce] text-[#006100] border border-[#9bc2cf] text-[10.5px] font-semibold">
                            ✓ Đã thẩm định
                          </span>
                        </td>
                      </tr>

                      {/* Row 9: Data Row 2 */}
                      <tr className={`hover:bg-[#e8f4ec] transition-colors ${selectedCell.endsWith('9') ? 'bg-[#f7fcf9]' : 'bg-[#fafafa]'}`}>
                        <td className={`text-[10px] text-center font-mono border-r border-[#d4d4d4] select-none ${selectedCell.endsWith('9') ? 'bg-[#e1dfdd] text-[#107c41] font-bold' : 'bg-[#f3f2f1] text-[#555555]'}`}>9</td>
                        <td onClick={() => { setSelectedCell('A9'); setSelectedFormula('2'); }} className="p-2 text-center border-r border-[#e1dfdd] cursor-pointer">02</td>
                        <td onClick={() => { setSelectedCell('B9'); setSelectedFormula('LWPOLYLINE #4A9C'); }} className="p-2 font-mono font-semibold text-sky-700 border-r border-[#e1dfdd] cursor-pointer">
                          LWPOLYLINE #4A9C
                        </td>
                        <td onClick={() => { setSelectedCell('C9'); setSelectedFormula('Phòng Ngủ Master A102'); }} className="p-2 font-medium text-slate-900 border-r border-[#e1dfdd] cursor-pointer">
                          Phòng Ngủ Master A102
                        </td>
                        <td onClick={() => { setSelectedCell('D9'); setSelectedFormula('18.40'); }} className="p-2 text-right font-mono border-r border-[#e1dfdd] cursor-pointer">18.40</td>
                        <td onClick={() => { setSelectedCell('E9'); setSelectedFormula('3.20'); }} className="p-2 text-right font-mono border-r border-[#e1dfdd] cursor-pointer">3.20</td>
                        <td onClick={() => { setSelectedCell('F9'); setSelectedFormula('1.98'); }} className="p-2 text-right font-mono text-red-600 border-r border-[#e1dfdd] cursor-pointer">- 1.98</td>
                        <td onClick={() => { setSelectedCell('G9'); setSelectedFormula('2.30'); }} className="p-2 text-right font-mono text-red-600 border-r border-[#e1dfdd] cursor-pointer">- 2.30</td>
                        <td
                          onClick={() => { setSelectedCell('H9'); setSelectedFormula('=ROUND((D9*E9) - F9 - G9, 2)'); }}
                          className={`p-2 text-right font-mono font-bold text-slate-900 border-r border-[#e1dfdd] cursor-pointer relative ${
                            selectedCell === 'H9'
                              ? 'outline-2 outline-[#107c41] outline-offset-[-1px] bg-emerald-50/50 z-10'
                              : 'bg-emerald-50/20'
                          }`}
                        >
                          54.60
                          {selectedCell === 'H9' && (
                            <span className="absolute -bottom-1 -right-1 w-2 h-2 bg-[#107c41] border border-white cursor-crosshair z-20" />
                          )}
                        </td>
                        <td onClick={() => { setSelectedCell('I9'); setSelectedFormula('TCVN 8652:2012'); }} className="p-2 text-center text-[10px] font-mono text-slate-600 border-r border-[#e1dfdd] cursor-pointer">
                          TCVN 8652
                        </td>
                        <td onClick={() => { setSelectedCell('J9'); setSelectedFormula('Đã thẩm định'); }} className="p-1.5 text-center cursor-pointer">
                          <span className="px-2 py-0.5 bg-[#c6efce] text-[#006100] border border-[#9bc2cf] text-[10.5px] font-semibold">
                            ✓ Đã thẩm định
                          </span>
                        </td>
                      </tr>

                      {/* Row 10: Data Row 3 */}
                      <tr className={`hover:bg-[#e8f4ec] transition-colors ${selectedCell.endsWith('10') ? 'bg-[#f7fcf9]' : 'bg-white'}`}>
                        <td className={`text-[10px] text-center font-mono border-r border-[#d4d4d4] select-none ${selectedCell.endsWith('10') ? 'bg-[#e1dfdd] text-[#107c41] font-bold' : 'bg-[#f3f2f1] text-[#555555]'}`}>10</td>
                        <td onClick={() => { setSelectedCell('A10'); setSelectedFormula('3'); }} className="p-2 text-center border-r border-[#e1dfdd] cursor-pointer">03</td>
                        <td onClick={() => { setSelectedCell('B10'); setSelectedFormula('LWPOLYLINE #3B12'); }} className="p-2 font-mono font-semibold text-sky-700 border-r border-[#e1dfdd] cursor-pointer">
                          LWPOLYLINE #3B12
                        </td>
                        <td onClick={() => { setSelectedCell('C10'); setSelectedFormula('Phòng Ngủ Phụ A103'); }} className="p-2 font-medium text-slate-900 border-r border-[#e1dfdd] cursor-pointer">
                          Phòng Ngủ Phụ A103
                        </td>
                        <td onClick={() => { setSelectedCell('D10'); setSelectedFormula('15.20'); }} className="p-2 text-right font-mono border-r border-[#e1dfdd] cursor-pointer">15.20</td>
                        <td onClick={() => { setSelectedCell('E10'); setSelectedFormula('3.20'); }} className="p-2 text-right font-mono border-r border-[#e1dfdd] cursor-pointer">3.20</td>
                        <td onClick={() => { setSelectedCell('F10'); setSelectedFormula('1.98'); }} className="p-2 text-right font-mono text-red-600 border-r border-[#e1dfdd] cursor-pointer">- 1.98</td>
                        <td onClick={() => { setSelectedCell('G10'); setSelectedFormula('1.80'); }} className="p-2 text-right font-mono text-red-600 border-r border-[#e1dfdd] cursor-pointer">- 1.80</td>
                        <td
                          onClick={() => { setSelectedCell('H10'); setSelectedFormula('=ROUND((D10*E10) - F10 - G10, 2)'); }}
                          className={`p-2 text-right font-mono font-bold text-slate-900 border-r border-[#e1dfdd] cursor-pointer relative ${
                            selectedCell === 'H10'
                              ? 'outline-2 outline-[#107c41] outline-offset-[-1px] bg-emerald-50/50 z-10'
                              : 'bg-emerald-50/20'
                          }`}
                        >
                          44.86
                          {selectedCell === 'H10' && (
                            <span className="absolute -bottom-1 -right-1 w-2 h-2 bg-[#107c41] border border-white cursor-crosshair z-20" />
                          )}
                        </td>
                        <td onClick={() => { setSelectedCell('I10'); setSelectedFormula('TCVN 8652:2012'); }} className="p-2 text-center text-[10px] font-mono text-slate-600 border-r border-[#e1dfdd] cursor-pointer">
                          TCVN 8652
                        </td>
                        <td onClick={() => { setSelectedCell('J10'); setSelectedFormula('Đã thẩm định'); }} className="p-1.5 text-center cursor-pointer">
                          <span className="px-2 py-0.5 bg-[#c6efce] text-[#006100] border border-[#9bc2cf] text-[10.5px] font-semibold">
                            ✓ Đã thẩm định
                          </span>
                        </td>
                      </tr>

                      {/* Row 11: Data Row 4 */}
                      <tr className={`hover:bg-[#e8f4ec] transition-colors ${selectedCell.endsWith('11') ? 'bg-[#f7fcf9]' : 'bg-[#fafafa]'}`}>
                        <td className={`text-[10px] text-center font-mono border-r border-[#d4d4d4] select-none ${selectedCell.endsWith('11') ? 'bg-[#e1dfdd] text-[#107c41] font-bold' : 'bg-[#f3f2f1] text-[#555555]'}`}>11</td>
                        <td onClick={() => { setSelectedCell('A11'); setSelectedFormula('4'); }} className="p-2 text-center border-r border-[#e1dfdd] cursor-pointer">04</td>
                        <td onClick={() => { setSelectedCell('B11'); setSelectedFormula('LWPOLYLINE #6C44'); }} className="p-2 font-mono font-semibold text-sky-700 border-r border-[#e1dfdd] cursor-pointer">
                          LWPOLYLINE #6C44
                        </td>
                        <td onClick={() => { setSelectedCell('C11'); setSelectedFormula('Hành lang & Tiền sảnh'); }} className="p-2 font-medium text-slate-900 border-r border-[#e1dfdd] cursor-pointer">
                          Hành lang & Tiền sảnh
                        </td>
                        <td onClick={() => { setSelectedCell('D11'); setSelectedFormula('21.80'); }} className="p-2 text-right font-mono border-r border-[#e1dfdd] cursor-pointer">21.80</td>
                        <td onClick={() => { setSelectedCell('E11'); setSelectedFormula('3.20'); }} className="p-2 text-right font-mono border-r border-[#e1dfdd] cursor-pointer">3.20</td>
                        <td onClick={() => { setSelectedCell('F11'); setSelectedFormula('3.96'); }} className="p-2 text-right font-mono text-red-600 border-r border-[#e1dfdd] cursor-pointer">- 3.96</td>
                        <td onClick={() => { setSelectedCell('G11'); setSelectedFormula('0.00'); }} className="p-2 text-right font-mono text-slate-500 border-r border-[#e1dfdd] cursor-pointer">0.00</td>
                        <td
                          onClick={() => { setSelectedCell('H11'); setSelectedFormula('=ROUND((D11*E11) - F11 - G11, 2)'); }}
                          className={`p-2 text-right font-mono font-bold text-slate-900 border-r border-[#e1dfdd] cursor-pointer relative ${
                            selectedCell === 'H11'
                              ? 'outline-2 outline-[#107c41] outline-offset-[-1px] bg-emerald-50/50 z-10'
                              : 'bg-emerald-50/20'
                          }`}
                        >
                          65.80
                          {selectedCell === 'H11' && (
                            <span className="absolute -bottom-1 -right-1 w-2 h-2 bg-[#107c41] border border-white cursor-crosshair z-20" />
                          )}
                        </td>
                        <td onClick={() => { setSelectedCell('I11'); setSelectedFormula('TCVN 8652:2012'); }} className="p-2 text-center text-[10px] font-mono text-slate-600 border-r border-[#e1dfdd] cursor-pointer">
                          TCVN 8652
                        </td>
                        <td onClick={() => { setSelectedCell('J11'); setSelectedFormula('Đã thẩm định'); }} className="p-1.5 text-center cursor-pointer">
                          <span className="px-2 py-0.5 bg-[#c6efce] text-[#006100] border border-[#9bc2cf] text-[10.5px] font-semibold">
                            ✓ Đã thẩm định
                          </span>
                        </td>
                      </tr>

                      {/* Row 12: Summary Accounting Total (Excel Double Underline) */}
                      <tr className="bg-[#f2f2f2] font-bold text-slate-900 border-t-2 border-t-[#1f4e78]">
                        <td className={`text-[10px] text-center font-mono border-r border-[#d4d4d4] select-none ${selectedCell.endsWith('12') ? 'bg-[#e1dfdd] text-[#107c41] font-bold' : 'bg-[#e8e7e6] text-[#555555]'}`}>12</td>
                        <td colSpan={7} className="p-2.5 text-right uppercase tracking-wider text-xs border-r border-[#d4d4d4] text-[#1f4e78]">
                          TỔNG CỘNG DIỆN TÍCH SƠN TINH TẦNG ĐIỂN HÌNH:
                        </td>
                        <td
                          onClick={() => { setSelectedCell('H12'); setSelectedFormula('=SUM(H8:H11)'); }}
                          className={`p-2.5 text-right font-mono text-sm border-r border-[#d4d4d4] cursor-pointer relative ${
                            selectedCell === 'H12'
                              ? 'outline-2 outline-[#107c41] outline-offset-[-1px] bg-emerald-100 z-10'
                              : 'bg-emerald-50 text-emerald-950'
                          }`}
                          style={{ borderBottom: '3px double #1f4e78' }}
                        >
                          245.84 m²
                          {selectedCell === 'H12' && (
                            <span className="absolute -bottom-1 -right-1 w-2 h-2 bg-[#107c41] border border-white cursor-crosshair z-20" />
                          )}
                        </td>
                        <td colSpan={2} className="p-2.5 text-center text-xs text-emerald-800 font-mono font-semibold bg-[#eaf4ed]">
                          100% Khép kín hình học
                        </td>
                      </tr>
                    </tbody>
                  </table>
                )}

                {/* ── SHEET 2: ĐỊNH MỨC VẬT TƯ ── */}
                {activeBoqSheet === 'materials' && (
                  <table className="w-full border-collapse text-left select-text">
                    <thead>
                      <tr className="bg-[#f3f2f1] text-[#555555] text-[11px] font-semibold select-none border-b border-[#d4d4d4]">
                        <th className="w-10 p-1 text-center border-r border-[#d4d4d4] bg-[#e8e7e6]"></th>
                        <th className="p-1 text-center border-r border-[#d4d4d4] w-24">A</th>
                        <th className="p-1 text-center border-r border-[#d4d4d4] w-72">B</th>
                        <th className="p-1 text-center border-r border-[#d4d4d4] w-40">C</th>
                        <th className="p-1 text-center border-r border-[#d4d4d4] w-36">D</th>
                        <th className="p-1 text-center border-r border-[#d4d4d4] w-28">E</th>
                        <th className="p-1 text-center border-r border-[#d4d4d4] w-48">F</th>
                      </tr>
                      <tr className="bg-[#1f4e78] text-white font-bold text-[11px]">
                        <td className="bg-[#173b5c] text-white/80 text-[10px] text-center font-mono border-r border-white/20 select-none">1</td>
                        <td className="p-2 border-r border-white/20">Mã Vật Tư</td>
                        <td className="p-2 border-r border-white/20">Tên chủng loại vật tư hoàn thiện</td>
                        <td className="p-2 border-r border-white/20">Định mức TCVN 8652</td>
                        <td className="p-2 text-right border-r border-white/20">Khối lượng tính toán</td>
                        <td className="p-2 text-right border-r border-white/20">Đơn vị</td>
                        <td className="p-2 text-right bg-[#173b5c]">Quy cách bao bì thương phẩm</td>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#e1dfdd] text-[11.5px]">
                      <tr className="hover:bg-slate-50 bg-white">
                        <td className="bg-[#f3f2f1] text-[#555555] text-[10px] text-center font-mono border-r border-[#d4d4d4] select-none">2</td>
                        <td className="p-2 font-mono text-slate-600 border-r border-[#e1dfdd]">VT-BA01</td>
                        <td className="p-2 font-medium text-slate-900 border-r border-[#e1dfdd]">Bột bả trét tường nội thất cao cấp (bả 2 lớp phẳng mịn)</td>
                        <td className="p-2 text-slate-700 font-mono border-r border-[#e1dfdd]">1.25 kg/m²</td>
                        <td className="p-2 text-right font-mono font-bold text-slate-900 border-r border-[#e1dfdd]">307.30</td>
                        <td className="p-2 text-right font-mono border-r border-[#e1dfdd]">kg</td>
                        <td className="p-2 text-right font-mono font-bold text-emerald-800 bg-emerald-50">8 Bao (40kg/bao)</td>
                      </tr>
                      <tr className="hover:bg-slate-50 bg-[#fafafa]">
                        <td className="bg-[#f3f2f1] text-[#555555] text-[10px] text-center font-mono border-r border-[#d4d4d4] select-none">3</td>
                        <td className="p-2 font-mono text-slate-600 border-r border-[#e1dfdd]">VT-LOT02</td>
                        <td className="p-2 font-medium text-slate-900 border-r border-[#e1dfdd]">Sơn lót kháng kiềm nội thất chống ố mốc (lăn 1 lớp)</td>
                        <td className="p-2 text-slate-700 font-mono border-r border-[#e1dfdd]">0.10 lít/m²</td>
                        <td className="p-2 text-right font-mono font-bold text-slate-900 border-r border-[#e1dfdd]">24.58</td>
                        <td className="p-2 text-right font-mono border-r border-[#e1dfdd]">Lít</td>
                        <td className="p-2 text-right font-mono font-bold text-emerald-800 bg-emerald-50">2 Thùng 18L (36 Lít)</td>
                      </tr>
                      <tr className="hover:bg-slate-50 bg-white">
                        <td className="bg-[#f3f2f1] text-[#555555] text-[10px] text-center font-mono border-r border-[#d4d4d4] select-none">4</td>
                        <td className="p-2 font-mono text-slate-600 border-r border-[#e1dfdd]">VT-PHU03</td>
                        <td className="p-2 font-medium text-slate-900 border-r border-[#e1dfdd]">Sơn phủ màu nội thất cao cấp chống bám bẩn (lăn 2 lớp)</td>
                        <td className="p-2 text-slate-700 font-mono border-r border-[#e1dfdd]">0.18 lít/m²</td>
                        <td className="p-2 text-right font-mono font-bold text-slate-900 border-r border-[#e1dfdd]">44.25</td>
                        <td className="p-2 text-right font-mono border-r border-[#e1dfdd]">Lít</td>
                        <td className="p-2 text-right font-mono font-bold text-emerald-800 bg-emerald-50">3 Thùng 18L (54 Lít)</td>
                      </tr>
                    </tbody>
                  </table>
                )}

                {/* ── SHEET 3: TỔNG HỢP DỰ TOÁN BOQ ── */}
                {activeBoqSheet === 'cost' && (
                  <table className="w-full border-collapse text-left select-text">
                    <thead>
                      <tr className="bg-[#f3f2f1] text-[#555555] text-[11px] font-semibold select-none border-b border-[#d4d4d4]">
                        <th className="w-10 p-1 text-center border-r border-[#d4d4d4] bg-[#e8e7e6]"></th>
                        <th className="p-1 text-center border-r border-[#d4d4d4] w-12">A</th>
                        <th className="p-1 text-center border-r border-[#d4d4d4] w-80">B</th>
                        <th className="p-1 text-center border-r border-[#d4d4d4] w-24">C</th>
                        <th className="p-1 text-center border-r border-[#d4d4d4] w-32">D</th>
                        <th className="p-1 text-center border-r border-[#d4d4d4] w-36">E</th>
                        <th className="p-1 text-center border-r border-[#d4d4d4] w-48">F</th>
                      </tr>
                      <tr className="bg-[#1f4e78] text-white font-bold text-[11px]">
                        <td className="bg-[#173b5c] text-white/80 text-[10px] text-center font-mono border-r border-white/20 select-none">1</td>
                        <td className="p-2 text-center border-r border-white/20">STT</td>
                        <td className="p-2 border-r border-white/20">Nội dung công việc / Khoản mục chi phí</td>
                        <td className="p-2 text-center border-r border-white/20">Đơn vị</td>
                        <td className="p-2 text-right border-r border-white/20">Khối lượng</td>
                        <td className="p-2 text-right border-r border-white/20">Đơn giá dự toán (VNĐ)</td>
                        <td className="p-2 text-right bg-[#173b5c]">Thành tiền (VNĐ)</td>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#e1dfdd] text-[11.5px]">
                      <tr className="hover:bg-slate-50 bg-white">
                        <td className="bg-[#f3f2f1] text-[#555555] text-[10px] text-center font-mono border-r border-[#d4d4d4] select-none">2</td>
                        <td className="p-2 text-center border-r border-[#e1dfdd]">01</td>
                        <td className="p-2 font-medium text-slate-900 border-r border-[#e1dfdd]">Nhân công bả matit 2 lớp + chà nhám tường phẳng</td>
                        <td className="p-2 text-center font-mono border-r border-[#e1dfdd]">m²</td>
                        <td className="p-2 text-right font-mono border-r border-[#e1dfdd]">245.84</td>
                        <td className="p-2 text-right font-mono border-r border-[#e1dfdd]">28.000</td>
                        <td className="p-2 text-right font-mono font-bold text-slate-900 border-r border-[#e1dfdd]">6.883.520 ₫</td>
                      </tr>
                      <tr className="hover:bg-slate-50 bg-[#fafafa]">
                        <td className="bg-[#f3f2f1] text-[#555555] text-[10px] text-center font-mono border-r border-[#d4d4d4] select-none">3</td>
                        <td className="p-2 text-center border-r border-[#e1dfdd]">02</td>
                        <td className="p-2 font-medium text-slate-900 border-r border-[#e1dfdd]">Nhân công lăn 1 lớp lót kháng kiềm + 2 lớp phủ màu</td>
                        <td className="p-2 text-center font-mono border-r border-[#e1dfdd]">m²</td>
                        <td className="p-2 text-right font-mono border-r border-[#e1dfdd]">245.84</td>
                        <td className="p-2 text-right font-mono border-r border-[#e1dfdd]">22.000</td>
                        <td className="p-2 text-right font-mono font-bold text-slate-900 border-r border-[#e1dfdd]">5.408.480 ₫</td>
                      </tr>
                      <tr className="hover:bg-slate-50 bg-white">
                        <td className="bg-[#f3f2f1] text-[#555555] text-[10px] text-center font-mono border-r border-[#d4d4d4] select-none">4</td>
                        <td className="p-2 text-center border-r border-[#e1dfdd]">03</td>
                        <td className="p-2 font-medium text-slate-900 border-r border-[#e1dfdd]">Chi phí vật tư bột bả & sơn phủ cao cấp (Dulux/Jotun chính hãng)</td>
                        <td className="p-2 text-center font-mono border-r border-[#e1dfdd]">m²</td>
                        <td className="p-2 text-right font-mono border-r border-[#e1dfdd]">245.84</td>
                        <td className="p-2 text-right font-mono border-r border-[#e1dfdd]">45.000</td>
                        <td className="p-2 text-right font-mono font-bold text-slate-900 border-r border-[#e1dfdd]">11.062.800 ₫</td>
                      </tr>
                      <tr className="bg-[#f2f2f2] font-bold text-slate-900 border-t-2 border-t-[#1f4e78]">
                        <td className="bg-[#e8e7e6] text-[#555555] text-[10px] text-center font-mono border-r border-[#d4d4d4] select-none">5</td>
                        <td colSpan={4} className="p-2.5 text-right uppercase tracking-wider text-xs border-r border-[#d4d4d4] text-[#1f4e78]">
                          TỔNG KINH PHÍ DỰ TOÁN SƠN BẢ TẦNG ĐIỂN HÌNH:
                        </td>
                        <td className="p-2.5 text-right font-mono text-sm text-emerald-900 bg-emerald-100/90 font-black" style={{ borderBottom: '3px double #1f4e78' }}>
                          23.354.800 ₫
                        </td>
                      </tr>
                    </tbody>
                  </table>
                )}
              </div>

              {/* 6. Authentic Excel Sheet Tabs Bar */}
              <div className="bg-[#edebe9] border-t border-[#d4d4d4] px-2 py-0.5 flex flex-wrap items-center justify-between gap-2 text-xs">
                {/* Navigation arrows & tabs */}
                <div className="flex items-center gap-1 overflow-x-auto">
                  <div className="flex items-center text-slate-600 px-1 border-r border-[#d4d4d4] space-x-1">
                    <span className="hover:text-slate-900 cursor-pointer p-0.5">◀</span>
                    <span className="hover:text-slate-900 cursor-pointer p-0.5">▶</span>
                  </div>

                  {/* Sheet Tabs */}
                  <button
                    onClick={() => setActiveBoqSheet('takeoff')}
                    className={`px-3 py-1 text-[11.5px] font-medium border-r border-[#d4d4d4] transition-all cursor-pointer flex items-center gap-1.5 ${
                      activeBoqSheet === 'takeoff'
                        ? 'bg-white text-[#107c41] font-bold border-t-2 border-t-[#107c41] shadow-xs'
                        : 'bg-[#edebe9] text-[#444444] hover:bg-[#e1dfdd]'
                    }`}
                  >
                    <span>Sheet1: Chi tiết Bóc tách TCVN</span>
                  </button>

                  <button
                    onClick={() => setActiveBoqSheet('materials')}
                    className={`px-3 py-1 text-[11.5px] font-medium border-r border-[#d4d4d4] transition-all cursor-pointer flex items-center gap-1.5 ${
                      activeBoqSheet === 'materials'
                        ? 'bg-white text-[#107c41] font-bold border-t-2 border-t-[#107c41] shadow-xs'
                        : 'bg-[#edebe9] text-[#444444] hover:bg-[#e1dfdd]'
                    }`}
                  >
                    <span>Sheet2: Định mức Vật tư</span>
                  </button>

                  <button
                    onClick={() => setActiveBoqSheet('cost')}
                    className={`px-3 py-1 text-[11.5px] font-medium border-r border-[#d4d4d4] transition-all cursor-pointer flex items-center gap-1.5 ${
                      activeBoqSheet === 'cost'
                        ? 'bg-white text-[#107c41] font-bold border-t-2 border-t-[#107c41] shadow-xs'
                        : 'bg-[#edebe9] text-[#444444] hover:bg-[#e1dfdd]'
                    }`}
                  >
                    <span>Sheet3: Tổng hợp Dự toán BoQ</span>
                  </button>

                  <span className="w-5 h-5 rounded-full hover:bg-white flex items-center justify-center text-slate-600 text-xs cursor-pointer ml-1" title="Thêm trang tính mới">
                    +
                  </span>
                </div>

                {/* Right quick download button */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      const csvContent = "data:text/csv;charset=utf-8," 
                        + "STT,Handle_CAD,Ten_Phong,Chu_Vi_m,Chieu_Cao_m,Khau_Tru_Cua_Di_m2,Khau_Tru_Cua_So_m2,Dien_Tich_Son_Tinh_m2,Quy_Chuan,Trang_Thai\n"
                        + "1,LWPOLYLINE #8F31,Phong Khach A101,26.50,3.20,-1.98,-2.24,80.58,TCVN 8652,Da tham dinh\n"
                        + "2,LWPOLYLINE #4A9C,Phong Ngu Master A102,18.40,3.20,-1.98,-2.30,54.60,TCVN 8652,Da tham dinh\n"
                        + "3,LWPOLYLINE #3B12,Phong Ngu Phu A103,15.20,3.20,-1.98,-1.80,44.86,TCVN 8652,Da tham dinh\n"
                        + "4,LWPOLYLINE #6C44,Hanh Lang,21.80,3.20,-3.96,0.00,65.80,TCVN 8652,Da tham dinh\n";
                      const encodedUri = encodeURI(csvContent);
                      const link = document.createElement("a");
                      link.setAttribute("href", encodedUri);
                      link.setAttribute("download", "DuAn_Landmark_BoQ_TCVN8652.csv");
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                    }}
                    className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#107c41] hover:bg-[#0d6535] text-white text-[11px] font-semibold rounded cursor-pointer transition-colors shadow-xs"
                  >
                    <Download className="w-3 h-3" />
                    <span>Tải tệp Excel thật (.xlsx/.csv)</span>
                  </button>

                  <button
                    onClick={() => setIsBoqPreviewOpen(false)}
                    className="px-3 py-1 bg-white hover:bg-slate-100 border border-[#d4d4d4] text-slate-700 text-[11px] font-medium rounded cursor-pointer transition-colors"
                  >
                    Đóng
                  </button>
                </div>
              </div>

              {/* 7. Authentic Excel Status Bar */}
              <div className="bg-[#107c41] text-white px-3 py-0.5 flex flex-wrap items-center justify-between text-[10.5px] font-mono select-none">
                <div className="flex items-center gap-3">
                  <span className="font-bold tracking-wider">SẴN SÀNG</span>
                  <span className="text-white/60">•</span>
                  <span className="text-white/80">Tương thích: Microsoft Excel 2016+, Office 365, Google Sheets</span>
                </div>

                <div className="flex items-center gap-4 text-white/90">
                  <span>Ô chọn: <strong className="text-emerald-200">{selectedCell}</strong></span>
                  <span>Đếm: <strong>4</strong></span>
                  <span>Trung bình: <strong>61.46</strong></span>
                  <span>TỔNG (SUM): <strong className="text-emerald-200">245.84</strong></span>
                  <span className="hidden sm:inline">100% ➖🔘➕</span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
