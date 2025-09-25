public class Lasagna {
    // TODO: define the 'expectedMinutesInOven()' method

    public static int expectedMinutesInOven() {
        return 40;
    }
    // TODO: define the 'remainingMinutesInOven()' method
    public static int remainingMinutesInOven(int actualMinutes) {
        return expectedMinutesInOven() - actualMinutes;
    }
    // TODO: define the 'preparationTimeInMinutes()' method

   public static int preparationTimeInMinutes(int layers){
       int totalTime = (layers * 2);
       return totalTime;
   }
    
    // TODO: define the 'totalTimeInMinutes()' method

    public static int totalTimeInMinutes(int layers, int minutesInOven){

        int totalPreparation = preparationTimeInMinutes(layers);
        int totalSum = totalPreparation + minutesInOven;

        return totalSum;
        
        
        
    }
}
