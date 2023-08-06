// uno.config.ts
import { 
  defineConfig, 
  presetUno, 
  presetAttributify, 
  presetIcons, 
  presetTypography, 
  presetWebFonts
} from 'unocss'

export default defineConfig({
  // ...UnoCSS options
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
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