export default class Quote {
  constructor(data) {
    this.body = data.body
    this.author = data.author
  }

  grabTemplate() {
    return `
    <h3>${this.body} <span id="author"> <h1>${this.author}</h1> </span> </h3>
    `
  }
}