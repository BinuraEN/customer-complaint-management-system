<template>
    <div
        :class="[
            'bg-dark-purple h-screen p-5 pt-8 relative duration-300',
            isOpen ? 'w-72' : 'w-20',
        ]"
    >
        <font-awsome-icon
            :class="[
                'bg-white text-dark-purple text-3xl px-1 py-0.5 rounded-full absolute -right-4 top-9 border border-dark-purple cursor-pointer',
                { 'rotate-180': isOpen },
            ]"
            icon="fa-solid fa-arrow-left"
            @click="isOpen = !isOpen"
        ></font-awsome-icon>
        <div class="inline-flex">
            <font-awsome-icon
                :class="[
                    'bg-amber-300 text-3xl duration-300 mr-2 rounded p-1 cursor-pointer block float-left',
                    isOpen ? 'rotate-[360deg]' : 'rotate-0',
                ]"
                icon="fa-regular fa-comment-dots"
            ></font-awsome-icon>
            <h1
                :class="[
                    'text-white origin-left font-medium text-2xl duration-300',
                    { 'scale-0': !isOpen },
                ]"
            >
                CCS
            </h1>
        </div>
        <div
            :class="[
                'flex items-center rounded-md bg-light-white mt-6  py-2',
                !isOpen ? 'px-2.5' : 'px-4',
            ]"
        >
            <font-awsome-icon
                :class="[
                    'text-white text-lg block cursor-pointer mr-2',
                    { 'mr-2': isOpen },
                ]"
                icon="fa-solid fa-search"
            ></font-awsome-icon>
            <input
                v-show="isOpen"
                type="search"
                class="text-base bg-transparent w-full text-white focus:outline-none"
                placeholder="Search"
            />
        </div>

        <ul class="pt-2">
            <!-- menu item -->
            <menu-item v-model:isNavOpen="isOpen" />
        </ul>
    </div>
</template>

<script setup>
import MenuItem from "./MenuItem.vue";

import { ref } from "vue";
let isOpen = ref(true);
//let isSubmenuOpen = ref(false);
</script>
