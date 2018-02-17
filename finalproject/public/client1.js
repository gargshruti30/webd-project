
let btn1=$('.btn1');
let btn2=$('.btn2');
let btn3=$('.btn3');
let btn4=$('.btn4');

btn1.on('click',function(){

    $('.con').css('display', 'none');
    $('.displayy').css('display', 'block');


    $('#sub').on('click',function ()
    {
<<<<<<< HEAD
        let value=$('#inp').val();
=======
let value=$('#inp').val();
>>>>>>> eae699ec536f858a16bcde0700de024e683502e5
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200)
            {
<<<<<<< HEAD

                let x=this.responseText;
                x=JSON.parse(x);
                document.getElementById("result").innerHTML=" ";
                for (var i = 0; i < x.items.length; i++) {

                    var item = x.items[i];

                    document.getElementById("result").innerHTML +=`<br><li id="i" onclick="call(this)"><a href="http://localhost:5000">${item.volumeInfo.title}</a></li>`;
                }
            }
        };
        xhttp.open("GET", `https://www.googleapis.com/books/v1/volumes?q=${value}`, true);
=======
                let x=JSON.parse(this.responseText);

                document.getElementById("result").innerHTML =`${x}`;

            }
        };
        xhttp.open("GET", `https://www.googleapis.com/books/v1/volumes?q=harrypotter`, true);
>>>>>>> eae699ec536f858a16bcde0700de024e683502e5
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
function call(e){
    $.ajax({
        'url':`http://localhost:5000?val=${e.innerHTML}`,
        'type':'GET',
        'success':function(data){
        }
    })
}

