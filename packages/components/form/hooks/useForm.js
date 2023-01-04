import { inject, watch } from "vue";

export default function (name, mValue, isFile = false) {
    const form = inject('form', {})
    const isCollect = form.isCollect
    const isGetForm = form.isGetForm
    if (!isCollect || !isGetForm) return
    watch(form.isCollect, () => {
        if (form.isCollect.value) {
            if (!isFile)
                form.collecting()
            else {
                mValue.value.forEach(() => {
                    form.collecting++
                });
            }
        }
    })
    watch(form.isGetForm, () => {
        if (form.isGetForm.value) {
            if (!name || !(name instanceof String)) { form.catchError(new Error('this input box does not have a legal name')) }
            else {
                if (!isFile) {
                    form.setForm(name, mValue.value)
                } else {
                    mValue.value.forEach((file, index) => {
                        form.setForm(name + '-' + index + '-' + file.name, file)
                    });
                }
            }
        }
    })
}