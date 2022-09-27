import type { NextPage } from 'next'

import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <>
      <section className="w-full h-full min-h-[100vh] flex flex-col items-center justify-center">
        <ul className="flex flex-col gap-8">
          <li className="font-bold text-3xl">
            <Link href="/profile-01">
              <a>Perfil 01</a>
            </Link>
          </li>
          <li className="font-bold text-3xl">
            <Link href="/profile-02">
              <a>Perfil 02</a>
            </Link>
          </li>
        </ul>
      </section>
    </>
  )
}

export default Home
