import throttle from 'lodash.throttle';
import Player from '@vimeo/player';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
player.on('timeupdate', throttle(timeStop, 1000));
function timeStop(event) {
  localStorage.setItem('videoplayer-current-time', event.seconds);
}
const currentTime = localStorage.getItem('videoplayer-current-time') || '0';
//
player.setCurrentTime(currentTime);
