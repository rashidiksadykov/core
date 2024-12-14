<template>
  <div>
    <IndexPage msg="Hello World!" />
    <ul>
      <li v-for="miner in miners" :key="miner.id">blocks {{ miner.claim }}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import IndexPage from './components/IndexPage.vue'
import { supabase } from '../utils/supabase'

// Создаём реактивное хранилище для майнеров
const miners = ref([])

// Получаем данные из таблицы miners
async function getMiners() {
  const { data, error } = await supabase.from('miners').select()

  if (error) {
    console.error('Ошибка при выполнении запроса:', error.message)
  } else {
    console.log('Данные из таблицы miners:', data)
    miners.value = data
  }
}

// Загружаем данные при монтировании компонента
onMounted(() => {
  getMiners()
})
</script>
