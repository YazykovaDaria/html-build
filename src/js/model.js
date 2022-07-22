import image from '../assets/img/bag.jpg';
import { TextBlock, TitleBlock, ImageBlock, ColumnsBlock } from '../classes/block';

const model = [
  new TitleBlock('Hello JS', {
    tag: 'h2',
    styles: {
      background: 'linear-gradient(to right, #ff0099, #493240)',
      padding: '1.5rem',
      'text-align': 'center',
    },
  }),
  new TextBlock('text here', {
    styles: {
      padding: '1.5rem',
      'text-align': 'center',
    },
  }),
  new ColumnsBlock([
    '111111111', '22222222', '333333333',
  ], {
    styles: {
      'text-align': 'center',
    },
  }),
  new ImageBlock(image, {
    styles: {
      display: 'flex',
      'justify-content': 'center',
    },
    imageStyles: {
      width: '400px',
      height: 'auto',
    },
    alt: 'мем',
  }),
];

export default model;
