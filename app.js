function loggedAndSubscribed(logged, subStatus) {
 return logged === 'logged_in' || subStatus === 'subscribed' 
}

console.log(loggedAndSubscribed('logged_in', 'subscribed'));
