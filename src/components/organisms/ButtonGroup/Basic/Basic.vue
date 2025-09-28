<template>
  <span class="relative z-0 inline-flex shadow-sm rounded-md">
      <div v-if="items.length" class="space-x-2">
          <template v-for="(item, key) in items" :key="key">
              <Button :type="type"
                      :variant="variant"
                      :size="size"
                      :customClass="key === 0 ? 'rounded-l-md' : key === items.length-1 ? 'rounded-r-md' : '' "
                      :content="item"
              />
          </template>
      </div>
  </span>
</template>

<script>
    import Button from "../../../atoms/Button/Button.vue";

    export default {
        name: 'Basic',
        props: {
            /**
             used to provide type like button or submit. By default button is set.
             */
            type: {
                type: String,
                default: "button",
            },
            /**
             used to provide type of array.
             */
            items: {
                type: Array,
                default: () => [],
            },
            /**
             switch between different variants i.e. primary, secondary, success, danger and themed. By default button is
             primary
             */
            variant: {
                type: String,
                default: "primary",
            },
            /**
             Button Group comes in different sizes like  sm, md, lg and xl. By default md is set.
             */
            size: {
                type: String,
                default: "md",
            },

        },
        components: {
            Button
        },
    };
</script>

<style>
    .rounded-none {
        border-radius: 0 !important;
    }

    .rounded-r-md {
        border-top-right-radius: 0.375rem !important;
        border-bottom-right-radius: 0.375rem !important;
    }

    .rounded-l-md {
        border-top-left-radius: 0.375rem !important;
        border-bottom-left-radius: 0.375rem !important;
    }
</style>
