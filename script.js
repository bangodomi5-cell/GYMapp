let goal = 140;
let protein = parseInt(localStorage.getItem("protein")) || 0;

function update() {
  document.getElementById("proteinText").innerText =
    protein + " / " + goal + "g";

  document.getElementById("bar").style.width =
    Math.min((protein / goal) * 100, 100) + "%";
}

function addProtein() {
  let val = parseInt(document.getElementById("proteinInput").value);
  if (!val) return;

  protein += val;
  localStorage.setItem("protein", protein);

  document.getElementById("proteinInput").value = "";
  update();
}

function resetProtein() {
  protein = 0;
  localStorage.setItem("protein", protein);
  update();
}

function saveWorkout() {
  let arr = [];
  document.querySelectorAll(".w").forEach(c => arr.push(c.checked));
  localStorage.setItem("workout", JSON.stringify(arr));
  alert("Edzés mentve 💪");
}

function resetWorkout() {
  document.querySelectorAll(".w").forEach(c => c.checked = false);
  localStorage.removeItem("workout");
}

function fullReset() {
  localStorage.clear();
  location.reload();
}

function load() {
  let w = JSON.parse(localStorage.getItem("workout"));
  if (w) {
    document.querySelectorAll(".w").forEach((c,i)=>{
      c.checked = w[i];
    });
  }
  update();
}

load();