const time = {
  hours: 4,
  minutes: 51,
  seconds: 16,
  toString() {
    return `${this.hours > 9 ? '' : 0}${this.hours}:${this.minutes > 9 ? '' : 0}\
${this.minutes}:${this.seconds > 9 ? '' : 0}${this.seconds}`
  },
  decrement() {
    this.seconds--;
    if (this.seconds < 0) {
      this.seconds = 59;
      this.minutes--;
      if (this.minutes < 0) {
        this.minutes = 59;
        this.hours--;
      }
    }
  }
}

const start_timer = () => {
  const timer = document.getElementById("timer")

  setInterval(() => {
    timer.innerText = time.toString()
    time.decrement()
  }, 1000)
}

const set_active_preview = (e) => {
  const current_active = document.getElementsByClassName("active_preview")[0]
  current_active.classList.remove("active_preview")
  e.classList.add("active_preview");
}