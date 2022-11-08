export default function () {
    return {
        text: String,
        title: String,
        visible: Boolean,
        hasCancel: Boolean,
        inputType: String, //输入框类型
        onClose: Function,
        onCancel: Function,
        center: Boolean,
        draggable: Boolean,
    }
            
}