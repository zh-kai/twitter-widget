<template>
  <div>
    Tweet

    <div ref="wrap"></div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ tweetId: string }>()

const loading = ref(false)
const wrap = ref()
const scriptSrc = 'https://platform.twitter.com/widgets.js'

const detectTwitterWidget = async () => {
  if (!(window.twttr && window.twttr.ready)) {
    await addScript(scriptSrc)
  }
}
const renderTweet = async () => {
  await detectTwitterWidget()

  const { widgets } = await window.twttr!.ready()
  loading.value = true

  await widgets.createTweet(props.tweetId, wrap.value, {})
  loading.value = false
}
onMounted(renderTweet)
</script>

<style></style>
