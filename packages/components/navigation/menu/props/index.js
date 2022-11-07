export const subItemProps = {
    label: String,
    disabled: Boolean
}

export const itemProps = {
    label: String,
    disabled: Boolean
}

export const menuProps = {
    active: Number,
    noBorder: Boolean,
    vertical: Boolean,
    left: Boolean,
    center: Boolean,
    dark: Boolean,
    collapse: Boolean,
    unRecord: Boolean,
    bgColor: {
        type: String, default: 'white'
    },
    textColor: {
        type: String, default: '#303133'
    },
    hoverColor: {
        type: String, default: '#ecf5ff'
    },
    activeColor: {
        type: String, default: '#409eff'
    }
}