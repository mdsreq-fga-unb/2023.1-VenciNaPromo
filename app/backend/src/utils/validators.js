function isValidEmail(email) {
    const emailRegex = /^[a-z0-9]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}


function isValidEmail(email) {
    const emailRegex = /^[a-z0-9]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidEmail(email) {
    const emailRegex = /^[a-z0-9]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidName(name) {
    const nameRegex = /^[\p{L}\s]+$/u;
    return nameRegex.test(name);
}

function isValidPassword(password) {
    if (password.length < 8) {return false;}
    return true;
}

function isValidFlag(flag){
    if (flag !== 0 && flag != 1){
        return false
    }
    return true
}

module.exports = {
    isValidEmail,
    isValidName,
    isValidPassword,
    isValidFlag
};