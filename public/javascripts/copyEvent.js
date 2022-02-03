function copyEvent(id) {
    // DOM 操作選擇器，show.handlebars
    const copy = document.querySelector('#copy').innerText
    
    navigator.clipboard.writeText(copy)
        .then(() => alert('短網址已複製'))
        .catch(error => console.log(error))
}