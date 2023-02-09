import Base from "./components/base/index";
import Form from "./components/form/index"
import Navigation from "./components/navigation/index";
import Feedback from './components/feedback/index';
import Data from './components/data/index'
import Beta from './components/beta/index'
const components = [
    ...Base.components,
    ...Form.components,
    ...Navigation.components,
    ...Feedback.components,
    ...Data.components,
    ...Beta.components
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