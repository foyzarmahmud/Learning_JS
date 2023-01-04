const photos = ["img/1.jpg", "img/2.jpg", "img/3.jpg", "img/fayzar1.jpg", "img/fayzar2.png"];
let imgTag = document.querySelector("img");
let count = 0 ;

function next(){
    count++;
      if(count >= photos.length)
      {
        count = 0;
        imgTag.src = photos[count];
      }

    else{
      imgTag.src = photos[count];
    }
};

function prev(){
  count--;
  if(count < 0){
    count = photos.length - 1;
    imgTag.src = photos[count];
  }
  else{
    imgTag.src = photos[count];
  }
}