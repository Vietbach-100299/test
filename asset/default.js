var btn= document.getElementById("button")
btn.addEventListener('click',onclick);
function onclick(){
    var question1=document.getElementById("question1");
    var answer1=question1.options[question1.selectedIndex].text;
    var question2=document.getElementById("question2");
    var answer2=question2.options[question2.selectedIndex].text;
    var question3=document.getElementById("question3");
    var answer3=question3.options[question3.selectedIndex].text;

    var a1="I can't talk to animals";
    var a2="I can talk to some animals";
    var a3="Talking to animals is simple";

    var b1="I eat acid";
    var b2="I don't eat anything";
    var b3="I eat meat, fish, vegetables";

    var c1="I like this movie";
    var c2="I haven't seen this movie yet";
    var c3="I feel funny";

    if(answer1==a1  && answer2==b3 && answer3==c2){
        var img=document.getElementById("img");
        var title=document.getElementById("title-answer");
        var text=document.getElementById("text-answer");
        title.textContent+="You are human"
        text.textContent+="you look like human"
        img.src="./asset/image/human.jpg"
    } else if (answer1==a2  && answer2==b1 && answer3==c3) {
        var img=document.getElementById("img");
        var title=document.getElementById("title-answer");
        var text=document.getElementById("text-answer");
        title.textContent+="You are alien"
        text.textContent+="you look like alien"
        img.src="./asset/image/alien.jpg"
    }

}
