let colorsArray = ['red', 'blue', 'green', 'yellow', 'purple', 'pink', 'orange']

var pickColor = (arr, n) => {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
};

var container = document.getElementById("container").className = pickColor(colorsArray,1);

var firstPaint = () => {
  var container = document.getElementById("container");
  console.log("it worked");
  container.className = pickColor(colorsArray,1);
};

if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("/serviceWorker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
    })
  }
