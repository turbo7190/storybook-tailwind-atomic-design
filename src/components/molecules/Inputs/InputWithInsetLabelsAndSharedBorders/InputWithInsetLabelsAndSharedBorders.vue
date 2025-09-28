<template>
  <div class="isolate -space-y-px rounded-md shadow-sm">
    <div
      v-for="(form, i) in forms"
      :key="i"
      :class="
        i === 0
          ? 'rounded-b-none'
          : i === forms.length - 1
          ? 'rounded-t-none'
          : 'rounded-none'
      "
      class="relative border border-gray-300 rounded-md px-3 py-2 focus-within:z-10"
    >
      <label
        :for="form.label"
        class="block text-xs font-medium text-gray-900"
        >{{ form.label }}</label
      >
      <input
        type="text"
        name="name"
        :id="form.label"
        v-model="form.value"
        class="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 focus:outline-none sm:text-sm"
        :placeholder="form.placeholder"
      />
    </div>
  </div>
</template>

<script>
/**
 * Use this for multiple input forms with shared border
 */
export default {
  props: {
    /**
     * Use to show input forms. required. Objects' array
     */
    forms: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
};
</script>
