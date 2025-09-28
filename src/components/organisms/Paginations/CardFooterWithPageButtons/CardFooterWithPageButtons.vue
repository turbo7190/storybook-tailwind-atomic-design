<template>
  <div class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6 mt-2">
    <div class="flex-1 flex justify-between items-center sm:hidden">
		<Text size="sm" weight="medium" color="gray-700" hoverBg="gray-50" class="relative inline-flex items-center px-4 py-2 border border-gray-300 rounded-md bg-white" content="Prev" :onClick="prev"/>
      <select :value="perPage" @change="(e) => onChangePerPage(e.target.value)" class="outline-none border block pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 border-gray-300 sm:text-sm rounded-md">
        <option v-for="(option, i) in options" :value="option" :key="i">{{option}}</option>
      </select>
      <Text size="sm" weight="medium" color="gray-700" hoverBg="gray-50" class="relative inline-flex items-center px-4 py-2 border border-gray-300 rounded-md bg-white" content="Next" :onClick="next"/>
    </div>
    <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
      <div class="flex items-center">
        <div>
          <p class="text-sm text-gray-700">
            Showing{{ ' ' }}
			<span class="font-medium">{{showingStart}}</span>
			{{ ' ' }}to{{ ' ' }}
			<span class="font-medium">{{showingEnd}}</span>
			{{ ' ' }}of{{ ' ' }}
			<span class="font-medium">{{totalRecords}}</span>
			{{ ' ' }}results
          </p>
        </div>
        <select :value="perPage" @change="(e) => onChangePerPage(e.target.value)" class="ml-3 outline-none border block pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 border-gray-300 sm:text-sm rounded-md">
          <option v-for="(option, i) in options" :value="option" :key="i">{{option}}</option>
        </select>
      </div>

      <div>
        <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
          <a
             class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium hover:bg-gray-50" @click="prev">
            <Icon name="ChevronLeftIcon" size="5" color="gray-500"/>
          </a>
          <div  v-for="(n, id) in pagination(currentPage, numberOfPages)" :key="id">
			<Text
				v-if="n !== '...'"
				size="sm"
				weight="medium"
				:content="n.toString()"
				:onClick="() => onChangePage(n)"
				:color="currentPage === n ? 'primary-600': 'gray-500'"
				:class="[currentPage === n ? 'z-10 bg-primary-50 border-primary-500' : 'bg-white border-gray-300 hover:bg-gray-50', 'relative inline-flex items-center px-4 py-2 border']"/>
			<Text v-else size="sm" weight="medium" color="gray-700" class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white" content="..."/>
          </div>
          <a
             class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium hover:bg-gray-50" @click="next">
            <Icon name="ChevronRightIcon" size="5" color="gray-500"/>
          </a>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import {computed} from 'vue'
import Icon from '../../../atoms/Icons/Icons.vue'
import Text from '../../../atoms/Text/Text.vue'
import Link from '../../../atoms/Link/Link.vue'
/**
 * - Use it to show card footer pagination with page buttons
 */
export default {
  components: {
    Icon, Text, Link
  },
  props: {
	/**
	 * use it for total count
	 */
	totalRecords: {
		type: Number,
		default: 0
	},
	/**
	 * use it for per page count
	 */
	perPage: {
		type: Number,
		default: 0
	},
	/**
	 * use it to show current page
	 */
	currentPage: {
		type: Number,
		default: 0
	},
	/**
	 * use it to change page
	 */
	onChangePage: {
		type: Function,
		default: () => {}
	},
	/**
	 * use it to handle event of prev or next buttons
	 */
	onChangePerPage: {
		type: Function,
		default: () => {}
	}
  },
  data() {
    return {
      numberOfPages:  Math.ceil(this.totalRecords / this.perPage),
      showingStart: computed(() => {
        return ((this.currentPage - 1) * this.perPage) + 1;
      }),

      showingEnd: computed(() => {
        const endValue = ((this.currentPage - 1) * this.perPage) + this.perPage
        return (endValue < this.totalRecords) ? endValue : this.totalRecords;
      }),
      options: [10, 20, 30, 100, 200]
    }
  },
  watch: {
    totalRecords: function (val) {
      this.numberOfPages =  Math.ceil(val / this.perPage)
    },
    perPage: function (val) {
      this.numberOfPages =  Math.ceil(this.totalRecords / val)
    }
  },
  methods: {
    prev() {
        if (this.currentPage > 1) this.onChangePage(this.currentPage - 1)
    },
    next() {
        if (this.numberOfPages > this.currentPage) this.onChangePage(this.currentPage + 1)
    },
    pagination(c, m) {
      var current = c, last = m, delta = 2, left = current - delta, right = current + delta + 1, range = [], rangeWithDots = [], l;
      for (let i = 1; i <= last; i++) {
        if (i == 1 || i == last || i >= left && i < right) {
          range.push(i);
        }
      }

      for (let i of range) {
        if (l) {
          if (i - l === 2) {
            rangeWithDots.push(l + 1);
          } else if (i - l !== 1) {
            rangeWithDots.push('...')
          }
        }
        rangeWithDots.push(i);
        l = i;
      }
      return rangeWithDots
    }
  }
}
</script>
