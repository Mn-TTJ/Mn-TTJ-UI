import Button from "./components/button/Button"
import Input from './components/input/Input'
const components = [
    Button, Input
]

const install = function (Vue) {
    components.forEach(component => {
        Vue.component(component.name, component)
    })
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default { install }