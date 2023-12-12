function scuberGreetingForFeet(){
  // Write your code here!
}function scuberGreetingForFeet(distanceInFeet) {
  // Free sample for rides less than or equal to 400 feet
  if (distanceInFeet <= 400) {
    return 'This one is on me!';
  } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
    // No thank you for rides between 2000 and 2500 feet
    return 'I will gladly take your thirty bucks.';
  } else if (distanceInFeet > 2500) {
    // No rides over 2500 feet
    return 'No can do.';
  } else {
    // For other distances, no special message
    return 'Thank you.';
  }
}
function ternaryCheckCity(city){
  // Write your code here!
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(tip){
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  } 
}