import UiButton from "./components/base/button/Button"
import Link from './components/base/link/Link';
import Container from './components/base/container/Container';
import Header from './components/base/header/Header';
import Main from './components/base/main/Main';
import Aside from './components/base/aside/Aside';
import Footer from './components/base/footer/Footer';
const components = [
    UiButton,
    Link,
    Container,
    Header,
    Main,
    Aside,
    Footer,
]
console.log(components, '111');
const install = function (Vue) {
    components.forEach(component => {
        Vue.component(component.name, component)
    })
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default { install }