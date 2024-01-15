/**
 * @see https://react-icons.github.io/react-icons/icons/fi/
 */
import {
  FiDroplet,
  FiThermometer,
  FiSun,
  FiFilter,
  FiHome,
} from 'react-icons/fi'

type IconProps = {
  name: 'droplet' | 'thermometer' | 'sun' | 'filter' | 'home'
}

export const Icon = ({ name }: IconProps) => {
  switch (name) {
    case 'droplet':
      return <FiDroplet />
    case 'thermometer':
      return <FiThermometer />
    case 'sun':
      return <FiSun />
    case 'filter':
      return <FiFilter />
    case 'home':
      return <FiHome />
    default:
      null
  }
}
