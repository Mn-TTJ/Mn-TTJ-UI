import Button from "./components/base/button/Button"
import Form from "./components/form/index"
const components = [
    Button,
    ...Form.components
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