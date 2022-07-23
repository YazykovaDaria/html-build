export const row = (content, styles = '') => `<div class="row" style="${styles}">${content}</div>`;

export const col = (content) => `<div class="col-sm">${content}</div>`;

export const css = (styles) => {
  //разобраться с добавлением стилей!!! строки из формы не приходят в нужном виде
  console.log(styles);
  if (typeof styles === 'string') {
    return styles;
  }
  const toSring = (key) => `${key}: ${styles[key]}`;
  return Object.keys(styles).map(toSring).join(';');
};

export const block = (type) => `
  <form name="${type}">
  <h5>${type}</h5>
  <div class="form-group">
  <input class="form-control form-control-sm" name="value" placeholder="тип элемента">
  </div>
  <div class="form-group">
  <input class="form-control form-control-sm" name="styles" placeholder="стили элемента">
  </div>
  <button type="submit" class="btn btn-primary btn-sm">Добавить</button>
  </form>
  <hr />
  `;
