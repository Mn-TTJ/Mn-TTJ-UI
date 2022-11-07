<template>
    <div class="step" ref="step" v-if="!injectProps.simple"
        :class="{'step-column':injectProps.column,'hasDone':id<injectProps.stage,'isDoing':id==injectProps.stage,'willdo':id>injectProps.stage}"
        :style=uStyle>
        <div class="step-icon" :class="{'center':injectProps.center&&!injectProps.column,'isLast':isLast}">
            <div :class="{'use-icon':injectProps.icon}">
                <slot name="icon"><span>{{id}}</span></slot>
            </div>
        </div>
        <div class="step-text"
            :class="{'center':injectProps.center&&!injectProps.column,'column-center':injectProps.center&&injectProps.column}">
            <div>
                <slot name="title">
                    <h3>{{title}}</h3>
                </slot>
            </div>
            <div>
                <slot name="description">
                    <p>{{description}}</p>
                </slot>
            </div>
        </div>
    </div>
    <div v-else class="simple-step" ref="step" :style=uStyle
        :class="{'simple-space':!isLast, 'hasDone':id<injectProps.stage,'isDoing':id==injectProps.stage,'willdo':id>injectProps.stage}">
        <slot name="icon"><label>{{id}}</label></slot>
        <slot name="title">
            <h3>{{title}}</h3>
        </slot>
    </div>
</template>

<script>
import { inject, onMounted, ref } from 'vue';
import { stepsKey } from './symbol/index'
export default {
    name: 'ui-step'
}
</script>

<script setup>
// eslint-disable-next-line
const props = defineProps({
    title: String,
    description: String
});
const injectProps = inject(stepsKey)
const step = ref(null)
const id = ref(0)
const isLast = ref(false)
let stepsFlag = true
onMounted(() => {
    const parent = step.value.parentNode;
    if (parent.getAttribute("type") !== "steps") stepsFlag = false
    getId(step.value, parent.childNodes)
})

const getId = (child, children) => {
    if (!stepsFlag) return
    children.forEach((element, index) => {
        if (element === child) id.value = index
    });
    if (id.value == children.length - 2) isLast.value = true
}

const uStyle = {
    'max-width': injectProps.value.column ? null : injectProps.value.space,
    'max-height': injectProps.value.column ? injectProps.value.space : null,
    '--done-color': injectProps.value.doneColor,
    '--doing-color': injectProps.value.doingColor,
    '--will-do-color': injectProps.value.willDoColor
}
</script>

<style lang="scss" scoped>
@import '../../../css/main.css';

.step {
    flex: 1;
    display: flex;
    flex-direction: column;
}

.step-column {
    flex-direction: row;
}

.step-icon {
    position: relative;
    padding: 0.5rem 0rem;
    display: flex;

    div {
        height: 2.2rem;
        z-index: 1;
        border-radius: 0.2rem;
    }

    &::before {
        position: absolute;
        top: 1.55rem;
        display: inline-block;
        content: '';
        width: 100%;
        height: 0.1rem;
    }
}

.step-column {
    .step-icon {
        padding: 0rem 0.5rem;

        &::before {
            width: 0.1rem;
            height: 100%;
            top: 1.1rem;
            left: 1.55rem;
        }
    }
}

.isLast::before {
    width: 0rem !important;
    height: 0rem !important;
}

.step-text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

span {
    display: inline-block;
    width: 2.2rem;
    height: 2.2rem;
    border: 0.1rem solid transparent;
    border-radius: 1.1rem;
    line-height: 2rem;
    background-color: white;
}

.center {
    align-items: center;
    justify-content: center;

    &::before {
        left: 50%;
    }
}

.column-center {
    align-items: center;
}

.use-icon {
    background-color: white;

    span {
        border-color: transparent;
    }
}

.hasDone {
    color: var(--done-color);

    .step-icon::before {
        background-color: var(--done-color);
    }

    span {
        border-color: var(--done-color);
    }
}

.isDoing {
    color: var(--doing-color);

    .step-icon::before {
        background-color: var(--will-do-color);
    }

    span {
        border-color: var(--doing-color);
    }
}

.willdo {
    color: var(--will-do-color);

    .step-icon::before {
        background-color: var(--will-do-color);
    }

    span {
        border-color: var(--will-do-color);
    }
}

.simple-step {
    padding: 1rem;
    display: flex;
    align-items: center;
    flex: 1;

    label {
        padding-right: 0.5rem;
    }
}

.simple-space {
    position: relative;
    padding-right: 3rem;
    font-family: 'iconfont';

    &::after {
        position: absolute;
        right: 0.8rem;
        font-family: iconfont;
        font-size: 1.4rem;
        content: '\e699';
    }
}
</style>