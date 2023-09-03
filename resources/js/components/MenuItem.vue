<template>
    <li
        class="text-gray-300 text-sm flex items-center gap-x-4 mt-2 cursor-pointer p-2 hover:bg-light-white rounded-md"
    >
        <span class="text-2xl block float-left">
            <slot name="icon"></slot>
        </span>
        <span
            :class="[
                'text-base font-medium flex-1 duration-200',
                { hidden: !isNavOpen },
            ]"
            ><slot></slot
        ></span>
        <!-- sub menu chevron-->
        <font-awsome-icon
            v-show="isNavOpen && $slots.submenuitems"
            :class="['duration-300', { 'rotate-180': isSubmenuOpen }]"
            icon="fa-chevron-down"
            @click="isSubmenuOpen = !isSubmenuOpen"
        ></font-awsome-icon>
    </li>
    <!-- sub menu -->
    <ul
        v-show="isSubmenuOpen && isNavOpen && $slots.submenuitems"
        class="duration-300"
    >
        <slot name="submenuitems"> </slot>
    </ul>
</template>

<script setup>
import { ref, inject } from "vue";

const isNavOpen = inject("isNavOpen");
const isSubmenuOpen = ref(false);
</script>
