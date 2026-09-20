import React, { useState } from 'react';
import { 
  AlertTriangle, 
  CheckCircle2, 
  ExternalLink, 
  Search, 
  ArrowRight, 
  FileCode, 
  Check, 
  Edit3, 
  X,
  Filter
} from 'lucide-react';
import { RoomEntity, DoorEntity } from '../../types';

interface ReviewQueueViewProps {
  rooms: RoomEntity[];
  doors: DoorEntity[];
  onInspectRoom: (roomId: string) => void;
  onConfirmRoom: (roomId: string) => void;
  onCorrectRoom: (room: RoomEntity) => void;
  onRejectRoom: (roomId: string) => void;
}

export const ReviewQueueView: React.FC<ReviewQueueViewProps> = ({
  rooms,
  doors,
  onInspectRoom,
  onConfirmRoom,
  onCorrectRoom,
  onRejectRoom,
}) => {
  const [filterType, setFilterType] = useState<'all' | 'rooms' | 'doors'>('all');

  const flaggedRooms = rooms.filter((r) => r.status === 'Needs Review');
  const flaggedDoors = doors.filter((d) => d.status === 'Needs Review');

  const totalFlags = flaggedRooms.length + flaggedDoors.length;

  return (
    <div className="h-full overflow-y-auto p-6 md:p-8 max-w-7xl mx-auto space-y-6 text-white">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Hàng đợi Thẩm định Kỹ thuật
            </h1>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-amber-500/15 text-[#ffc474] border border-amber-500/30">
              {totalFlags} mục cần xử lý
            </span>
          </div>
          <p className="text-xs sm:text-sm text-white/60 mt-1 max-w-2xl font-sans">
            Kiểm tra các cảnh báo hở vector, xung đột ranh giới và xác thực hình học trước khi kết xuất hồ sơ dự toán.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center bg-[#14161f] p-1 rounded-xl border border-white/10 text-xs font-mono">
          <button
            onClick={() => setFilterType('all')}
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
              filterType === 'all'
                ? 'bg-white/15 text-white font-semibold shadow-xs border border-white/15'
                : 'text-white/50 hover:text-white'
            }`}
          >
            Tất cả ({totalFlags})
          </button>
          <button
            onClick={() => setFilterType('rooms')}
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
              filterType === 'rooms'
                ? 'bg-white/15 text-white font-semibold shadow-xs border border-white/15'
                : 'text-white/50 hover:text-white'
            }`}
          >
            Phòng ({flaggedRooms.length})
          </button>
          <button
            onClick={() => setFilterType('doors')}
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
              filterType === 'doors'
                ? 'bg-white/15 text-white font-semibold shadow-xs border border-white/15'
                : 'text-white/50 hover:text-white'
            }`}
          >
            Cửa ({flaggedDoors.length})
          </button>
        </div>
      </div>

      {/* Flagged Items Table */}
      <div className="bg-[#12141a] border border-white/10 rounded-2xl overflow-hidden shadow-xl">
        <div className="px-5 py-3.5 bg-[#14161f] border-b border-white/10 flex items-center justify-between text-xs font-mono">
          <span className="font-semibold text-white/70 uppercase tracking-wider text-[11px]">
            Danh sách thực thể cần kiểm tra
          </span>
          <span className="text-white/40 text-[11px]">Bộ lọc: Độ tin cậy &lt; 95%</span>
        </div>

        <div className="divide-y divide-white/10">
          {/* Room issues */}
          {(filterType === 'all' || filterType === 'rooms') &&
            flaggedRooms.map((room) => (
              <div
                key={room.id}
                className="p-5 hover:bg-white/[0.03] transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="space-y-2 flex-1">
                  <div className="flex items-center flex-wrap gap-2.5">
                    <span className="text-sm font-bold font-mono text-white">
                      {room.code}
                    </span>
                    <span className="text-xs text-white/70 font-sans">
                      {room.name}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-amber-500/15 text-[#ffc474] border border-amber-500/30">
                      ⚠️ {room.confidence}% Tin cậy
                    </span>
                    <span className="text-[11px] font-mono text-white/50 bg-white/5 px-2 py-0.5 rounded border border-white/10">
                      {room.sourceHandle}
                    </span>
                  </div>

                  {/* Clean Technical Issue Line */}
                  <div className="border-l-2 border-amber-400/80 pl-3 py-0.5">
                    <div className="text-xs text-white/80 leading-relaxed font-sans">
                      <span className="text-[#ffc474] font-mono font-semibold text-[11px] mr-1.5">
                        [Cần xử lý]
                      </span>
                      {room.issueDescription || room.aiExplanation}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-[11px] font-mono text-white/40">
                    <span>Diện tích sàn: <strong className="text-white/70 font-normal">{room.floorArea} m²</strong></span>
                    <span>•</span>
                    <span>Diện tích sơn: <strong className="text-white/70 font-normal">{room.netPaintArea} m²</strong></span>
                    <span>•</span>
                    <span>Lớp CAD: <strong className="text-white/70 font-normal">{room.layer}</strong></span>
                  </div>
                </div>

                {/* Right Actions */}
                <div className="flex items-center gap-2 shrink-0 self-end md:self-auto font-mono text-xs">
                  <button
                    onClick={() => onInspectRoom(room.id)}
                    className="amber-button px-3.5 py-2 text-xs font-semibold flex items-center gap-1.5 cursor-pointer shadow-sm"
                    title="Phóng tầm nhìn tới tọa độ CAD"
                  >
                    <span>Kiểm tra trên CAD</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => onConfirmRoom(room.id)}
                      className="p-2 rounded-lg bg-white/5 hover:bg-white/15 text-white/70 hover:text-white border border-white/10 transition-colors cursor-pointer"
                      title="Phê duyệt hợp lệ"
                    >
                      <Check className="w-4 h-4 text-emerald-400" />
                    </button>

                    <button
                      onClick={() => onCorrectRoom(room)}
                      className="p-2 rounded-lg bg-white/5 hover:bg-white/15 text-white/70 hover:text-white border border-white/10 transition-colors cursor-pointer"
                      title="Hiệu chỉnh đỉnh"
                    >
                      <Edit3 className="w-4 h-4 text-white/80" />
                    </button>

                    <button
                      onClick={() => onRejectRoom(room.id)}
                      className="p-2 rounded-lg bg-white/5 hover:bg-rose-500/20 text-white/40 hover:text-rose-400 border border-white/10 transition-colors cursor-pointer"
                      title="Từ chối"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}

          {/* Door issues */}
          {(filterType === 'all' || filterType === 'doors') &&
            flaggedDoors.map((door) => (
              <div
                key={door.id}
                className="p-5 hover:bg-white/[0.03] transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="space-y-2 flex-1">
                  <div className="flex items-center flex-wrap gap-2.5">
                    <span className="text-sm font-bold font-mono text-white">
                      Cửa {door.code}
                    </span>
                    <span className="text-xs text-white/70 font-sans">
                      {door.type}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-amber-500/15 text-[#ffc474] border border-amber-500/30">
                      ⚠️ {door.confidence}% Tin cậy
                    </span>
                  </div>

                  {/* Clean Technical Issue Line */}
                  <div className="border-l-2 border-amber-400/80 pl-3 py-0.5">
                    <div className="text-xs text-white/80 leading-relaxed font-sans">
                      <span className="text-[#ffc474] font-mono font-semibold text-[11px] mr-1.5">
                        [Cần xử lý]
                      </span>
                      Chữ chú thích ký hiệu cửa có độ tương phản OCR thấp; yêu cầu kỹ sư xác nhận kích thước mở trừ 900x2100mm (1.89 m²).
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0 self-end md:self-auto font-mono text-xs">
                  <button
                    onClick={() => onInspectRoom('room-a103')}
                    className="amber-button px-3.5 py-2 text-xs font-semibold flex items-center gap-1.5 cursor-pointer shadow-sm"
                  >
                    <span>Kiểm tra trên CAD</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}

          {totalFlags === 0 && (
            <div className="p-12 text-center text-white/40 font-mono text-xs space-y-2">
              <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
              <p className="font-bold text-white text-sm">Tất cả các mục cảnh báo đã được xử lý xong!</p>
              <p>Mọi hình học không gian và khấu trừ cửa đều đã được kỹ sư kiểm tra & phê duyệt.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
