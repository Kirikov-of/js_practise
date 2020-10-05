export class Site {
  constructor(selector) {
    this.$el = document.querySelector(selector);
  }

  render(model) {
    this.$el.innerHtml = "";
    model.forEach((block) => {
      this.$el.insertAdjacentHTML("beforeend", block.toHtml());
    });
  }
}
