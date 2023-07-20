let scaleList = ["a", "b", "c"];
let pitchList = ["1", "2", "3"];

let key;

for (i = 0; i < pitchList.length; i++) {
  for (j = 0; j < scaleList.length; j++) {
    if (key == scaleList[j]) {
      scale = key;
    }

    note = scale + pitch;
  }
}
