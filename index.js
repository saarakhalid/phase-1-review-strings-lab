// Write your code in this file!

const currentUser = 'Saara Khalid';

const welcomeMessage = 'Welcome to Flatbook, ' + currentUser + '!';

const excitedWelcomeMessage = welcomeMessage.toUpperCase() + '!';

const shortGreeting = `Welcome, ${currentUser.slice(0, 1)}!`;

console.log('currentUser:', currentUser);
console.log('welcomeMessage:', welcomeMessage);
console.log('excitedWelcomeMessage:', excitedWelcomeMessage);
console.log('shortGreeting:', shortGreeting);