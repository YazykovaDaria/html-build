export const getTitle = (block) => `<div class="row">
<div class="col-sm">
<h1>${block.value}</h1>
</div>
</div>`;

export const getText = (block) => `<div class="row">
<div class="col-sm">
<p>${block.value}</p>
</div>
</div>`;

export const getColumns = (block) => {
  const html = block.value.map((item) => `<div class="col-sm">${item}</div>`);
  return `<div class="row">${html.join('')}</div>`;
};

export const getImg = (block) => `<div class="row">
<img src="${block.value}"/>
</div>`;
