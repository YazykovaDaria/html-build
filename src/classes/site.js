class Site {
  constructor(selector) {
    this.EL = document.querySelector(selector);
  }

  render(model) {
    this.EL.innerHTML = '';
    model.forEach((block) => {
      this.EL.insertAdjacentHTML('beforeend', block.toHTML());
    });
  }
}

export default Site;
