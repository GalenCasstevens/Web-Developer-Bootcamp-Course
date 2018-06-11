var nums = [3, 21, 1, 0, 25];

function myForEach(arr, func) {
  for(var i = 0; i < arr.length; i++) {
    func(arr[i]);
  }
}

var colors = ["red", "orange", "blue", "yellow", "green"];

myForEach(colors, function(color) {
  console.log(color);
});
