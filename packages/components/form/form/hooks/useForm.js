import { ref, provide } from 'vue'

export default function () {
    const form = {
        value: new Map(),
        isCollect: ref(false),
        isGetForm: ref(false),
        nodeSum: 0,
        error: null,
        catchError: function (Err) {
            this.error = Err
        },
        collecting: function () {
            this.nodeSum++
        },
        getSum: function () {
            return new Promise(resolve => {
                this.nodeSum = 0
                this.isCollect.value = true
                setImmediate(() => {
                    this.isCollect.value = false
                    resolve(this.nodeSum)
                })
            })
        },
        setForm: function (name, value) {
            if (this.value.has(name)) {
                this.catchError(new Error('Duplicate name exists'))
            } else this.value.set(name, value)
        },
        getForm: function () {
            this.error = null
            return new Promise((resolve, reject) => {
                this.value = new Map()
                this.isGetForm.value = true
                setImmediate(() => {
                    this.isGetForm.value = false
                    if (this.error) reject(this.error)
                    else {
                        try {
                            const formDate = new FormData()
                            for (let [key, value] of this.value.entries()) {
                                formDate.append(key, value)
                            }
                            resolve(formDate)
                        } catch (error) {
                            reject(error)
                        }
                    }
                })
            })
        },
        checkForm: function (callBack, error) {
            this.getForm().then(formDate => {
                callBack(formDate)
            }).catch(Err => error(Err))
        }
    }

    const submit = () => {
        return form.getForm()
    }

    provide('form', form)
    provide('submit', submit)

    return form
}