var plaatjes1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var teller1 = 0;
var slideholder1 = document.getElementById("slideholder1");
slideholder1.style.background = "url('img/aap1.jpg')";

slideholder1.addEventListener("click", function () {
    slideholder1.style.background = "url('img/aap" + getAap() + ".jpg')";
});

function getAap() {
    if (teller1 >= plaatjes1.length) {
        teller1 = 1;
    }
    else {
        teller1++;
    }
    console.log(teller1);
    return teller1;


}

var plaatjes2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var teller2 = 0;
var slideholder2 = document.getElementById("slideholder2");
slideholder2.style.background = "url('img/aap1.jpg')";

slideholder2.addEventListener("click", function () {
    slideholder2.style.background = "url('img/aap" + getAap() + ".jpg')";
});

function getAap() {
    if (teller2 >= plaatjes2.length) {
        teller2 = 1;
    }
    else {
        teller2++;
    }
    console.log(teller2);
    return teller2;


}

var plaatjes3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var teller3 = 0;
var slideholder3 = document.getElementById("slideholder3");
slideholder3.style.background = "url('img/aap1.jpg')";

slideholder3.addEventListener("click", function () {
    slideholder3.style.background = "url('img/aap" + getAap() + ".jpg')";
});

function getAap() {
    if (teller3 >= plaatjes3.length) {
        teller3 = 1;
    }
    else {
        teller3++;
    }
    console.log(teller3);
    return teller3;


}

