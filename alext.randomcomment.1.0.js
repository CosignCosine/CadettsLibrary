/** Created by AlexT. Perfected and cleaned by Blaze, CT-2/002-24. */
var randomComment = function() {
    var first = floor(random(0, 15));
    var second = floor(random(0, 9));
    var third = floor(random(0, 3));
    var fourth = floor(random(0, 2));
    var fifth = floor(random(0, 2));

    var firstSeg = "";
    var secondSeg = "";
    var thirdSeg = "";
    var fourthSeg = "";
    var fifthSeg = "";

    if (first <= 6) {
        firstSeg = "I";
    }
    if (first > 6 && first < 9) {
        firstSeg = "";
    }
    if (first >= 9 && first <= 10) {
        firstSeg = "You";
    }
    if (first > 10 && first < 14) {
        firstSeg = "Why";
    }
    if (first === 14) {
        firstSeg = "Could";
    }
    if (firstSeg === "Why") {
        if (second === 0) {
            secondSeg = "did you";
        }
        if (second === 1) {
            secondSeg = "would you";
        }
        if (second === 2) {
            secondSeg = "is this so popular?";
        }
        if (second === 3) {
            secondSeg = "did you not add the win screen?";
        }
        if (second === 4) {
            secondSeg = "is this wierd?";
        }
        if (second === 5) {
            secondSeg = "do you ask that?";
        }
        if (second === 6) {
            secondSeg = "are you two friends?";
        }
        if (second === 7) {
            secondSeg = "would you not make one?";
        }
        if (second === 8) {
            secondSeg = "is Brian Duckworth gone?";
        }
        if (secondSeg === "did you" && third === 0) {
            thirdSeg = "delete this?";
        }
        if (secondSeg === "did you" && third === 1) {
            thirdSeg = "listen to him?";
        }
        if (secondSeg === "did you" && third === 2) {
            thirdSeg = "make this?";
        }
        if (secondSeg === "would you" && third === 0) {
            thirdSeg = "delete this?";
        }
        if (secondSeg === "would you" && third === 1) {
            thirdSeg = "listen to him?";
        }
        if (secondSeg === "would you" && third === 2) {
            thirdSeg = "make this?";
        }
    }
    if (firstSeg === "Could") {
        if (second === 0) {
            secondSeg = "I use this code?";
        }
        if (second === 1) {
            secondSeg = "I help you finish it?";
        }
        if (second === 2) {
            secondSeg = "I use this program in my blog?";
        }
        if (second === 3) {
            secondSeg = "we team up?";
        }
        if (second === 4) {
            secondSeg = "you stop making these?";
        }
        if (second === 5) {
            secondSeg = "he and I help you?";
        }
        if (second === 6) {
            secondSeg = "I flag this for soliciting votes?";
        }
        if (second === 7) {
            secondSeg = "you make another?";
        }
        if (second === 8) {
            secondSeg = "you give me the code for the menu?";
        }
    }
    if (firstSeg === "You") {
        if (second === 0) {
            secondSeg = "are good";
        }
        if (second === 1) {
            secondSeg = "are one of the best programmers!";
        }
        if (second === 2) {
            secondSeg = "should improve upon this design...";
        }
        if (second === 3) {
            secondSeg = "need to add stuff.";
        }
        if (second === 4) {
            secondSeg = "should make a second one.";
        }
        if (second === 5) {
            secondSeg = "are very organized with your code!";
        }
        if (second === 6) {
            secondSeg = "should be a web designer!";
        }
        if (second === 7) {
            secondSeg = "need to change it.";
        }
        if (second === 8) {
            secondSeg = "are pretty good at this stuff.";
        }
    }
    if (firstSeg === "") {
        if (second === 0) {
            secondSeg = "Cool!";
        }
        if (second === 1) {
            secondSeg = "Awesome!";
        }
        if (second === 2) {
            secondSeg = "Horrible!";
        }
        if (second === 3) {
            secondSeg = "Okay.";
        }
        if (second === 4) {
            secondSeg = "Pretty neat!";
        }
        if (second === 5) {
            secondSeg = "Interesting...";
        }
        if (second === 6) {
            secondSeg = "Good use of code!";
        }
        if (second === 7) {
            secondSeg = "Bad!";
        }
        if (second === 8) {
            secondSeg = "It could be better...";
        }
    }
    if (firstSeg === "I") {
        if (second === 0) {
            secondSeg = "am";
        }
        if (second === 1) {
            secondSeg = "think";
        }
        if (second === 2) {
            secondSeg = "like";
        }
        if (second === 3) {
            secondSeg = "dislike";
        }
        if (second === 4) {
            secondSeg = "feel";
        }
        if (second === 5) {
            secondSeg = "want";
        }
        if (second === 6) {
            secondSeg = "voted";
        }
        if (second === 7) {
            secondSeg = "believe";
        }
        if (second === 8) {
            secondSeg = "suggest";
        }

        if (third === 0 && secondSeg === "am") {
            thirdSeg = "impressed";
        }
        if (third === 1 && secondSeg === "am") {
            thirdSeg = "happy";
        }
        if (third === 2 && secondSeg === "am") {
            thirdSeg = "interested";
        }
        if (third === 0 && secondSeg === "think") {
            thirdSeg = "that you are";
        }
        if (third === 1 && secondSeg === "think") {
            thirdSeg = "that this program";
        }
        if (third === 2 && secondSeg === "think") {
            thirdSeg = "that this is";
        }
        if (third === 0 && secondSeg === "like") {
            thirdSeg = "to look";
        }
        if (third === 1 && secondSeg === "like") {
            thirdSeg = "this program";
        }
        if (third === 2 && secondSeg === "like") {
            thirdSeg = "everything about";
        }
        if (third === 0 && secondSeg === "dislike") {
            thirdSeg = "to look";
        }
        if (third === 1 && secondSeg === "dislike") {
            thirdSeg = "this program";
        }
        if (third === 2 && secondSeg === "dislike") {
            thirdSeg = "everything about";
        }
        if (third === 0 && secondSeg === "feel") {
            thirdSeg = "proud";
        }
        if (third === 1 && secondSeg === "feel") {
            thirdSeg = "happy";
        }
        if (third === 2 && secondSeg === "feel") {
            thirdSeg = "like this is";
        }
        if (third === 0 && secondSeg === "want") {
            thirdSeg = "you to";
        }
        if (third === 1 && secondSeg === "want") {
            thirdSeg = "to improve";
        }
        if (third === 2 && secondSeg === "want") {
            thirdSeg = "this to";
        }
        if (third === 0 && secondSeg === "voted") {
            thirdSeg = "up this program";
        }
        if (third === 1 && secondSeg === "voted") {
            thirdSeg = "up this masterpiece";
        }
        if (third === 2 && secondSeg === "voted") {
            thirdSeg = "up this chat post";
        }
        if (third === 0 && secondSeg === "believe") {
            thirdSeg = "that this will";
        }
        if (third === 1 && secondSeg === "believe") {
            thirdSeg = "that you are";
        }
        if (third === 2 && secondSeg === "believe") {
            thirdSeg = "that this was";
        }
        if (third === 0 && secondSeg === "suggest") {
            thirdSeg = "adding";
        }
        if (third === 1 && secondSeg === "suggest") {
            thirdSeg = "removing";
        }
        if (third === 2 && secondSeg === "suggest") {
            thirdSeg = "changing";
        }

        if (fourth === 1 && thirdSeg === "impressed") {
            fourthSeg = " with this";
        }
        if (fourth === 0 && thirdSeg === "impressed") {
            fourthSeg = " with this";
        }
        if (fourth === 0 && thirdSeg === "interested") {
            fourthSeg = " in helping you";
        }
        if (fourth === 1 && thirdSeg === "interested") {
            fourthSeg = " in giving you advice";
        }
        if (fourth === 0 && thirdSeg === "that you are") {
            fourthSeg = " a really good programmer";
        }
        if (fourth === 1 && thirdSeg === "that you are") {
            fourthSeg = " really cool";
        }
        if (fourth === 0 && thirdSeg === "that this program") {
            fourthSeg = " is really cool";
        }
        if (fourth === 1 && thirdSeg === "that this program") {
            fourthSeg = " is horrible";
        }
        if (fourth === 0 && thirdSeg === "that this is") {
            fourthSeg = " really cool";
        }
        if (fourth === 1 && thirdSeg === "that this is") {
            fourthSeg = " horrible";
        }
        if (fourth === 0 && thirdSeg === "to look") {
            fourthSeg = " at these";
        }
        if (fourth === 1 && thirdSeg === "to look") {
            fourthSeg = " at your programs";
        }
        if (fourth === 0 && thirdSeg === "this program") {
            fourthSeg = " because it looks good";
        }
        if (fourth === 1 && thirdSeg === "this program") {
            fourthSeg = " because it is so complex";
        }
        if (fourth === 0 && thirdSeg === "everything about") {
            fourthSeg = " this program";
        }
        if (fourth === 1 && thirdSeg === "everything about") {
            fourthSeg = " this";
        }
        if (fourth === 0 && thirdSeg === "proud") {
            fourthSeg = " to know you";
        }
        if (fourth === 1 && thirdSeg === "proud") {
            fourthSeg = " that this is so good";
        }
        if (fourth === 0 && thirdSeg === "happy") {
            fourthSeg = " that you are a good programmer";
        }
        if (fourth === 1 && thirdSeg === "like this is") {
            fourthSeg = " really good";
        }
        if (fourth === 0 && thirdSeg === "like this is") {
            fourthSeg = " really amazing";
        }
        if (fourth === 1 && thirdSeg === "you to") {
            fourthSeg = " make a sequel";
        }
        if (fourth === 0 && thirdSeg === "you to") {
            fourthSeg = " add more features";
        }
        if (fourth === 1 && thirdSeg === "to improve") {
            fourthSeg = " upon this later";
        }
        if (fourth === 0 && thirdSeg === "to improve") {
            fourthSeg = " this by adding things";
        }
        if (fourth === 1 && thirdSeg === "this to") {
            fourthSeg = " have more votes";
        }
        if (fourth === 0 && thirdSeg === "this to") {
            fourthSeg = " be better";
        }
        if (fourth === 1 && thirdSeg === "up this program") {
            fourthSeg = " because it is cool";
        }
        if (fourth === 1 && thirdSeg === "up this masterpiece") {
            fourthSeg = " and play it a lot";
        }
        if (fourth === 1 && thirdSeg === "up this chat post") {
            fourthSeg = " so more people can see it";
        }
        if (fourth === 0 && thirdSeg === "that this will") {
            fourthSeg = " get hundreds of votes";
        }
        if (fourth === 1 && thirdSeg === "that this will") {
            fourthSeg = " get on the hot list";
        }
        if (fourth === 0 && thirdSeg === "that this was") {
            fourthSeg = " horrible";
        }
        if (fourth === 1 && thirdSeg === "that this was") {
            fourthSeg = " awesome";
        }
        if (fourth === 0 && thirdSeg === "adding") {
            fourthSeg = " more graphics";
        }
        if (fourth === 1 && thirdSeg === "adding") {
            fourthSeg = " better features";
        }
        if (fourth === 0 && thirdSeg === "removing") {
            fourthSeg = " all of the bad code";
        }
        if (fourth === 1 && thirdSeg === "removing") {
            fourthSeg = " the main menu";
        }
        if (fourth === 0 && thirdSeg === "changing") {
            fourthSeg = " everything";
        }
        if (fourth === 1 && thirdSeg === "changing") {
            fourthSeg = " the front message";
        }
        if (fifth === 0) {
            fifthSeg = "!";
        }
        if (fifth === 1) {
            fifthSeg = ".";
        }
    }
    return (firstSeg + " " + secondSeg + " " + thirdSeg + "" + fourthSeg + fifthSeg);
};
