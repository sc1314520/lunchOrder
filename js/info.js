var info =document.getElementById("info-text");
var ru = document.querySelector(".ru");
var sl=0;

    // 公告欄
    var apiUri='https://script.google.com/macros/s/AKfycbw8qnHJhv5NUskphBWq3ONcAysku_DvxwFgSZPKbLzdxf2dlrfSK9qwYZRPVjwwWkmq/exec'
    sendData();

    function sendData() {
        console.log("send");
        const config = {
            method: 'GET',
            redirect: 'follow'
          };
    
          fetch(this.apiUri, config)
            .then(response => response.text())
            .then(result => {
              var s =JSON.parse(result)["info"][0][0];
              info.innerText=s;
              sl=s.length;
              var i=0;
              var size = parseInt(window.getComputedStyle(info,null).getPropertyValue("font").split("/")[0]);
              var width = parseInt(window.getComputedStyle(ru,null).getPropertyValue("width"));
              var speed = size%2 == 0 ? 2:1;
              var time = speed==2 ? 30:60;
              setInterval(function(){
                i-=speed;
                info.style.left=i+"px";
                console.log(i);
                if(i<=(-sl*size)){
                  i=width+16;
                }
              }, time);
            })
            .catch(error => console.log('error', error));
    }
    
    