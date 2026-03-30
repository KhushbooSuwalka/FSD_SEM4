$(document).ready(() => {
    // Event listener for double-click on heading
    $("h1").dblclick(function () {
        $(this).hide();
    });
    // Event listener for mouse hover on paragraph
    $("#p1").hover(function () {
        alert("You entered paragraph!");
    }, function () {
        alert("Bye! You now leave paragraph!");
    });
    // Event listener for button click
    $("#loadBtn").click(() => {
        // Fetch JSON data using jQuery's getJSON method
        $.getJSON("data.json", (students) => {
            $("#result").html("");
            // Loop through JSON using ES6 forEach
            students.forEach(student => {
                $("#result").append(`
                    <p>
                        <b>ID:</b> ${student.id}<br>
                        <b>Name:</b> ${student.name}<br>
                        <b>Course:</b> ${student.course}
                    </p>
                    <hr>
                `);
            });
        });
    });
});
