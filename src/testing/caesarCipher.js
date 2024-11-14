export default function caesarCipher(str, shift) {
  const lowerAlpha = "abcdefghijklmnopqrstuvwxyz";
  const upperAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  //for negetive shift or more than 26 shifts
  shift = ((shift % 26) + 26) % 26;

  let shiftedLowerAlpha = "";
  let shiftedUpperAlpha = "";

  //shift the entire alphabet
  for (let i = 0; i < lowerAlpha.length; i++) {
    let offset = (i + shift) % lowerAlpha.length;
    shiftedLowerAlpha += lowerAlpha[offset];
    shiftedUpperAlpha += upperAlpha[offset];
  }

  //encode the string
  let encodedString = "";

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (lowerAlpha.includes(char)) {
      let index = lowerAlpha.indexOf(char);
      encodedString += shiftedLowerAlpha[index];
    } else if (upperAlpha.includes(char)) {
      let index = upperAlpha.indexOf(char);
      encodedString += shiftedUpperAlpha[index];
    } else {
      encodedString += char;
    }
  }

  return encodedString;
}
