document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Fragen auswerten
    var question1Value = parseInt(document.getElementById('question1').value);
    var question2Value = parseInt(document.getElementById('question2').value);
    var question3Value = parseInt(document.getElementById('question3').value);
    var question4Value = parseInt(document.getElementById('question4').value);
    var question5Value = parseInt(document.getElementById('question5').value);

    // Gesamtergebnis berechnen
    var totalScore = question1Value + question2Value + question3Value + question4Value + question5Value;

    // Ergebnis anzeigen
    var resultContainer = document.getElementById('resultContainer');
    if (totalScore >= 20 && totalScore <= 25) {
        resultContainer.textContent = "Du verbringst sehr viel Zeit am Handy, probiere doch einmal etwas Neues aus!";
    } else if (totalScore >= 15 && totalScore <= 19) {
        resultContainer.textContent = "Du verbringst viel Zeit am Handy, eventuell kannst du es bei manchen Aktivitäten einmal weglegen.";
    } else if (totalScore >= 10 && totalScore <= 14) {
        resultContainer.textContent = "Du hast eine gute Balance zwischen online und offline Aktivitäten gefunden.";
    } else if (totalScore >= 0 && totalScore <= 9) {
        resultContainer.textContent = "Du kommst auch gut ohne Handy zurecht.";
    } else {
        resultContainer.textContent = "Es gab ein Problem bei der Auswertung des Quiz. Bitte versuche es erneut.";
    }
});