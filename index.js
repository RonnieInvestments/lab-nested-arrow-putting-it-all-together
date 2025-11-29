// Login Tracker
function createLoginTracker(userInfo) {
  let attemptCount = 0;

// Tracking login attempts

  let loginAttempt = (passwordAttempt) => {
    attemptCount++;

// Successful login handling

    if (passwordAttempt === userInfo.password && attemptCount <= 3) {
      return `Login successful`;

// Incorrect password handling

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