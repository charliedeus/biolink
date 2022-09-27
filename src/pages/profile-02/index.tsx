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

const Profile_02: NextPage = () => {
  return (
    <section className="w-full max-w-[414px] h-full min-h-[100vh] flex flex-col flex-1 items-center gap-4 p-4 m-auto">
      <header className="w-full bg-primary flex flex-col items-center justify-center gap-8 p-8 rounded-xl">
        <picture className="">
          <img
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            alt=""
            className="w-24 h-24 rounded-xl object-cover object-center ring-slate-50 ring-4"
          />
        </picture>

        <div className="flex flex-col gap-2 text-center">
          <h1 className="font-bold text-xl">Liz Midlej Silva</h1>
          <p className="font-light text-xs">
            Educador Financeiro, ajudando a construir sonhos...
          </p>
        </div>

        <button className="bg-secondary text-white text-sm px-6 py-2 rounded-lg">
          Fale comigo
        </button>
      </header>

      <main className="w-full flex-1">
        <ul className="w-full h-full flex flex-1 flex-col gap-4">
          <li className="w-full py-4 rounded-2xl bg-primary">
            <Link href="/">
              <a className="flex items-center justify-center px-16">
                <WhatsappLogo size={24} weight="light" />
                <span className="flex-1 text-center">WhatsApp</span>
              </a>
            </Link>
          </li>
          <li className="w-full py-4 rounded-2xl bg-primary">
            <Link href="/">
              <a className="flex items-center justify-center px-16">
                <InstagramLogo size={24} weight="light" />
                <span className="flex-1 text-center">Meu Instagram</span>
              </a>
            </Link>
          </li>
          <li className="w-full py-4 rounded-2xl bg-primary">
            <Link href="/">
              <a className="flex items-center justify-center px-16">
                <YoutubeLogo size={24} weight="light" />
                <span className="flex-1 text-center">Meu Youtube</span>
              </a>
            </Link>
          </li>
          <li className="w-full py-4 rounded-2xl bg-primary">
            <Link href="/">
              <a className="flex items-center justify-center px-16">
                <FacebookLogo size={24} weight="light" />
                <span className="flex-1 text-center">Meu Facebook</span>
              </a>
            </Link>
          </li>
          <li className="w-full py-4 rounded-2xl bg-primary">
            <Link href="/">
              <a className="flex items-center justify-center px-16">
                <EnvelopeSimple size={24} weight="light" />
                <span className="flex-1 text-center">Meu E-mail</span>
              </a>
            </Link>
          </li>
        </ul>
      </main>
    </section>
  )
}

export default Profile_02
