var mainContent;

window.onload = function() {
    main1 = document.getElementById("main_contnet");
    list1 = document.getElementById("total_list");
}

    
function showClock()
    {
        var currentDate=new Date();
        var divClock=document.getElementById("time");
        var apm=currentDate.getHours();
        if(apm<12)
        {
            apm="AM ";
        }
        else
        {
            apm="PM ";
        }
        
        var msg = apm +(
        currentDate.getHours()-12)+" : ";
        msg += currentDate.getMinutes() + " : ";
        msg += currentDate.getSeconds();
        
        divClock.innerText=msg;
        
        setTimeout(showClock,1000);
    }
    
