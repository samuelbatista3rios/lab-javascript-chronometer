class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    setInterval(() => {
      this.currentTime++;
      // // if (!callback) {
      // //   return 0;
      // // }
    }, 1000);
  }
  getMinutes() {
    return parseInt(Math.floor(this.currentTime / 60));
  }

  getSeconds() {
    return parseInt(this.currentTime % 60);
  }

  twoDigitsNumber() {
    if(this.currentTime < 10) {
      return "0" + this.currentTime
    }
  }

  stopClick() {
    clearInterval(this.intervalId)
  }

  resetClick() {
    this.currentTime = 0
  }

  splitClick() {
    let minutes = this.twoDigitsNumber(this.getMinutes())
    let seconds = this.twoDigitsNumber(this.getSeconds())
    return `${minutes}:${seconds}`
  }
}

