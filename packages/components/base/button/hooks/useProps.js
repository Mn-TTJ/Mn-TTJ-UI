export default function () {
    let props = {
        label: String,
        round: Boolean, //是否是药丸形状
        disabled: Boolean,//是否禁用
        circle: Boolean,//是否是圆形
        size: String,//按钮大小
        color: String,//自定义颜色
        text: Boolean,//是否有边框(文字按钮没有边框)
        icon: String,//图标
        loading: Boolean,//是否正在加载
        submit: String,
    }
    return props
}