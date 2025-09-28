<template>
	<div class="h-screen overflow-scroll bg-white">
		<div class="px-4 py-16 mx-auto sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
			<!-- Product -->
			<div class="lg:grid lg:grid-rows-1 lg:grid-cols-7 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16">
				<!-- Product image -->
				<div class="lg:row-end-1 lg:col-span-4">
					<div class="overflow-hidden bg-gray-100 rounded-lg aspect-w-4 aspect-h-3">
						<Image :src="product.imageSrc" :alt="product.imageAlt" customClass="object-center object-cover" width="full" height="full" />
					</div>
				</div>

				<!-- Product details -->
				<div
					class="max-w-2xl mx-auto mt-14 sm:mt-16 lg:max-w-none lg:mt-0 lg:row-end-2 lg:row-span-2 lg:col-span-3">
					<div class="flex flex-col-reverse">
						<div class="mt-4">
							<Text size="2xl" weight="extrabold" color="gray-900"
								customClass="tracking-tight sm:text-3xl" :content="product.name" />

							<Text id="information-heading" customClass="sr-only" content="Product information" />
							<div class="mt-2 text-sm text-gray-500">
								Version {{ product.version.name }} (Updated
								<Time :datetime="product.version.datetime" :content="product.version.date" />)
							</div>
						</div>

						<div>
							<Text customClass="sr-only" content="Review" />
							<div class="flex items-center">
								<Icon name="StarIcon" v-for="rating in [0, 1, 2, 3, 4]" :key="rating"
									:customClass="`${reviews.average > rating ? 'text-yellow-400' : 'text-gray-300'} 'h-5 w-5 flex-shrink-0'`"
									:ariaHidden="true" />
							</div>
							<Text customClass="sr-only" :content="`${reviews.average} out of 5 stars`" />
						</div>
					</div>

					<Text color="gray-500" customClass="mt-6" :content="product.description" />

					<div class="grid grid-cols-1 mt-10 gap-x-6 gap-y-4 sm:grid-cols-2">
						<Primary type="button"
							customClass="w-full bg-primary-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-primary-500"
							:label="`Pay ${product.price}`" />
						<Button type="button"
							customClass="w-full bg-primary-50 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-primary-700 hover:bg-primary-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-primary-500"
							content="Preview" />
					</div>

					<div class="pt-10 mt-10 border-t border-gray-200">
						<Text size="sm" weight="medium" color="gray-900" content="Highlights" />
						<div class="mt-4 prose-sm prose text-gray-500">
							<ul role="list">
								<li v-for="highlight in product.highlights" :key="highlight">{{ highlight }}</li>
							</ul>
						</div>
					</div>

					<div class="pt-10 mt-10 border-t border-gray-200">
						<Text size="sm" weight="medium" color="gray-900" content="License" />
						<div class="mt-4 text-sm text-gray-500">{{ license.summary }}
							<Link :url="license.href" weight="medium" color="primary-600" hoverColor="primary-500" content="full license" />
						</div>
					</div>

					<div class="pt-10 mt-10 border-t border-gray-200">
						<Text size="sm" weight="medium" color="gray-900" content="Share" />
						<ul role="list" class="flex items-center mt-4 space-x-6">
							<li>
								<Link :leading="true" url="#"
									customClass="flex items-center justify-center w-6 h-6"
									color="gray-400" hoverColor="gray-500">
									<Text customClass="sr-only" content="Share on Facebook" />
									<svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
										<path fill-rule="evenodd"
											d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
											clip-rule="evenodd" />
									</svg>
								</Link>
							</li>
							<li>
								<Link :leading="true" url="#"
									customClass="flex items-center justify-center w-6 h-6"
									color="gray-400"
									hoverColor="gray-500">
									<Text customClass="sr-only" content="Share on Instagram" />
									<svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
										<path fill-rule="evenodd"
											d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
											clip-rule="evenodd" />
									</svg>
								</Link>
							</li>
							<li>
								<Link :leading="true" url="#"
									class="flex items-center justify-center w-6 h-6 "
									color="gray-400" hoverColor="gray-500">
									<Text customClass="sr-only" content="Share on Twitter" />
									<svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
										<path
											d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
									</svg>
								</Link>
							</li>
						</ul>
					</div>
				</div>

				<div class="w-full max-w-2xl mx-auto mt-16 lg:max-w-none lg:mt-0 lg:col-span-4">
					<TabGroup as="div">
						<div class="border-b border-gray-200">
							<TabList class="flex -mb-px space-x-8">
								<Tab as="template" v-slot="{ selected }">
									<Button
										:customClass="`${selected ? 'border-primary-600 text-primary-600' : 'border-transparent text-gray-700 hover:text-gray-800 hover:border-gray-300'} whitespace-nowrap py-6 border-b-2 font-medium text-sm`"
										content="Customer Reviews" />
								</Tab>
								<Tab as="template" v-slot="{ selected }">
									<Button
										:customClass="`${selected ? 'border-primary-600 text-primary-600' : 'border-transparent text-gray-700 hover:text-gray-800 hover:border-gray-300'} whitespace-nowrap py-6 border-b-2 font-medium text-sm`"
										content="FAQ" />
								</Tab>
								<Tab as="template" v-slot="{ selected }">
									<Button
										:customClass="`${selected ? 'border-primary-600 text-primary-600' : 'border-transparent text-gray-700 hover:text-gray-800 hover:border-gray-300'} whitespace-nowrap py-6 border-b-2 font-medium text-sm`"
										content="License" />
								</Tab>
							</TabList>
						</div>
						<TabPanels as="template">
							<TabPanel class="-mb-10">
								<Text customClass="sr-only" content="Customer Reviews" />

								<div v-for="(review, reviewIdx) in reviews.featured" :key="review.id"
									class="flex space-x-4 text-sm text-gray-500">
									<div class="flex-none py-10">
										<Image :src="review.avatarSrc" alt=""
											customClass="bg-gray-100 rounded-full" :width="10" :height="10" />
									</div>
									<div :class="[reviewIdx === 0 ? '' : 'border-t border-gray-200', 'py-10']">
										<Text weight="medium" color="gray-900" :content="review.author" />
										<div>
											<Time :datetime="review.datetime" :content="review.date" />
										</div>

										<div class="flex items-center mt-4">
											<Icon name="StarIcon" v-for="rating in [0, 1, 2, 3, 4]" :key="rating"
												:customClass="`${review.rating > rating ? 'text-yellow-400' : 'text-gray-300'} 'h-5 w-5 flex-shrink-0'`"
												:ariaHidden="true" />
										</div>
										<Text customClass="sr-only" :content="`${review.rating} out of 5 stars`" />

										<div class="mt-4 prose-sm prose text-gray-500 max-w-none"
											v-html="review.content" />
									</div>
								</div>
							</TabPanel>

							<TabPanel as="dl" class="text-sm text-gray-500">
								<Text customClass="sr-only" content="Frequently Asked Questions" />

								<template v-for="faq in faqs" :key="faq.question">
									<Text customClass="mt-10" weight="medium" color="gray-900" :content="faq.question" />
									<dd class="mt-2 prose-sm prose text-gray-500 max-w-none">
										<Text :content="faq.answer" />
									</dd>
								</template>
							</TabPanel>

							<TabPanel class="pt-10">
								<Text customClass="sr-only" content="License" />

								<div class="prose-sm prose text-gray-500 max-w-none" v-html="license.content" />
							</TabPanel>
						</TabPanels>
					</TabGroup>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/vue'
import Text from '../../../../atoms/Text/Text.vue'
import Image from '../../../../atoms/Image/Image.vue'
import Icon from '../../../../atoms/Icons/Icons.vue'
import Button from '../../../../atoms/Button/Button.vue'
import Primary from '../../../../molecules/Button/Primary/Primary.vue'
import Link from '../../../../atoms/Link/Link.vue'
import Time from '../../../../atoms/Time/Time.vue'


export default {
	components: {
		Tab,
		TabGroup,
		TabList,
		TabPanel,
		TabPanels,
		Text,
		Image,
		Icon,
		Button,
		Primary,
		Link,
		Time
	},
	props: {
		product: {
			type: Object,
			default: () => {}
		},
		reviews: {
			type: Object,
			default: () => {}
		},
		faqs: {
			type: Object,
			default: () => {}
		},
		license: {
			type: Object,
			default: () => {}
		},
	},
}
</script>
