const buttons = document.querySelectorAll('.ripple')

buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        const x = e.clientX
        const y = e.clientY
            // client has to be spelled correctly as it is a predetermined service.
        const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft

        const xInside = x - buttonLeft
        const yInside = y - buttonTop

        const circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.top = yInside + 'px'
        circle.style.left = xInside + 'px'

        this.appendChild(circle)
            // append brings in/references the element from HTML into the javascript.
            // This does not work on a arrow function. If you use 'this' you have to establish an actual function in the eventListener parenthesis.

        setTimeout(() => circle.remove(), 500)
            // this removes the circle from the console log so that it doesn't crash the browser. Anytime a function is added to the DOM like this effect, it must be removed.
    })
})