<template>
  <div class="a">
    <ui-table :title="['aa', 'bb', 'cc']" :data="data" left expand border>
      <ui-table-column prop="aa" label="AA">
        <template #title="item">
          <p>{{ item.label + '?' }}</p>
        </template>
      </ui-table-column>
      <template #left>
        <ui-table-column prop="bb" label="BB">
          <div class="cc">ji</div>
        </ui-table-column>
      </template>
      <ui-table-column prop="cc" label="CC"></ui-table-column>
      <template #expand>
        hello
      </template>
    </ui-table>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
const data = reactive([
  {
    aa: {
      label: 'aa',
      state: 1,
    },
    bb: {
      label: 'bb'
    },
    cc: {
      label: 'cc'
    }
  },
  {
    aa: {
      label: 'aa'
    },
    bb: {
      label: 'bb',
      state: 2
    },
    cc: {
      label: 'cc',
      state: 1
    },
    state: 2
  },
  {
    aa: {
      label: 'aa',
      state: 1
    },
    bb: {
      label: 'bb',
      state: 1
    },
    cc: {
      label: '艹'
    },
    state: 1
  },
  {
    aa: {
      label: 'aa'
    },
    bb: {
      label: 'bb'
    },
    cc: {
      label: '艹'
    }
  },
  {
    aa: {
      label: 'aa'
    },
    bb: {
      label: 'bb',
      state: 2
    },
    cc: {
      label: '艹'
    }
  }
])
</script>

<style scoped>
.a {
  padding: 1rem;
}
</style>