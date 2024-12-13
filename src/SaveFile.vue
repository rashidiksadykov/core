<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Save File to GitHub</h1>
    <form @submit.prevent="saveFile">
      <textarea
        v-model="fileContent"
        placeholder="Write something here..."
        class="border p-2 w-full mb-4"
        rows="5"
      ></textarea>
      <button
        type="submit"
        class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Save File
      </button>
    </form>
    <p v-if="responseMessage" class="mt-4 text-green-600">{{ responseMessage }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fileContent: "Hello",
      responseMessage: "",
    };
  },
  methods: {
    async saveFile() {
      try {
        const response = await fetch(
          "https://api.github.com/repos/<your-username>/<your-repo>/contents/<path-to-file>",
          {
            method: "PUT",
            headers: {
              Authorization: `Bearer <your-github-token>`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              message: "Add new file",
              content: btoa(this.fileContent), // Кодируем содержимое файла в base64
              branch: "files", // Указываем ветку
            }),
          }
        );

        if (response.ok) {
          this.responseMessage = "File saved successfully!";
        } else {
          const error = await response.json();
          this.responseMessage = `Error: ${error.message}`;
        }
      } catch (error) {
        console.error(error);
        this.responseMessage = "An unexpected error occurred.";
      }
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 600px;
}
</style>

