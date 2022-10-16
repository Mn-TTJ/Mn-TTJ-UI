import { computed, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

export default function (props) {
    const route = useRoute()
    const router = useRouter()

    const fullpath = computed(() => route.fullPath)

    const crumbs = ref(null)

    const setParamsCrumbs = () => {
        crumbs.value = []
        let count = 0
        if (!props.useName) {
            route.matched.forEach(crumb => {
                count++
                if (count >= props.start) {
                    let path = crumb.path
                    for (let [key, value] of Object.entries(route.params)) {
                        if (value instanceof Array) {
                            path = path.replace(new RegExp(":" + key + "[+*]"), value.join('/'))
                        }
                        else path = path.replace(':' + key, value)
                    }
                    crumbs.value.push({ path, label: crumb.meta.label })
                }
            })
        } else {
            route.matched.forEach(crumb => {
                count++
                if (count >= props.start) {
                    let path = crumb.path
                    let params = {}
                    for (let [key, value] of Object.entries(route.params)) {
                        const patte = new RegExp(":" + key)
                        if (patte.test(path)) params[key] = value
                    }
                    crumbs.value.push({ name: crumb.name, params, label: crumb.meta.label })
                }
            })
        }
    }

    const setQueryCrumbs = () => {
        crumbs.value = []
        let count = 0
        if (props.useName) return
        route.matched.forEach((crumb) => {
            count++
            if (count >= props.start)
                crumbs.value.push({ path: crumb.path, query: crumbs.value.query, label: crumb.meta.label })
        })
    }

    const jumpRoute = (crumb) => {
        if (!props.replace) {
            if (props.useQuery) router.push({ path: crumb.path, query: crumb.query })
            else if (props.useName) router.push({ name: crumb.name, params: crumb.params })
            else router.push(crumb.path)
        } else {
            if (props.useQuery) router.replace({ path: crumb.path, query: crumb.query })
            else if (props.useName) router.replace({ name: crumb.name, params: crumb.params })
            else router.replace(crumb.path)
        }
    }

    watch(fullpath, () => {
        if (!props.useQuery) setParamsCrumbs()
        else setQueryCrumbs()
    }, { immediate: true })

    return { crumbs, jumpRoute }
}