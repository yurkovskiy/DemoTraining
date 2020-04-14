function getTimeStamp() {
    let d = new Date();
    return `Current date: ${add0(d.getDate())}/${add0(d.getMonth() + 1)}/${d.getFullYear()}`;
}

function add0(value) {
    return (value.toString().length < 2) ? `0${value}` : value;
}

console.log(getTimeStamp());