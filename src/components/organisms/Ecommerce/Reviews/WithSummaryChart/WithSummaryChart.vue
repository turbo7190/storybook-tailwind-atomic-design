<template>
	<div class="bg-white">
		<div
				class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:py-32 lg:px-8 lg:grid lg:grid-cols-12 lg:gap-x-8">
			<div class="lg:col-span-4">
				<Text
					:content="heading"
					color="gray-900"
					size="2xl"
					weight="extrabold"
					customClass="tracking-tight"
				/>

				<div class="mt-3 flex items-center">
					<div>
						<div class="flex items-center">
							<StarIcon v-for="rating in [0, 1, 2, 3, 4]" :key="rating"
												:class="[content.average > rating ? 'text-yellow-400' : 'text-gray-300', 'flex-shrink-0 h-5 w-5']"
												aria-hidden="true"/>
						</div>
						<p class="sr-only">{{ content.average }} out of 5 stars</p>
					</div>
					<Text
						:content="'Based on ' + content.totalCount + ' reviews'"
						color="gray-900"
						size="sm"
						customClass="ml-2"
					/>
				</div>

				<div class="mt-6">

					<Text
						content="Review data"
						customClass="sr-only"
					/>

					<dl class="space-y-3">
						<div v-for="count in content.counts" :key="count.rating" class="flex items-center text-sm">
							<dt class="flex-1 flex items-center">
								<p class="w-3 font-medium text-gray-900">{{ count.rating }}<span class="sr-only"> star reviews</span>
								</p>
								<div aria-hidden="true" class="ml-1 flex-1 flex items-center">
									<StarIcon :class="[count.count > 0 ? 'text-yellow-400' : 'text-gray-300', 'flex-shrink-0 h-5 w-5']"
														aria-hidden="true"/>

									<div class="ml-3 relative flex-1">
										<div class="h-3 bg-gray-100 border border-gray-200 rounded-full"/>
										<div v-if="count.count > 0"
												 class="absolute inset-y-0 bg-yellow-400 border border-yellow-400 rounded-full"
												 :style="{ width: `calc(${count.count} / ${content.totalCount} * 100%)` }"/>
									</div>
								</div>
							</dt>
							<dd class="ml-3 w-10 text-right tabular-nums text-sm text-gray-900">
								{{ Math.round((count.count / content.totalCount) * 100) }}%
							</dd>
						</div>
					</dl>
				</div>

				<div class="mt-10">
					<Text
						:content="content.subHeading"
						size="lg"
						color="gray-900"
					/>
					<Text
						:content="content.description"
						size="sm"
						color="gray-600"
						customClass="mt-1"
					/>
					<Link
						size="sm"
						:content="content.linkText"
						color="gray-900"
						hoverBg="gray-50"
						customClass="mt-6 inline-flex w-full bg-white border border-gray-300 rounded-md py-2 px-8 items-center justify-center sm:w-auto lg:w-full"
					/>
				</div>
			</div>

			<div class="mt-16 lg:mt-0 lg:col-start-6 lg:col-span-7">
				<Text
					content="Recent reviews"
					customClass="sr-only"
				/>
				<div class="flow-root">
					<div class="-my-12 divide-y divide-gray-200">
						<div v-for="item in items" :key="item.id" class="py-12">
							<div class="flex items-center">
								<Image :src="item.avatarSrc" :alt="`${item.author}.`" customClass="h-12 w-12 rounded-full"/>
								<div class="ml-4">
									<Text
										:content="item.author"
										size="sm"
										weight="bold"
										color="gray-900"
									/>
									<div class="mt-1 flex items-center">
										<StarIcon v-for="rating in [0, 1, 2, 3, 4]" :key="rating"
															:class="[item.rating > rating ? 'text-yellow-400' : 'text-gray-300', 'h-5 w-5 flex-shrink-0']"
															aria-hidden="true"/>
									</div>
									<p class="sr-only">{{ item.rating }} out of 5 stars</p>
								</div>
							</div>

							<div class="mt-4 space-y-6 text-base italic text-gray-600" v-html="item.content"/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import {StarIcon} from '@heroicons/vue/24/solid'
import Image from "../../../../atoms/Image/Image.vue";
import Text from "../../../../atoms/Text/Text.vue";
import Link from "../../../../atoms/Link/Link.vue";
export default {
	components: {
		Image,
		Text,
		Link,
		StarIcon
	},
	props: ['heading','content','items']
}
</script>
