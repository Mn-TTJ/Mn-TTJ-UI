export default function () {
    return {
        placement: String,
        content: String,
        effect: {
            type: String,
            default:"dark",
        },
        'raw-content': Boolean,
        trigger: String,
        
    }
}