<template>
	<div class="relative bg-white pb-32 overflow-hidden">
		<div v-for="(item, i) in items" class="relative mt-12" :key='i'>
			<div class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
				<div class="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0" :class="i % 2 === 1 && 'lg:col-start-2'">
					<div>
						<div>
              <span class="h-12 w-12 rounded-md flex items-center justify-center bg-primary-600">
                <Icon :name="item.icon" size="6" color="white" isOutline/>
              </span>
						</div>
						<div class="mt-6">
							<Text size="3xl" weight="extrabold" color="gray-900" class="tracking-tight" :content="item.title"/>
							<Text size="lg" color="gray-500" class="mt-4" :content="item.description"/>
							<div class="mt-6">
								<Button :content="item.btnText"/>
							</div>
						</div>
					</div>
					<div class="mt-8 border-t border-gray-200 pt-6" v-if="item.comment && item.user">
						<blockquote>
							<Text color="gray-500" :content="'&ldquo;' + item.comment + '&rdquo;'"/>
							<footer class="mt-3">
								<div class="flex items-center space-x-3">
									<Avatar isCircle :src="item.user.avatar" :username="item.user.info" size="6"/>
									<Text weight="medium" color="gray-700" :content="item.user.info"/>
								</div>
							</footer>
						</blockquote>
					</div>
					<div class="h-36" v-else></div>
				</div>
				<div class="mt-12 sm:mt-16 lg:mt-0" :class="i % 2 === 1 && 'lg:col-start-1'">
					<div class="lg:relative lg:h-full" :class="i % 2 === 1 ? 'pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0' : 'pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0'">
						<img
								class="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:h-full lg:w-auto lg:max-w-none" :class="i % 2 === 1 ? 'lg:right-0' : 'lg:left-0'" :src="item.screenshot" alt=""/>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Text from '../../../atoms/Text/Text.vue'
import Icon from '../../../atoms/Icons/Icons.vue'
import Button from '../../../atoms/Button/Button.vue'
import Avatar from '../../../atoms/Avatar/Avatar.vue'

/**
 * Use it to show alternating feature section with optional testimonials
 */
export default {
	components: {
		Text, Icon, Button, Avatar
	},
	props: {
		/**
		 * use it for list
		 */
		items: {
			type: Array,
			default: () => []
		}
	}
}
</script>
