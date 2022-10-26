class Todo {
  constructor(item, finished) {
    this.item = item;
    this.finished = finished;
  }

  changeState() {
    this.finished = !this.finished;
  }
}