<template>
  <div>
    <h3>最近更新</h3>
    <ul>
      <li v-for="(item, index) in recentFiles" :key="index">
        <a :href="item.path">{{ item.title }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    recentFiles() {
      const list =  this.$site.pages
        .sort((a, b) => b.lastUpdatedTimestamp - a.lastUpdatedTimestamp)
        .filter(e => e.title)
        .slice(0, 10)
      const newList = list.map(item => {
        const { relativePath } = item
        const paths = relativePath.split('/')
        const newTitle = paths[paths.length - 2] + '/' + paths[paths.length - 1]
        return {
          ...item,
          title: newTitle
        }
      })
      return newList
    }
  }
}
</script>