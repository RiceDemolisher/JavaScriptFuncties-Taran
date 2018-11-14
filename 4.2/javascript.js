var plaatjes = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var teller = 0;
var slideholder1 = document.getElementById("slideholder1");
slideholder1.style.background = "url('img/aap1.jpg')";

slideholder1.addEventListener("click", function () {
    slideholder1.style.background = "url('img/aap" + getAap() + ".jpg')";
});

function getAap() {
    if (teller >= plaatjes.length) {
        teller = 1;
    }
    else {
        teller++;
    }
    console.log(teller);
    return teller;


}