const accountID = 145324
let accountEmail = "example@google.com"
var accountPassword = "password"
accountCity = "New York"
let accountState;

/*
prefer not to use var
because it is function scoped and can be redefined anywhere in the code
let is block scoped and cannot be redefined
*/

// accountId = 2984 // not allowed

accountEmail = "rr@gmail.com"
accountPassword = "newpassword"
accountCity = "Los Angeles"

console.log(accountID);

console.table([accountID, accountEmail, accountPassword, accountCity, accountState]);
