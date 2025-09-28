
<template>
	<Combobox as="div" v-model="selectedItem">
		<ComboboxLabel class="block text-base font-semibold text-gray-700 mb-2">{{label}}</ComboboxLabel>
		<div class="relative mt-1">
			<ComboboxInput class="w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 sm:text-sm" @change="query = $event.target.value" :display-value="(item) => item && item.label" />
			<ComboboxButton class="absolute inset-y-0 right-0 flex listData-center rounded-r-md px-2 focus:outline-none">
				<Icon name="ChevronUpDownIcon" size="5" color="gray-400" class="mt-2"/>
			</ComboboxButton>

			<ComboboxOptions v-if="filteredItems() && filteredItems().length > 0" class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
				<ComboboxOption v-for="item in filteredItems()" :key="item && item.id" :value="item" as="template" v-slot="{ active, selected }">
					<li :class="['relative cursor-default select-none py-2 pl-3 pr-9', active ? 'bg-primary-600 text-white' : 'text-gray-900']">
						<Text :color="active ? 'white' : 'gray-900'" :weight="selected ? 'semibold' : 'normal'" class="block truncate" :content="item && item.label"/>
						<span v-if="selected" :class="['absolute inset-y-0 right-0 flex listData-center pr-4']">
							<Icon name="CheckIcon" size="5" :class="active ? 'white' : 'primary-600'"/>
						</span>
					</li>
				</ComboboxOption>
			</ComboboxOptions>
		</div>
	</Combobox>
</template>

<script>
import { ref } from 'vue'
import Icon from '../../../atoms/Icons/Icons.vue'
import Text from '../../../atoms/Text/Text.vue'
import {
	Combobox,
	ComboboxButton,
	ComboboxInput,
	ComboboxLabel,
	ComboboxOption,
	ComboboxOptions,
} from '@headlessui/vue'
/**
 * - Use it to show an auto complete form
 */
export default {
	components: {
		Combobox,
		ComboboxButton,
		ComboboxInput,
		ComboboxLabel,
		ComboboxOption,
		ComboboxOptions,
		Icon, Text
	},
  props: {
	/**
	 * Use it for label
	 */
	label: {
		type: String,
		default: ''
	},
	/**
	 * Use it for list data
	 */
	listData: {
		type: Array,
		default: () => []
	},
	/**
	 * Use it for selecting action
	 */
	handleSelectFn: {
		type: Function,
		default: () => {}
	},
	/**
	 * Use it for changing relation
	 */
	onChangeRelation: {
		type: Function,
		default: () => {}
	}
  },
  data() {
    return {
      query: ref(''),
      selectedItem: null,
    }
  },
  watch: {
	  selectedItem: function (val) {
		  if (val?.id === 0) {
			  this.onChangeRelation(this.label)
		  } else {
			  this.handleSelectFn(val)
		  }
	  }
  },
  methods: {
    filteredItems() {
      let items = (this.query === '' ? this.listData : (
		  this.listData.filter((item) => item.label?.toLowerCase().includes(this.query?.toLowerCase())))[0]?.id === 0 ? this.listData.filter((item) => item.label?.toLowerCase().includes(this.query?.toLowerCase())) :
		  [this.listData[0], ...this.listData.filter((item) => item.label?.toLowerCase().includes(this.query?.toLowerCase()))]
		  ) || []
	  return items;
    }
  }
}
</script>
