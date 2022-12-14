export default function () {
    let props = {
        name: String,
        disabled: String,
        text: {
            type: String,
            default: 'upload'
        },
        btn: Boolean,
        accept: String,
        cover: Boolean,
        multiple: Boolean,
        max: Number,
        custom: Boolean,
        picture: Boolean
    }
    return props
}