function countSmileys(arr) {
let eyes = [";", ":"], nose = ["-", "~"], mouth = [")", "D"], smiles = 0;
  for (let i = 0; i < arr.length; i++) {
    if (((arr[i].length == 2) && (eyes.indexOf(arr[i][0]) != -1) && (mouth.indexOf(arr[i][1]) != -1)) ||  ((arr[i].length == 3) && (eyes.indexOf(arr[i][0]) != -1) && (mouth.indexOf(arr[i][2]) != -1) && (nose.indexOf(arr[i][1]) != -1))) {
      smiles++;
    }
  }
  return smiles;
}
