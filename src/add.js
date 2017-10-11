//You have an array of numbers 1 through n (where 1 <= n <= 10). The array needs to be formatted correctly for the person reading the countdown of a spaceship launch.

//Unfortunately, the person reading the countdown only knows how to read strings. After the array is sorted correctly make sure it's in a format he can understand.

//Between each number should be a space and after the final number (n) should be the word 'liftoff!'

function liftoff(instructions){
    return instructions.sort((a, b) => b - a).join(' ') + ' liftoff!';
  }



  //Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word.
  
  //Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.



  String.prototype.toJadenCase = function () {
    //Try to split out into an array
    var arr = this.split(' ')
    
    //Loop through it and cap the first letter
    var result = arr.map(item => {
        return item.charAt(0).toUpperCase() + item.slice(1)
    
    
    })
    
    return result.join(' ')
    
    
  };