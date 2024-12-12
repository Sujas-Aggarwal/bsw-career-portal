export function setMetadata(title = "", desc = "", keywords?: String[]) {
  document.title = title;
  document
    .querySelector('meta[name="description"]')!
    .setAttribute("content", desc);
  if (keywords)
    document
      .querySelector('meta[name="keywords"]')!
      .setAttribute("content", keywords.join(","));
}
