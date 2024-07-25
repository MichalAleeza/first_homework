function fahrenheitToCelsius(fahrenheit) { 
    return (fahrenheit - 32) * 5 / 9; 
} 
  
let fahrenheit = 100; 
  
let celsius = fahrenheitToCelsius(fahrenheit); 
console.log(`${fahrenheit}°F is ${celsius}°C`);


function celsius2ToFarenheight(celsius2) { 
    return (celsius2 * 5 / 9) + 32; 
} 
  
let celsius2 = 100; 
  
let fahrenheight = celsius2ToFahrenheight(celsius2); 
console.log(`${celsius2}°C is ${fahrenheight}°F`);