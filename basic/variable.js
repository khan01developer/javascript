const accountId = 133443
let accountEmail = "khan@google.com"
var accountPassword = "12345"
accountCity = "Lucknow"
// accountId = 2  not allowed

accountEmail = "hc@aa.com"
accountPassword = "2323423"
accountCity = "Mumbai"
let accountStates

// prefer not to use var because of issue in block scope and functional scope 

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity, accountStates])



