import cartIcon from '../assets/icons/cart.svg'
import gearIcon from '../assets/icons/gear.svg'
import ideaIcon from '../assets/icons/idea.svg'
import quoteIcon from '../assets/icons/quote.svg'

export const selectCategoryIcon = (category: string): string => {
  let icon = ''
  if (category === 'Task') icon = cartIcon
  if (category === 'Random Thought') icon = gearIcon
  if (category === 'Idea') icon = ideaIcon
  if (category === 'Quote') icon = quoteIcon

  return icon
}
