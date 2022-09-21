import type { NextPage } from 'next'
import Head from 'next/head'

import { BigHead } from '@bigheads/core'
import {
  WhatsappLogo,
  TwitterLogo,
  YoutubeLogo,
  InstagramLogo,
  EnvelopeSimple,
  FacebookLogo,
  House,
} from 'phosphor-react'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Liz Midlej Silva</title>
      </Head>

      <header className="w-full text-center flex flex-col items-center">
        <div className="w-[16em] h-[16em]">
          <BigHead
            accessory="roundGlasses"
            body="chest"
            circleColor="blue"
            clothing="dress"
            clothingColor="blue"
            eyebrows="concerned"
            eyes="content"
            faceMask={false}
            faceMaskColor="blue"
            facialHair="none"
            graphic="none"
            hair="pixie"
            hairColor="blonde"
            hat="none"
            hatColor="black"
            lashes
            lipColor="red"
            mask
            mouth="openSmile"
            skinTone="light"
          />
        </div>
        <h1 className="font-bold text-xl inline-block bg-gray-800 text-white p-[0.3em_0.6em] rounded-full border-2 border-gray-100 backdrop-blur backdrop-saturate-150 backdrop-contrast-150">
          Liz Midlej Silva
        </h1>
      </header>

      <ul className="p-8 m-auto w-full max-w-[375px]">
        <li className="bg-gray-50 backdrop-blur backdrop-saturate-150 backdrop-contrast-150 rounded-[10em] p-[1em] m-[1.4em_0]">
          <Link href="/">
            <a className="flex items-center justify-center gap-2">
              <House size={20} weight="light" />
              <span>Site Oficial</span>
            </a>
          </Link>
        </li>
        <li className="bg-gray-50 backdrop-blur backdrop-saturate-150 backdrop-contrast-150 rounded-[10em] p-[1em] m-[1.4em_0]">
          <Link href="/">
            <a className="flex items-center justify-center gap-2">
              <WhatsappLogo size={20} weight="light" />
              <span>WhatsApp</span>
            </a>
          </Link>
        </li>
        <li className="bg-gray-50 backdrop-blur backdrop-saturate-150 backdrop-contrast-150 rounded-[10em] p-[1em] m-[1.4em_0]">
          <Link href="/">
            <a className="flex items-center justify-center gap-2">
              <TwitterLogo size={20} weight="light" />
              <span>Twitter</span>
            </a>
          </Link>
        </li>
        <li className="bg-gray-50 backdrop-blur backdrop-saturate-150 backdrop-contrast-150 rounded-[10em] p-[1em] m-[1.4em_0]">
          <Link href="/">
            <a className="flex items-center justify-center gap-2">
              <YoutubeLogo size={20} weight="light" />
              <span>Youtube</span>
            </a>
          </Link>
        </li>
        <li className="bg-gray-50 backdrop-blur backdrop-saturate-150 backdrop-contrast-150 rounded-[10em] p-[1em] m-[1.4em_0]">
          <Link href="/">
            <a className="flex items-center justify-center gap-2">
              <InstagramLogo size={20} weight="light" />
              <span>Instagram</span>
            </a>
          </Link>
        </li>
        <li className="bg-gray-50 backdrop-blur backdrop-saturate-150 backdrop-contrast-150 rounded-[10em] p-[1em] m-[1.4em_0]">
          <Link href="/">
            <a className="flex items-center justify-center gap-2">
              <EnvelopeSimple size={20} weight="light" />
              <span>E-mail</span>
            </a>
          </Link>
        </li>
        <li className="bg-gray-50 backdrop-blur backdrop-saturate-150 backdrop-contrast-150 rounded-[10em] p-[1em] m-[1.4em_0]">
          <Link href="/">
            <a className="flex items-center justify-center gap-2">
              <FacebookLogo size={20} weight="light" />
              <span>Facebook</span>
            </a>
          </Link>
        </li>
      </ul>
    </>
  )
}

export default Home
