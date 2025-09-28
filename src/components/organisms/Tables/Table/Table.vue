<template>
  <div
    class="relative overflow-auto shadow ring-1 ring-black ring-opacity-5 md:rounded-lg"
  >
    <div
      v-if="get(selected, 'length') > 0"
      class="absolute top-0 left-12 flex h-12 items-center space-x-3 bg-gray-50 sm:left-16"
    >
      <Button content="Bulk Edit" variant="secondary" />
      <Button
        :onClick="onRemove"
        content="Delete Selected"
        variant="secondary"
      />
    </div>
    <table class="min-w-full table-fixed divide-y divide-gray-300">
      <thead class="bg-gray-50">
        <tr>
          <th scope="col" class="relative w-12 px-6 sm:w-16 sm:px-8">
            <input
              type="checkbox"
              class="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500 sm:left-6"
              :checked="get(selected, 'length') === get(records, 'length')"
              :indeterminate="
                get(selected, 'length') !== 0 &&
                get(selected, 'length') !== get(records, 'length')
              "
              @click.stop="onSelected('all')"
            />
          </th>
          <th
            scope="col"
            class="min-w-[12rem] py-3.5 pr-3 text-left text-sm font-semibold text-gray-900"
            v-for="(property, i) in properties"
            :key="i"
          >
            {{ property.label }}
          </th>
          <th
            scope="col"
            class="relative py-3.5 pl-3 pr-4 sm:pr-6"
            v-if="onRowDelete && onRowEdit"
          >
            <span class="sr-only">Edit</span>
          </th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-200 bg-white">
        <tr
          v-for="record in records"
          class="cursor-pointer hover:bg-gray-200"
          :key="record.id"
          @click="onRowClick(record.id)"
          @contextmenu.prevent.stop="onRightClick($event, record.id)"
        >
          <td class="relative w-12 px-6 sm:w-16 sm:px-8">
            <!-- <div class="absolute inset-y-0 left-0 w-0.5 bg-primary-600"></div> -->
            <input
              type="checkbox"
              :checked="selected && selected.find((s) => s.id === record.id)"
              @click.stop="onSelected(record)"
              class="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500 sm:left-6"
            />
          </td>
          <td
            class="whitespace-nowrap py-4 text-sm"
            :class="
              getValue(record, property) === 'Unknown'
                ? 'text-gray-300'
                : 'text-gray-500'
            "
            v-for="(property, i) in properties"
            :key="i"
          >
            <div v-html="getValue(record, property)" />
          </td>
          <td
            class="relative flex justify-end items-center whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6"
            v-if="onRowDelete && onRowEdit"
          >
            <a @click="onRowEdit(record)" class="px-1">
              <Icon
                name="PencilIcon"
                color="primary-600"
                class="hover:text-primary-900"
              />
            </a>
            <a @click="onRowDelete(record)" class="px-1">
              <Icon
                name="TrashIcon"
                color="red-600"
                class="hover:text-red-900"
              />
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Button from "../../../atoms/Button/Button.vue";
import Icon from "../../../atoms/Icons/Icons.vue";
import { get, isArray } from "lodash-es";
/**
 * - Use it to show a simple table with bulk actions, row actions, and icon
 */
export default {
  components: {
    Button,
    Icon,
  },
  props: {
    /**
     * use it for records
     */
    records: {
      type: Array,
      default: () => [],
    },
    /**
     * use it for header properties
     */
    properties: {
      type: Array,
      default: () => [],
    },
    /**
     * use it for action of clicking row
     */
    onRowClick: {
      type: Function,
      default: () => {},
    },
    /**
     * use it for selected rows
     */
    selected: {
      type: Array,
      default: () => [],
    },
    /**
     * use it for checkbox action
     */
    onSelected: {
      type: Function,
      default: () => {},
    },
    /**
     * use it for deleting action of records
     */
    onRemove: {
      type: Function,
      default: () => {},
    },
    /**
     * use it for deleting action of a row
     */
    onRowDelete: {
      type: Function,
      default: () => {},
    },
    /**
     * use it for editing action of a row
     */
    onRowEdit: {
      type: Function,
      default: () => {},
    },
    /**
     * use it for right clicking action
     */
    onRightClick: {
      type: Function,
      default: () => {},
    },
  },
  data() {
    return {
      get,
      isDragActive: false,
      selectedId: null,
    };
  },
  methods: {
    getValue(record, property) {
      const items = property.title.split(".");
      if (items.length === 1) {
        return get(record, items[0], "Unknown");
      } else if (items.length === 2) {
        const child = get(record, items[0]);
        if (child) {
          if (isArray(child)) {
            let data = "";
            child.map(
              (c) => (data += `<li>${get(c, items[1], "Unknown")}</li>`)
            );
            return `<ul class="list-disc">${data}</ul>`;
          } else {
            return get(child, items[1], "Unknown");
          }
        } else {
          return "Unknown";
        }
      } else if (items.length === 3) {
        const child = get(record, items[0]);
        if (child) {
          if (isArray(child)) {
            let data = "";
            child.map((c) => {
              const subchild = get(c, items[1]);
              if (subchild) {
                if (isArray(subchild)) {
                  let text = "";
                  subchild.map(
                    (c) => (text += `<li>${get(c, items[2], "Unknown")}</li>`)
                  );
                  data += `<ul class="list-disc">${text}</ul>`;
                } else {
                  data += get(child, items[2], "Unknown");
                }
              } else {
                data += `<li>Unknown</li>`;
              }
            });
            return `<ul class="list-disc">${data}</ul>`;
          } else {
            const subchild = get(child, items[1]);
            if (subchild) {
              if (isArray(subchild)) {
                let data = "";
                subchild.map(
                  (c) => (data += `<li>${get(c, items[2], "Unknown")}</li>`)
                );
                return `<ul class="list-disc">${data}</ul>`;
              } else {
                return get(subchild, items[2], "Unknown");
              }
            } else {
              return "Unknown";
            }
          }
        } else {
          return "Unknown";
        }
      }
    },
  },
};
</script>
