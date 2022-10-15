import Base from "./components/base/index";
import Form from "./components/form/index"
import Navigation from "./components/navigation/index";
const components = [
    ...Base.components,
    ...Form.components,
    ...Navigation.components
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