<template>
    <div class="flex h-screen">
        <div class="w-16 h-screen">
            <Sidebar />
        </div>
        <div class="flex-1 w-10/12 flex h-screen items-center justify-center">
            <div class="h-5/6 w-11/12">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import Sidebar from '~/components/layout/Sidebar.vue';


</script>

<style></style>
