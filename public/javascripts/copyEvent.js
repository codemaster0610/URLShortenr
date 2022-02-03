function copyEvent(id) {
    const copy = document.querySelector('#copy').innerText
    navigator.clipboard.writeText(copy)
        .then(() => alert('網址已複製'))
        .catch(error => console.log(error))
}