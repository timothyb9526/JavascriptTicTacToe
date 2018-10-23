// var piece = "O";

// function reset() {
//     var input = document.querySelectorAll("input");
//     for (var i in input) {
//         input[i].value = "";
//     }
// }
// var button = document.querySelector("button");
// button.addEventListener("click", reset);

// function pieceOnBoard(x, piece) {
//     var b1 = document.getElementById("1");
//     var b2 = document.getElementById("2");
//     var b3 = document.getElementById("3");
//     var b4 = document.getElementById("4");
//     var b5 = document.getElementById("5");
//     var b6 = document.getElementById("6");
//     var b7 = document.getElementById("7");
//     var b8 = document.getElementById("8");
//     var b9 = document.getElementById("9");
// }

// function play(button) {
//     if (piece == "Q") {
//         piece = "O";
//         pieceOnBoard(button, piece);
//     } else if (piece == "O") {
//         piece = "Q";
//         pieceOnBoard(button, piece);
//     }
// }
LETTER = "X";

function addLetter(event) {
    var td = $(event.target).closest("td");
    $(td).html(LETTER);
    LETTER = LETTER === "X" ? "O" : "X"; //ternary operator
    sq1 = $("#1").html();
    sq2 = $("#2").html();
    sq3 = $("#3").html();
    sq4 = $("#4").html();
    sq5 = $("#5").html();
    sq6 = $("#6").html();
    sq7 = $("#7").html();
    sq8 = $("#8").html();
    sq9 = $("#9").html();

    if (
        (sq1 === "X" && sq2 === "X" && sq3 === "X") ||
        (sq4 === "X" && sq5 === "X" && sq6 === "X") ||
        (sq7 === "X" && sq8 === "X" && sq9 === "X") ||
        (sq1 === "X" && sq5 === "X" && sq9 === "X") ||
        (sq1 === "X" && sq4 === "X" && sq7 === "X") ||
        (sq2 === "X" && sq5 === "X" && sq8 === "X") ||
        (sq3 === "X" && sq6 === "X" && sq9 === "X") ||
        (sq3 === "X" && sq5 === "X" && sq7 === "X")
    ) {
        alert("Player 1 WINS!!!!");
        reset();
    } else if (
        (sq1 === "O" && sq2 === "O" && sq3 === "O") ||
        (sq4 === "O" && sq5 === "O" && sq6 === "O") ||
        (sq7 === "O" && sq8 === "O" && sq9 === "O") ||
        (sq1 === "O" && sq5 === "O" && sq9 === "O") ||
        (sq1 === "O" && sq4 === "O" && sq7 === "O") ||
        (sq2 === "O" && sq5 === "O" && sq8 === "O") ||
        (sq3 === "O" && sq6 === "O" && sq9 === "O") ||
        (sq3 === "O" && sq5 === "O" && sq7 === "O")
    ) {
        alert("Player 2 WINS!!!!");
        reset();
    }
}
function reset() {
    $("td").each(function() {
        $(this).html(
            "<button class='td-button piece'>HAPPY</br >HALLOWEEN</button>"
        );
    });

    $(".td-button").each(function() {
        $(this).on("click", addLetter);
    });

    $("#reset").on("click", reset);
}

$(reset);
