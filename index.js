var mainContent;

window.onload = function() {
    main1 = document.getElementById("main_contnet");
    list1 = document.getElementById("total_list");
}

    
function showClock()
    {
        var Clock = document.getElementById("time");
        var currentDate = new Date();
        var ampm = 'AM';
        var currentHours = timeDisplay(currentDate.getHours(),2);
        var currentMinute = timeDisplay(currentDate.getMinutes(),2);
        var currentSeconds = timeDisplay(currentDate.getSeconds(),2);

        if(currentHours >=  12) {
            ampm = 'PM';
            currentHours = timeDisplay(currentHours-12,2);
        }

        function timeDisplay(num, digit) {
            var zero = '';
            num = num.toString();
            if(num.length < digit) {
                for(i = 0; i < digit-num.length; i++) {
                    zero += '0';
                }
            }
            return zero + num;
        }

        Clock.innerHTML = ampm+" "+currentHours+" : "+currentMinute+" : "+currentSeconds;
        
        setTimeout(showClock,1000);
    }
    
