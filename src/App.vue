<template>
  <AppDrawer />
  <main>
    <header />
    <section class="router-view-content">
      <router-view />
    </section>
  </main>
</template>

<script lang="ts" setup>
import AppDrawer from './doc/AppDrawer.vue'
</script>

<style lang="scss">
:root {
  body {
    margin: 0;
    font-family: var(--font-text-regular);

    a {
      font-size: 1rem;
      text-decoration: none;
      color: rgb(var(--color-primary));
      font-family: var(--font-text-regular);
    }

    .box-shadow {
      box-shadow: 1px 1px 5px 0px #a4a4a4;
    }

    h1,
    h2 { // page title
      color: rgb(var(--color-primary));
      font-family: var(--font-text-bold);
    }

    h3 { // chapter title
      color: rgb(var(--color-secondary));
      font-family: var(--font-text-semibold);
    }

    p,
    span,
    label,
    th,
    td,
    tr {
      font-family: var(--font-text-regular);
    }
  }

  html {
    font-family:
      var(--font-text-regular),
      'roboto',
      'helvetica';

    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;

    overflow: auto;
  }

  .app-body {
    display: flex;
    flex-direction: column;
    flex: 1;
    background: #F2F5F7;
  }

  .app-bar {
    padding: 0 25px;
    height: 100px;
    color: rgb(var(--color-primary));
    border-bottom: 1px solid #ececec;
    display: flex;
    align-items: center;
    background: white;
  }

  .app-view {
    margin: 15px;
    flex: 1;
  }
  .drawer-item-icon {
    width: 32px;
  }

  .text-align-center {
    text-align: center;
  }

  #app {
    display: flex;
    main {
      flex: 1;
      margin: 20px;
    }
  }
}
.router-view-content {
  max-width: calc(100vw - 40px);
}
</style>
