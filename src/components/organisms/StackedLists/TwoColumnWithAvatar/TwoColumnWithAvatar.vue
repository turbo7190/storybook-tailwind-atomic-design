<template>
	<div class="overflow-hidden bg-white shadow sm:rounded-md">
		<ul role="list" class="divide-y divide-gray-200">
			<li v-for="application in applications" :key="application.applicant.email">
				<Link :leading="true" :url="application.href" customClass="block hover:bg-gray-50" >
					<div class="flex items-center px-4 py-4 sm:px-6">
						<div class="flex items-center flex-1 min-w-0">
							<div class="flex-shrink-0">
								<Image :src="application.applicant.imageUrl" :height="12" :width="12" rounded="full" />
							</div>
							<div class="flex-1 min-w-0 px-4 md:grid md:grid-cols-2 md:gap-4">
								<div>
									<Text :content="application.applicant.name" size="sm" weight="medium" color="primary-600" customClass="truncate" />
									<div class="flex items-center mt-2 text-sm text-gray-500">
										<Icon name="EnvelopeIcon" customClass="flex-shrink-0 mr-1.5" :width="5" :hegith="5" color="gray-400" :ariaHidden="true"  />
										<Text :content="application.applicant.email" customClass="truncate" />
									</div>
								</div>
								<div class="hidden md:block">
									<div>
										<Text content="Applied on" size="sm" color="gray-900"/>{{ ' ' }}
										<Time :datetime="application.date" :content="application.dateFull" size="sm" color="gray-900" />
										<div class="flex items-center mt-2" >
											<Icon name="CheckCircleIcon" customClass="flex-shrink-0 mr-1.5" :width="5" :height="5" color="green-400" :ariaHidden="true" />
											<Text :content="application.stage" size="sm" color="gray-500" />
										</div>
									</div>
								</div>
							</div>
						</div>
						<div>
							<Icon name="ChevronRightIcon" :width="5" :height="5" color="gray-400" :ariaHidden="true" />
						</div>
					</div>
				</Link>
			</li>
		</ul>
	</div>
</template>

<script>
import Image from "../../../atoms/Image/Image.vue";
import Text from "../../../atoms/Text/Text.vue";
import Link from "../../../atoms/Link/Link.vue";
import Time from "../../../atoms/Time/Time.vue";
import Icon from "../../../atoms/Icons/Icons.vue";

export default {
	components: {
		Image,
		Text,
		Link,
		Time,
		Icon
	},
	props: {
		applications: {
			type: Array,
			default: () => {}
		}
	}
}
</script>
