function getTimeStamp() {
    let d = new Date();
    return `Current date: ${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
}

console.log(getTimeStamp());