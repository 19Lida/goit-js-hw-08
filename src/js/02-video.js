import throttle from 'lodash.throttle';
import Player from '@vimeo/player';
const iframe = document.querySelector('iframe');
    const player = new Player(iframe);
    player.on('timeupdate', throttle(timeStop,1000));
    function timeStop (event) {
        // let pause = timeupdate.seconds;
        // console.log(pause);
        localStorage.setItem("videoplayer-current-time" , event.seconds);

    }
    // function afterUpdate(event) {
        const currentTime = localStorage.getItem("videoplayer-current-time");
    //     player.setCurrentTime(currentTime).then(function(pause){

    //     }).catch(function(error) {
    //         switch (error.name) {
    //             case 'RangeError':
    //                 // the time was less than 0 or greater than the video’s duration
    //                 break;
        
    //             default:
    //                 // some other error occurred
    //                 break;
    //         }
        
    // });
player.setCurrentTime(currentTime);