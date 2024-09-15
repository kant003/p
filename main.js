import "./style.css";
import * as Tone from "tone";
import getNoteFromKey from "./utils";

const synth = new Tone.Synth().toDestination();

const sampler = new Tone.Sampler({
  urls: {
    C4: "C4.mp3",
    "C#4": "C#4.mp3",
    D4: "D4.mp3",
    "D#4": "D#4.mp3",
    E4: "E4.mp3",
    F4: "F4.mp3",
    "F#4": "F#4.mp3",
    G4: "G4.mp3",
    "G#4": "G#4.mp3",
    A4: "A4.mp3",
    "A#4": "A#4.mp3",
    B4: "B4.mp3",
    C5: "C5.mp3",
  },
  release: 1, // Controla la duración del release del sample
}).toDestination();



const keys = document.querySelectorAll(".key");
/*  keys.forEach(key => {
    key.addEventListener('click', () => playNote(key.getAttribute('data-note')));
  }); */

document
  .querySelector('[data-note="C4"]')
  .addEventListener("click", () => playNote("C4"));
document
  .querySelector('[data-note="C#4"]')
  .addEventListener("click", () => playNote("C#4"));

document.addEventListener("keydown", (event) => {
  const note = getNoteFromKey(event.key);
  const key = document.querySelector(`[data-key="${event.key}"]`);
  key && key.classList.add("pressed")
  playNote(note);
});

document.addEventListener("keyup", (event) => {
  const key = document.querySelector(`[data-key="${event.key}"]`);
  key && key.classList.remove("pressed");
});


function playNote(note) {
  sampler.triggerAttackRelease(note, "8n");
}
