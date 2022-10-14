import { ref } from "vue"

export default function (target, props, emits) {
    const files = ref([])

    let hadUpload = () => {
        if (props.cover) {
            files.value = []
        }
        else {
            if (!(files.value instanceof Array)) {
                files.value = []
            }
        }
        let count = 0
        Object.values(target.value.files).forEach(file => {
            if (props.max) {
                if (count < props.max) {
                    emits('beforeUpload', files, file)
                    files.value.push(file)
                    count++
                    emits('afterUpload', files, file)
                }
            } else {
                emits('beforeUpload', files, file)
                files.value.push(file)
                emits('afterUpload', files, file)
            }
        });
        target.value = null
    }

    let deleteFile = (index, isCallback = true) => {
        let isDelete = true

        const unDelete = () => {
            isDelete = false
        }

        if (isCallback) emits('beforeDelete', files, index, unDelete)

        if (isDelete) {
            files.value.splice(index, 1)
            if (isCallback) emits('afterDelete', files)
        }

        isDelete = null
    }

    return { files, hadUpload, deleteFile }
}