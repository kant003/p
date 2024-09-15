export const keyMap = {
  a: "C4",
  w: "C#4", // W
  s: "D4", // S
  69: "D#4", // E
  68: "E4", // D
  70: "F4", // F
  84: "F#4", // T
  71: "G4", // G
  89: "G#4", // Y
  72: "A4", // H
  85: "A#4", // U
  74: "B4", // J
  75: "C5", // K
};

export function sum(a, b) {
  return a + b
}

export default function getNoteFromKey(key) {
  key = key.toLowerCase()
  return keyMap[key];
}
