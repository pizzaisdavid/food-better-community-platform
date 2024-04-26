import CollectionBadgeLowDetail from '../../assets/icons/map-collection.svg'
import LocalComBadgeLowDetail from '../../assets/icons/map-community.svg'
import MachineBadgeLowDetail from '../../assets/icons/map-machine.svg'
import WorkspaceBadgeLowDetail from '../../assets/icons/map-workspace.svg'
import CollectionBadge from '../../assets/images/badges/pt-collection-point.svg'
import LocalComBadge from '../../assets/images/badges/pt-local-community.svg'
import MachineBadge from '../../assets/images/badges/pt-machine-shop.svg'
import WorkspaceBadge from '../../assets/images/badges/pt-workspace.svg'
import logo from '../../assets/images/precious-plastic-logo-official.svg'
import memberBadgeHighDetail from '../../assets/images/themes/precious-plastic/avatar_member_lg.svg'
import memberBadgeLowDetail from '../../assets/images/themes/precious-plastic/avatar_member_sm.svg'
import { baseTheme } from '../common'
import { getButtons } from '../common/button'

import type { ThemeWithName } from '../types'

export type { ButtonVariants } from '../common/button'

// use enum to specify list of possible colors for typing
export const colors = {
  ...baseTheme.colors,
  primary: 'purple',
  accent: { base: '#d27bfe', hover: '#d445ff' },
}

// cc - assume standard image widths are 4:3, however not clearly defined

export const styles: ThemeWithName = {
  name: 'Food Better',
  logo: logo,
  profileGuidelinesURL: 'placeholder',
  communityProgramURL: 'placeholder',
  ...baseTheme,
  badges: {
    member: {
        lowDetail: memberBadgeLowDetail,
        normal: memberBadgeHighDetail,
    },
},
  buttons: getButtons(colors),
  colors,
}
