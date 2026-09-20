import React, { useState } from 'react';
import { 
  ChevronRight, 
  ChevronLeft, 
  ChevronDown, 
  ChevronUp, 
  Check, 
  X, 
  Edit3, 
  FileCode, 
  Info, 
  Sparkles, 
  AlertTriangle, 
  CheckCircle2, 
  CornerDownRight, 
  ExternalLink,
  Layers,
  ShieldCheck
} from 'lucide-react';
import { RoomEntity } from '../../types';
import { formatArea, formatLength, formatCurrency, formatDecimal } from '../../utils/formatters';

interface InspectorPanelProps {
  room: RoomEntity | null;
  roomIndex?: number;
  totalRooms?: number;
  onPrevRoom?: () => void;
  onNextRoom?: () => void;
  onConfirm: (roomId: string) => void;
  onCorrect: (room: RoomEntity) => void;
  onReject: (roomId: string) => void;
  onHighlightSource: (sourceHandle: string) => void;
  onApplySuggestion: (room: RoomEntity) => void;
}

export const InspectorPanel: React.FC<InspectorPanelProps> = ({
  room,
  roomIndex,
  totalRooms,
  onPrevRoom,
  onNextRoom,
  onConfirm,
  onCorrect,
  onReject,
  onHighlightSource,
  onApplySuggestion,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [showExplanation, setShowExplanation] = useState(true);

  if (!room) {
    return (
      <aside className="w-80 border-l border-white/10 bg-[#0e1015] p-6 flex flex-col justify-between text-xs font-mono text-white/50 select-none shrink-0">
        <div>
          <div className="pb-3 border-b border-white/10 text-white/40 font-bold uppercase text-[10px] tracking-wider">
            Bảng kiểm tra thực thể
          </div>
          <div className="mt-8 text-center space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-[#ffc474] flex items-center justify-center mx-auto">
              <Layers className="w-6 h-6" />
            </div>
            <p className="font-sans text-white/90 font-medium text-xs">
              Chưa chọn phòng nào
            </p>
            <p className="text-[11px] text-white/40 font-sans leading-relaxed">
              Nhấp vào bất kỳ ranh giới phòng hoặc cửa nào trên bản vẽ CAD để kiểm tra thông số kỹ thuật.
            </p>
          </div>
        </div>
        <div className="text-[10px] text-white/30 text-center font-mono">
          Bộ máy truy xuất CAD đang hoạt động
        </div>
      </aside>
    );
  }

  const isNeedsReview = room.status === 'Needs Review';
  const isConfirmed = room.status === 'Confirmed';

  return (
    <aside
      className={`border-l border-white/10 bg-[#0e1015] text-white transition-all duration-200 flex flex-col justify-between shrink-0 select-none z-20 ${
        isCollapsed ? 'w-12' : 'w-84 sm:w-92'
      }`}
    >
      {/* Top Header with Prev / Next Navigation */}
      <div className="h-12 px-4 border-b border-white/10 flex items-center justify-between bg-[#12141a]">
        {!isCollapsed && (
          <div className="flex items-center gap-2 shrink-0 min-w-0">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-white/50 whitespace-nowrap font-sans">
              Thực thể CAD
            </span>
            <span className="text-[10px] font-mono bg-[#ffc474]/10 border border-[#ffc474]/30 px-1.5 py-0.5 rounded text-[#ffc474] font-bold whitespace-nowrap">
              {room.sourceHandle}
            </span>
          </div>
        )}

        <div className="flex items-center gap-1.5 ml-auto">
          {!isCollapsed && onPrevRoom && onNextRoom && (
            <div className="flex items-center gap-1 bg-white/5 border border-white/10 rounded-lg p-0.5 mr-1 text-[11px] font-mono">
              <button
                onClick={onPrevRoom}
                className="p-1 rounded text-white/50 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                title="Phòng trước"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <span className="px-1 text-[10px] text-[#ffc474] font-semibold">
                {roomIndex !== undefined && totalRooms !== undefined ? `${roomIndex + 1}/${totalRooms}` : ''}
              </span>
              <button
                onClick={onNextRoom}
                className="p-1 rounded text-white/50 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                title="Phòng tiếp theo"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-1 rounded text-white/40 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            title={isCollapsed ? 'Mở rộng bảng' : 'Thu gọn bảng'}
          >
            {isCollapsed ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Main Body with ample bottom padding */}
      {!isCollapsed ? (
        <div className="flex-1 overflow-y-auto p-4 pb-8 space-y-4 text-xs scrollbar-thin scrollbar-thumb-white/10">
          {/* Room Title & Status */}
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-xl font-extrabold text-white font-mono tracking-tight">
                {room.code}
              </span>
              <span
                className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-bold flex items-center gap-1 ${
                  isNeedsReview
                    ? 'bg-amber-500/15 text-[#ffc474] border border-amber-500/40 animate-pulse'
                    : isConfirmed
                    ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                    : room.status === 'Corrected'
                    ? 'bg-sky-500/15 text-sky-400 border border-sky-500/30'
                    : room.status === 'Rejected'
                    ? 'bg-rose-500/15 text-rose-400 border border-rose-500/30'
                    : 'bg-white/5 text-white/60 border border-white/10'
                }`}
              >
                {isNeedsReview
                  ? '⚠️ Cần thẩm định'
                  : isConfirmed
                  ? '✓ Đã duyệt'
                  : room.status === 'Corrected'
                  ? '✏️ Đã hiệu chỉnh'
                  : room.status === 'Rejected'
                  ? '✕ Đã từ chối'
                  : '✓ Đã phát hiện'}
              </span>
            </div>
            <div className="text-white/80 text-xs font-semibold">{room.name}</div>
            <div className="text-[11px] text-white/40 font-mono">
              {room.building} · {room.floor}
            </div>
          </div>

          {/* Key Area Metrics */}
          <div className="grid grid-cols-2 gap-2.5 font-mono">
            <div className="p-3 rounded-xl bg-[#14161f] border border-white/10">
              <div className="text-white/40 text-[10px]">DIỆN TÍCH SÀN</div>
              <div className="text-xl font-bold text-white mt-0.5 tabular-nums">
                {formatDecimal(room.floorArea, 2)} <span className="text-xs font-normal text-white/40">m²</span>
              </div>
              <div className="text-[10px] text-white/40 mt-1 tabular-nums">
                Chu vi: {formatLength(room.perimeter, 1)}m
              </div>
            </div>

            <div className="p-3 rounded-xl bg-[#14161f] border border-white/10">
              <div className="text-[#ffc474] text-[10px] font-semibold">DIỆN TÍCH SƠN THỰC</div>
              <div className="text-xl font-bold text-[#ffc474] mt-0.5 tabular-nums">
                {formatDecimal(room.netPaintArea, 2)} <span className="text-xs font-normal text-white/40">m²</span>
              </div>
              <div className="text-[10px] text-white/40 mt-1 font-sans">
                {room.primerCoats} Lót + {room.topCoats} Phủ
              </div>
            </div>
          </div>

          {/* Detailed Geometric Breakdown with 100% Math Consistency */}
          <div className="p-3.5 rounded-xl bg-[#14161f] border border-white/10 font-mono text-[11px] space-y-1.5">
            <div className="flex items-center justify-between pb-1 border-b border-white/10">
              <span className="text-white/40 text-[10px] font-bold uppercase font-sans">
                Chi tiết Bóc tách Hình học
              </span>
              <span className="text-[9px] text-emerald-400 font-sans">TCVN 8652:2020</span>
            </div>
            <div className="flex justify-between text-white/70">
              <span>Chiều cao thông thủy:</span>
              <span className="font-semibold text-white tabular-nums">{formatLength(room.wallHeight, 2)}m</span>
            </div>
            <div className="flex justify-between text-white/70">
              <span>Diện tích tường thô (P × H):</span>
              <span className="text-white tabular-nums">{formatArea(room.grossWallArea, 2)}</span>
            </div>
            <div className="flex justify-between text-white/70">
              <span>Khấu trừ cửa đi:</span>
              <span className="text-amber-300 font-mono tabular-nums">-{formatArea(room.doorDeductions, 2)}</span>
            </div>
            <div className="flex justify-between text-white/70">
              <span>Khấu trừ cửa sổ:</span>
              <span className="text-amber-300 font-mono tabular-nums">-{formatArea(room.windowDeductions, 2)}</span>
            </div>
            <div className="pt-1.5 border-t border-white/10 flex justify-between text-white font-bold text-xs">
              <span className="text-emerald-400">Tổng diện tích sơn tường:</span>
              <span className="text-white font-bold font-mono tabular-nums">
                {formatArea(room.netPaintArea, 2)}
              </span>
            </div>
            <div className="text-[9.5px] text-white/40 pt-1 border-t border-white/5 flex items-center justify-between">
              <span>Kiểm toán:</span>
              <span className="font-mono text-emerald-400/80 tabular-nums">
                {formatDecimal(room.grossWallArea, 2)} - {formatDecimal(room.doorDeductions + room.windowDeductions, 2)} = {formatArea(room.netPaintArea, 2)}
              </span>
            </div>
          </div>

          {/* Paint System & Rate */}
          <div className="p-3.5 rounded-xl border border-white/10 bg-[#14161f] space-y-1.5">
            <div className="text-white/40 text-[10px] font-sans font-bold uppercase">
              Hệ sơn & Kinh phí
            </div>
            <div className="text-xs font-semibold text-white leading-tight">
              {room.paintSystem}
            </div>
            <div className="flex items-center justify-between text-xs font-mono pt-1">
              <span className="text-white/50">Đơn giá:</span>
              <span className="text-white/80 tabular-nums">{room.unitRate.toLocaleString('vi-VN')} ₫/m²</span>
            </div>
            <div className="flex items-center justify-between text-xs font-mono font-bold text-white pt-1.5 border-t border-white/10">
              <span>Thành tiền phòng:</span>
              <span className="text-[#ffc474] font-mono font-bold text-sm tabular-nums">
                {formatCurrency(room.totalCost)}
              </span>
            </div>
          </div>

          {/* Source Handle & CAD Traceability */}
          <div className="p-3.5 rounded-xl bg-[#0c0e12] text-white font-mono text-xs space-y-2 border border-white/10 shadow-inner">
            <div className="flex items-center justify-between text-white/40 text-[10px] uppercase font-bold">
              <span className="flex items-center gap-1.5 text-white/80">
                <FileCode className="w-3.5 h-3.5 text-[#ffc474]" />
                Truy xuất nguồn gốc DXF
              </span>
              <span className={`font-semibold ${room.confidence >= 90 ? 'text-emerald-400' : 'text-amber-400'}`}>
                ● {room.confidence}% TIN CẬY
              </span>
            </div>

            <div className="space-y-1 text-[11px] text-white/70">
              <div className="flex justify-between">
                <span className="text-white/40">Handle DXF:</span>
                <span className="text-[#ffc474] font-mono font-semibold">{room.sourceHandle}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/40">Lớp CAD:</span>
                <span className="text-white/80 font-mono">{room.layer}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/40">Số đỉnh vector:</span>
                <span className="text-white/80">{room.vertices.length} đỉnh đa giác</span>
              </div>
            </div>

            <button
              onClick={() => onHighlightSource(room.sourceHandle)}
              className="w-full mt-2 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white/80 hover:text-white text-[11px] font-semibold transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>Làm sáng thực thể trên CAD</span>
              <ExternalLink className="w-3 h-3 text-[#ffc474]" />
            </button>
          </div>

          {/* AI Explainability Drawer */}
          {room.aiExplanation && (
            <div className="border border-white/10 rounded-xl overflow-hidden bg-[#161822]">
              <button
                type="button"
                onClick={() => setShowExplanation(!showExplanation)}
                className="w-full px-3 py-2 flex items-center justify-between text-xs font-mono text-white/70 hover:text-white transition-colors cursor-pointer"
              >
                <span className="flex items-center gap-1.5 font-semibold">
                  <Info className="w-3.5 h-3.5 text-[#ffc474]" />
                  Giải trình thuật toán AI
                </span>
                {showExplanation ? (
                  <ChevronUp className="w-3.5 h-3.5" />
                ) : (
                  <ChevronDown className="w-3.5 h-3.5" />
                )}
              </button>

              {showExplanation && (
                <div className="p-3 pt-1 text-[11px] text-white/70 font-sans border-t border-white/10 leading-relaxed">
                  {room.aiExplanation}
                </div>
              )}
            </div>
          )}

          {/* AI Suggestion Card if available */}
          {room.aiSuggestion && (
            <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#ffc474]">
                <Sparkles className="w-3.5 h-3.5" />
                Đề xuất Hình học từ AI
              </div>
              <p className="text-[11px] font-sans text-amber-200/90 leading-snug">
                {room.aiSuggestion.text}
              </p>
              <button
                onClick={() => onApplySuggestion(room)}
                className="amber-button w-full py-2 text-xs font-semibold transition-colors shadow-xs cursor-pointer text-center"
              >
                Áp dụng đề xuất (+{formatDecimal(room.aiSuggestion.deltaArea, 1)} m²)
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="flex-1 flex items-center justify-center">
          <div className="rotate-90 text-[10px] font-mono tracking-widest text-white/40 whitespace-nowrap">
            KIỂM TRA THỰC THỂ
          </div>
        </div>
      )}

      {/* HITL Action Footer Bar with dynamic state handling */}
      {!isCollapsed && (
        <div className="p-4 border-t border-white/10 bg-[#12141a] space-y-2 shrink-0">
          <div className="grid grid-cols-3 gap-2 text-xs font-medium">
            <button
              onClick={() => onConfirm(room.id)}
              className={`py-2.5 text-xs font-semibold text-center transition-all shadow-xs flex items-center justify-center gap-1.5 cursor-pointer rounded-lg ${
                isConfirmed
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-500/30'
                  : 'amber-button'
              }`}
            >
              <Check className="w-3.5 h-3.5" />
              <span>{isConfirmed ? 'Đã duyệt' : 'Phê duyệt'}</span>
            </button>

            <button
              onClick={() => onCorrect(room)}
              className="py-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium text-center transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Edit3 className="w-3.5 h-3.5 text-white/70" />
              <span>Hiệu chỉnh</span>
            </button>

            <button
              onClick={() => onReject(room.id)}
              className="py-2.5 rounded-lg bg-white/5 hover:bg-white/10 hover:border-rose-500/30 border border-white/10 text-white/60 hover:text-rose-300 font-medium text-center transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
              <span>Từ chối</span>
            </button>
          </div>
          <p className="text-[10px] font-sans text-white/40 text-center leading-normal">
            {isConfirmed
              ? 'Số liệu phòng đã được khóa an toàn vào hồ sơ dự toán công trình'
              : 'Phê duyệt của kỹ sư sẽ khóa số liệu vào hồ sơ dự toán công trình'}
          </p>
        </div>
      )}
    </aside>
  );
};
