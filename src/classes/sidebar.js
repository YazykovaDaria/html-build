import { block } from '../js/utills.js';
import {
  TextBlock, TitleBlock, ColumnsBlock, ImageBlock,
} from './block.js';

class Sidebar {
  constructor(selector, updateCollback) {
    this.EL = document.querySelector(selector);
    this.update = updateCollback;

    this.init();
  }

  init() {
    this.EL.insertAdjacentHTML('afterbegin', this.template);
    this.EL.addEventListener('submit', this.addBlock.bind(this));
  }

  addBlock(event) {
    event.preventDefault();
    const formType = event.target.name;
    // поколупать формдату, разобраться с очисткой,способ через таргет корявый
    // const form = new FormData(event.target);
    // const value = form.get('value');
    // const styles = form.get('styles');
    const { value } = event.target.value;
    const styles = event.target.styles.value;
    console.log(styles);
    const newBlock = formType === 'text'
      ? new TextBlock(value, styles)
      : new TitleBlock(value, styles);
    this.update(newBlock);
    event.target.value.value = '';
    event.target.styles.value = '';

    //   for (let value of form.values()) {
    //   return value = '';
    //  }
  }

  get template() {
    return [block('title'), block('text'), block('columns'), block('images')].join('');
  }
}

export default Sidebar;
