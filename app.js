

function clock(){

        let date = new Date()
        let second = date.getSeconds() //0-59
        let minute = date.getMinutes() //0-59
        let hour = date.getHours() //0-23
        let timeFormat = 'AM'

        if(hour===0){
            hour=12
        }
        if(hour>12){
            hour = hour-12
            timeFormat='PM'
        }
        if(hour<10){
            hour = '0'+hour;
        }
        if(minute<10){
            minute = '0'+minute;
        }
        if(second<10){
            second = '0'+second;
        }

        let finalTime=`${hour}: ${minute}: ${second} ${timeFormat}`
        let time = document.querySelector('.time')
        time.innerHTML=finalTime;
        setInterval(clock,1000)

}
clock();
