"use strict";

function moody(seed) {
  const low = document.getElementById("sad");
  const mid = document.getElementById("silent");
  const high = document.getElementById("smile");
  const num = ~~(Math.random() * 2) ? true : false;
  if (seed === 1) {
    low.style.display = "none";
    if (num) {
      mid.style.display = "block";
    } else {
      high.style.display = "block";
    }
  }
  if (seed === 2) {
    mid.style.display = "none";
    if (num) {
      high.style.display = "block";
    } else {
      low.style.display = "block";
    }
  }
  if (seed === 3) {
    high.style.display = "none";
    if (num) {
      low.style.display = "block";
    } else {
      mid.style.display = "block";
    }
  }
}
