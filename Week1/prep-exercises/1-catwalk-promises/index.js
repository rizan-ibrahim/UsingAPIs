'use strict';

const STEP_SIZE_PX = 10;
const STEP_INTERVAL_MS = 50;
const DANCE_TIME_MS = 5000;
const DANCING_CAT_URL =
  'https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif';

function walk(img, startPos, stopPos) {
  return new Promise((resolve) => {
    let currentPos =startPos
    img.style.left=`${currentPos}`;
    const interval = setInterval(()=>{
      currentPos+= STEP_SIZE_PX;
      
       if(currentPos>=stopPos){
      resolve ();
    }
       img.style.left = `${currentPosition}px`;
      
      
    };STEP_INTERVAL_MS);

  });
   
    
 
  
}

function dance(img) {
  return new Promise((resolve) => {
    const originaSrc=img.src;
    img.src= DANCING_CAT_URL;

    setTimeout(()=>{
      img.src=originalSrc;
      resolve();
      
    };DANCE_TIME_MS)
   
  });
}

function catWalk() {
  const img = document.querySelector('img');
  const startPos = -img.width;
  const centerPos = (window.innerWidth - img.width) / 2;
  const stopPos = window.innerWidth;

  img.style.position = 'absolute';
  img.style.left = `${startPos}px`;


  function performRoutine() {
    walk(img, startPos, centerPos)
      .then(() => dance(img))
      .then(() => walk(img, centerPos, stopPos))
      .then(() => performRoutine());
  }

  performRoutine();
  
}

window.addEventListener('load', catWalk);
