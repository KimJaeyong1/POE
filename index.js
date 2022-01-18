var mainContent;

window.onload = function() {
    main1 = document.getElementById("main_contnet");
    list1 = document.getElementById("total_list");
}

    
function showClock()
    {
        var currentDate=new Date();
        var Clock=document.getElementById("time");
        var ampm=currentDate.getHours();
        if(ampm<12)
        {
            ampm="AM ";
        }
        else
        {
            ampm="PM ";
        }
        
        var whatTime = ampm+currentDate.getHours()+" : ";
        whatTime += currentDate.getMinutes() + " : ";
        whatTime += currentDate.getSeconds();
        
        Clock.innerText=whatTime;
        
        setTimeout(showClock,1000);
    }
    
