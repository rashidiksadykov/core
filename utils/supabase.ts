import { createClient } from '@supabase/supabase-js'

// Импорт переменных окружения
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_KEY

// Логирование для проверки значений (удалите после тестов)
console.log('Supabase URL:', supabaseUrl)
console.log('Supabase Key:', supabaseAnonKey)

// Проверить, что переменные не пустые
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Supabase URL или Key отсутствуют')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
