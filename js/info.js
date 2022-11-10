var info =document.getElementById("info-text");
console.log(info);
    //使用這個表單
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
              console.log(result);
              var s =JSON.parse(result)["info"][0][0];
              console.log(s);
              info.innerText=s;
            })
            .catch(error => console.log('error', error));
    }