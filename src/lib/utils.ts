export function formatCurrency(amount: number) {
  return new Intl.NumberFormat("en-ZA", {
    style: "currency",
    currency: "ZAR",
    minimumFractionDigits: 0,
  }).format(amount);
}

export function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

/**
 * Returns the earliest selectable fulfilment date given a lead time in hours,
 * so customers can't pick an unrealistic collection/delivery date.
 */
export function earliestFulfilmentDate(leadTimeHours: number) {
  const date = new Date();
  date.setHours(date.getHours() + leadTimeHours);
  return date.toISOString().split("T")[0];
}

export function todayISO() {
  return new Date().toISOString().split("T")[0];
}
