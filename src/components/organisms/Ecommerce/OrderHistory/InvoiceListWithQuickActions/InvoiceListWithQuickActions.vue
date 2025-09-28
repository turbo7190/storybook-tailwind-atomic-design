<template>
  <div class="bg-white">
    <div class="max-w-3xl mx-auto px-4 py-16 sm:px-6 sm:py-24">
      <div class="max-w-xl">
        <Text size="2xl" weight="extrabold" color="gray-900" class="tracking-tight sm:text-3xl" :content="title"/>
				<Text size="sm" weight="normal" color="gray-500" class="mt-2" :content="description"/>
      </div>

      <div class="mt-12 space-y-16 sm:mt-16">
        <section v-for="order in orders" :key="order.number" :aria-labelledby="`${order.number}-heading`">
          <div class="space-y-1 md:flex md:items-baseline md:space-y-0 md:space-x-4">
            <Text size="lg" weight="medium" color="gray-900" class="md:flex-shrink-0" :content="`Order #${order.number}`"/>
            <div class="space-y-5 md:flex-1 md:min-w-0 sm:flex sm:items-baseline sm:justify-between sm:space-y-0">
              <Text size="sm" weight="medium" color="gray-500" :content="order.status"/>
              <div class="flex text-sm font-medium">
                <Link color="primary-600" hoverColor="primary-500" size="sm" weight="medium" content="Manage Order" :url="order.href"/>
                <div class="border-l border-gray-200 ml-4 pl-4 sm:ml-6 sm:pl-6">
                  <Link color="primary-600" hoverColor="primary-500" size="sm" weight="medium" content="View Invoice"/>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-6 -mb-6 flow-root border-t border-gray-200 divide-y divide-gray-200">
            <div v-for="product in order.products" :key="product.id" class="py-6 sm:flex">
              <div class="flex space-x-4 sm:min-w-0 sm:flex-1 sm:space-x-6 lg:space-x-8">
                <img :src="product.imageSrc" :alt="product.imageAlt" class="flex-none w-20 h-20 rounded-md object-center object-cover sm:w-48 sm:h-48" />
                <div class="pt-1.5 min-w-0 flex-1 sm:pt-0">
                  <Link color="gray-900" size="sm" weight="medium" :content="product.name" :url="product.href"/>
                  <p class="text-sm text-gray-500 truncate">
                    <span>{{ product.color }}</span>
                    {{ ' ' }}
                    <span class="mx-1 text-gray-400" aria-hidden="true">&middot;</span>
                    {{ ' ' }}
                    <span>{{ product.size }}</span>
                  </p>
                  <Text weight="medium" color="gray-900" class="mt-1" :content="product.price"/>
                </div>
              </div>
              <div class="mt-6 space-y-4 sm:mt-0 sm:ml-6 sm:flex-none sm:w-40">
                <Button v-for="button in buttons" :content="button.label" :key="button.label" :variant="button.type" :onClick="button.action" class="rounded-md w-32"/>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import Text from '../../../../atoms/Text/Text.vue'
import Button from '../../../../atoms/Button/Button.vue'
import Link from '../../../../atoms/Link/Link.vue'
import Icon from '../../../../atoms/Icons/Icons.vue'
/**
 * - Use it to show invoice list with quick actions
 */
export default {
	components: {
		Text, Button, Link, Icon
	},
	props: {
		/**
		 * use it for title
		 */
		title: {
			type: String,
			default: ''
		},
		/**
		 * use it for description
		 */
		description: {
			type: String,
			default: ''
		},
		/**
		 * use it for orders list
		 */
		orders: {
			type: Array,
			default: () => []
		},
		/**
		 * use it for buttons list
		 */
		buttons: {
			type: Array,
			default: () => []
		},
	},
}
</script>
