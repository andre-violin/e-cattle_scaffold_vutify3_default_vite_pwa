/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

const eCattleTheme = {
  light: {
    colors: {
      primary: '#296A47',
      surfaceTint: '#296A47',
      onPrimary: '#FFFFFF',
      primaryContainer: '#AEF2C6',
      onPrimaryContainer: '#002111',
      secondary: '#4E6355',
      onSecondary: '#FFFFFF',
      secondaryContainer: '#D1E8D6',
      onSecondaryContainer: '#0C1F14',
      tertiary: '#3B6471',
      onTertiary: '#FFFFFF',
      tertiaryContainer: '#BFE9F8',
      onTertiaryContainer: '#001F27',
      error: '#BA1A1A',
      onError: '#FFFFFF',
      errorContainer: '#FFDAD6',
      onErrorContainer: '#410002',
      background: '#F6FBF4',
      onBackground: '#171D19',
      surface: '#F6FBF4',
      onSurface: '#171D19',
      surfaceVariant: '#DCE5DC',
      onSurfaceVariant: '#404942',
      outline: '#717972',
      outlineVariant: '#C0C9C0',
      shadow: '#000000',
      scrim: '#000000',
      inverseSurface: '#2C322D',
      inverseOnSurface: '#EDF2EB',
      inversePrimary: '#92D5AB',
      primaryFixed: '#AEF2C6',
      onPrimaryFixed: '#002111',
      primaryFixedDim: '#92D5AB',
      onPrimaryFixedVariant: '#085231',
      secondaryFixed: '#D1E8D6',
      onSecondaryFixed: '#0C1F14',
      secondaryFixedDim: '#B5CCBA',
      onSecondaryFixedVariant: '#374B3E',
      tertiaryFixed: '#BFE9F8',
      onTertiaryFixed: '#001F27',
      tertiaryFixedDim: '#A3CDDC',
      onTertiaryFixedVariant: '#224C58',
      surfaceDim: '#D6DBD5',
      surfaceBright: '#F6FBF4',
      surfaceContainerLowest: '#FFFFFF',
      surfaceContainerLow: '#F0F5EE',
      surfaceContainer: '#EAEFE8',
      surfaceContainerHigh: '#E4EAE3',
      surfaceContainerHighest: '#DFE4DD'
    }
  },
  dark: {
    colors: {
      primary: '#92D5AB',
      surfaceTint: '#92D5AB',
      onPrimary: '#003920',
      primaryContainer: '#085231',
      onPrimaryContainer: '#AEF2C6',
      secondary: '#B5CCBA',
      onSecondary: '#213528',
      secondaryContainer: '#374B3E',
      onSecondaryContainer: '#D1E8D6',
      tertiary: '#A3CDDC',
      onTertiary: '#033541',
      tertiaryContainer: '#224C58',
      onTertiaryContainer: '#BFE9F8',
      error: '#FFB4AB',
      onError: '#690005',
      errorContainer: '#93000A',
      onErrorContainer: '#FFDAD6',
      background: '#0F1511',
      onBackground: '#DFE4DD',
      surface: '#0F1511',
      onSurface: '#DFE4DD',
      surfaceVariant: '#404942',
      onSurfaceVariant: '#C0C9C0',
      outline: '#8A938B',
      outlineVariant: '#404942',
      shadow: '#000000',
      scrim: '#000000',
      inverseSurface: '#DFE4DD',
      inverseOnSurface: '#2C322D',
      inversePrimary: '#296A47',
      primaryFixed: '#AEF2C6',
      onPrimaryFixed: '#002111',
      primaryFixedDim: '#92D5AB',
      onPrimaryFixedVariant: '#085231',
      secondaryFixed: '#D1E8D6',
      onSecondaryFixed: '#0C1F14',
      secondaryFixedDim: '#B5CCBA',
      onSecondaryFixedVariant: '#374B3E',
      tertiaryFixed: '#BFE9F8',
      onTertiaryFixed: '#001F27',
      tertiaryFixedDim: '#A3CDDC',
      onTertiaryFixedVariant: '#224C58',
      surfaceDim: '#0F1511',
      surfaceBright: '#353B36',
      surfaceContainerLowest: '#0A0F0C',
      surfaceContainerLow: '#171D19',
      surfaceContainer: '#1B211D',
      surfaceContainerHigh: '#262B27',
      surfaceContainerHighest: '#313632'
    }
  }
}

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: {
      light: eCattleTheme.light,
      dark: eCattleTheme.dark
    }
  }
})
