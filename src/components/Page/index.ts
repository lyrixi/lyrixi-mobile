import Page from './Page'

import Header from './Header'
import Aside from './Aside'
import Main from './Main'
import Footer from './Footer'

type PageWithParts = typeof Page & {
  Header: typeof Header
  Aside: typeof Aside
  Main: typeof Main
  Footer: typeof Footer
}

;(Page as PageWithParts).Header = Header
;(Page as PageWithParts).Aside = Aside
;(Page as PageWithParts).Main = Main
;(Page as PageWithParts).Footer = Footer

export type {
  PageAsideProps,
  PageAsideRef,
  PageFooterProps,
  PageFooterRef,
  PageHeaderProps,
  PageHeaderRef,
  PageLayout,
  PageMainProps,
  PageMainRef,
  PageProps,
  PageRef
} from './types'
export default Page as PageWithParts
