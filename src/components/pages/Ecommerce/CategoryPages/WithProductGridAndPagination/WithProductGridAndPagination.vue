<template>
  <div class="bg-white h-screen overflow-scroll">
    <!-- Mobile menu -->
    <TransitionRoot as="template" :show="open">
      <Dialog
        as="div"
        class="fixed inset-0 flex z-40 lg:hidden"
        @close="open = false"
      >
        <TransitionChild
          as="template"
          enter="transition-opacity ease-linear duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <DialogOverlay class="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <TransitionChild
          as="template"
          enter="transition ease-in-out duration-300 transform"
          enter-from="-translate-x-full"
          enter-to="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leave-from="translate-x-0"
          leave-to="-translate-x-full"
        >
          <div
            class="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto"
          >
            <div class="px-4 pt-5 pb-2 flex">
              <button
                type="button"
                class="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"
                @click="open = false"
              >
                <span class="sr-only">Close menu</span>
                <XMarkIcon class="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <!-- Links -->
            <TabGroup as="div" class="mt-2">
              <div class="border-b border-gray-200">
                <TabList class="-mb-px flex px-4 space-x-8">
                  <Tab
                    as="template"
                    v-for="category in navigation.categories"
                    :key="category.name"
                    v-slot="{ selected }"
                  >
                    <button
                      :class="[
                        selected
                          ? 'text-primary-600 border-primary-600'
                          : 'text-gray-900 border-transparent',
                        'flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium',
                      ]"
                    >
                      {{ category.name }}
                    </button>
                  </Tab>
                </TabList>
              </div>
              <TabPanels as="template">
                <TabPanel
                  v-for="category in navigation.categories"
                  :key="category.name"
                  class="pt-10 pb-8 px-4 space-y-10"
                >
                  <div class="space-y-4">
                    <div
                      v-for="(item, itemIdx) in category.featured"
                      :key="itemIdx"
                      class="group relative aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden"
                    >
                      <img
                        :src="item.imageSrc"
                        :alt="item.imageAlt"
                        class="object-center object-cover group-hover:opacity-75"
                      />
                      <div class="flex flex-col justify-end">
                        <div
                          class="p-4 bg-white bg-opacity-60 text-base sm:text-sm"
                        >
                          <a
                            :href="item.href"
                            class="font-medium text-gray-900"
                          >
                            <span class="absolute inset-0" aria-hidden="true" />
                            {{ item.name }}
                          </a>
                          <p
                            aria-hidden="true"
                            class="mt-0.5 text-gray-700 sm:mt-1"
                          >
                            Shop now
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    v-for="(column, columnIdx) in category.sections"
                    :key="columnIdx"
                    class="space-y-10"
                  >
                    <div v-for="section in column" :key="section.name">
                      <p
                        :id="`${category.id}-${section.id}-heading-mobile`"
                        class="font-medium text-gray-900"
                      >
                        {{ section.name }}
                      </p>
                      <ul
                        role="list"
                        :aria-labelledby="`${category.id}-${section.id}-heading-mobile`"
                        class="mt-6 flex flex-col space-y-6"
                      >
                        <li
                          v-for="item in section.items"
                          :key="item.name"
                          class="flow-root"
                        >
                          <a
                            :href="item.href"
                            class="-m-2 p-2 block text-gray-500"
                          >
                            {{ item.name }}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </TabPanel>
              </TabPanels>
            </TabGroup>

            <div class="border-t border-gray-200 py-6 px-4 space-y-6">
              <div
                v-for="page in navigation.pages"
                :key="page.name"
                class="flow-root"
              >
                <a
                  :href="page.href"
                  class="-m-2 p-2 block font-medium text-gray-900"
                  >{{ page.name }}</a
                >
              </div>
            </div>

            <div class="border-t border-gray-200 py-6 px-4">
              <a href="#" class="-m-2 p-2 flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2099&q=80"
                  alt=""
                  class="w-5 h-auto block flex-shrink-0"
                />
                <span class="ml-3 block text-base font-medium text-gray-900">
                  CAD
                </span>
                <span class="sr-only">, change currency</span>
              </a>
            </div>
          </div>
        </TransitionChild>
      </Dialog>
    </TransitionRoot>

    <header class="relative bg-white">
      <nav aria-label="Top" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="border-b border-gray-200">
          <div class="h-16 flex items-center justify-between">
            <div class="flex-1 flex items-center lg:hidden">
              <button
                type="button"
                class="-ml-2 bg-white p-2 rounded-md text-gray-400"
                @click="open = true"
              >
                <span class="sr-only">Open menu</span>
                <Bars3Icon class="h-6 w-6" aria-hidden="true" />
              </button>

              <a href="#" class="ml-2 p-2 text-gray-400 hover:text-gray-500">
                <span class="sr-only">Search</span>
                <MagnifyingGlassIcon class="w-6 h-6" aria-hidden="true" />
              </a>
            </div>

            <!-- Flyout menus -->
            <PopoverGroup class="hidden lg:flex-1 lg:block lg:self-stretch">
              <div class="h-full flex space-x-8">
                <Popover
                  v-for="category in navigation.categories"
                  :key="category.name"
                  class="flex"
                  v-slot="{ open }"
                >
                  <div class="relative flex">
                    <PopoverButton
                      :class="[
                        open
                          ? 'text-primary-600'
                          : 'text-gray-700 hover:text-gray-800',
                        'relative z-10 flex items-center justify-center transition-colors ease-out duration-200 text-sm font-medium',
                      ]"
                    >
                      {{ category.name }}
                      <span
                        :class="[
                          open ? 'bg-primary-600' : '',
                          'absolute bottom-0 inset-x-0 h-0.5 transition-colors ease-out duration-200 sm:mt-5 sm:transform sm:translate-y-px',
                        ]"
                        aria-hidden="true"
                      />
                    </PopoverButton>
                  </div>

                  <transition
                    enter-active-class="transition ease-out duration-200"
                    enter-from-class="opacity-0"
                    enter-to-class="opacity-100"
                    leave-active-class="transition ease-in duration-150"
                    leave-from-class="opacity-100"
                    leave-to-class="opacity-0"
                  >
                    <PopoverPanel class="absolute z-20 top-full inset-x-0">
                      <!-- Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow -->
                      <div
                        class="absolute inset-0 top-1/2 bg-white shadow"
                        aria-hidden="true"
                      />

                      <div class="relative bg-white">
                        <div class="max-w-7xl mx-auto px-8">
                          <div class="grid grid-cols-2 gap-y-10 gap-x-8 py-16">
                            <div
                              class="grid grid-rows-1 grid-cols-2 gap-8 text-sm"
                            >
                              <div
                                v-for="(item, itemIdx) in category.featured"
                                :key="item.name"
                                :class="[
                                  itemIdx === 0 ? 'col-span-2 aspect-w-2' : '',
                                  'group relative aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden',
                                ]"
                              >
                                <img
                                  :src="item.imageSrc"
                                  :alt="item.imageAlt"
                                  class="object-center object-cover group-hover:opacity-75"
                                />
                                <div class="flex flex-col justify-end">
                                  <div
                                    class="p-4 bg-white bg-opacity-60 text-sm"
                                  >
                                    <a
                                      :href="item.href"
                                      class="font-medium text-gray-900"
                                    >
                                      <span
                                        class="absolute inset-0"
                                        aria-hidden="true"
                                      />
                                      {{ item.name }}
                                    </a>
                                    <p
                                      aria-hidden="true"
                                      class="mt-0.5 text-gray-700 sm:mt-1"
                                    >
                                      Shop now
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              class="grid grid-cols-3 gap-y-10 gap-x-8 text-sm text-gray-500"
                            >
                              <div
                                v-for="(column, columnIdx) in category.sections"
                                :key="columnIdx"
                                class="space-y-10"
                              >
                                <div
                                  v-for="section in column"
                                  :key="section.name"
                                >
                                  <p
                                    :id="`${category.id}-${section.id}-heading`"
                                    class="font-medium text-gray-900"
                                  >
                                    {{ section.name }}
                                  </p>
                                  <ul
                                    role="list"
                                    :aria-labelledby="`${category.id}-${section.id}-heading`"
                                    class="mt-4 space-y-4"
                                  >
                                    <li
                                      v-for="item in section.items"
                                      :key="item.name"
                                      class="flex"
                                    >
                                      <a
                                        :href="item.href"
                                        class="hover:text-gray-800"
                                      >
                                        {{ item.name }}
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </PopoverPanel>
                  </transition>
                </Popover>

                <a
                  v-for="page in navigation.pages"
                  :key="page.name"
                  :href="page.href"
                  class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                  >{{ page.name }}</a
                >
              </div>
            </PopoverGroup>

            <!-- Logo -->
            <a href="#" class="flex">
              <span class="sr-only">Workflow</span>
              <img
                class="h-8 w-auto"
                src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt=""
              />
            </a>

            <div class="flex-1 flex items-center justify-end">
              <a
                href="#"
                class="hidden text-gray-700 hover:text-gray-800 lg:flex lg:items-center"
              >
                <img
                  src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2099&q=80"
                  alt=""
                  class="w-5 h-auto block flex-shrink-0"
                />
                <span class="ml-3 block text-sm font-medium"> CAD </span>
                <span class="sr-only">, change currency</span>
              </a>

              <!-- Search -->
              <a
                href="#"
                class="hidden ml-6 p-2 text-gray-400 hover:text-gray-500 lg:block"
              >
                <span class="sr-only">Search</span>
                <MagnifyingGlassIcon class="w-6 h-6" aria-hidden="true" />
              </a>

              <!-- Account -->
              <a href="#" class="p-2 text-gray-400 hover:text-gray-500 lg:ml-4">
                <span class="sr-only">Account</span>
                <UserIcon class="w-6 h-6" aria-hidden="true" />
              </a>

              <!-- Cart -->
              <div class="ml-4 flow-root lg:ml-6">
                <a href="#" class="group -m-2 p-2 flex items-center">
                  <ShoppingBagIcon
                    class="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                  <span
                    class="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800"
                    >0</span
                  >
                  <span class="sr-only">items in cart, view bag</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>

    <main class="pb-24">
      <div class="text-center py-16 px-4 sm:px-6 lg:px-8">
        <h1 class="text-4xl font-extrabold tracking-tight text-gray-900">
          Workspace
        </h1>
        <p class="mt-4 max-w-xl mx-auto text-base text-gray-500">
          The secret to a tidy desk? Don't get rid of anything, just put it in
          really really nice looking containers.
        </p>
      </div>

      <!-- Filters -->
      <Disclosure
        as="section"
        aria-labelledby="filter-heading"
        class="relative z-10 border-t border-b border-gray-200 grid items-center"
      >
        <h2 id="filter-heading" class="sr-only">Filters</h2>
        <div class="relative col-start-1 row-start-1 py-4">
          <div
            class="max-w-7xl mx-auto flex space-x-6 divide-x divide-gray-200 text-sm px-4 sm:px-6 lg:px-8"
          >
            <div>
              <DisclosureButton
                class="group text-gray-700 font-medium flex items-center"
              >
                <FunnelIcon
                  class="flex-none w-5 h-5 mr-2 text-gray-400 group-hover:text-gray-500"
                  aria-hidden="true"
                />
                2 Filters
              </DisclosureButton>
            </div>
            <div class="pl-6">
              <button type="button" class="text-gray-500">Clear all</button>
            </div>
          </div>
        </div>
        <DisclosurePanel class="border-t border-gray-200 py-10">
          <div
            class="max-w-7xl mx-auto grid grid-cols-2 gap-x-4 px-4 text-sm sm:px-6 md:gap-x-6 lg:px-8"
          >
            <div
              class="grid grid-cols-1 gap-y-10 auto-rows-min md:grid-cols-2 md:gap-x-6"
            >
              <fieldset>
                <legend class="block font-medium">Price</legend>
                <div class="pt-6 space-y-6 sm:pt-4 sm:space-y-4">
                  <div
                    v-for="(option, optionIdx) in filters.price"
                    :key="option.value"
                    class="flex items-center text-base sm:text-sm"
                  >
                    <input
                      :id="`price-${optionIdx}`"
                      name="price[]"
                      :value="option.value"
                      type="checkbox"
                      class="flex-shrink-0 h-4 w-4 border-gray-300 rounded text-primary-600 focus:ring-primary-500"
                      :checked="option.checked"
                    />
                    <label
                      :for="`price-${optionIdx}`"
                      class="ml-3 min-w-0 flex-1 text-gray-600"
                    >
                      {{ option.label }}
                    </label>
                  </div>
                </div>
              </fieldset>
              <fieldset>
                <legend class="block font-medium">Color</legend>
                <div class="pt-6 space-y-6 sm:pt-4 sm:space-y-4">
                  <div
                    v-for="(option, optionIdx) in filters.color"
                    :key="option.value"
                    class="flex items-center text-base sm:text-sm"
                  >
                    <input
                      :id="`color-${optionIdx}`"
                      name="color[]"
                      :value="option.value"
                      type="checkbox"
                      class="flex-shrink-0 h-4 w-4 border-gray-300 rounded text-primary-600 focus:ring-primary-500"
                      :checked="option.checked"
                    />
                    <label
                      :for="`color-${optionIdx}`"
                      class="ml-3 min-w-0 flex-1 text-gray-600"
                    >
                      {{ option.label }}
                    </label>
                  </div>
                </div>
              </fieldset>
            </div>
            <div
              class="grid grid-cols-1 gap-y-10 auto-rows-min md:grid-cols-2 md:gap-x-6"
            >
              <fieldset>
                <legend class="block font-medium">Size</legend>
                <div class="pt-6 space-y-6 sm:pt-4 sm:space-y-4">
                  <div
                    v-for="(option, optionIdx) in filters.size"
                    :key="option.value"
                    class="flex items-center text-base sm:text-sm"
                  >
                    <input
                      :id="`size-${optionIdx}`"
                      name="size[]"
                      :value="option.value"
                      type="checkbox"
                      class="flex-shrink-0 h-4 w-4 border-gray-300 rounded text-primary-600 focus:ring-primary-500"
                      :checked="option.checked"
                    />
                    <label
                      :for="`size-${optionIdx}`"
                      class="ml-3 min-w-0 flex-1 text-gray-600"
                    >
                      {{ option.label }}
                    </label>
                  </div>
                </div>
              </fieldset>
              <fieldset>
                <legend class="block font-medium">Category</legend>
                <div class="pt-6 space-y-6 sm:pt-4 sm:space-y-4">
                  <div
                    v-for="(option, optionIdx) in filters.category"
                    :key="option.value"
                    class="flex items-center text-base sm:text-sm"
                  >
                    <input
                      :id="`category-${optionIdx}`"
                      name="category[]"
                      :value="option.value"
                      type="checkbox"
                      class="flex-shrink-0 h-4 w-4 border-gray-300 rounded text-primary-600 focus:ring-primary-500"
                      :checked="option.checked"
                    />
                    <label
                      :for="`category-${optionIdx}`"
                      class="ml-3 min-w-0 flex-1 text-gray-600"
                    >
                      {{ option.label }}
                    </label>
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
        </DisclosurePanel>
        <div class="col-start-1 row-start-1 py-4">
          <div class="flex justify-end max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Menu as="div" class="relative inline-block">
              <div class="flex">
                <MenuButton
                  class="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900"
                >
                  Sort
                  <ChevronDownIcon
                    class="flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                </MenuButton>
              </div>

              <transition
                enter-active-class="transition ease-out duration-100"
                enter-from-class="transform opacity-0 scale-95"
                enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75"
                leave-from-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95"
              >
                <MenuItems
                  class="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-2xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                >
                  <div class="py-1">
                    <MenuItem
                      v-for="option in sortOptions"
                      :key="option.name"
                      v-slot="{ active }"
                    >
                      <a
                        :href="option.href"
                        :class="[
                          option.current
                            ? 'font-medium text-gray-900'
                            : 'text-gray-500',
                          active ? 'bg-gray-100' : '',
                          'block px-4 py-2 text-sm',
                        ]"
                      >
                        {{ option.name }}
                      </a>
                    </MenuItem>
                  </div>
                </MenuItems>
              </transition>
            </Menu>
          </div>
        </div>
      </Disclosure>

      <!-- Product grid -->
      <section
        aria-labelledby="products-heading"
        class="max-w-7xl mx-auto overflow-hidden sm:px-6 lg:px-8"
      >
        <h2 id="products-heading" class="sr-only">Products</h2>

        <div
          class="-mx-px border-l border-gray-200 grid grid-cols-2 sm:mx-0 md:grid-cols-3 lg:grid-cols-4"
        >
          <div
            v-for="product in products"
            :key="product.id"
            class="group relative p-4 border-r border-b border-gray-200 sm:p-6"
          >
            <div
              class="rounded-lg overflow-hidden bg-gray-200 aspect-w-1 aspect-h-1 group-hover:opacity-75"
            >
              <img
                :src="product.imageSrc"
                :alt="product.imageAlt"
                class="w-full h-full object-center object-cover"
              />
            </div>
            <div class="pt-10 pb-4 text-center">
              <h3 class="text-sm font-medium text-gray-900">
                <a :href="product.href">
                  <span aria-hidden="true" class="absolute inset-0" />
                  {{ product.name }}
                </a>
              </h3>
              <div class="mt-3 flex flex-col items-center">
                <p class="sr-only">{{ product.rating }} out of 5 stars</p>
                <div class="flex items-center">
                  <StarIcon
                    v-for="rating in [0, 1, 2, 3, 4]"
                    :key="rating"
                    :class="[
                      product.rating > rating
                        ? 'text-yellow-400'
                        : 'text-gray-200',
                      'flex-shrink-0 h-5 w-5',
                    ]"
                    aria-hidden="true"
                  />
                </div>
                <p class="mt-1 text-sm text-gray-500">
                  {{ product.reviewCount }} reviews
                </p>
              </div>
              <p class="mt-4 text-base font-medium text-gray-900">
                {{ product.price }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Pagination -->
      <nav
        aria-label="Pagination"
        class="max-w-7xl mx-auto px-4 mt-6 flex justify-between text-sm font-medium text-gray-700 sm:px-6 lg:px-8"
      >
        <div class="min-w-0 flex-1">
          <a
            href="#"
            class="inline-flex items-center px-4 h-10 border border-gray-300 rounded-md bg-white hover:bg-gray-100 focus:outline-none focus:border-primary-600 focus:ring-2 focus:ring-offset-1 focus:ring-offset-primary-600 focus:ring-primary-600 focus:ring-opacity-25"
          >
            Previous
          </a>
        </div>
        <div class="hidden space-x-2 sm:flex">
          <!-- Current: "border-primary-600 ring-1 ring-primary-600", Default: "border-gray-300" -->
          <a
            href="#"
            class="inline-flex items-center px-4 h-10 border border-gray-300 rounded-md bg-white hover:bg-gray-100 focus:outline-none focus:border-primary-600 focus:ring-2 focus:ring-offset-1 focus:ring-offset-primary-600 focus:ring-primary-600 focus:ring-opacity-25"
          >
            1
          </a>
          <a
            href="#"
            class="inline-flex items-center px-4 h-10 border border-gray-300 rounded-md bg-white hover:bg-gray-100 focus:outline-none focus:border-primary-600 focus:ring-2 focus:ring-offset-1 focus:ring-offset-primary-600 focus:ring-primary-600 focus:ring-opacity-25"
          >
            2
          </a>
          <a
            href="#"
            class="inline-flex items-center px-4 h-10 border border-primary-600 ring-1 ring-primary-600 rounded-md bg-white hover:bg-gray-100 focus:outline-none focus:border-primary-600 focus:ring-2 focus:ring-offset-1 focus:ring-offset-primary-600 focus:ring-primary-600 focus:ring-opacity-25"
          >
            3
          </a>
          <span class="inline-flex items-center text-gray-500 px-1.5 h-10">
            ...
          </span>
          <a
            href="#"
            class="inline-flex items-center px-4 h-10 border border-gray-300 rounded-md bg-white hover:bg-gray-100 focus:outline-none focus:border-primary-600 focus:ring-2 focus:ring-offset-1 focus:ring-offset-primary-600 focus:ring-primary-600 focus:ring-opacity-25"
          >
            8
          </a>
          <a
            href="#"
            class="inline-flex items-center px-4 h-10 border border-gray-300 rounded-md bg-white hover:bg-gray-100 focus:outline-none focus:border-primary-600 focus:ring-2 focus:ring-offset-1 focus:ring-offset-primary-600 focus:ring-primary-600 focus:ring-opacity-25"
          >
            9
          </a>
          <a
            href="#"
            class="inline-flex items-center px-4 h-10 border border-gray-300 rounded-md bg-white hover:bg-gray-100 focus:outline-none focus:border-primary-600 focus:ring-2 focus:ring-offset-1 focus:ring-offset-primary-600 focus:ring-primary-600 focus:ring-opacity-25"
          >
            10
          </a>
        </div>
        <div class="min-w-0 flex-1 flex justify-end">
          <a
            href="#"
            class="inline-flex items-center px-4 h-10 border border-gray-300 rounded-md bg-white hover:bg-gray-100 focus:outline-none focus:border-primary-600 focus:ring-2 focus:ring-offset-1 focus:ring-offset-primary-600 focus:ring-primary-600 focus:ring-opacity-25"
          >
            Next
          </a>
        </div>
      </nav>
    </main>

    <footer aria-labelledby="footer-heading" class="bg-white">
      <h2 id="footer-heading" class="sr-only">Footer</h2>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          class="border-t border-gray-200 py-20 grid grid-cols-2 gap-8 sm:gap-y-0 sm:grid-cols-2 lg:grid-cols-4"
        >
          <div
            class="grid grid-cols-1 gap-y-10 lg:col-span-2 lg:grid-cols-2 lg:gap-y-0 lg:gap-x-8"
          >
            <div>
              <h3 class="text-sm font-medium text-gray-900">Account</h3>
              <ul role="list" class="mt-6 space-y-6">
                <li
                  v-for="item in footerNavigation.account"
                  :key="item.name"
                  class="text-sm"
                >
                  <a
                    :href="item.href"
                    class="text-gray-500 hover:text-gray-600"
                  >
                    {{ item.name }}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 class="text-sm font-medium text-gray-900">Service</h3>
              <ul role="list" class="mt-6 space-y-6">
                <li
                  v-for="item in footerNavigation.service"
                  :key="item.name"
                  class="text-sm"
                >
                  <a
                    :href="item.href"
                    class="text-gray-500 hover:text-gray-600"
                  >
                    {{ item.name }}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div
            class="grid grid-cols-1 gap-y-10 lg:col-span-2 lg:grid-cols-2 lg:gap-y-0 lg:gap-x-8"
          >
            <div>
              <h3 class="text-sm font-medium text-gray-900">Company</h3>
              <ul role="list" class="mt-6 space-y-6">
                <li
                  v-for="item in footerNavigation.company"
                  :key="item.name"
                  class="text-sm"
                >
                  <a
                    :href="item.href"
                    class="text-gray-500 hover:text-gray-600"
                  >
                    {{ item.name }}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 class="text-sm font-medium text-gray-900">Connect</h3>
              <ul role="list" class="mt-6 space-y-6">
                <li
                  v-for="item in footerNavigation.connect"
                  :key="item.name"
                  class="text-sm"
                >
                  <a
                    :href="item.href"
                    class="text-gray-500 hover:text-gray-600"
                  >
                    {{ item.name }}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          class="border-t border-gray-100 py-10 sm:flex sm:items-center sm:justify-between"
        >
          <div class="flex items-center justify-center text-sm text-gray-500">
            <p>Shipping to Canada ($CAD)</p>
            <p class="ml-3 border-l border-gray-200 pl-3">English</p>
          </div>
          <p class="mt-6 text-sm text-gray-500 text-center sm:mt-0">
            &copy; 2021 Clothing Company, Ltd.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { ref } from "vue";
import {
  Dialog,
  DialogOverlay,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  UserIcon,
  XMarkIcon,
} from "@heroicons/vue/24/outline";
import { ChevronDownIcon, FunnelIcon, StarIcon } from "@heroicons/vue/24/solid";

export default {
  components: {
    Dialog,
    DialogOverlay,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    Tab,
    TabGroup,
    TabList,
    TabPanel,
    TabPanels,
    TransitionChild,
    TransitionRoot,
    ChevronDownIcon,
    FunnelIcon,
    Bars3Icon,
    MagnifyingGlassIcon,
    ShoppingBagIcon,
    StarIcon,
    UserIcon,
    XMarkIcon,
  },
  props: [
    "navigation",
    "filters",
    "sortOptions",
    "products",
    "footerNavigation",
  ],
  setup() {
    const open = ref(false);

    return {
      open,
    };
  },
};
</script>
