import React, { useRef, useEffect } from 'react';
import { motion, useScroll } from 'motion/react';
import { 
  ArrowRight, 
  CheckCircle2, 
  ChevronRight, 
  FileCode, 
  Compass, 
  ChevronDown,
  Layers,
  Sparkles,
  ShieldCheck,
  Check
} from 'lucide-react';

interface LandingHeroProps {
  onGetStarted: () => void;
  onExploreDemo: () => void;
}

export const LandingHero: React.FC<LandingHeroProps> = ({
  onGetStarted,
  onExploreDemo,
}) => {
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

  return (
    <>
      {/* Top Scroll Progress Indicator */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#ffc976] via-[#f59e0b] to-[#ac732b] z-50 origin-left shadow-[0_0_12px_rgba(255,196,116,0.6)]"
        style={{ scaleX: pageScrollProgress }}
      />

      {/* ─────────────────────────────────────────────────────────────
          1. HERO VIEWPORT (Chứa video nền điện ảnh và thông điệp chính)
      ───────────────────────────────────────────────────────────── */}
      <section 
        ref={heroRef}
        className="relative min-h-screen lg:h-screen w-full flex flex-col justify-between pt-16 sm:pt-20 pb-4 sm:pb-6 overflow-hidden bg-[#0c0e12] text-white antialiased"
      >
        {/* Cinematic Video Background */}
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

          {/* Ambient Overlays */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(12,14,18,0.38)_0%,rgba(12,14,18,0.25)_50%,rgba(12,14,18,0.8)_100%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0c0e12]/65 via-transparent to-[#0c0e12]" />

          {/* Subtle Ambient Glow */}
          <div className="absolute left-[10%] top-[10%] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(255,193,102,0.14),transparent_70%)] blur-3xl" />
          <div className="absolute right-[8%] top-[18%] h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.04),transparent_70%)] blur-3xl" />
          
          <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#0c0e12] to-transparent pointer-events-none" />
        </div>

        {/* Hero Content Area */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full flex flex-col items-center my-auto">
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

            {/* Subtitle */}
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

          {/* Horizontal Glass Metric Bar */}
          <div className="w-full max-w-5xl mx-auto mt-5 sm:mt-6">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10 rounded-2xl border border-white/15 bg-[#14161c]/85 backdrop-blur-xl shadow-[0_15px_45px_rgba(0,0,0,0.5)] p-2.5 sm:p-3">
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

        {/* Scroll Cue */}
        <div className="relative z-10 pt-2 pb-2 text-center">
          <a
            href="#product-preview"
            className="inline-flex items-center gap-2 text-xs font-semibold text-white/70 hover:text-[#ffc474] transition-colors py-1.5 px-4 rounded-full hover:bg-white/10 cursor-pointer backdrop-blur-sm"
          >
            <span>Khám phá giao diện bóc tách thực tế</span>
            <ChevronDown className="w-3.5 h-3.5 text-[#ffc474] animate-bounce" />
          </a>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. PRODUCT SHOWCASE CARD (Tinh giản, sắc nét, điều hướng thẳng vào demo)
      ───────────────────────────────────────────────────────────── */}
      <section id="product-preview" className="relative bg-[#0c0e12] drafting-grid-dark py-14 sm:py-20 text-white border-t border-white/5 scroll-mt-14">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#ffc474] bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30">
              Trực quan hóa Không gian CAD
            </span>
            <h2 className="font-serif-cormorant text-2xl sm:text-4xl font-semibold text-white tracking-tight mt-3">
              Giao diện làm việc thực tế của Kỹ sư Dự toán
            </h2>
            <p className="text-sm text-white/65 mt-2 font-sans-tight">
              Phần mềm phân tích từng thực thể LWPOLYLINE, tự động nhận diện cửa và tính toán diện tích sơn hoàn thiện theo TCVN 8652:2012.
            </p>
          </div>

          {/* Architectural App Frame */}
          <div className="relative rounded-2xl border border-white/15 bg-[#13151b] shadow-[0_25px_60px_rgba(0,0,0,0.6)] overflow-hidden">
            {/* Window Title Bar */}
            <div className="h-11 px-4 sm:px-6 bg-[#181a22] border-b border-white/10 flex items-center justify-between text-xs text-white/70">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <span className="font-mono text-xs text-white font-semibold flex items-center gap-1.5">
                  <FileCode className="w-3.5 h-3.5 text-[#ffc474]" />
                  Sunrise_Tower_Tang03_KienTruc.dxf
                </span>
                <span className="hidden sm:inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 font-mono font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  AC1032 · 18.492 THỰC THỂ
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono text-amber-300/80 hidden md:inline">
                  Chuẩn TCVN 8652:2012
                </span>
                <button
                  onClick={onExploreDemo}
                  className="px-3 py-1 bg-[#ffc474] text-black font-semibold rounded-lg text-xs hover:bg-[#ffe3b3] transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm"
                >
                  <Compass className="w-3.5 h-3.5" />
                  <span>Mở Demo ngay</span>
                </button>
              </div>
            </div>

            {/* Showcase Visual Area */}
            <div className="p-4 sm:p-8 bg-[#0a0c10] relative min-h-[380px] sm:min-h-[460px] flex flex-col justify-between overflow-hidden">
              {/* Drafting Grid Canvas Background */}
              <div className="absolute inset-0 drafting-grid-dark opacity-70 pointer-events-none" />

              {/* Vector Architectural Blueprint Schematic Representation */}
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
                {/* Visual CAD Representation (2 cols on large screen) */}
                <div className="lg:col-span-2 relative p-4 sm:p-6 rounded-xl bg-[#12141a]/95 border border-white/10 shadow-2xl">
                  {/* Floating Badges */}
                  <div className="absolute top-3 right-3 z-10 flex gap-2">
                    <span className="px-2.5 py-1 rounded-md bg-amber-500/20 text-[#ffc474] border border-amber-500/40 text-[10px] font-mono font-bold flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      Tự động vá hở ≤ 50mm
                    </span>
                  </div>

                  {/* SVG Blueprint Mock */}
                  <svg className="w-full h-56 sm:h-72" viewBox="0 0 600 320" fill="none">
                    {/* Grid axes */}
                    <line x1="30" y1="20" x2="30" y2="300" stroke="#ffffff" strokeOpacity="0.1" strokeDasharray="4 4" />
                    <line x1="220" y1="20" x2="220" y2="300" stroke="#ffffff" strokeOpacity="0.1" strokeDasharray="4 4" />
                    <line x1="410" y1="20" x2="410" y2="300" stroke="#ffffff" strokeOpacity="0.1" strokeDasharray="4 4" />
                    <line x1="570" y1="20" x2="570" y2="300" stroke="#ffffff" strokeOpacity="0.1" strokeDasharray="4 4" />

                    {/* Room A101 (Active Highlighted) */}
                    <polygon
                      points="60,50 200,50 200,170 60,170"
                      fill="#ffc474"
                      fillOpacity="0.18"
                      stroke="#ffc474"
                      strokeWidth="2.5"
                    />
                    <circle cx="60" cy="50" r="4" fill="#ffc474" />
                    <circle cx="200" cy="50" r="4" fill="#ffc474" />
                    <circle cx="200" cy="170" r="4" fill="#ffc474" />
                    <circle cx="60" cy="170" r="4" fill="#ffc474" />
                    <text x="130" y="100" fill="#ffffff" fontSize="12" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
                      Phòng A101 (Master)
                    </text>
                    <text x="130" y="118" fill="#ffc474" fontSize="11" textAnchor="middle" fontFamily="monospace">
                      Sàn: 42,50 m² · Sơn: 76,52 m²
                    </text>

                    {/* Door D01 on A101 */}
                    <rect x="188" y="100" width="24" height="6" fill="#10b981" rx="2" />
                    <text x="200" y="94" fill="#34d399" fontSize="9" textAnchor="middle" fontFamily="monospace">
                      D01: -1,98 m²
                    </text>

                    {/* Room A102 */}
                    <polygon
                      points="220,50 390,50 390,170 220,170"
                      fill="#10b981"
                      fillOpacity="0.12"
                      stroke="#10b981"
                      strokeWidth="1.8"
                    />
                    <text x="305" y="100" fill="#ffffff" fontSize="11" textAnchor="middle" fontFamily="monospace">
                      Phòng A102 (38,20 m²)
                    </text>
                    <text x="305" y="118" fill="#34d399" fontSize="10" textAnchor="middle" fontFamily="monospace">
                      Đã duyệt ✓
                    </text>

                    {/* Room A103 (Needs review) */}
                    <polygon
                      points="60,190 200,190 200,290 60,290"
                      fill="#f59e0b"
                      fillOpacity="0.1"
                      stroke="#f59e0b"
                      strokeWidth="1.8"
                      strokeDasharray="6 4"
                    />
                    <text x="130" y="235" fill="#f59e0b" fontSize="11" textAnchor="middle" fontFamily="monospace">
                      Phòng A103 (41,70 m²)
                    </text>
                    <text x="130" y="252" fill="#f59e0b" fontSize="9" textAnchor="middle" fontFamily="monospace">
                      ⚠️ Cảnh báo hở 24mm
                    </text>

                    {/* Room B104 */}
                    <polygon
                      points="220,190 390,190 390,290 220,290"
                      fill="#10b981"
                      fillOpacity="0.12"
                      stroke="#10b981"
                      strokeWidth="1.8"
                    />
                    <text x="305" y="240" fill="#ffffff" fontSize="11" textAnchor="middle" fontFamily="monospace">
                      Phòng Khách B104 (54,80 m²)
                    </text>

                    {/* Corridor */}
                    <rect x="410" y="50" width="140" height="240" fill="#ffffff" fillOpacity="0.04" stroke="#ffffff" strokeOpacity="0.2" strokeWidth="1.5" />
                    <text x="480" y="170" fill="#ffffff" fillOpacity="0.5" fontSize="11" textAnchor="middle" fontFamily="monospace">
                      Hành lang chung
                    </text>
                  </svg>

                  {/* Bottom micro legend */}
                  <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-white/10 text-[11px] font-mono text-white/60">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1.5 text-white/80">
                        <span className="w-2.5 h-2.5 rounded-sm bg-[#ffc474]" /> Phòng chọn
                      </span>
                      <span className="flex items-center gap-1.5 text-emerald-400">
                        <span className="w-2.5 h-2.5 rounded-sm bg-emerald-400" /> Đã kiểm định
                      </span>
                      <span className="flex items-center gap-1.5 text-amber-400">
                        <span className="w-2.5 h-2.5 rounded-sm bg-amber-400" /> Cần thẩm tra
                      </span>
                    </div>
                    <span className="text-[#ffc474]">Handle: LWPOLYLINE #8F31</span>
                  </div>
                </div>

                {/* Right Inspector Summary Card */}
                <div className="p-5 rounded-xl bg-[#161822] border border-white/10 shadow-xl space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <span className="font-mono text-xs text-[#ffc474] font-bold">THỰC THỂ #8F31</span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      Độ tin cậy 98%
                    </span>
                  </div>

                  <div className="space-y-2.5 text-xs font-mono">
                    <div className="flex justify-between text-white/70">
                      <span>Chu vi tường:</span>
                      <span className="text-white font-bold">26,50 m</span>
                    </div>
                    <div className="flex justify-between text-white/70">
                      <span>Chiều cao tầng:</span>
                      <span className="text-white font-bold">3,20 m</span>
                    </div>
                    <div className="flex justify-between text-white/70">
                      <span>Khấu trừ cửa D01:</span>
                      <span className="text-rose-400 font-bold">-1,98 m²</span>
                    </div>
                    <div className="flex justify-between text-white/70">
                      <span>Khấu trừ cửa sổ W02:</span>
                      <span className="text-rose-400 font-bold">-2,24 m²</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-[#0c0e12] border border-amber-500/30 flex justify-between items-center text-sm font-bold">
                      <span className="text-[#ffc474]">Diện tích sơn thực:</span>
                      <span className="text-white text-base">76,52 m²</span>
                    </div>
                  </div>

                  <button
                    onClick={onExploreDemo}
                    className="w-full py-2.5 rounded-lg bg-[#ffc474] hover:bg-[#ffe3b3] text-black font-semibold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    <span>Xem & thao tác trên Canvas CAD</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
