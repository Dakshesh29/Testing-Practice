export function caesarCipher(string, shift) {
  let result = "";
  for (let ch of string) {
    if (ch >= "a" && ch <= "z") {
      const code = ((ch.charCodeAt(0) - 97 + shift) % 26) + 97;
      result += String.fromCharCode(code);
    } else if (ch >= "A" && ch <= "Z") {
      const code = ((ch.charCodeAt(0) - 65 + shift) % 26) + 65;
      result += String.fromCharCode(code);
    } else {
      result += ch;
    }
  }
  return result;
}
