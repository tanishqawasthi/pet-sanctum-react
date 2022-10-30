import { Handle_Flag } from "../input";

export default function Handle_Submit(event) {
  let flag_index;
  let btn = document.getElementById("btn_signup");
  flag_index = Handle_Flag();
  if (flag_index !== -1) {
    event.preventDefault();
    btn.style.fontSize = "15px";
    btn.style.width = "360px";
    btn.value = "Look into red colored text!";
    setTimeout(() => {
      btn.style.fontSize = "";
      btn.style.width = "130px";
      btn.value = "Submit";
    }, 11000);
  }
}
