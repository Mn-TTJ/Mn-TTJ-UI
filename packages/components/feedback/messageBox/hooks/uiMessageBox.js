import MessageBox from "../MessageBox";

import { createVNode, render } from "vue";

let appendTo = document.body;
let messageBoxInstance = new Map();

export default {
  alert: function (obj) {
    return new Promise((resolve, reject) => {
      const div = document.createElement("div");

      const props = getProps(obj);

      const vnode = createVNode(MessageBox, props);

      render(vnode, div);

      appendTo.appendChild(div);
      messageBoxInstance.set("vm", {
        props,
        resolve,
        reject,
      });
    });
  },
  confirm: function (obj) {
    return new Promise((resolve, reject) => {
      const div = document.createElement("div");

      const props = getProps(obj);

      const vnode = createVNode(MessageBox, props);

      render(vnode, div);

      appendTo.appendChild(div);
      messageBoxInstance.set("vm", {
        props,
        resolve,
        reject,
      });
    });
  },

  prompt: function (obj) {
    return new Promise((resolve, reject) => {
      const div = document.createElement("div");

      const props = getProps(obj);
      props.inputType = obj.inputType;
      const vnode = createVNode(MessageBox, props);

      render(vnode, div);

      appendTo.appendChild(div);

      messageBoxInstance.set("vm", {
        props,
        resolve,
        reject,
      });
    });
  },
};
function close(e) {
  const currentMsg = messageBoxInstance.get("vm");
  currentMsg.resolve(e);
  return e;
}
function cancel() {
  const currentMsg = messageBoxInstance.get("vm");
  currentMsg.reject();
}
function getProps(obj) {
  let { title, text, center, draggable } = obj;

  return {
    title,
    text,
    center,
    draggable,
    hasCancel: true,
    visible: true,
    onClose: (e) => {
      close(e);
    },
    onCancel: () => {
      cancel();
    },
  };
}
