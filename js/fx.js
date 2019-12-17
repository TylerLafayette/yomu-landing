// a simple script to add
// effects to the demo page

// stuff that pops out of the words.
const MESSAGES = ["Wow!", "Amazing!", "So cool!", "すばらしい！", "すごい！"]

class YomuFx {
    constructor() {
        this.mount = document.createElement("yomu-fx-mount")
    }
    // attachListeners attaches to the demo elements.
    attachListeners = _ => {
        document
            .querySelector("#display-mount-point")
            .querySelectorAll("yomu-highlighted-word")
            .forEach(item => item.addEventListener("click", this.effectTrigger))

        document.body.prepend(this.mount)
    }
    // effectTrigger triggers an animation.
    effectTrigger = e => {
        const { target } = e
        const effectBox = document.createElement("effect-container")
        effectBox.innerText =
            MESSAGES[Math.floor(Math.random() * MESSAGES.length)]

        this.mount.append(effectBox)

        effectBox.style.left =
            e.clientX - effectBox.getBoundingClientRect().width
        effectBox.style.top =
            e.clientY - effectBox.getBoundingClientRect().height

        setTimeout(() => effectBox.remove(), 1000)
    }
}

const fx = new YomuFx()
fx.attachListeners()
