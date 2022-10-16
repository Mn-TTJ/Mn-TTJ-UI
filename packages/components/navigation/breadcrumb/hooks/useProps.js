export default function () {
    let props = {
        useName: Boolean,
        useQuery: Boolean,
        replace: Boolean,
        separator: String,
        arrow: Boolean,
        custom: Boolean,
        start: {
            default: 1,
            type: Number
        }
    }
    return props
}