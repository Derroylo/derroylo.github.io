<template>
  <div class="mermaid-container">
    <div ref="mermaidElement" class="mermaid">
      {{ code }}
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'

const props = defineProps({
  code: {
    type: String,
    required: true
  }
})

const mermaidElement = ref(null)

const loadMermaid = async () => {
  // Check if mermaid is already loaded
  if (typeof window.mermaid !== 'undefined') {
    return window.mermaid
  }

  // Load mermaid from CDN if not already loaded
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js'
    script.onload = () => {
      if (typeof window.mermaid !== 'undefined') {
        window.mermaid.initialize({
          startOnLoad: false,
          theme: 'default',
          securityLevel: 'loose'
        })
        resolve(window.mermaid)
      } else {
        reject(new Error('Mermaid failed to load'))
      }
    }
    script.onerror = () => reject(new Error('Failed to load Mermaid script'))
    document.head.appendChild(script)
  })
}

onMounted(async () => {
  try {
    await nextTick()
    const mermaid = await loadMermaid()
    
    if (mermaidElement.value) {
      await mermaid.run({
        nodes: [mermaidElement.value]
      })
    }
  } catch (error) {
    console.error('Mermaid rendering error:', error)
    // Fallback: show the code as plain text
    if (mermaidElement.value) {
      mermaidElement.value.innerHTML = `<pre><code>${props.code}</code></pre>`
    }
  }
})
</script>

<style scoped>
.mermaid-container {
  margin: 1rem 0;
  text-align: center;
}

.mermaid {
  display: inline-block;
  max-width: 100%;
  overflow-x: auto;
}

.mermaid pre {
  text-align: left;
  background: #f5f5f5;
  padding: 1rem;
  border-radius: 4px;
  overflow-x: auto;
}
</style>
