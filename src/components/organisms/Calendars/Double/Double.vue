<template>
	<div>
		<div class="relative grid grid-cols-1 gap-x-14 md:grid-cols-2">
			<button type="button"
							class="absolute -top-1 -left-1.5 flex items-center justify-center p-1.5">
				<Icon name="ChevronLeftIcon" size="5" color="gray-400" class="hover:text-gray-500"/>
			</button>
			<button type="button"
							class="absolute -top-1 -right-1.5 flex items-center justify-center p-1.5">
				<Icon name="ChevronRightIcon" size="5" color="gray-400" class="hover:text-gray-500"/>
			</button>
			<section v-for="(month, monthIdx) in months" :key="monthIdx" :class="[monthIdx === months.length - 1 && 'hidden md:block', 'text-center']">
				<Text weight="semibold" color="gray-900" :content="month.name"/>
				<div class="mt-6 grid grid-cols-7 text-xs leading-6 text-gray-500">
					<div v-for="(week, i) in weeks" :key="i">{{week}}</div>
				</div>
				<div class="isolate mt-2 grid grid-cols-7 gap-px rounded-lg bg-gray-200 text-sm shadow ring-1 ring-gray-200">
					<button v-for="(day, dayIdx) in month.days" :key="day.date" type="button"
									:class="[day.isCurrentMonth ? 'bg-white text-gray-900' : 'bg-gray-50 text-gray-400', dayIdx === 0 && 'rounded-tl-lg', dayIdx === 6 && 'rounded-tr-lg', dayIdx === month.days.length - 7 && 'rounded-bl-lg', dayIdx === month.days.length - 1 && 'rounded-br-lg', 'relative py-1.5 hover:bg-gray-100 focus:z-10']">
						<time :datetime="day.date"
									:class="[day.isToday && 'bg-primary-600 font-semibold text-white', 'mx-auto flex h-7 w-7 items-center justify-center rounded-full']">
							{{ day.date.split('-').pop().replace(/^0/, '') }}
						</time>
					</button>
				</div>
			</section>
		</div>
		<section class="mt-12">
			<Text weight="semibold" color="gray-900" content="Upcoming events"/>
			<ol class="mt-2 divide-y divide-gray-200 text-sm leading-6 text-gray-500">
				<li v-for="(event, i) in events" :key="i" class="py-4 sm:flex">
					<Text size="sm" color="gray-500" :content="event.date" class="w-28 flex-none"/>
					<Text size="sm" :color="event.exist ? 'gray-900': 'gray-500'" :content="event.title" :class="[event.exist ? 'font-semibold': '', 'mt-2 flex-auto sm:mt-0']"/>
					<Text size="sm" color="gray-500" :content="event.time" class="flex-none sm:ml-6"/>
				</li>
			</ol>
		</section>
	</div>
</template>

<script>
import Text from '../../../atoms/Text/Text.vue'
import Icon from '../../../atoms/Icons/Icons.vue'
/**
 * - Use it to show double months view with events
 */
export default {
	components: {
		Text, Icon
	},
	data() {
		return {
			weeks: ['M', 'T', 'W', 'T', 'F', 'S', 'S']
		}
	},
	props: {
		/**
		 * use it to show double months
		 */
		months: {
			type: Array,
			default: () => []
		},
		/**
		 * use it to show events
		 */
		events: {
			type: Array,
			default: () => []
		}
	}
}
</script>
