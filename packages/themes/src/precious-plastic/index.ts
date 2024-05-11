import logo from '../../assets/images/precious-plastic-logo-official.svg'
import badge from '../../assets/images/themes/precious-plastic/avatar_member_sm.svg'
import { styles } from './styles'

import type { PlatformTheme } from '../types'

export const Theme: PlatformTheme = {
  id: 'precious-plastic',
  siteName: 'Food Better',
  logo,
  badge,
  avatar: '',
  howtoHeading: `placeholder`,
  styles,
  academyResource: 'https://pizzaisdavid.github.io/food-better-academy/',
  externalLinks: [
      {
          url: 'https://bazar.food-better.com/',
          label: 'bazar',
      },
      {
          url: 'https://food-better.com/',
          label: 'Global Site',
      },
  ],
};
