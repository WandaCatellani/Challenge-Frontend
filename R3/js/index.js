let modal = document.getElementById("my-modal");
let btn = document.getElementById("my-btn");
let span = document.getElementsByClassName("close")[0];

btn.onclick = () => {
  modal.style.display = "block";
};

span.onclick = () => {
  modal.style.display = "none";
};

window.onclick = (e) => {
  if (e.target == modal) {
    modal.style.display = "none";
  }
};
