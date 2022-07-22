export const row = (content, styles = '') => `<div class="row" style="${styles}">${content}</div>`;

export const col = (content) => `<div class="col-sm">${content}</div>`;

export const css = (styles) => {
  const toSring = (key) => `${key}: ${styles[key]}`;
  return Object.keys(styles).map(toSring).join(';');
};
