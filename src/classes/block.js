// eslint-disable-next-line max-classes-per-file
import { col, css, row } from '../js/utills';

class Block {
  constructor(value, options) {
    this.value = value;
    this.options = options;
  }

  toHTML() {
    throw new Error('метод toHTML должен быть реализован');
  }
}

export class TitleBlock extends Block {
  // можно не писать конструктор у наследников
  // если он не делает ничего нового
  // constructor(value, options) {
  //   super(value, options);
  // }
  toHTML() {
    const { tag = 'h1', styles = '' } = this.options;
    return row(col(`<${tag}>${this.value}</${tag}>`), css(styles));
  }
}

export class ImageBlock extends Block {
  toHTML() {
    const { styles, imageStyles, alt = '' } = this.options;
    return row(`<img src="${this.value}" alt="${alt}" style="${css(imageStyles)}"/>`, css(styles));
  }
}

export class TextBlock extends Block {
  toHTML() {
    const { tag = 'p', styles = '' } = this.options;
    return row(col(` <${tag}>${this.value}</${tag}>`), css(styles));
  }
}

export class ColumnsBlock extends Block {
  toHTML() {
    const { styles } = this.options;
    const html = this.value.map(col).join('');
    return row(html, css(styles));
  }
}
