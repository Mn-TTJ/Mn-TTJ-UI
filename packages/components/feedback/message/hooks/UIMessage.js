import { createVNode, render } from "vue";

import Message from "../Message.vue";

// div.setAttribute("class");


let instances = [];

let seed = 0;

export default ({ text, type }) => {
  let appendTo = document.body;

  const props = {
    text,
    type,
    onClose: () => {
      close(seed - 1);
    },
    id: seed++,
    destroy: () => {
      render(null, div);
      appendTo.removeChild(div); // 删除空div

    },
  };
  // 计算每个message的顶部距离
  let verticalOffset = 50;
  instances.forEach((v) => {
    verticalOffset += v.el.offsetHeight + 10;
  });
  props.offset = verticalOffset;

  const div = document.createElement("div");

  const vnode = createVNode(Message, props);
  instances.push(vnode);

  render(vnode, div);

  appendTo.appendChild(div);

  return {
    close: (vm) => close(vm.props.id),
  };
};

export const close = (vmId) => {
  const idx = instances.findIndex((vm) => (vm.props.id = vmId));
  if (idx === -1) {
    return;
  }
  const vm = instances[idx];
  const removedHeight = vm.el.offsetHeight;

  instances.splice(idx, 1);

  const len = instances.length;
  if (len === 0) {
    return;
  }

  for (let i = 0; i < len; i++) {
    // TODO Why when using `offsetHeight` will cause bug? And use `style.top` it will be ok?
    const pos = parseInt(instances[i].el.style.top, 10) - removedHeight - 16;

    instances[i].component.props.offset = pos;
  }
};
