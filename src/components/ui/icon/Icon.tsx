/**
 * @see https://react-icons.github.io/react-icons/icons/fi/
 */
import {
  FiDroplet,
  FiFilter,
  FiHome,
  FiMail,
  FiMapPin,
  FiMenu,
  FiPhone,
  FiSun,
  FiThermometer,
  FiX,
} from 'react-icons/fi'
import { FaWhatsapp } from "react-icons/fa6";
import type { IconBaseProps } from "react-icons";

type IconProps = IconBaseProps & {
  name:
    | 'droplet'
    | 'filter'
    | 'home'
    | 'letter'
    | 'map-pin'
    | 'menu'
    | 'phone'
    | 'sun'
    | 'thermometer'
    | 'whatsapp'
    | 'x'
}

export const Icon = ({ name, ...props }: IconProps) => {
  switch (name) {
    case 'droplet': return <FiDroplet {...props} />
    case 'filter': return <FiFilter {...props} />
    case 'home': return <FiHome {...props} />
    case 'letter': return <FiMail {...props} />
    case 'map-pin': return <FiMapPin {...props} />
    case 'menu': return <FiMenu {...props} />
    case 'phone': return <FiPhone {...props} />
    case 'sun': return <FiSun {...props} />
    case 'thermometer': return <FiThermometer {...props} />
    case 'whatsapp': return <FaWhatsapp {...props} />
    case 'x': return <FiX {...props} />
    default:
      null
  }
}
