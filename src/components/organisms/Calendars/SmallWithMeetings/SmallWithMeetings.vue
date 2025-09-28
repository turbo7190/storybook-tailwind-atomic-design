<template>
	<div>
		<Text size="lg" weight="semibold" color="gray-900" content="Upcoming meetings"/>
		<div class="lg:grid lg:grid-cols-12 lg:gap-x-16">
			<div class="mt-10 text-center lg:col-start-8 lg:col-end-13 lg:row-start-1 lg:mt-9 xl:col-start-9">
				<div class="flex items-center text-gray-900">
					<button type="button"
									class="-m-1.5 flex flex-none items-center justify-center p-1.5">
						<Icon name="ChevronLeftIcon" size="5" color="gray-400" class="hover:text-gray-500"/>
					</button>
					<div class="flex-auto font-semibold">January</div>
					<button type="button"
									class="-m-1.5 flex flex-none items-center justify-center p-1.5">
						<Icon name="ChevronRightIcon" size="5" color="gray-400" class="hover:text-gray-500"/>
					</button>
				</div>
				<div class="mt-6 grid grid-cols-7 text-xs leading-6 text-gray-500">
					<div v-for="(week, i) in weeks" :key="i">{{week}}</div>
				</div>
				<div class="isolate mt-2 grid grid-cols-7 gap-px rounded-lg bg-gray-200 text-sm shadow ring-1 ring-gray-200">
					<button v-for="(day, dayIdx) in days" :key="day.date" type="button"
									:class="['py-1.5 hover:bg-gray-100 focus:z-10', day.isCurrentMonth ? 'bg-white' : 'bg-gray-50', (day.isSelected || day.isToday) && 'font-semibold', day.isSelected && 'text-white', !day.isSelected && day.isCurrentMonth && !day.isToday && 'text-gray-900', !day.isSelected && !day.isCurrentMonth && !day.isToday && 'text-gray-400', day.isToday && !day.isSelected && 'text-primary-600', dayIdx === 0 && 'rounded-tl-lg', dayIdx === 6 && 'rounded-tr-lg', dayIdx === days.length - 7 && 'rounded-bl-lg', dayIdx === days.length - 1 && 'rounded-br-lg']">
						<time :datetime="day.date"
									:class="['mx-auto flex h-7 w-7 items-center justify-center rounded-full', day.isSelected && day.isToday && 'bg-primary-600', day.isSelected && !day.isToday && 'bg-gray-900']">
							{{ day.date.split('-').pop().replace(/^0/, '') }}
						</time>
					</button>
				</div>
				<Button content="Add event" custom-class="w-full mt-5 rounded-md"/>
			</div>
			<ol class="mt-4 divide-y divide-gray-100 text-sm leading-6 lg:col-span-7 xl:col-span-8">
				<li v-for="meeting in meetings" :key="meeting.id" class="relative flex space-x-6 py-6 xl:static">
					<Avatar :src="meeting.imageUrl" :username="meeting.name" size="14" isCircle/>
					<div class="flex-auto">
						<Text weight="semibold" color="gray-900" class="pr-10 xl:pr-0" :content="meeting.name"/>
						<dl class="mt-2 flex flex-col text-gray-500 xl:flex-row">
							<div class="flex items-start space-x-3">
								<dt class="mt-0.5">
									<Icon name="CalendarIcon" size="5" color="gray-400"/>
								</dt>
								<dd>
									<time :datetime="meeting.datetime">{{ meeting.date }} at {{ meeting.time }}</time>
								</dd>
							</div>
							<div
									class="mt-2 flex items-start space-x-3 xl:mt-0 xl:ml-3.5 xl:border-l xl:border-gray-400 xl:border-opacity-50 xl:pl-3.5">
								<dt class="mt-0.5">
									<Icon name="MapPinIcon" size="5" color="gray-400"/>
								</dt>
								<dd>{{ meeting.location }}</dd>
							</div>
						</dl>
					</div>
					<Menu as="div" class="absolute top-6 right-0 xl:relative xl:top-auto xl:right-auto xl:self-center">
						<div>
							<MenuButton class="-m-2 flex items-center rounded-full p-2">
								<Icon name="DotsHorizontalIcon" size="5" color="gray-500" class="hover:text-gray-600"/>
							</MenuButton>
						</div>

						<transition enter-active-class="transition ease-out duration-100"
												enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
												leave-active-class="transition ease-in duration-75"
												leave-from-class="transform opacity-100 scale-100"
												leave-to-class="transform opacity-0 scale-95">
							<MenuItems
									class="focus:outline-none absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
								<div class="py-1">
									<MenuItem v-slot="{ active }">
										<Link size="sm" :color="active ? 'gray-900' : 'gray-700'" content="Edit" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2']"/>
									</MenuItem>
									<MenuItem v-slot="{ active }">
										<Link size="sm" :color="active ? 'gray-900' : 'gray-700'" content="Cancel" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2']"/>
									</MenuItem>
								</div>
							</MenuItems>
						</transition>
					</Menu>
				</li>
			</ol>
		</div>
	</div>
</template>

<script>
import {Menu, MenuButton, MenuItem, MenuItems} from '@headlessui/vue'
import Avatar from '../../../atoms/Avatar/Avatar.vue'
import Text from '../../../atoms/Text/Text.vue'
import Button from '../../../atoms/Button/Button.vue'
import Icon from '../../../atoms/Icons/Icons.vue'
import Link from '../../../atoms/Link/Link.vue'
/**
 * - Use it to show small calendar with meetings
 */
export default {
	components: {
		Menu,
		MenuButton,
		MenuItem,
		MenuItems,
		Avatar,
		Text,
		Button,
		Icon,
		Link,
	},
	props: {
		/**
		 * use it to show days
		 */
		days: {
			type: Array,
			default: () => []
		},
		/**
		 * use it to show meetings
		 */
		meetings: {
			type: Array,
			default: () => []
		}
	},
	data() {
		return {
			weeks: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
		}
	}
}
</script>
