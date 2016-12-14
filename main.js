var sendData = document.getElementById("send");
var source = document.getElementById("source");
var target = document.getElementById("target");
var steps = document.getElementById("steps");
var initialWord = document.getElementById("initial-word");

sendData.addEventListener("click", function () {
  var sourceSplit = source.value.split("");
  var targetSplit = target.value.split("");
  initialWord.innerHTML = "the starting word: " + source.value;
  if (sourceSplit.length === targetSplit.length) {
    for (var i = 0; i < sourceSplit.length; i++) {
      var createLi = document.createElement("li");
      sourceSplit[i] = targetSplit[i];
      var joinSplit = sourceSplit.join("");
      createLi.innerHTML = joinSplit;
      steps.appendChild(createLi);
    }
  }
});
