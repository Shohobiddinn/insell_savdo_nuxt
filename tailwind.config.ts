import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      aspectRatio: {
        auto: 'auto',
        square: '1 / 1',
        video: '16 / 9'
      },
      colors: {
        Primary: '#FE6728',
        DarkPrimary: '#313C59',
        PWhite: '#FFFFFF'
      }
    }
  }
}