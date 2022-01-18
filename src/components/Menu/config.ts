import { MenuEntry } from 'uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.pancakeswap.finance/#/swap?inputCurrency=ETH&outputCurrency=_',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.pancakeswap.finance/#/add/_/BNB',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Staking',
    icon: 'PoolIcon',
    href: '/staking',
  },
  {
    label: 'Referrals',
    icon: 'GroupsIcon',
    href: '/referrals',
  },
  {
    label: 'Lottery (Pending)',
    icon: 'TicketIcon',
    href: '/',
  },
  // {
  //   label: 'Pearl House',
  //   icon: 'poolIcon',
  //   href: '/syrup',
  // },
  // {
  //   label: 'Referrals',
  //   icon: 'PoolIcon3',
  //   href: '/referrals',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/',
      },
      {
        label: 'AstroTools',
        href: 'https://app.astrotools.io/pancake-pair-explorer/',
      },
	  {
        label: 'Chart',
        href: 'https://poocoin.app/',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/PearlDefi',
      },
      {
        label: 'Docs',
        href: 'https://docs.pearldefi.com',
      },
    ],
  },
  {
    label: 'Audit Pending',
    icon: 'AuditIcon',
    href: '/',
  },
//   {
//     label: 'Roadmap',
//     icon: 'NftIcon',
//     href: 'https://docs.pearldefi.com',
//   },
  {
    label: 'Automatic Liquidty',
    icon: 'IfoIcon',
    href: 'https://docs.pearldefi.com',
  },
  {
    label: 'Forked from audited Goosedefi',
    icon: 'GooseIcon',
    href: 'https://www.goosedefi.com/files/hackenAudit.pdf',
  },
]

export default config
