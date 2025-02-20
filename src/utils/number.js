export function numberWithCommas(x) {
  return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") ?? "0";
}
// تابع محاسبه قیمت نهایی با لحاظ تخفیف
export function calculateFinalPrice(originalPrice, discountPercentage) {
  if (!originalPrice || originalPrice <= 0) return "0";
  const discountAmount = (originalPrice * discountPercentage) / 100;
  const finalPrice = originalPrice - discountAmount;
  return numberWithCommas(finalPrice); // نمایش به صورت سه رقم سه رقم
}
