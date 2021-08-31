
let pictures_json = 
'[{"title":"Audi", "date":"20.10.2021","src": "<img src=kuva/audi.jpg />"},' +
'{"title":"Volvo", "date" : "23.07.2021","src": "<img src=kuva/volvo.jpg />"},' +
'{ "title" : "Peugeot","date" : "20.07.2021","src": "<img src=kuva/peugeot.jpg />" }]';

let pictures_array;
let index;
let intervalId;


$(function()
{
    init();
});

$("#nextBtn").click(getNextCar);
$("#prevBtn").click(getPrevCar);
$("#pauseBtn").click(pausePictures);
function init()  
{
    pictures_array = JSON.parse(pictures_json);
    index = 0;

    intervalId = window.setInterval(getNextCar, 2000);
    isStarted = true;
}
function getNextCar(){
    index++;
    if (index > 2){
        index = 0;
    }


    $("#titleDiv").html(pictures_array[index].title);
    $("#dateDiv").html(pictures_array[index].date);
    $("#carDiv").html(pictures_array[index].src);
    $("#carDiv").fadeIn(pictures_array[index].src, 0.5);
}
function getPrevCar(){
    index--;


    $("#titleDiv").html(pictures_array[index].title);
    $("#dateDiv").html(pictures_array[index].date);
    $("#carDiv").html(pictures_array[index].src);
}
function pausePictures(){
    if (isStarted) {
        window.clearInterval(intervalId);
        isStarted = false;
    }
    else
    {
    intervalId = window.setInterval(getNextCar, 2000);
    isStarted = true;
    }

}

  