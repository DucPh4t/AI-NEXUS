import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { 
  ArrowRight, 
  CheckCircle2, 
  ChevronRight, 
  Database, 
  FileCode, 
  Sparkles, 
  Eye, 
  Compass, 
  ShieldCheck, 
  ChevronDown,
  Activity,
  Layers,
  Maximize2
} from 'lucide-react';

interface LandingHeroProps {
  onGetStarted: () => void;
  onExploreDemo: () => void;
}

export const LandingHero: React.FC<LandingHeroProps> = ({
  onGetStarted,
  onExploreDemo,
}) => {
  const [activeTab, setActiveTab] = useState<'raw' | 'ai' | 'takeoff'>('ai');
  const [hoveredRoom, setHoveredRoom] = useState<string>('A101');
  const heroRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Ensure video autoplays smoothly on all modern browsers
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      const promise = videoRef.current.play();
      if (promise !== undefined) {
        promise.catch(() => {
          const playOnInteraction = () => {
            if (videoRef.current) {
              videoRef.current.play().catch(() => {});
            }
            window.removeEventListener('click', playOnInteraction);
            window.removeEventListener('scroll', playOnInteraction);
          };
          window.addEventListener('click', playOnInteraction, { once: true });
          window.addEventListener('scroll', playOnInteraction, { once: true });
        });
      }
    }
  }, []);

  // Scroll progress for the entire page indicator
  const { scrollYProgress: pageScrollProgress } = useScroll();

  const scrollToStory = () => {
    const el = document.getElementById('storytelling');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Scroll Progress Indicator for whole page */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#ffc976] via-[#f59e0b] to-[#ac732b] z-50 origin-left shadow-[0_0_12px_rgba(255,196,116,0.6)]"
        style={{ scaleX: pageScrollProgress }}
      />

      {/* ─────────────────────────────────────────────────────────────
          1. HERO VIEWPORT (Chỉ chứa video ở màn hình đầu tiên, cân đối tuyệt đối theo chuẩn tỷ lệ)
      ───────────────────────────────────────────────────────────── */}
      <section 
        ref={heroRef}
        className="relative min-h-screen lg:h-screen w-full flex flex-col justify-between pt-16 sm:pt-20 pb-4 sm:pb-6 overflow-hidden bg-[#0c0e12] text-white antialiased"
      >
        {/* Cinematic Video Background - Giới hạn tuyệt đối trong màn Hero đầu tiên */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute inset-0 w-full h-full">
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="w-full h-full object-cover object-center opacity-92 brightness-[0.95] contrast-[1.05]"
            >
              <source src="/video.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Ambient Overlay: Tinh chỉnh nhẹ để video rõ nét hơn mà chữ vẫn tương phản chuẩn WCAG */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(12,14,18,0.38)_0%,rgba(12,14,18,0.25)_50%,rgba(12,14,18,0.8)_100%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0c0e12]/65 via-transparent to-[#0c0e12]" />

          {/* Subtle Ambient Amber Glow Accents */}
          <div className="absolute left-[10%] top-[10%] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(255,193,102,0.14),transparent_70%)] blur-3xl" />
          <div className="absolute right-[8%] top-[18%] h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.04),transparent_70%)] blur-3xl" />
          
          {/* Bottom smooth fade to section 2 */}
          <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#0c0e12] to-transparent pointer-events-none" />
        </div>

        {/* Hero Content Area - Căn giữa tự nhiên, cân đối tỷ lệ */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full flex flex-col items-center my-auto">
          {/* ─────────────────────────────────────────────────────────────
              EDITORIAL HERO HEADER & CTAS
          ───────────────────────────────────────────────────────────── */}
          <div className="text-center max-w-4xl mx-auto pt-1 sm:pt-2">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/35 bg-[#16181d]/90 backdrop-blur-md px-3.5 py-1 shadow-[0_4px_20px_rgba(0,0,0,0.4)] text-[11px] sm:text-xs text-[#ffc474] mb-3 sm:mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ffc474] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#f59e0b]" />
              </span>
              <span className="font-semibold tracking-wide">
                AI Spatial Take-off · Chuẩn Vector CAD DXF · TCVN 8652:2012
              </span>
            </div>

            {/* Cormorant Garamond Serif Headline */}
            <h1 className="font-serif-cormorant text-4xl sm:text-5xl lg:text-[3.4rem] font-semibold tracking-tight leading-[1.1] text-white drop-shadow-[0_6px_30px_rgba(0,0,0,0.9)]">
              <span className="block">Chuyển đổi bản vẽ CAD 2D thành</span>
              <span className="block text-[#ffc474] italic drop-shadow-[0_0_25px_rgba(255,196,116,0.35)]">
                hồ sơ dự toán sơn được kiểm định.
              </span>
            </h1>

            {/* Súc tích Subtitle */}
            <p className="mt-3.5 sm:mt-4 text-sm sm:text-base text-white/85 font-normal leading-relaxed max-w-2xl mx-auto font-sans-tight drop-shadow-md">
              Tự động nhận diện ranh giới phòng từ vector DXF nguyên bản, khấu trừ diện tích cửa theo quy chuẩn TCVN, và cho phép kỹ sư thẩm định từng đỉnh hình học với độ tin cậy tuyệt đối.
            </p>

            {/* Action CTA Buttons */}
            <div className="mt-5 sm:mt-6 flex flex-wrap items-center justify-center gap-3.5">
              <button
                onClick={onGetStarted}
                className="amber-button inline-flex items-center gap-2 px-7 py-3 text-sm font-semibold rounded-2xl shadow-[0_8px_30px_rgba(255,196,116,0.4)] cursor-pointer active:scale-95 transition-all"
              >
                <span>Bắt đầu bóc tách ngay</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onExploreDemo}
                className="dense-panel inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 rounded-2xl transition-all cursor-pointer shadow-lg border border-white/20 active:scale-95 backdrop-blur-xl"
              >
                <Compass className="w-4 h-4 text-[#ffc474]" />
                <span>Dự án mẫu Sunrise Tower</span>
                <ChevronRight className="w-4 h-4 text-white/40" />
              </button>
            </div>

            {/* Micro trust note */}
            <p className="mt-2.5 sm:mt-3 text-[11px] sm:text-xs text-white/55 font-medium">
              ⚡ Không cần cài đặt AutoCAD · Hoạt động trực tiếp trên trình duyệt · Xử lý file DXF lên tới 100MB
            </p>
          </div>

          {/* ─────────────────────────────────────────────────────────────
              HORIZONTAL GLASS METRIC BAR
          ───────────────────────────────────────────────────────────── */}
          <div className="w-full max-w-5xl mx-auto mt-5 sm:mt-6">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10 rounded-2xl border border-white/15 bg-[#14161c]/85 backdrop-blur-xl shadow-[0_15px_45px_rgba(0,0,0,0.5)] p-2.5 sm:p-3">
              
              {/* Metric 1 */}
              <div className="p-2.5 sm:p-3 text-center">
                <div className="font-mono text-xl sm:text-2xl font-bold text-white tracking-tight">
                  99.8%
                </div>
                <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-amber-300/80 mt-0.5 font-semibold">
                  Độ chính xác CAD
                </div>
                <p className="text-[11px] text-white/60 mt-0.5 line-clamp-1">
                  Sai số hình học tiệm cận 0
                </p>
              </div>

              {/* Metric 2 */}
              <div className="p-2.5 sm:p-3 text-center">
                <div className="font-mono text-xl sm:text-2xl font-bold text-white tracking-tight">
                  TCVN 8652
                </div>
                <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-amber-300/80 mt-0.5 font-semibold">
                  Khấu trừ cửa 100%
                </div>
                <p className="text-[11px] text-white/60 mt-0.5 line-clamp-1">
                  Trừ chuẩn xác cửa đi & cửa sổ
                </p>
              </div>

              {/* Metric 3 */}
              <div className="p-2.5 sm:p-3 text-center">
                <div className="font-mono text-xl sm:text-2xl font-bold text-[#ffc474] tracking-tight">
                  100% HITL
                </div>
                <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-amber-300/80 mt-0.5 font-semibold">
                  Kỹ sư duyệt 100%
                </div>
                <p className="text-[11px] text-white/60 mt-0.5 line-clamp-1">
                  Kỹ sư kiểm soát và phê duyệt cuối
                </p>
              </div>

              {/* Metric 4 */}
              <div className="p-2.5 sm:p-3 text-center">
                <div className="font-mono text-xl sm:text-2xl font-bold text-emerald-400 tracking-tight flex items-center justify-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse inline-block" />
                  Live Sync
                </div>
                <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-emerald-400/80 mt-0.5 font-semibold">
                  Đồng bộ hai chiều
                </div>
                <p className="text-[11px] text-white/60 mt-0.5 line-clamp-1">
                  CAD liên kết tức thì với BoQ
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            SCROLL DOWN CUE
        ───────────────────────────────────────────────────────────── */}
        <div className="relative z-10 pt-2 pb-2 text-center">
          <a
            href="#cad-simulator"
            className="inline-flex items-center gap-2 text-xs font-semibold text-white/70 hover:text-[#ffc474] transition-colors py-1.5 px-4 rounded-full hover:bg-white/10 cursor-pointer backdrop-blur-sm"
          >
            <span>Trải nghiệm bàn vẽ CAD tương tác bên dưới</span>
            <ChevronDown className="w-3.5 h-3.5 text-[#ffc474] animate-bounce" />
          </a>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. DEDICATED SECTION: INTERACTIVE CAD ENGINE SIMULATOR
          (Nằm trọn trên nền lưới drafting đen kiến trúc, hoàn toàn không có video)
      ───────────────────────────────────────────────────────────── */}
      <section id="cad-simulator" className="relative bg-[#0c0e12] drafting-grid-dark py-16 sm:py-24 text-white border-t border-white/5">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#ffc474] bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30">
            Interactive CAD Simulator
          </span>
          <h2 className="font-serif-cormorant text-2xl sm:text-4xl font-semibold text-white tracking-tight mt-3">
            Trải nghiệm bóc tách và đối soát CAD trực tiếp
          </h2>
          <p className="text-sm text-white/65 mt-2 font-sans-tight">
            Rà chuột hoặc nhấn vào từng phòng trên bản vẽ mặt bằng để xem thông số bóc tách và khấu trừ cửa thời gian thực.
          </p>
        </div>

          <div className="relative rounded-2xl border border-white/10 bg-[#13151b] text-white shadow-[0_25px_60px_rgba(0,0,0,0.5)] overflow-hidden">
          {/* Top Architectural Toolbar */}
          <div className="h-12 px-4 sm:px-6 bg-[#181a22] border-b border-white/10 flex flex-wrap items-center justify-between gap-2 text-xs text-white/70">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <span className="font-mono text-xs text-white font-semibold flex items-center gap-1.5">
                <FileCode className="w-3.5 h-3.5 text-[#ffc474]" />
                Sunrise_Tower_Tang03_KienTruc.dxf
              </span>
              <span className="hidden sm:inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 font-mono font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                AI SPATIAL ANALYSIS SẴN SÀNG
              </span>
            </div>

            {/* Stage toggle tabs */}
            <div className="flex items-center bg-[#0c0e12] rounded-lg p-0.5 border border-white/10">
              <button
                onClick={() => setActiveTab('raw')}
                className={`px-3 py-1 rounded text-xs font-semibold transition-all cursor-pointer ${
                  activeTab === 'raw'
                    ? 'bg-white/15 text-white shadow-2xs'
                    : 'text-white/50 hover:text-white'
                }`}
              >
                1. Bản vẽ CAD gốc
              </button>
              <button
                onClick={() => setActiveTab('ai')}
                className={`px-3 py-1 rounded text-xs font-semibold transition-all cursor-pointer ${
                  activeTab === 'ai'
                    ? 'bg-gradient-to-r from-[#ffc976] to-[#ac732b] text-[#1a1005] font-bold shadow-2xs'
                    : 'text-white/50 hover:text-white'
                }`}
              >
                2. AI bóc tách đa giác
              </button>
              <button
                onClick={() => setActiveTab('takeoff')}
                className={`px-3 py-1 rounded text-xs font-semibold transition-all cursor-pointer ${
                  activeTab === 'takeoff'
                    ? 'bg-white/15 text-white shadow-2xs'
                    : 'text-white/50 hover:text-white'
                }`}
              >
                3. Bảng khối lượng BOQ
              </button>
            </div>
          </div>

          {/* CAD Canvas & Inspector Split View */}
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[480px]">
            {/* Left CAD Floor Plan Area */}
            <div className="lg:col-span-8 p-6 relative flex flex-col justify-between select-none bg-[#0e1015] drafting-grid-dark">
              {/* Coordinates HUD */}
              <div className="relative z-10 flex items-center justify-between text-xs font-mono text-white/60 pb-2">
                <div className="flex items-center gap-3">
                  <span className="font-semibold text-white/80">LƯỚI TRỤC: 1000mm</span>
                  <span>TỶ LỆ: 1:100</span>
                  <span className="text-[#ffc474] font-bold bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                    LỚP: A-WALL (TƯỜNG)
                  </span>
                </div>
                <div className="bg-[#181b22] px-3 py-1 rounded-md border border-white/10 text-white font-mono shadow-2xs">
                  X: <span className="font-semibold text-[#ffc474]">420.50m</span> &nbsp; Y: <span className="font-semibold text-[#ffc474]">180.25m</span>
                </div>
              </div>

              {/* Interactive Vector CAD Blueprint SVG (Dark Drafting Canvas) */}
              <div className="relative my-4 flex items-center justify-center overflow-hidden rounded-xl">
                {/* AI Laser Scan Beam Effect */}
                {activeTab === 'ai' && (
                  <motion.div
                    initial={{ top: '0%' }}
                    animate={{ top: ['0%', '98%', '0%'] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#ffc474] to-transparent shadow-[0_0_12px_rgba(255,196,116,0.85)] pointer-events-none z-20"
                  />
                )}
                <svg
                  viewBox="0 0 800 380"
                  className="w-full max-w-[720px] h-auto drop-shadow-xl"
                >
                  {/* Outer Perimeter Wall */}
                  <rect
                    x="100"
                    y="60"
                    width="620"
                    height="280"
                    fill="none"
                    stroke="#475569"
                    strokeWidth="2.5"
                    strokeDasharray="4 2"
                  />

                  {/* Room A101: Master Suite */}
                  <path
                    d="M 120 80 L 380 80 L 380 200 L 120 200 Z"
                    className={`cursor-pointer transition-all duration-200 ${
                      activeTab === 'raw'
                        ? 'fill-transparent stroke-white/40 stroke-[1.5]'
                        : hoveredRoom === 'A101'
                        ? 'fill-white/10 stroke-[#ffc474] stroke-[2.5]'
                        : 'fill-white/[0.03] stroke-white/25 stroke-[1.5]'
                    }`}
                    onMouseEnter={() => setHoveredRoom('A101')}
                  />
                  {activeTab !== 'raw' && (
                    <g className="pointer-events-none">
                      <text x="250" y="135" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="600">
                        Phòng A101 (Master)
                      </text>
                      <text x="250" y="155" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="monospace">
                        S=42.5m² | Sơn=85.0m²
                      </text>
                      <circle cx="120" cy="80" r="2.5" fill="#ffffff" opacity="0.6" />
                      <circle cx="380" cy="80" r="2.5" fill="#ffffff" opacity="0.6" />
                      <circle cx="380" cy="200" r="2.5" fill="#ffffff" opacity="0.6" />
                      <circle cx="120" cy="200" r="2.5" fill="#ffffff" opacity="0.6" />
                    </g>
                  )}

                  {/* Room A102: Executive Suite */}
                  <path
                    d="M 400 80 L 700 80 L 700 200 L 400 200 Z"
                    className={`cursor-pointer transition-all duration-200 ${
                      activeTab === 'raw'
                        ? 'fill-transparent stroke-white/40 stroke-[1.5]'
                        : hoveredRoom === 'A102'
                        ? 'fill-white/10 stroke-[#ffc474] stroke-[2.5]'
                        : 'fill-white/[0.03] stroke-white/25 stroke-[1.5]'
                    }`}
                    onMouseEnter={() => setHoveredRoom('A102')}
                  />
                  {activeTab !== 'raw' && (
                    <g className="pointer-events-none">
                      <text x="550" y="135" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="600">
                        Phòng A102 (VIP)
                      </text>
                      <text x="550" y="155" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="monospace">
                        S=38.2m² | Sơn=76.4m²
                      </text>
                    </g>
                  )}

                  {/* Room A103: Living Hall (Flagged issue) */}
                  <path
                    d="M 120 220 L 420 220 L 420 320 L 120 320 Z"
                    className={`cursor-pointer transition-all duration-200 ${
                      activeTab === 'raw'
                        ? 'fill-transparent stroke-white/40 stroke-[1.5]'
                        : hoveredRoom === 'A103'
                        ? 'fill-amber-500/15 stroke-amber-400 stroke-[2.5]'
                        : 'fill-amber-500/5 stroke-amber-400/40 stroke-[1.5] stroke-dasharray-[4,2]'
                    }`}
                    onMouseEnter={() => setHoveredRoom('A103')}
                  />
                  {activeTab !== 'raw' && (
                    <g className="pointer-events-none">
                      <text x="270" y="265" textAnchor="middle" fill="#fde68a" fontSize="12" fontWeight="600">
                        Phòng A103 (Phòng khách)
                      </text>
                      <text x="270" y="285" textAnchor="middle" fill="#fbbf24" fontSize="11" fontFamily="monospace">
                        ⚠ Cần thẩm định khe hở 650mm
                      </text>
                    </g>
                  )}

                  {/* Room B104: Kitchen */}
                  <path
                    d="M 440 220 L 700 220 L 700 320 L 440 320 Z"
                    className={`cursor-pointer transition-all duration-200 ${
                      activeTab === 'raw'
                        ? 'fill-transparent stroke-white/40 stroke-[1.5]'
                        : hoveredRoom === 'B104'
                        ? 'fill-white/10 stroke-[#ffc474] stroke-[2.5]'
                        : 'fill-white/[0.03] stroke-white/25 stroke-[1.5]'
                    }`}
                    onMouseEnter={() => setHoveredRoom('B104')}
                  />
                  {activeTab !== 'raw' && (
                    <g className="pointer-events-none">
                      <text x="570" y="265" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="600">
                        Phòng B104 (Bếp)
                      </text>
                      <text x="570" y="285" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="monospace">
                        S=54.8m² | Sơn=109.6m²
                      </text>
                    </g>
                  )}

                  {/* Door D021 on Room A101 */}
                  <line x1="380" y1="120" x2="380" y2="160" stroke="#f43f5e" strokeWidth="2" strokeOpacity="0.8" />
                  <path d="M 380 120 A 40 40 0 0 1 420 160" fill="none" stroke="#f43f5e" strokeWidth="1" strokeDasharray="2 2" strokeOpacity="0.7" />
                  <text x="395" y="145" fill="#fca5a5" fontSize="9" fontFamily="monospace">D021 (-3.78m²)</text>

                  {/* Window W-101 */}
                  <line x1="180" y1="80" x2="260" y2="80" stroke="#f59e0b" strokeWidth="2.5" strokeOpacity="0.8" />
                  <text x="210" y="72" fill="#fde68a" fontSize="9" fontFamily="monospace">W-101 (-4.50m²)</text>
                </svg>
              </div>

              {/* Bottom Canvas Legend & Controls */}
              <div className="relative z-10 flex flex-wrap items-center justify-between text-xs text-white/60 pt-3 border-t border-white/10">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-white/70" />
                    <span className="text-white/70 text-[11px]">Đã nhận diện (CAD Entity)</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#f59e0b]" />
                    <span className="text-white/70 text-[11px]">Cần thẩm định (Needs Review)</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-rose-400" />
                    <span className="text-white/70 text-[11px]">Khấu trừ cửa (Deductions)</span>
                  </span>
                </div>
                <div className="font-mono text-xs text-white/40">
                  Rà chuột vào từng phòng để xem bóc tách chi tiết →
                </div>
              </div>
            </div>

            {/* Right Inspector & Traceability HUD (Dark Concrete Panel) */}
            <div className="lg:col-span-4 p-6 bg-[#14161f] border-t lg:border-t-0 lg:border-l border-white/10 flex flex-col justify-between">
              <div>
                {/* Header Info */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div>
                    <span className="text-[11px] uppercase font-mono tracking-widest text-[#ffc474] font-semibold">
                      {hoveredRoom === 'A101' ? 'PHÒNG A101' : hoveredRoom === 'A102' ? 'PHÒNG A102' : hoveredRoom === 'A103' ? 'PHÒNG A103' : 'PHÒNG B104'}
                    </span>
                    <h3 className="text-base font-bold text-white mt-0.5">
                      {hoveredRoom === 'A101'
                        ? 'Phòng ngủ Master & Phòng làm việc'
                        : hoveredRoom === 'A102'
                        ? 'Phòng ngủ VIP / Executive'
                        : hoveredRoom === 'A103'
                        ? 'Phòng khách & Không gian ăn'
                        : 'Khu vực Bếp & Pantry'}
                    </h3>
                    <p className="text-xs text-white/50 font-medium">Tầng 03 · Tháp căn hộ Sunrise</p>
                  </div>
                  <span className={`px-2.5 py-1 rounded text-xs font-semibold uppercase font-mono ${
                    hoveredRoom === 'A103'
                      ? 'bg-amber-500/15 text-amber-300 border border-amber-500/30'
                      : 'bg-white/5 text-white/80 border border-white/15'
                  }`}>
                    {hoveredRoom === 'A103' ? 'Cần thẩm định' : 'Đã thẩm định'}
                  </span>
                </div>

                {/* Real-time calculated properties (Hạ nhiệt màu sắc - Tối giản, Bạc kỹ thuật) */}
                <div className="grid grid-cols-2 gap-3 my-4">
                  <div className="p-3 rounded-xl bg-[#1a1d26] border border-white/10">
                    <span className="text-[10px] uppercase font-semibold text-white/45 block tracking-wider">Diện tích sàn</span>
                    <span className="text-xl font-bold font-mono text-white tracking-tight">
                      {hoveredRoom === 'A101' ? '42.50' : hoveredRoom === 'A102' ? '38.20' : hoveredRoom === 'A103' ? '41.70' : '54.80'} <span className="text-xs font-normal text-white/40">m²</span>
                    </span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#1a1d26] border border-white/10">
                    <span className="text-[10px] uppercase font-semibold text-white/45 block tracking-wider">Chu vi phòng</span>
                    <span className="text-xl font-bold font-mono text-white tracking-tight">
                      {hoveredRoom === 'A101' ? '26.50' : hoveredRoom === 'A102' ? '24.80' : hoveredRoom === 'A103' ? '25.90' : '30.20'} <span className="text-xs font-normal text-white/40">m</span>
                    </span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#1a1d26] border border-white/10">
                    <span className="text-[10px] uppercase font-semibold text-white/45 block tracking-wider">Diện tích sơn thực tế</span>
                    <span className="text-xl font-bold font-mono text-white tracking-tight">
                      {hoveredRoom === 'A101' ? '85.00' : hoveredRoom === 'A102' ? '76.40' : hoveredRoom === 'A103' ? '83.40' : '109.60'} <span className="text-xs font-normal text-white/40">m²</span>
                    </span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#1a1d26] border border-white/10">
                    <span className="text-[10px] uppercase font-semibold text-white/45 block tracking-wider">Khấu trừ cửa</span>
                    <span className="text-xl font-bold font-mono text-white/85 tracking-tight">
                      - {hoveredRoom === 'A101' ? '8.28' : hoveredRoom === 'A102' ? '5.09' : hoveredRoom === 'A103' ? '9.18' : '6.58'} <span className="text-xs font-normal text-white/40">m²</span>
                    </span>
                  </div>
                </div>

                {/* Traceability Details */}
                <div className="space-y-2 text-xs font-mono bg-[#1a1d26] p-3.5 rounded-xl border border-white/10">
                  <div className="flex justify-between">
                    <span className="text-white/50">Nguồn thực thể DXF:</span>
                    <span className="text-white font-bold">LWPOLYLINE #{hoveredRoom === 'A101' ? '8F31' : hoveredRoom === 'A102' ? '9A12' : hoveredRoom === 'A103' ? '3D88' : '2E19'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/50">Lớp bản vẽ:</span>
                    <span className="text-white/90 font-semibold">A-WALL (Tường xây)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/50">Độ tin cậy AI:</span>
                    <span className={`font-bold ${hoveredRoom === 'A103' ? 'text-amber-400' : 'text-white'}`}>
                      {hoveredRoom === 'A101' ? '98%' : hoveredRoom === 'A102' ? '96%' : hoveredRoom === 'A103' ? '71% (Cần xác nhận)' : '95%'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/50">Đơn giá dự toán:</span>
                    <span className="text-[#ffc474] font-semibold">98,000 ₫/m²</span>
                  </div>
                </div>

                {/* AI Explanation preview */}
                <div className="mt-3 p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs text-white/80">
                  <div className="flex items-center gap-1.5 text-[#ffc474] font-bold mb-1">
                    <Sparkles className="w-3.5 h-3.5 text-[#ffc474]" />
                    <span>Giải trình thuật toán AI:</span>
                  </div>
                  <p className="leading-relaxed text-[11px] text-white/70">
                    {hoveredRoom === 'A101'
                      ? 'Đa giác 14 đỉnh khép kín hoàn hảo. Cửa đi D021 (3.78m²) và cửa sổ W-101 (4.50m²) đã được khấu trừ tự động khỏi diện tích tường thô.'
                      : hoveredRoom === 'A102'
                      ? 'Biên dạng chữ nhật vuông vắn. Độ tương phản vector cao trên lớp A-WALL với bề dày hoàn thiện 200mm.'
                      : hoveredRoom === 'A103'
                      ? 'Cảnh báo khe hở 650mm gần cột C-04. AI đã bắc cầu tạm thời, đề nghị kỹ sư bấm Phê duyệt hoặc kéo thả chỉnh đỉnh.'
                      : 'Khu vực bếp với yêu cầu chống ẩm cao. Ranh giới khép kín chuẩn xác theo tim tường.'}
                  </p>
                </div>
              </div>

              {/* Action buttons inside inspector */}
              <div className="pt-4 border-t border-white/10 flex items-center gap-2">
                <button
                  onClick={onExploreDemo}
                  className="amber-button flex-1 py-2 text-xs font-semibold flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Xem hồ sơ phòng</span>
                </button>
                <button
                  onClick={onGetStarted}
                  className="dense-panel px-3.5 py-2 text-xs font-semibold text-white/80 hover:text-white rounded-xl transition-colors cursor-pointer"
                >
                  Bóc tách file của bạn
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Architectural Engine Status Strip */}
        <div className="mt-8 p-4 sm:p-5 rounded-2xl border border-white/10 bg-[#12141a] grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="md:border-r border-white/10 pr-2">
            <span className="text-[10px] font-mono uppercase tracking-wider text-white/50 block">Định dạng nạp</span>
            <span className="font-mono text-xs sm:text-sm font-bold text-white mt-1 block">AutoCAD DXF AC1032</span>
          </div>
          <div className="md:border-r border-white/10 pr-2">
            <span className="text-[10px] font-mono uppercase tracking-wider text-white/50 block">Nhận diện Layer</span>
            <span className="font-mono text-xs sm:text-sm font-bold text-[#ffc474] mt-1 block">A-WALL · A-DOOR · A-WINDOW</span>
          </div>
          <div className="md:border-r border-white/10 pr-2">
            <span className="text-[10px] font-mono uppercase tracking-wider text-white/50 block">Snapping Khe hở</span>
            <span className="font-mono text-xs sm:text-sm font-bold text-emerald-400 mt-1 block">Tự động vá ≤ 50mm</span>
          </div>
          <div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-white/50 block">Chuẩn nghiệm thu</span>
            <span className="font-mono text-xs sm:text-sm font-bold text-white mt-1 block">TCVN 8652:2012</span>
          </div>
        </div>

        {/* Scroll down prompt */}
        <div className="mt-10 flex flex-col items-center justify-center text-center">
          <button
            onClick={scrollToStory}
            className="group inline-flex items-center gap-2 text-xs font-semibold text-white/60 hover:text-[#ffc474] py-2 px-5 rounded-full hover:bg-white/5 transition-all cursor-pointer border border-transparent hover:border-white/10"
          >
            <span>Khám phá quy trình bóc tách & đối chiếu thực tế</span>
            <ChevronDown className="w-3.5 h-3.5 text-[#ffc474] animate-bounce" />
          </button>
        </div>
      </div>
    </section>
    </>
  );
};
