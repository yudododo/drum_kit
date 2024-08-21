//Dectecting KeyBoards Press
const numbersOfDrum = document.querySelectorAll(".drum").length;
for (let i = 0; i < numbersOfDrum; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
  function handleClick() {
    let buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  }
}

//Detecting Keyboards Press
document.addEventListener("keypress", function (e) {
  makeSound(e.key);
  buttonAnimation(e.key);
});

document.addEventListener("DOMContentLoaded", function () {
  const sheetMusic = document.querySelector(".sheet-music");

  document.addEventListener("keydown", function (e) {
    if (e.key === "f") {
      addNoteToSheetMusic("note_bassdrum");
    } else if (e.key === "u") {
      addNoteToSheetMusic("note_crash");
    } else if (e.key === "j") {
      addNoteToSheetMusic("note_hihat");
    } else if (e.key === "k") {
      addNoteToSheetMusic("note_snare");
    } else if (e.key === "g") {
      addNoteToSheetMusic("note_tom01");
    } else if (e.key === "n") {
      addNoteToSheetMusic("note_tom03");
    }
  });

  function addNoteToSheetMusic(noteClass) {
    const note = document.createElement("div");
    note.classList.add("note");
    note.classList.add(noteClass);
    sheetMusic.appendChild(note);
  }
});

function makeSound(key) {
  switch (key) {
    case "f":
      let kick = new Audio("sounds/kick.mp3");
      kick.play();  
      break;

    case "u":
      let crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "j":
      let hihat = new Audio("sounds/hihat.mp3");
      hihat.play();
      break;

    case "k":
      let snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "b":
      let tom01 = new Audio("sounds/tom-1.mp3");
      tom01.play();
      break;

    case "g":
      let tom02 = new Audio("sounds/tom-2.mp3");
      tom02.play();
      break;

    case "h":
      let tom03 = new Audio("sounds/tom-3horizontal-line.mp3");
      tom03.play();
      break;

    case "n":
      let tom04 = new Audio("sounds/tom-4.mp3");
      tom04.play();
      break;

    default:
      console.log(buttonInnerHTML);
  }
}

function buttonAnimation(currentKey) {
  let activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
