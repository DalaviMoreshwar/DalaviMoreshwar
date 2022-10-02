import {  BsGithub } from 'react-icons/bs'
import { AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai'
import crypotTransfer from '../../public/projects/crypto-transfer.png'
import crypotDash_1 from '../../public/projects/crypto-currency-dashboard-1.png'
import crypotDash_2 from '../../public/projects/crypto-currency-dashboard-2.png'
import { SiGmail } from 'react-icons/si'
export const socials = [
  {
    id: 1,
    url: "https://twitter.com/MoreshwarDalvi",
    icon: <AiFillTwitterCircle  />
  },
  {
    id: 2,
    url: "https://www.linkedin.com/in/dalvimoreshwar/",
    icon: <AiFillLinkedin  />
  },
  {
    id: 3,
    url: "https://github.com/DalviMoreshwar",
    icon: <BsGithub  />
  },
  {
    id: 3,
    url: "mailto:moreshwardlv@gmail.com",
    icon: <SiGmail  />
  },
]

export const projectsDetails = [
  {
    id: 1,
    title: "Crypto Transfer App",
    description: "Modern and Real World Web 3.0 Blockchain Application. Full fledge Web 3.0 application that allows users to send ETH transactions through the Blockchain.",
    bgImg: crypotTransfer,
    githubUrl: "https://vercel.com/dalvimoreshwar/crypto-transfer",
    webUrl: "https://crypto-transfer-psi.vercel.app/",
    tags: [
      "React Js",
      "Tailwind CSS",
      "Solidity",
      "Ethers Js",
      "Metamask Wallet",
      "Ethereum",
      "Blockchain"
    ]
  },
  {
    id: 2,
    title: "Crypto Currency Dashboard - 1",
    description: "Integration of an API provided by CoinGecko. Display information about Bitcoin available in market place.",
    bgImg: crypotDash_1,
    githubUrl: "https://github.com/DalviMoreshwar/crypto-currency-dashboard/tree/main",
    webUrl: "https://crypto-currency-dashboard-woad.vercel.app/",
    tags: [
      "React Js",
      "Material UI",
      "CoinGecko API",
      "axios",
      "Charts Js",
    ]
  },
  {
    id: 3,
    title: "Crypto Currency Dashboard - 2",
    description: "Integration of an API provided by CoinGecko. Display information about Bitcoin available in market place.",
    bgImg: crypotDash_2,
    githubUrl: "https://github.com/DalviMoreshwar/crypto-currency-react-app/tree/main",
    webUrl: "https://crypto-currency-react-app.vercel.app/",
    tags: [
      "React Js",
      "CoinGecko API",
      "React Router DOM",
      "Css",
      "Axios"
    ]
  },
]