import model from './js/model';
import {
  getColumns, getImg, getText, getTitle,
} from './js/templates';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/main.css';

const SITE = document.getElementById('site');

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
