function watch()
    {
        d=new Date();
        hr=d.getHours();
        min=d.getMinutes();
        sec=d.getSeconds();
        
        if(hr>12){
            hr-=12;
            tm="pm";
        }
        else{
            tm="am";
        }
        document.getElementById("clock").innerHTML=hr;
        
    }
    function start(){
        interval=setInterval(watch,1000);
        console.log("hii");
    }
           
       