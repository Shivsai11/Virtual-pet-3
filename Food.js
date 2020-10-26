class Food{
   constructor(){
     this.image = loadImage("Milk.png");
   }
   display(){
       var x = 80, y = 100;
       imageMode(CENTER);
       //image(this.image, 720, 220, 50, 50)
       if(food!==0){
           for(var i=0;i<food;i++){
               if(i%10==0){
                   x = 80;
                   y = y + 50;
               }
               image(this.image, x, y, 50, 50);
               x = x + 30;
           }
       }
   }
   bedroom(){
       background(bedroomimg, 550, 500);
   }
   garden(){
       background(gardenimg, 550, 500);
   }
   washroom(){
       background(washroomimg, 550, 500);
   }
}