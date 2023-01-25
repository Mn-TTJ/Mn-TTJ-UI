export default {
    justify: {
        default: 'flex-start',
        validator(value) {
            if (['flex-start', 'center', 'flex-end'].includes(value)) return true
            return false
        }
    },
    align: {
        default: 'flex-start',
        validator(value) {
            if (['flex-start', 'center', 'flex-end'].includes(value)) return true
            return false
        }
    }
}