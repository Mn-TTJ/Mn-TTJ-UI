<template>
    <div class="upload">
        <input type="file" ref="fileInput" :accept="acceptTpye" :multiple="multiple" @change="hadUpload" />
        <span class="file-btn" :class="{'disabled':disabled}" @click="getFile">
            <label v-if="!btn">{{text}}</label>
            <template v-if="btn">
                <slot name="btn"></slot>
            </template>
        </span>
        <slot name="tips"></slot>
        <template v-if="!custom">
            <template v-if=!picture>
                <ul class="file-list" v-if="files&&files.length!=0">
                    <li v-for="(file,index) in files" :key="index">
                        <p><label>&#xe631;</label> {{file.name}}</p>
                        <div class="file-hover">
                            <button class="file-delete" @click="deleteFile(index)">&#xe618;</button>
                        </div>
                    </li>
                </ul>
            </template>
            <template v-else>
                <div class="file-image-list" v-if="files&&files.length!=0"><button v-for="(icon,index) in listIcon"
                        :key="index" @click="setListType(index)"><label :class="{'file-list-select':listType==index}"
                            v-html="icon"></label></button>
                </div>
                <ul :class="{'file-list':listType==0,'file-pre':listType==1,'file-image':listType==2}"
                    v-if="files&&files.length!=0">
                    <li v-for="(file,index) in files" :key="index">
                        <div class="cover" v-if="listType!=0">
                            <img :src="fileToUrl(file)" />
                        </div>
                        <p><label>&#xe8ba;</label>{{file.name}}</p>
                        <div class="file-hover">
                            <button class="file-delete" @click="deleteFile(index)">&#xe618;</button>
                        </div>
                    </li>
                </ul>
            </template>
        </template>
        <template v-if="custom">
            <slot name="list"></slot>
        </template>
    </div>
</template>

<script>
import { ref, defineEmits, defineExpose } from 'vue';
import useProps from './hooks/useProps'
import useFileHanding from './hooks/useFileHanding'
import useForm from '../hooks/useForm'
export default {
    name: 'ui-upload'
}
</script>

<script setup>
// eslint-disable-next-line
const props = defineProps(useProps());
const emits = defineEmits(['beforeUpload', 'afterUpload', 'beforeDelete', 'afterDelete'])
const acceptTpye = props.picture ? "image/*" : props.accept
const fileInput = ref(null)
const getFile = () => {
    if (props.disabled) return
    fileInput.value.click()
}
const { files, hadUpload, deleteFile } = useFileHanding(fileInput, props, emits)
const fileToUrl = (file) => URL.createObjectURL(file)
const listIcon = ['&#xe716;', '&#xe850;', '&#xe69e;']
const listType = ref(1)
const setListType = (index) => listType.value = index
useForm(props.name, files, true)
defineExpose({
    files,
    deleteFile
})
</script>


<style lang="scss" scoped>
@import '../../../css/main.css';

.upload {
    padding: 1rem;
    border: 1px solid #dcdfe6;
    border-radius: 0.2rem;
    text-align: left;
}

input {
    width: 0rem;
    height: 0rem;
}

.file-btn {
    display: inline-block;
    background-color: white;
    border: none;

    label {
        display: inline-block;
        padding: 0.5rem;
        color: white;
        background-color: #409eff;
        border-radius: 0.2rem;

        &:hover {
            opacity: 0.8;
        }

        &:active {
            opacity: 1;
        }
    }
}

.file-list,
.file-pre,
.file-image {
    margin-top: 0.5rem;
    border: 1px solid #dcdfe6;
    border-radius: 0.2rem;
    list-style: none;

    li {
        position: relative;
        display: flex;
        padding: 0.5rem;
        align-items: center;
        overflow: hidden;

        &:hover {
            color: #409eff;
        }

        label {
            padding: 0rem 0.2rem;
            font-size: 1.2rem;
            font-family: 'iconfont';
        }

        p {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            padding-right: 1.5rem;
        }
    }
}

.file-pre {
    border: none;

    li {
        margin-bottom: 0.5rem;
        border: #dcdfe6 1px solid;
        border-radius: 0.2rem;
    }

    .cover {
        margin-right: 1rem;
        width: 5rem;
        height: 5rem;
        overflow: hidden;

        img {
            position: relative;
            height: 100%;
            width: 100%;
            top: 50%;
            left: 50%;
            object-fit: cover;
            object-position: center center;
            transform: translate(-50%, -50%);
            transition-duration: 0.3s;
        }
    }
}

.file-image {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 1rem;
    border: none;

    li {
        flex-direction: column;
        border: #dcdfe6 1px solid;
        border-radius: 0.2rem;
    }

    .cover {
        position: relative;
        width: 100%;
        overflow: hidden;

        &::before {
            content: '';
            display: inline-block;
            width: 100%;
            height: 0rem;
            padding-bottom: 80%;
        }

        img {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 50%;
            left: 50%;
            object-fit: contain;
            object-position: center center;
            transform: translate(-50%, -50%);
            transition-duration: 0.3s;
        }
    }

    p {
        padding: 0.2rem;
    }

    .file-delete {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
    }
}

.file-pre,
.file-image {
    li {

        &::after {
            content: '\ec9e';
            font-family: 'iconfont';
            position: absolute;
            right: 0rem;
            top: 0rem;
            color: white;
            transition-duration: 0.5s;
        }

        &::before {
            position: absolute;
            content: '';
            top: 0rem;
            right: 0rem;
            height: 0px;
            width: 0px;
            border: 1rem solid #67c23a;
            border-bottom-color: transparent;
            border-left-color: transparent;
            transition-duration: 0.5s;
        }

        &:hover {
            &::after {
                color: transparent;
            }

            &::before {
                border-color: transparent;
            }
        }
    }
}

.file-list,
.file-pre {
    .file-delete {
        font-size: 1.2rem;
        color: #f56c6c;
    }
}

.file-hover {
    position: absolute;
    top: 0rem;
    left: 0rem;
    height: 100%;
    width: 100%;
    background-color: rgba($color: gray, $alpha: 0);

    &:hover {
        background-color: rgba($color: gray, $alpha: 0.15);

        .file-delete {
            display: block;
        }
    }
}


.file-delete {
    position: absolute;
    top: 50%;
    right: 0.5rem;
    font-size: 1.6rem;
    display: none;
    transform: translateY(-50%);
    animation: delete 0.5s;

    &:hover {
        cursor: pointer;
    }
}

.file-image-list {
    margin-top: 0.5rem;
}

button {
    padding: 0.2rem;
    font-family: 'iconfont';
    background-color: transparent;
    font-size: 1.4rem;
    border: none;

    &:hover {
        color: #409eff;
    }
}

.file-list-select {
    color: #409eff;
}

.disabled {
    cursor: not-allowed;
}

@media screen and (max-width: 1080px) {
    .file-image {
        grid-template-columns: repeat(3, 1fr);
    }
}

@media screen and (max-width: 760px) {
    .file-image {
        grid-template-columns: repeat(2, 1fr);
    }
}

@keyframes delete {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}
</style>