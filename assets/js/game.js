// window.alert("This is an alert! JavaScript is running!");
// This creates a function named "fight"

// function fight() {
//     window.alert("The fight has begun! ");
// }
// fight();

var playerName = window.prompt("What is your robot's name?");
var playerHealth=100;
var playerAttack=10;

var enemyName ="Roborto";
var enemyHealth=50;
var enemyAttack=12;

var fight = function() {
    window.alert("Welcome to Robot Gladiators!");
    enemyHealth -= playerAttack;
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
      );
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
      } 
      else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
      }
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
      } 
    else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
      }
    playerHealth -= enemyAttack;
    console.log(playerHealth);
};

fight();

if (playerHealth > 0) {
    console.log("Your player is still alive!");
  }
