
export function filterArray(
  array,
  key,
  term
) {
  return array.filter(
    (item) => item[key]?.toLowerCase().includes(term.toLowerCase())
  );
}