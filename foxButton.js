function foxButton() {
    let fox = "FS1325-1-big.jpg"
    let anchor = document.createElement('a')

    anchor.href = fox
    anchor.download = "fox.jpg"

    document.body.appendChild(anchor)
    anchor.click()
    document.body.removeChild(anchor)
}