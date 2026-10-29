// Icon helper — references the inline SVG sprite in index.html.
// Usage: icon('palette', 'cover-glyph') → <svg class="cover-glyph"><use href="#i-palette"/></svg>
export function icon(name, cls = '') {
  return `<svg class="${cls}" aria-hidden="true" focusable="false"><use href="#i-${name}"></use></svg>`;
}
