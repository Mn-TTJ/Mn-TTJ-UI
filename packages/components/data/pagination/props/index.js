export const Props = {
    total: {
        type: Number,
        default: 0,
        validator(value) {
            return value >= 0 ? value : 0
        }
    },
    pageSize: {
        type: Number,
        default: 10,
        validator(value) {
            return value >= 1 ? value : 1
        }
    },
    pageCount: {
        type: Number,
        default: 7,
        validator(value) {
            return value >= 1 ? value : 1
        }
    },
    currentPage: {
        type: Number,
        default: 1,
        validator(value) {
            return value >= 1 ? value : 1
        }
    },
    modelValue: Number,
    background: Boolean,
    xl: Boolean,
    sm: Boolean,
    onlyPageHidden: Boolean,
    showTotalList: Boolean,
    jumpBtn: Boolean
}