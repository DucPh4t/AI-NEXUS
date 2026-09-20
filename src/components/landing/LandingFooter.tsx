import React from 'react';
import { Layers, ShieldCheck, FileCheck, PhoneCall, Mail, ExternalLink, Award } from 'lucide-react';

interface LandingFooterProps {
  onGetStarted: () => void;
  onExploreDemo: () => void;
}

export const LandingFooter: React.FC<LandingFooterProps> = ({
  onGetStarted,
  onExploreDemo,
}) => {
  return (
    <footer className="bg-[#08090d] border-t border-white/10 pt-16 pb-12 text-white/55 text-xs font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 4-column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Identity */}
          <div className="space-y-3.5 md:col-span-1">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-xl bg-amber-500/10 border border-amber-500/30 text-[#ffc474] flex items-center justify-center">
                <Layers className="w-4 h-4 text-[#ffc474]" />
              </div>
              <span className="font-bold text-white text-base font-sans tracking-tight">
                AI Paint Take-off
              </span>
            </div>
            <p className="text-xs text-white/60 leading-relaxed font-sans-tight">
              Nền tảng trí tuệ nhân tạo chuyên sâu bóc tách khối lượng từ bản vẽ 2D CAD (DXF/DWG) và lập dự toán hoàn thiện công trình theo tiêu chuẩn quốc gia.
            </p>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-mono">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Bảo mật NDA • Local-First Execution</span>
            </div>
          </div>

          {/* Col 2: Tiêu chuẩn Kỹ thuật */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider font-mono">
              Tiêu chuẩn Kỹ thuật
            </h4>
            <ul className="space-y-2 text-xs font-mono text-white/60">
              <li className="flex items-center gap-2">
                <Award className="w-3.5 h-3.5 text-[#ffc474]" />
                <span className="text-white/80">TCVN 8652:2012</span> — Sơn tường xây
              </li>
              <li className="flex items-center gap-2">
                <FileCheck className="w-3.5 h-3.5 text-sky-400" />
                <span>Định mức 12/2021/TT-BXD</span>
              </li>
              <li className="flex items-center gap-2">
                <FileCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>DXF ASCII / Binary R12–2024</span>
              </li>
              <li className="flex items-center gap-2">
                <FileCheck className="w-3.5 h-3.5 text-amber-300" />
                <span>ISO 19650 Quản lý thông tin CAD</span>
              </li>
            </ul>
          </div>

          {/* Col 3: Điều hướng nhanh */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider font-mono">
              Tính năng Lõi
            </h4>
            <ul className="space-y-2 text-xs text-white/70">
              <li>
                <button
                  onClick={onExploreDemo}
                  className="hover:text-[#ffc474] transition-colors cursor-pointer text-left"
                >
                  Dự án mẫu CAD Chung cư (Demo)
                </button>
              </li>
              <li>
                <button
                  onClick={onGetStarted}
                  className="hover:text-[#ffc474] transition-colors cursor-pointer text-left"
                >
                  Tải lên tệp bản vẽ DXF
                </button>
              </li>
              <li>
                <a
                  href="#traceability"
                  className="hover:text-[#ffc474] transition-colors"
                >
                  Truy vết 2 chiều Handle CAD ⇄ BoQ
                </a>
              </li>
              <li>
                <a
                  href="#roi-assurance"
                  className="hover:text-[#ffc474] transition-colors"
                >
                  Bảng tính ROI Doanh nghiệp
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Hỗ trợ Kỹ sư & Doanh nghiệp */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider font-mono">
              Hỗ trợ Doanh nghiệp & QS
            </h4>
            <div className="space-y-2 text-xs font-mono text-white/60">
              <div className="flex items-center gap-2 text-white/80">
                <PhoneCall className="w-3.5 h-3.5 text-[#ffc474]" />
                <span>Hotline Kỹ thuật: 1900 6892</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Mail className="w-3.5 h-3.5 text-[#ffc474]" />
                <span>kythuat@aipaint-takeoff.vn</span>
              </div>
              <p className="text-[11px] text-white/40 font-sans mt-2">
                Hỗ trợ đào tạo đội ngũ QS, tích hợp API ERP xây dựng và xuất BoQ tùy biến cho tổng thầu.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom copyright & certification bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/40 font-mono">
          <div>
            © 2026 AI Paint Take-off Platform. Bản quyền phần mềm chuyên dụng cho Kỹ sư Dự toán & Trắc đạc Khối lượng (QS).
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[#ffc474] font-semibold">100% Kỹ sư duyệt (Human-in-the-Loop)</span>
            <span>•</span>
            <span className="text-emerald-400">Zero-Hallucination Vector Architecture</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
