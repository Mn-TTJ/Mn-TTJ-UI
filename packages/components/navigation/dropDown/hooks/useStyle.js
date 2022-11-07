import { computed } from 'vue'
export default function (props) {
    const defaultShower = {
        '--background-color': 'transparent',
        '--background-color-hover': 'transparent',
        '--color': '#2c3e50',
        '--color-hover': '#409eff',
        '--border-color': 'transparent',
        '--border-color-hover': 'transparent'
    }
    if (props.hasBorder) {
        defaultShower['--border-color'] = '#dcdfe6'
        defaultShower['--border-color-hover'] = '#409eff'
    }
    if (props.btn) {
        defaultShower['--color'] = '#fff'
        defaultShower['--color-hover'] = '#fff'
        defaultShower['--background-color'] = '#409eff'
        defaultShower['--background-color-hover'] = '#409eff'
    }
    const showerStyle = computed(() => {
        return Object.assign(defaultShower, props.ustyle)
    })
    const defaultPanel = {
        '--background-color': '#fff',
        '--background-color-hover': '#f2f3f6',
        '--color': '#2c3e50',
        '--color-hover': '#409eff',
        '--border-color': 'transparent',
        '--border-color-hover': 'transparent'
    }
    const panelStyle = computed(() => {
        return Object.assign(defaultPanel, props.pstyle)
    })
    return { showerStyle, panelStyle }
}