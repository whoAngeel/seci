<template>
    <div class="rounded-xl bg-base-300 content-center py-2 text-secondary-content pb-2">
        <h2 class="text-xl font-bold text-secondary-content text-center">{{ carrera.nombre }}</h2>
        <div class="flex">
            <div class="stat items-center text-center flex-col w-1/3 text-base">
                <span>Total:</span>
                <span class="text-2xl font-bold">{{ carrera.total }}</span>
            </div>
            <div class="flex-content-center justify-center flex-col items-center w-2/3">
                <div class="flex justify-between content-center items-center w-4/5">
                    <button class=" btn btn-accent btn-xs">
                        <Icon name="dashicons:minus" />
                    </button>
                    <span class="text-base font-medium">H</span>
                    <span class=" text-lg">{{ carrera.hombres }}</span>
                    <button class=" btn btn-success btn-xs">
                        <Icon name="dashicons:plus" />
                    </button>
                </div>
                <div class="flex mt-3 justify-between content-center items-center w-4/5">
                    <button class=" btn btn-accent btn-xs">
                        <Icon name="dashicons:minus" />
                    </button>
                    <span class="text-base font-medium">M</span>
                    <span class=" text-lg">{{ carrera.mujeres }}</span>
                    <button class=" btn btn-success btn-xs">
                        <Icon name="dashicons:plus" />
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
const { carrera } = defineProps(['carrera'])
</script>

<style></style>
