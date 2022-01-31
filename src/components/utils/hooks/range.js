export default function range(start, end) {
  var arr = [];

  var length = end - start;

  for (var i = 0; i <= length; i++) {
    arr[i] = start;
    start++;
  }

  return arr;
}
