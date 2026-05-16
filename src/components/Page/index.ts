import Page from './Page'

import Aside from './Aside'
import Footer from './Footer'
import Header from './Header'
import Main from './Main'

import type { PageComponents } from './Page.Components.types'

;(Page as PageComponents).Header = Header
;(Page as PageComponents).Aside = Aside
;(Page as PageComponents).Main = Main
;(Page as PageComponents).Footer = Footer

export default Page as PageComponents
