<template>
  <v-app>
    <v-container>
      <v-form validate-on="submit" @submit.prevent="submit">
        <v-text-field label="pin"></v-text-field>
        <v-btn text="Submit" type="submit" />
      </v-form>
    </v-container>
  </v-app>
</template>

<script setup>
async function submit(event) {
  await event
}
</script>
