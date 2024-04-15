import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", () => {
	const state = {
		carrera: {
			electrica: {
				hombres: 0,
				mujeres: 0,
				total: 0,
				name: "Electrónica",
			},
		},
	};
});
