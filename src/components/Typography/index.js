import getDisplayValue from './utils/getDisplayValue'
import Typography from './Typography'
import Form from './Form'

import Base from './Letter/Base'
import Highlight from './Letter/Highlight'
import Amount from './Letter/Amount'
import Paragraph from './Letter/Paragraph'
import Text from './Letter/Text'
import Title from './Letter/Title'

Typography.getDisplayValue = getDisplayValue
Typography.Form = Form

Typography.Div = Base
Typography.Amount = Amount
Typography.Highlight = Highlight
Typography.Paragraph = Paragraph
Typography.Text = Text
Typography.Title = Title

export default Typography
