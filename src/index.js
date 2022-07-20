const model = [
  { type: 'title', value: 'Hello JS' },
  { type: 'text', value: 'text here' },
  {
    type: 'columns',
    value: [
      '111111111', '22222222', '333333333',
    ],
  },
  {type: 'img', value: './assets/img/bag.jpg'},
];

const SITE = document.getElementById('site');

const getTitle = (block) => `<div class="row">
<div class="col-sm">
<h1>${block.value}</h1>
</div>
</div>`;

const getText = (block) => `<div class="row">
<div class="col-sm">
<p>${block.value}</p>
</div>
</div>`;

const getColumns = (block) => {
  const html = block.value.map((item) => `<div class="col-sm">${item}</div>`);
  return `<div class="row">${html.join('')}</div>`;
};

const getImg = (block) => `<div class="row">
<img src="${block.value}"/>
</div>`;

model.forEach((block) => {
  let html = '';
  if (block.type === 'title') {
    html = getTitle(block);
  } else if (block.type === 'text') {
    html = getText(block);
  } else if (block.type === 'columns') {
    html = getColumns(block);
  } else if (block.type === 'img') {
    html = getImg(block);
  }

  SITE.insertAdjacentHTML('beforeend', html);
});
