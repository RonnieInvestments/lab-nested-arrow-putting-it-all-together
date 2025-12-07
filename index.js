// Login Tracker
function createLoginTracker(userInfo) {
  
/*

This outer function will initialize the login feature.
The userInfo parameter will be an object containing:
  username: A string representing the username.
  password: A string representing the user’s password.

Example:
{
    "username": "user1",
    "password": "password123"
}
  */

// Initialize attempt count

  let attemptCount = 0;

// Tracking login attempts (counts each login attempt)

  let loginAttempt = (passwordAttempt) => {
    attemptCount++; // use the increment

/* Successful login handling 

Password should be correct
Attempts should be three or less

*/

    if (passwordAttempt === userInfo.password && attemptCount <= 3) {
      return `Login successful`;

/* Incorrect password handling 

Incorrect password
Attempts are three or less

*/

    } else if (passwordAttempt !== userInfo.password && attemptCount <=3) {
      return `Attempt ${attemptCount}: Login failed`;

// Lock the account after 3 failed attempts

    } else if (attemptCount > 3) {
      return `Account locked due to too many failed login attempts`;}
  }
  return loginAttempt;
  
}


// Dummy object for testing the function

/* const userInfo = { username: 'user1', password: 'securePass' };
let createLoginTrackerResult = createLoginTracker(userInfo);
console.log(createLoginTrackerResult('wrongPass')); // attempt 1: Login failed */



module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};