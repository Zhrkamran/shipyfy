export function numberWithCommas(x) {
  return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") ?? "0";
}

export function calculateFinalPrice(originalPrice, discountPercentage) {
  if (!originalPrice || originalPrice <= 0) return "0";
  const discountAmount = (originalPrice * discountPercentage) / 100;
  const finalPrice = originalPrice - discountAmount;
  return numberWithCommas(finalPrice); 
}
