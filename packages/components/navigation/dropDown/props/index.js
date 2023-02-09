export const dropDownProps = {
    text: String,
    click: Boolean,
    onlyText: Boolean,
    hasBorder: Boolean,
    btn: Boolean,
    shadow: {
        type: Boolean,
        default: true
    },
    sm: Boolean,
    lg: Boolean,
    disabled: Boolean,
    options: Object,
    ustyle: {
        type: Object,
        default: {}
    },
    pstyle: {
        type: Object,
        default: {}
    },
    custom: Boolean
}