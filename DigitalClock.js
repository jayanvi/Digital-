function DigitalClock() {
  const time = new Date();

  function formatTime() {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const meridian = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;
    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridian}`;
  }

  function padZero(number) {
    return (number < 10 ? "0" : "") + number;
  }
  document.getElementById('clock').textContent = formatTime();

  setInterval(() => {
    const time = new Date();
    document.getElementById('clock').textContent = formatTime();
  }, 1000);

}
DigitalClock();