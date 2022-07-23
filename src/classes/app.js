import Sidebar from './sidebar';
import Site from './site';

//разобраться со стилями и формами, сделать перерисовку сайта по пользовательским данным, поменять контент
class App {
  constructor(model) {
    this.model = model;
  }

  init() {
    const SITE = new Site('#site');

    SITE.render(this.model);

    const updateCollback = (newBlock) => {
      this.model.push(newBlock);
      SITE.render(this.model);
    };

    new Sidebar('#panel', updateCollback);
  }
}

export default App;
