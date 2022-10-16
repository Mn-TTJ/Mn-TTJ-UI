export default function (props) {
    const goTop = () => {
        const target = props.target
        if (typeof window.getComputedStyle(target).scrollBehavior === 'undefined') {
            scrollToTop(target)
        } else {
            if (!target.classList.contains('smooth'))
                target.classList.add("smooth");
            target.scrollTop = 0
        }
    }

    const scrollToTop = (target) => {
        const clientHeight = target.clientHeight
        const scrollTop = target.scrollTop
        if (target.scrollTop < clientHeight) {
            const timer = setInterval(() => {
                if (target.scrollTop == 0) {
                    clearInterval(timer)
                }
                else {
                    const step = clientHeight / 20
                    target.scrollTop = target.scrollTop > step ? target.scrollTop - step : 0
                }
            }, 16)
        } else {
            const step = scrollTop / 40
            const timer = setInterval(() => {
                if (target.scrollTop == 0) {
                    clearInterval(timer)
                }
                else {
                    target.scrollTop = target.scrollTop > step ? target.scrollTop - step : 0
                }
            }, 16)
        }
    }
    return goTop
}