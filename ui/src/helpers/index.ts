export function isNumber(value: unknown) {
  return typeof value === "number" && Number.isFinite(value);
}
