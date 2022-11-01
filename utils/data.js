export function parseDateString(dateString) {
  const isoDateString = [
    dateString.substring(0, 4),
    dateString.substring(4, 6),
    dateString.substring(6),
  ].join('-');

  return new Date(isoDateString);
}
