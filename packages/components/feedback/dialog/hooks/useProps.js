export default function () {
    return {
        visible: Boolean,
        title: {    // 窗口的提示标题
            type: String,
            default:"title",
        },
        center: Boolean, // 标题和底部区域居中
        'align-center': Boolean, //窗口垂直居中
        draggable:Boolean, //可拖拽
        width: Number,
        fullscreen: Boolean, //全屏
        modal:{    // 是否要遮罩层，默认要
            type: Boolean,
            default:true,
        },
        'lock-scroll': {   // 打开弹窗，锁定滚动条
            type: Boolean,
            default:true
        },
        openDelay: Number,
        closeDelay: Number,
        handleClose:Function,
        
    }
}