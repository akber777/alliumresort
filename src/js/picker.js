$(document).ready(function () {
  var picker = new Lightpick({
    field: document.getElementById("pickerCheck"),
    secondField: document.getElementById("pickerCheckOut"),
    singleDate: false,
    onSelect: function (start, end) {
      var str = "";
      str += start ? start.format("Do MMMM YYYY") + " to " : "";
      str += end ? end.format("Do MMMM YYYY") : "...";
      document.getElementById("result-3").innerHTML = str;
    },
  });


  var picker2 = new Lightpick({
    field: document.getElementById("pickerCheck2"),
    secondField: document.getElementById("pickerCheckOut2"),
    singleDate: false,
    onSelect: function (start, end) {
      var str = "";
      str += start ? start.format("Do MMMM YYYY") + " to " : "";
      str += end ? end.format("Do MMMM YYYY") : "...";
      document.getElementById("result-3").innerHTML = str;
    },
  });

  $("#selects").niceSelect()
});
