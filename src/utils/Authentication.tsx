
function Authentication() {

    if (localStorage.getItem('password')) {
        return true
    } else {
        return false
    }

}

export default Authentication