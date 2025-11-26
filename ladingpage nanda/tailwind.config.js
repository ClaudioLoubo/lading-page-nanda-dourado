// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      // ADICIONE ESTA SEÇÃO 'fontFamily'
      fontFamily: {
        // Opção 1: Nome da classe 'font-whisper'
        whisper: ['Whisper', 'cursive'], 
        
        // Opção 2: Nome da classe 'font-roboto'
        roboto: ['Roboto', 'sans-serif'], 
        
        // Exemplo de como você pode definir um 'apelido' para a fonte:
        // display: ['Whisper', 'cursive'],
        // body: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}