const caesarCipher = (str, key) => {
  let output = "";
  const strArr = str.split("");

  for (let i = 0; i < strArr.length; i++) {
    if (isAlphabet(strArr[i])) {
      output += getCipheredChar(strArr[i], key);
    } else {
      output += strArr[i];
    }
  }
  return output;
};

function getCipheredChar(char, key) {
  let newCharCode = char.charCodeAt(0) + key;

  if (!isAlphabet(String.fromCharCode(newCharCode))) {
    newCharCode -= 26;
  }
  return String.fromCharCode(newCharCode);
}

function isAlphabet(str) {
  return str.toLowerCase() >= "a" && str.toLowerCase() <= "z";
}

export default caesarCipher;
