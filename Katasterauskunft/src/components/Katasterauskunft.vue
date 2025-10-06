<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import { Form, FormSubmitEvent } from "@primevue/forms";
import FloatLabel from "primevue/floatlabel";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import ProgressSpinner from "primevue/progressspinner";
import AlkisService from "@services/AlkisService";

const props = defineProps<{
	id: string;
	alkisServiceUrl: string;
}>();

const isLoading = ref(false);
const form = ref(null);
const formValues = reactive({
	flurstueck: null as string,
});

let _alkisService: AlkisService = null;
onMounted(() => {
	_alkisService = new AlkisService(props.alkisServiceUrl, "Paderborn");
});
const doSubmit = (e: FormSubmitEvent): void => {
	isLoading.value = true;
	_alkisService
		.createLiegenschaftskarte(formValues.flurstueck)
		.catch((error) => {
			alert("Fehler beim Laden der Liegenschaftskarte: " + error);
		})
		.finally(() => {
			isLoading.value = false;
		});
};
</script>
<template>
	<Form ref="form" v-slot="$form" @submit="doSubmit">
		<div class="row">
			<div class="col-xs-12">
				<FloatLabel variant="over">
					<InputText name="flurstueck" v-model="formValues.flurstueck" />
					<label for="flurstueck">Flurstück</label>
				</FloatLabel>
			</div>
		</div>
		<div class="btn-container">
			<Button type="submit" label="Sofort öffnen" />
			<ProgressSpinner v-if="isLoading" style="width: 20px; height: 20px" />
		</div>
	</Form>
</template>
