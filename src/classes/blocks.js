import { colSm, row, css } from "../utils";

export class Block {
  constructor(value, options) {
    (this.value = value), (this.options = options);
  }

  toHtml() {
    throw new Error("Метод toHtml должен быть реализован");
  }
}

export class TitleBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHtml() {
    const { tag = "h1", styles } = this.options;
    return row(colSm(`<${tag}>${this.value}</${tag}>`), css(styles));
  }
}

export class TextBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHtml() {
    return row(colSm(`<p>${this.value}</p>`), css(this.options.styles));
  }
}

export class ImageBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHtml() {
    const { imageStyles, styles } = this.options;
    return row(
      `<img src="${this.value}"  style="${css(imageStyles)}" />`,
      css(styles)
    );
  }
}

export class ColumnsBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHtml() {
    const html = this.value.map((item) => {
      return colSm(item);
    });
    return row(html.join(""), css(this.options.styles));
  }
}
