export function createSlug(text) {
  if (!text) return "";

  return text
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-&]/g, "")
    .replace(/-+/g, "-");
}

export function decodeSlug(slug) {
  if (!slug) return "";

  let decoded = slug;

  // 🔥 decode until %26 khatam na ho ja
  while (decoded.includes("%")) {
    try {
      decoded = decodeURIComponent(decoded);
    } catch {
      break;
    }
  }

  return decoded
    .replace(/[-–—]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}