/**
 * Bộ tiện ích chuẩn hóa định dạng Kỹ thuật & Dự toán xây dựng (TCVN / Nghị định 10/2021/NĐ-BXD)
 * - Phân cách số thập phân: Dấu phẩy (,) chuẩn tiếng Việt (ví dụ: 76,52 m²)
 * - Phân cách hàng nghìn: Dấu chấm (.) chuẩn tiếng Việt (ví dụ: 7.498.960 ₫)
 * - Cung cấp chuỗi định dạng thống nhất toàn diện trên tất cả các màn hình
 */

export const formatDecimal = (num: number, decimals: number = 2): string => {
  if (num === null || num === undefined || isNaN(num)) return '0,00';
  return num.toLocaleString('vi-VN', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
};

export const formatArea = (num: number, decimals: number = 2): string => {
  return `${formatDecimal(num, decimals)} m²`;
};

export const formatLength = (num: number, decimals: number = 1): string => {
  return `${formatDecimal(num, decimals)} m`;
};

export const formatCurrency = (num: number): string => {
  if (num === null || num === undefined || isNaN(num)) return '0 ₫';
  return `${Math.round(num).toLocaleString('vi-VN')} ₫`;
};

export const formatNumberOnly = (num: number): string => {
  if (num === null || num === undefined || isNaN(num)) return '0';
  return Math.round(num).toLocaleString('vi-VN');
};
