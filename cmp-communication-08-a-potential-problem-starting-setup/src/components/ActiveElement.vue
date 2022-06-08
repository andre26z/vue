<template>
  <section>
    <h3>{{ topicTitle }}</h3>
    <p>{{ text }}</p>
  </section>
</template>

<script>
export default {
  props: ['topicTitle', 'text'],
};
</script>
