export const skeletonProps = {}

export const skeletonItemProps = {
    circular: Boolean,
    radius: {
        type: String,
        default: '3rem'
    },
    rect: Boolean,
    width: String,
    height: String,
    image: Boolean,
    text: {
        type: Array,
        default: [6, 10, 10, 10, 10],
        validator(value) {
            if (!(value instanceof Array)) return false
            for (let item of value) {
                if (item instanceof Array) {
                    for (let ele of item) {
                        if (!(typeof ele === 'number')) return false
                    }
                }
                else if (!(typeof item === 'number')) {
                    return false
                }
            }
            return true
        }
    },
    load: Boolean
}