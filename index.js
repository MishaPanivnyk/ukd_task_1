const arr = [
  11, 2, 9, 48, 5, 10, 99, 102, 50, 20, 75, 56, 85, 20, 12, 45, 69, 58, 75, 23,
];
for (let i = 0, temp; i < arr.length - 1; i++) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }
  }
}

console.log(arr);

const ascendingArr = [...arr].sort((a, b) => b - a);
console.log(ascendingArr);

const authors = [
  "Misha Panivnyk",
  "Vsacheslav Myakota",
  "Eugeniy Zinych",
  "Olexandr Sorokolit",
  "Kris Krasowska",
];
const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));
console.log(authorsInAlphabetOrder);
const authorsInReverseOrder = [...authors].sort((a, b) => b.localeCompare(a));
console.log(authorsInReverseOrder);
