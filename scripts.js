var list = $(".list-group-item");

var currentTime = moment().format("HH");
var checkButton = $(".check-button");
var inputForm = $(".form");
var dayDisplay = moment().format("MMMM Do YYYY");


$("#day-display").text(dayDisplay);


for (var i = 0; i < list.length; i++) {

    if ($(".list-group-item")[i].value > parseInt(currentTime)) {
        $("#" + i).addClass("future");
        $("#input-" + i).addClass("future");

    } else if ($(".list-group-item")[i].value === parseInt(currentTime)) {
        $("#" + i).addClass("present");
        $("#input-" + i).addClass("present");

    } else {
        $("#" + i).addClass("past");
        $("#input-" + i).addClass("past");
    }
}


function getLocalInput() {

    for (var j = 0; j < list.length; j++) {
        var inputElement = $("#input-" + j);

        var localText = localStorage.getItem(inputElement[0].name);

        inputForm.each(function () {

            var localValue = $(this).attr("name");

            var localText = localStorage.getItem(localValue);

            $(this).val(localText);
        });
    }
}

getLocalInput();



inputForm.on("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();

        var inputValue = $(this).attr("name");

        var inputText = $(this).val();

        localStorage.setItem(inputValue, inputText);

        getLocalInput();

        var newInput = $(this).attr("id");

        $("#" + newInput).removeClass("complete");
    }
});



checkButton.on("click", function (event) {
    event.preventDefault();

    var buttonClicked = $(this).attr("name");

    $("." + buttonClicked).addClass("complete");

    var removeValue = $(this).attr("value");
    var removeText = " ";
    localStorage.setItem(removeValue, removeText);
});
