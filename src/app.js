import * as Tone from "tone";

const synth = new Tone.Synth().toDestination();

let scaleList = ["a", "b", "c", "d", "e", "f", "g"];
let pitch = 4;

function addNote(scale, pitch) {
  let container = document.getElementById("container");
  let note = document.createElement("div");
  note.classList.add("note");
  let noteContent = document.createTextNode(scale + pitch);
  note.appendChild(noteContent);
  container.appendChild(note);
}

document.addEventListener("keydown", async (event) => {
  let scale = event.key;

  for (let i = 0; i < scaleList.length; i++) {
    if (scale == scaleList[i]) {
      addNote(scale, pitch);
      synth.triggerAttackRelease(scale + pitch, "8n");
      await Tone.start();
    }
  }
});
