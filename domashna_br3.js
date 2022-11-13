var kopce = document.getElementById("start");
kopce.addEventListener("click", Race, false);

 async function Race() {
    var counter = 0;
    var rabbit = 1;
    var turtle = 1;

    var i = Math.floor(Math.random() * 10) + 1;
    var image1 = "<p>";
    var image2 = "<p>";

    while (rabbit < 70 && turtle < 70) {
         await setTime();
        var n1 = rabbit;
        var n2 = turtle;
        if (i < 10 && i >= 9) {
            turtle = turtle + 3;
            rabbit = rabbit;
        }
        if (i < 9 && i >= 7) {
            turtle = turtle + 3;
            rabbit = rabbit + 9;
        }
        if (i == 6) {
            turtle = turtle + 3;
            rabbit = rabbit - 12;
        }
        if (i < 6 && i >= 4) {
            turtle = turtle - 6;
            rabbit = rabbit + 1;
        } 
        if (i == 3) {
            turtle = turtle + 1;
            rabbit = rabbit + 1;
        }
        if (i < 2  && i >= 1) {
            turtle = turtle + 1;
            rabbit = rabbit - 2;
        }
        if (rabbit < 1) {
             rabbit = 1; 
            }
        if (turtle < 1) { 
            turtle = 1;
         }
        if (rabbit >= 70) {
             rabbit = 70; 
            } 
        if (turtle >= 70) { 
            turtle = 70;
         }
         counter++;

        for (var i = 1; i <= 70; i++) {
            if (i == rabbit) {
                image1 += "<img src=\"rabbit.png\"class=\"slika\">";
            }else {
                    image1 += "<i class= \"glyphicon glyphicon-stop\"></i>" + "  ";
			}
            if (i == turtle) {
                image2 += "<img src=\"turtle.png\"class=\"slika\">";
            } else {
                    image2 += "<i class= \"glyphicon glyphicon-stop\"></i>" + "  ";
                }
            }

        image1 += "</p>";
        image2 += "</p>";
        document.getElementById("zajak").innerHTML = image1;
        document.getElementById("zelka").innerHTML = image2;

        if (rabbit == turtle) {
            window.alert("OUCH!!!"); buttons: false; 
        }
        i = Math.floor(Math.random() * 10) + 1;
        image1 = "<p>";
        image2 = "<p>";

    }

    if (rabbit == 70) { 
    setTimeout(function(){ window.alert("THE RABBIT WON!!!\n" + "TIME:"+ " " + counter +" " + "seconds"); }, 100); 
    setTimeout(()=> window.close,1000);
}
    if (turtle == 70) {
    setTimeout(function(){ window.alert("THE TURTLE WON!!!\n"+"TIME:"+" " + counter +" " + "seconds"); }, 100);
    setTimeout(()=> window.close,1000);
}
}

function setTime() {
    return new Promise(resolve => setTimeout(resolve, 1000));
}