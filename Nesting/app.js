const password = prompt('Please enter a new password')

// Password must be 6+ characters
if (password.length >= 6) {

    if (password.indexOf(' ') === -1) {
        console.log("Valid Password")
    } else {
        console.log("Password cannot contain spaces")
    }

} else {
    console.log("Password Too short! Must be 6+ characters")
}
// Password cannot include space
