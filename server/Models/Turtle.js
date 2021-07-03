class Turtle {
    constructor(
         label,
         watIsPurpose,
         xPOS,
         yPOS,
         zPOS,
         fuelLvl,
         jobScript
     ) 
     {
         this.label = label;
         this.watIsPurpose = watIsPurpose;
         this.xPOS = xPOS;
         this.yPOS = yPOS;
         this.zPOS = zPOS;
         this.fuelLvl = fuelLvl;
         this.jobScript = jobScript;
     }
 }

 module.exports = Turtle;