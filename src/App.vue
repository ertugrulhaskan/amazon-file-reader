<template>
  <div class="flex h-full items-center w-4/12 mx-auto">
    <div
      class="border-2 border-gray-200 border-dashed px-4 py-2 w-full flex min-h-[240px] items-stretch"
    >
      <div class="border-r-2 border-gray-200 border-dashed pr-4 w-4/12">
        <ul>
          <li
            v-for="(file, idx) in files"
            :key="`file-${idx}`"
            @click="getDetails(idx)"
          >
            {{ file }}
          </li>
        </ul>
      </div>
      <div class="px-4 w-full">
        <template v-if="fileDetail">
          {{ fileDetail }}
        </template>
        <div v-else class="w-full h-full flex items-center justify-center">
          Choose a file
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watchEffect } from "vue";
import { getFiles, getFileContents } from "./components/helpers/services";

export default {
  name: "App",
  components: {},
  setup() {
    const files = ref(null);
    const fileDetail = ref(null);

    watchEffect(() => {
      const response = getFiles();
      response.then((data) => {
        files.value = data.files;
      });
    });

    function getDetails(idx) {
      const response = getFileContents(idx);
      response.then((data) => {
        fileDetail.value = data;
      });
    }

    return {
      files,
      fileDetail,
      getDetails,
    };
  },
};
</script>

<style></style>
