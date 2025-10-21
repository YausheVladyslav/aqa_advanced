function printWithDelay(anyText, timer) {
    setTimeout(() => {
        console.log(anyText)
    }, timer);
}

showText("test text", 5000)