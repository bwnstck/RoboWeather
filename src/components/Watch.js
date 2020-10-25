import "./watch.css";

export async function showTime(clockContainer, ampm) {
  const time = new Date();
  let hour = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();
  let am_pm = "";

  if (ampm && hour > 12) {
    hour -= 12;
    am_pm = " PM";
  }
  if (ampm && hour == 0) {
    hour = 12;
    am_pm = " AM";
  }
  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  let currentTime = ` ${hour} : ${min}: ${sec} ${ampm ? "<br>" : ""}${
    ampm ? am_pm : ""
  } `;
  clockContainer.innerHTML = currentTime;
}
