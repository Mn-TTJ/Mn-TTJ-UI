export default function () {
    return {
        size: Number|String,
        src: String,
        shape: {
            type: String,
            default:"circle"
        },
        alt: String,
        icon: String,
        fit: String,
        srcset:String,
    }
}