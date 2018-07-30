export function currency(amount, withCurrency = true) {
  amount = parseFloat(amount).toFixed(0);
  amount = amount.replace(/(\d)(?=(\d{3})+\b)/g, "$1.");
  return withCurrency ? "Rp " + amount : "" + amount;
}
