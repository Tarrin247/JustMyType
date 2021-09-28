$(document).ready(() => {

    let upperCase = $('#keyboard-upper-container');
    let lowerCase = $('#keyboard-lower-container');
    let sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
    let sentenceIndex = 0 // Which sentence are they on?
    let currentLetter = 0 // 
    let highlighterPosition = 15; // number of pixels from the left for yellow block
    let yellowBox = $('#yellow-block');

    // Append sentence to div element
    $("#sentence").text(sentences[sentenceIndex]);



    //For keyboard toggling: When shift-key is pressed down: hide lowerCase/show upperCase
    $(document).on('keydown', function (event) {
        //console.log(event.keyCode);
        if (event.key == "Shift") {
            lowerCase.hide() && upperCase.show();
        }
    });

    //For keyboard toggling: When shift-key is released: show lowerCase/Hide upperCase
    $(document).on('keyup', function (event) {
        if (event.key == "Shift") {
            lowerCase.show() && upperCase.hide();
        }
    });

    // To highlight key that is pressed
    $(document).on('keydown', function (event) {
        const characterCode = event.key.charCodeAt(0)
        $('#' + characterCode).css("background", "yellow");

        
        
        currentLetter++
        //Display sentence. At the end add 1 and show next. 
        if (sentences[sentenceIndex].length == currentLetter) {
            sentenceIndex++;
            $("#sentence").text(sentences[sentenceIndex]);
            currentLetter = 0;
            $('#yellow-box').css("position", "initial");
            

        };

        // Highlight next anticipated letter in the sentence 
        highlighterPosition += 15;
        $('#yellow-block').css("left", highlighterPosition + "px");

        // Display current expected letter in the center of target-letter div
        // Add 1 to index of sentenceIndex[index]? and then append to $("#target-letter") div 
    });

    // Remove highlight when moving to next key
    $(document).on('keyup', function (event) {
        const characterCode = event.key.charCodeAt(0)
        $('#' + characterCode).css("background", "");
    });





    // Log +/- per character by insert glyphicon in $('#feedback") @ end clear out glyphicons 



    // Calculate user's words per minute set equal to score, set a delay, then alert asking if they want to play again 



});