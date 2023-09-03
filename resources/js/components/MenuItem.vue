<template>
    <li
        class="text-gray-300 text-sm flex items-center gap-x-4 mt-2 cursor-pointer p-2 hover:bg-light-white rounded-md"
    >
        <span class="text-2xl block float-left"
            ><font-awsome-icon icon="fa-solid fa-chart-line"></font-awsome-icon
        ></span>
        <span
            :class="[
                'text-base font-medium flex-1 duration-200',
                { hidden: !isNavOpen },
            ]"
            >Menu item 1</span
        >
        <!-- sub menu chevron-->
        <font-awsome-icon
            v-show="isNavOpen"
            :class="['duration-300', { 'rotate-180': isSubmenuOpen }]"
            icon="fa-chevron-down"
            @click="isSubmenuOpen = !isSubmenuOpen"
        ></font-awsome-icon>
    </li>
    <!-- sub menu -->
    <ul v-show="isSubmenuOpen && isNavOpen" class="duration-300">
        <li
            class="text-gray-300 text-sm flex items-center gap-x-4 px-5 mt-2 cursor-pointer p-2 hover:bg-light-white rounded-md"
        >
            Sub menu item 1
        </li>
    </ul>
</template>

<script setup>
import { ref } from "vue";
defineProps({
    isNavOpen: Boolean,
});
let isSubmenuOpen = ref(false);
</script>
