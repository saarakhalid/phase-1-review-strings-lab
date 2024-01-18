// Write your code in this file!

// Define currentUser
const currentUser = 'Saara Khalid';

// Define welcomeMessage using string concatenation
const welcomeMessage = 'Welcome to Flatbook, ' + currentUser + '!';

// Convert welcomeMessage to uppercase and add an exclamation point
const excitedWelcomeMessage = welcomeMessage.toUpperCase() + '!';

// Define shortGreeting using template literals and slicing the first initial
const shortGreeting = `Welcome, ${currentUser.slice(0, 1)}!`;

// Output the results
console.log('currentUser:', currentUser);
console.log('welcomeMessage:', welcomeMessage);
console.log('excitedWelcomeMessage:', excitedWelcomeMessage);
console.log('shortGreeting:', shortGreeting);
