<template>
  <div class="bg-white">
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
                    <PopoverPanel class="absolute z-10 top-full inset-x-0">
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

    <main
      class="mt-8 max-w-2xl mx-auto pb-16 px-4 sm:pb-24 sm:px-6 lg:max-w-7xl lg:px-8"
    >
      <div class="lg:grid lg:grid-cols-12 lg:auto-rows-min lg:gap-x-8">
        <div class="lg:col-start-8 lg:col-span-5">
          <div class="flex justify-between">
            <h1 class="text-xl font-medium text-gray-900">
              {{ product.name }}
            </h1>
            <p class="text-xl font-medium text-gray-900">
              {{ product.price }}
            </p>
          </div>
          <!-- Reviews -->
          <div class="mt-4">
            <h2 class="sr-only">Reviews</h2>
            <div class="flex items-center">
              <p class="text-sm text-gray-700">
                {{ reviews.average }}
                <span class="sr-only"> out of 5 stars</span>
              </p>
              <div class="ml-1 flex items-center">
                <StarIcon
                  v-for="rating in [0, 1, 2, 3, 4]"
                  :key="rating"
                  :class="[
                    reviews.average > rating
                      ? 'text-yellow-400'
                      : 'text-gray-200',
                    'h-5 w-5 flex-shrink-0',
                  ]"
                  aria-hidden="true"
                />
              </div>
              <div aria-hidden="true" class="ml-4 text-sm text-gray-300">·</div>
              <div class="ml-4 flex">
                <a
                  href="#"
                  class="text-sm font-medium text-primary-600 hover:text-primary-500"
                  >See all {{ reviews.totalCount }} reviews</a
                >
              </div>
            </div>
          </div>
        </div>

        <!-- Image gallery -->
        <div
          class="mt-8 lg:mt-0 lg:col-start-1 lg:col-span-7 lg:row-start-1 lg:row-span-3"
        >
          <h2 class="sr-only">Images</h2>

          <div class="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 lg:gap-8">
            <img
              v-for="image in product.images"
              :key="image.id"
              :src="image.imageSrc"
              :alt="image.imageAlt"
              :class="[
                image.primary
                  ? 'lg:col-span-2 lg:row-span-2'
                  : 'hidden lg:block',
                'rounded-lg',
              ]"
            />
          </div>
        </div>

        <div class="mt-8 lg:col-span-5">
          <form>
            <!-- Color picker -->
            <div>
              <h2 class="text-sm font-medium text-gray-900">Color</h2>

              <RadioGroup v-model="selectedColor" class="mt-2">
                <RadioGroupLabel class="sr-only">
                  Choose a color
                </RadioGroupLabel>
                <div class="flex items-center space-x-3">
                  <RadioGroupOption
                    as="template"
                    v-for="color in product.colors"
                    :key="color.name"
                    :value="color"
                    v-slot="{ active, checked }"
                  >
                    <div
                      :class="[
                        color.selectedColor,
                        active && checked ? 'ring ring-offset-1' : '',
                        !active && checked ? 'ring-2' : '',
                        '-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none',
                      ]"
                    >
                      <RadioGroupLabel as="p" class="sr-only">
                        {{ color.name }}
                      </RadioGroupLabel>
                      <span
                        aria-hidden="true"
                        :class="[
                          color.bgColor,
                          'h-8 w-8 border border-black border-opacity-10 rounded-full',
                        ]"
                      />
                    </div>
                  </RadioGroupOption>
                </div>
              </RadioGroup>
            </div>

            <!-- Size picker -->
            <div class="mt-8">
              <div class="flex items-center justify-between">
                <h2 class="text-sm font-medium text-gray-900">Size</h2>
                <a
                  href="#"
                  class="text-sm font-medium text-primary-600 hover:text-primary-500"
                  >See sizing chart</a
                >
              </div>

              <RadioGroup v-model="selectedSize" class="mt-2">
                <RadioGroupLabel class="sr-only">
                  Choose a size
                </RadioGroupLabel>
                <div class="grid grid-cols-3 gap-3 sm:grid-cols-6">
                  <RadioGroupOption
                    as="template"
                    v-for="size in product.sizes"
                    :key="size.name"
                    :value="size"
                    :disabled="!size.inStock"
                    v-slot="{ active, checked }"
                  >
                    <div
                      :class="[
                        size.inStock
                          ? 'cursor-pointer focus:outline-none'
                          : 'opacity-25 cursor-not-allowed',
                        active ? 'ring-2 ring-offset-2 ring-primary-500' : '',
                        checked
                          ? 'bg-primary-600 border-transparent text-white hover:bg-primary-700'
                          : 'bg-white border-gray-200 text-gray-900 hover:bg-gray-50',
                        'border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1',
                      ]"
                    >
                      <RadioGroupLabel as="p">
                        {{ size.name }}
                      </RadioGroupLabel>
                    </div>
                  </RadioGroupOption>
                </div>
              </RadioGroup>
            </div>

            <button
              type="submit"
              class="mt-8 w-full bg-primary-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              Add to cart
            </button>
          </form>

          <!-- Product details -->
          <div class="mt-10">
            <h2 class="text-sm font-medium text-gray-900">Description</h2>

            <div
              class="mt-4 prose prose-sm text-gray-500"
              v-html="product.description"
            />
          </div>

          <div class="mt-8 border-t border-gray-200 pt-8">
            <h2 class="text-sm font-medium text-gray-900">Fabric &amp; Care</h2>

            <div class="mt-4 prose prose-sm text-gray-500">
              <ul role="list">
                <li v-for="item in product.details" :key="item">{{ item }}</li>
              </ul>
            </div>
          </div>

          <!-- Policies -->
          <section aria-labelledby="policies-heading" class="mt-10">
            <h2 id="policies-heading" class="sr-only">Our Policies</h2>

            <dl
              class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2"
            >
              <div
                v-for="policy in policies"
                :key="policy.name"
                class="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center"
              >
                <dt>
                  <component
                    :is="policy.icon"
                    class="mx-auto h-6 w-6 flex-shrink-0 text-gray-400"
                    aria-hidden="true"
                  />
                  <span class="mt-4 text-sm font-medium text-gray-900">
                    {{ policy.name }}
                  </span>
                </dt>
                <dd class="mt-1 text-sm text-gray-500">
                  {{ policy.description }}
                </dd>
              </div>
            </dl>
          </section>
        </div>
      </div>

      <!-- Reviews -->
      <section aria-labelledby="reviews-heading" class="mt-16 sm:mt-24">
        <h2 id="reviews-heading" class="text-lg font-medium text-gray-900">
          Recent reviews
        </h2>

        <div
          class="mt-6 border-t border-b border-gray-200 pb-10 divide-y divide-gray-200 space-y-10"
        >
          <div
            v-for="review in reviews.featured"
            :key="review.id"
            class="pt-10 lg:grid lg:grid-cols-12 lg:gap-x-8"
          >
            <div
              class="lg:col-start-5 lg:col-span-8 xl:col-start-4 xl:col-span-9 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:items-start"
            >
              <div class="flex items-center xl:col-span-1">
                <div class="flex items-center">
                  <StarIcon
                    v-for="rating in [0, 1, 2, 3, 4]"
                    :key="rating"
                    :class="[
                      review.rating > rating
                        ? 'text-yellow-400'
                        : 'text-gray-200',
                      'h-5 w-5 flex-shrink-0',
                    ]"
                    aria-hidden="true"
                  />
                </div>
                <p class="ml-3 text-sm text-gray-700">
                  {{ review.rating
                  }}<span class="sr-only"> out of 5 stars</span>
                </p>
              </div>

              <div class="mt-4 lg:mt-6 xl:mt-0 xl:col-span-2">
                <h3 class="text-sm font-medium text-gray-900">
                  {{ review.title }}
                </h3>

                <div
                  class="mt-3 space-y-6 text-sm text-gray-500"
                  v-html="review.content"
                />
              </div>
            </div>

            <div
              class="mt-6 flex items-center text-sm lg:mt-0 lg:col-start-1 lg:col-span-4 lg:row-start-1 lg:flex-col lg:items-start xl:col-span-3"
            >
              <p class="font-medium text-gray-900">{{ review.author }}</p>
              <time
                :datetime="review.datetime"
                class="ml-4 border-l border-gray-200 pl-4 text-gray-500 lg:ml-0 lg:mt-2 lg:border-0 lg:pl-0"
                >{{ review.date }}</time
              >
            </div>
          </div>
        </div>
      </section>

      <!-- Related products -->
      <section aria-labelledby="related-heading" class="mt-16 sm:mt-24">
        <h2 id="related-heading" class="text-lg font-medium text-gray-900">
          Customers also purchased
        </h2>

        <div
          class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
        >
          <div
            v-for="relatedProduct in relatedProducts"
            :key="relatedProduct.id"
            class="group relative"
          >
            <div
              class="w-full min-h-80 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none"
            >
              <img
                :src="relatedProduct.imageSrc"
                :alt="relatedProduct.imageAlt"
                class="w-full h-full object-center object-cover lg:w-full lg:h-full"
              />
            </div>
            <div class="mt-4 flex justify-between">
              <div>
                <h3 class="text-sm text-gray-700">
                  <a :href="relatedProduct.href">
                    <span aria-hidden="true" class="absolute inset-0" />
                    {{ relatedProduct.name }}
                  </a>
                </h3>
                <p class="mt-1 text-sm text-gray-500">
                  {{ relatedProduct.color }}
                </p>
              </div>
              <p class="text-sm font-medium text-gray-900">
                {{ relatedProduct.price }}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer aria-labelledby="footer-heading">
      <h2 id="footer-heading" class="sr-only">Footer</h2>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="border-t border-gray-200 py-20">
          <div
            class="grid grid-cols-1 md:grid-cols-12 md:grid-flow-col md:gap-x-8 md:gap-y-16 md:auto-rows-min"
          >
            <!-- Image section -->
            <div class="col-span-1 md:col-span-2 lg:row-start-1 lg:col-start-1">
              <img
                src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt=""
                class="h-8 w-auto"
              />
            </div>

            <!-- Sitemap sections -->
            <div
              class="mt-10 col-span-6 grid grid-cols-2 gap-8 sm:grid-cols-3 md:mt-0 md:row-start-1 md:col-start-3 md:col-span-8 lg:col-start-2 lg:col-span-6"
            >
              <div
                class="grid grid-cols-1 gap-y-12 sm:col-span-2 sm:grid-cols-2 sm:gap-x-8"
              >
                <div>
                  <h3 class="text-sm font-medium text-gray-900">Products</h3>
                  <ul role="list" class="mt-6 space-y-6">
                    <li
                      v-for="item in footerNavigation.products"
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
              </div>
              <div>
                <h3 class="text-sm font-medium text-gray-900">
                  Customer Service
                </h3>
                <ul role="list" class="mt-6 space-y-6">
                  <li
                    v-for="item in footerNavigation.customerService"
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

            <!-- Newsletter section -->
            <div
              class="mt-12 md:mt-0 md:row-start-2 md:col-start-3 md:col-span-8 lg:row-start-1 lg:col-start-9 lg:col-span-4"
            >
              <h3 class="text-sm font-medium text-gray-900">
                Sign up for our newsletter
              </h3>
              <p class="mt-6 text-sm text-gray-500">
                The latest deals and savings, sent to your inbox weekly.
              </p>
              <form class="mt-2 flex sm:max-w-md">
                <label for="email-address" class="sr-only">Email address</label>
                <input
                  id="email-address"
                  type="text"
                  autocomplete="email"
                  required=""
                  class="appearance-none min-w-0 w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
                />
                <div class="ml-4 flex-shrink-0">
                  <button
                    type="submit"
                    class="w-full bg-primary-600 border border-transparent rounded-md shadow-sm py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                  >
                    Sign up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div class="border-t border-gray-100 py-10 text-center">
          <p class="text-sm text-gray-500">
            &copy; 2021 Workflow, Inc. All rights reserved.
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
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  RadioGroup,
  RadioGroupLabel,
  RadioGroupOption,
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
import { StarIcon } from "@heroicons/vue/24/solid";

export default {
  components: {
    Dialog,
    DialogOverlay,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    RadioGroup,
    RadioGroupLabel,
    RadioGroupOption,
    Tab,
    TabGroup,
    TabList,
    TabPanel,
    TabPanels,
    TransitionChild,
    TransitionRoot,
    Bars3Icon,
    MagnifyingGlassIcon,
    ShoppingBagIcon,
    StarIcon,
    UserIcon,
    XMarkIcon,
  },
  props: [
    "navigation",
    "product",
    "policies",
    "reviews",
    "relatedProducts",
    "footerNavigation",
  ],
  data() {
    return {
      open: ref(false),
      selectedColor: ref(this.product.colors[0]),
      selectedSize: ref(this.product.sizes[2]),
    };
  },
};
</script>
