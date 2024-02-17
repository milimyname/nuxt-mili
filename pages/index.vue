<script setup lang="ts">
const { data: test } = await useFetch("/api/test");
const route = useRoute();

useSeoMeta({
  title: "[title]",
  description: "[description]",
  ogTitle: "[og:title]",
  ogDescription: "[og:description]",
  ogImage: "[og:image]",
  ogUrl: "[og:url]",
  twitterTitle: "[twitter:title]",
  twitterDescription: "[twitter:description]",
  twitterImage: "[twitter:image]",
  twitterCard: "summary",
});

useHead({
  htmlAttrs: {
    lang: "en",
  },
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "/favicon.png",
    },
  ],
});

watchEffect(() => {
  console.log(test.value);
});
</script>

<template>
  <pre>{{ test }}</pre>

  <div class="p-2 bg-white">
    <h1 class="text-4xl font-bold mb-20">Nuxt Routing set up successfully!</h1>
    <p>Current route: {{ route.path }}</p>
    <a href="https://nuxt.com/docs/getting-started/routing" target="_blank">
      Learn more about Nuxt Routing
    </a>
    <a href="/conditional">conditional</a>
    <Popover />
  </div>
</template>
