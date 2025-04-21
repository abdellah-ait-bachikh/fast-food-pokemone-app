import { FaHome } from 'react-icons/fa'
import { IoDocumentTextOutline } from 'react-icons/io5'
import { FaHandHoldingUsd } from 'react-icons/fa'
import { FaCalendarDays } from 'react-icons/fa6'
import { BiSolidOffer } from 'react-icons/bi'
import { MdOutlineCategory,MdFastfood,MdOutlineShop2 } from 'react-icons/md'

export const links = [
  { name: 'Accueil', href: '/', icon: FaHome  },
  { name: 'Journée ', href: '/days', icon: FaCalendarDays  },
  { name: 'Catégories', href: '/categories', icon: MdOutlineCategory  },
  { name: 'Produits', href: '/products', icon: MdFastfood  },
  { name: 'Packes', href: '/offers', icon: BiSolidOffer  },
  { name: 'Paiements', href: '/commandes', icon: FaHandHoldingUsd  },
  { name: 'Factures', href: '/invoices', icon: IoDocumentTextOutline  },
  { name: 'Commandes', href: '/orders', icon: MdOutlineShop2  }
] as const
