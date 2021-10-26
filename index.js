window.onload = () => {
    document.onwheel = customScrollFunction;

    function customScrollFunction(event){

        let deltaY = event.deltaY;
        let deltaYSign = Math.sign(deltaY);

        if(deltaYSign==-1){
            document.getElementById("scroll-container").scrollBy({
                top: 0,
                left: -169,
                behavior: 'auto'
            });

        }else{ 
            document.getElementById("scroll-container").scrollBy({
                top: 0,
                left: 169,
                behavior: 'auto'
            });
        }
    }

}

var count = 1;
var numOfSlides = 4;

function validateButtons() {
    if (count === 1) {
        document.getElementById("button-down").disabled = true;
    } else if (count === numOfSlides) {
        document.getElementById("button-up").disabled = true;
    }
}

function counterUp() {
    if (count === numOfSlides) {
        return count;
    } else {
        count++;
    }
    return count;
}

function counterDown() {
    if (count === 1) {
        return count;
    } else {
        count--;
    }
    return count;
}

function slideUp() {
    slide = counterUp()
    document.getElementById("button-up").href = "#" + slide;
    // document.getElementById("navigation-count").innerText = slideCount;
    var countToString = '' + count;
    var slideCounter = countToString + " / " + numOfSlides;
    var slideCount = slideCounter;
    document.getElementById("navigation-count").innerHTML = slideCount;
}

function slideDown() {
    slide = counterDown();
    document.getElementById("button-down").href = "#" + slide;
    var countToString = '' + count;
    var slideCounter = countToString + " / " + numOfSlides;
    var slideCount = slideCounter;
    document.getElementById("navigation-count").innerHTML = slideCount;
}
  
function openHelp() {
    document.getElementById("instructions").style.height = "25vh";
}

function closeHelp() {
    document.getElementById("instructions").style.height = "0%";
}