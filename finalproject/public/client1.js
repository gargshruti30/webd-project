
let btn1=$('.btn1');
let btn2=$('.btn2');
let btn3=$('.btn3');
let btn4=$('.btn4');

btn1.on('click',function(){

    $('.con').css('display', 'none');
    $('.displayy').css('display', 'block');


    $('#sub').on('click',function ()
    {
let value=$('#inp').val();
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200)
            {
                let x=JSON.parse(this.responseText);

                document.getElementById("result").innerHTML =`${x}`;

            }
        };
        xhttp.open("GET", `https://www.googleapis.com/books/v1/volumes?q=harrypotter`, true);
        xhttp.send();
    })
});
btn2.on('click',function() {

    $('.con').css('display', 'none');
    $('.displayy').css('display', 'block');

});
btn3.on('click',function() {

    $('.con').css('display', 'none');
    $('.displayy').css('display', 'block');

});
btn4.on('click',function() {

    $('.con').css('display', 'none');
    $('.displayy').css('display', 'block');

});
