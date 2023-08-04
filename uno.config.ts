// uno.config.ts
import { 
  defineConfig, 
  presetUno, 
  presetAttributify, 
  presetTypography, 
  presetWebFonts 
} from 'unocss'

export default defineConfig({
  // ...UnoCSS options
  presets: [
    presetUno(),
    presetAttributify(),
    presetTypography(),
    presetWebFonts({
      provider: 'fontshare',
      fonts: {
        display: 'Bonny',
        sans: 'Satoshi'
      }
    })
  ]
})