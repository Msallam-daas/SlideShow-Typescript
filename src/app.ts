let myImage=document.querySelector("#slideshow") as HTMLImageElement;
let images:string[] =['images/1.jpg','images/2.png','images/3.jpg'];
let i:number=0;
const slideShow=():void =>{
    myImage.setAttribute('src',images[i])
    if(i==images.length - 1){
        i=0;
    }else{
        i++;
    }
    setTimeout(():void=>{
        slideShow();
    },2000)

}
slideShow();