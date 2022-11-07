export default function (props) {
    const goTop = () => {
        const root = props.root
        if (typeof window.getComputedStyle(root).scrollBehavior === 'undefined') {
            const scrollTop = root.scrollTop
            scrollToTop(root, scrollTop)
        } else {
            if (!root.classList.contains('smooth'))
                root.classList.add("smooth");
            else root.scrollTop = 0
        }
    }

    const scrollToTop = (root, scrollTop) => {
        const clientHeight = root.clientHeight
        if (root.scrollTop < clientHeight) {
            const timer = setInterval(() => {
                if (root.scrollTop == 0) {
                    clearInterval(timer)
                }
                else {
                    const step = clientHeight / 20
                    root.scrollTop = root.scrollTop > step ? root.scrollTop - step : 0
                }
            }, 16)
        } else {
            const step = scrollTop / 30
            const timer = setInterval(() => {
                if (root.scrollTop == 0) {
                    clearInterval(timer)
                }
                else {
                    root.scrollTop = root.scrollTop > step ? root.scrollTop - step : 0
                }
            }, 16)
        }
    }

    return goTop
}