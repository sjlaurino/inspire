export default class Quote {
  constructor(data) {
    this.body = data.body
    this.author = data.author
  }

  grabTemplate() {
    return `
    <h5>${this.body}</h5> <h1 id="author">${this.author}</h1>
    `
  }
}