<template>
	<ul role="list" class="divide-y divide-gray-200">
		<li v-for="message in messages" :key="message.id" class="relative bg-white py-5 px-4 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-primary-600">
			<div class="flex justify-between space-x-3">
				<div class="min-w-0 flex-1">
					<Link url="#" customClass="block focus:outline-none" leading>
						<span class="absolute inset-0" aria-hidden="true"/>
						<Text size="sm" weight="medium" color="gray-900" customClass="truncate" :content="message.sender" /><br/>
						<Text size="sm" color="gray-500" customClass="truncate" :content="message.subject" />
					</Link>
				</div>
				<Time :datetime="message.datetime" class="flex-shrink-0 whitespace-nowrap text-sm text-gray-500" :content="message.time" />
			</div>
			<div class="mt-1">
				<Text customClass="Line-clamp-2" size="sm" color="gray-600" :content="message.preview" />
			</div>
		</li>
	</ul>
</template>

<script>
	import Link from "../../../atoms/Link/Link.vue";
	import Text from "../../../atoms/Text/Text.vue";
	import Time from "../../../atoms/Time/Time.vue";

	export default {
		components: {
			Link,
			Text,
			Time
		},
		props: {
			messages: {
				type: Array,
				default: () => {}
			}
		}
	}
</script>
