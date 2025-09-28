<template>
	<div class="px-4 sm:px-6 lg:px-8">
		<div class="sm:flex sm:items-center">
			<div class="sm:flex-auto">
				<Text size="xl" weight="semibold" color="gray-900" :content="title"/>
				<Text size="sm" color="gray-700" :content="description" class="mt-2"/>
			</div>
			<div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
				<Button :content="btnText" variant="primary" :onClick="onClick"/>
			</div>
		</div>
		<div class="mt-8 flex flex-col">
			<div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
				<div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
					<div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
						<table class="min-w-full divide-y divide-gray-300">
							<thead class="bg-gray-50">
							<tr>
								<th v-for="(item, id) in headers" :key="id" scope="col" class="py-3.5 px-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">{{item.label}}</th>
							</tr>
							</thead>
							<tbody class="divide-y divide-gray-200 bg-white">
							<tr v-for="(item, index) in list" :key="index">
								<td class="whitespace-nowrap py-4 px-3 text-sm sm:pl-6" v-for="(data, i) in headers" :key="i">
									<div class="flex items-center" v-if="data.name === 'user'">
										<div class="h-10 w-10 flex-shrink-0">
											<Avatar :src="item[data.name].image" size="10" isCircle :username="item[data.name].name"/>
										</div>
										<div class="ml-4">
											<Text weight="medium" color="gray-900" :content="item[data.name].name"/>
											<Text color="gray-500" :content="item[data.name].email"/>
										</div>
									</div>
									<div v-else-if="data.name === 'group'">
										<Text size="sm" color="gray-900" :content="item[data.name].title"/>
										<Text size="sm" color="gray-500" :content="item[data.name].department"/>
									</div>
									<Badge v-else-if="data.name === 'status'" :label="item[data.name]" bgColor="green-100" px="2" py="1" texSize="xs" :textColor="'green-800'" class="font-semibold inline-flex leading-5"/>
									<Text v-else-if="data.label" size="sm" color="gray-500" :content="item[data.name]"/>
									<Link v-else content="Edit" color="primary-600" hoverColor="primary-900" size="sm" weight="medium"/>
								</td>
							</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Button from '../../../atoms/Button/Button.vue'
import Link from '../../../atoms/Link/Link.vue'
import Text from '../../../atoms/Text/Text.vue'
import Avatar from '../../../atoms/Avatar/Avatar.vue'
import Badge from '../../../molecules/Badge/Basic/Basic.vue'
import {computed} from 'vue'
import {capitalize} from 'lodash-es'
/**
 * - Use it to show a simple table with avatars and multiline contents
 */
export default {
	components: {
		Button, Link, Text, Avatar, Badge
	},
	data() {
		return {
			/**
			 * Generate dynamic headers according to list item
			 */
			headers: computed(() => {
				let items = [];
				Object.keys(this.list[0]).map(i => {
					let str = i.split(/(?=[A-Z])/);
					str = str.join(' ');
					items.push({name: i, label: capitalize(str)})
				})
				return [...items, {name: 'action', label: ''}]
			})
		}
	},
	props: {
		/**
		 * Use it for table list
		 */
		list: {
			type: Array,
			default: () => []
		},
		/**
		 * Use it for table title
		 */
		title: {
			type: String,
			default: ''
		},
		/**
		 * Use it for table description
		 */
		description: {
			type: String,
			default: ''
		},
		/**
		 * Use it for button text
		 */
		btnText: {
			type: String,
			default: ''
		},
		/**
		 * Use it for button action
		 */
		onClick: {
			type: Function,
			default: () => {}
		}
	}
}
</script>
