import React from 'react'
import Image from 'next/image'
import { iconos } from '@/app/ui/utilities/iconos'
import styles from '@/app/ui/header.module.css'

export default function Tecnologias() {
    return (
        <>
            <div className='grid justify-items-center grid-cols-4 my-24   bg-slate-50 gap-2  mx-auto max-w-lg  ' >
                <Image
                    className="max-w-full transition duration-700 tranform hover:scale-125 hover:shadow-blue-950 shadow-lg rounded-full "
                    src={`data:image/svg+xml;base64,${btoa(iconos.html)}`}
                    height={80}
                    width={80}
                    alt="HTML"
                />
                <Image
                    className="max-w-full transition duration-700 tranform hover:scale-125 hover:shadow-blue-950 shadow-lg rounded-full"
                    src={`data:image/svg+xml;base64,${btoa(iconos.css)}`}
                    height={60}
                    width={60}
                    alt="CSS"
                />

                <Image
                    className="max-w-full transition duration-700 tranform hover:scale-125 hover:shadow-blue-950 shadow-lg rounded-full"
                    src={`data:image/svg+xml;base64,${btoa(iconos.tailwind)}`}
                    height={60}
                    width={60}
                    alt="Tailwind"
                />


                <Image
                    className="max-w-full transition duration-700 tranform hover:scale-125 hover:shadow-blue-950 shadow-lg rounded-full"
                    src={`data:image/svg+xml;base64,${btoa(iconos.js)}`}
                    height={60}
                    width={60}
                    alt="JavaScript"
                />


                <Image
                    className="max-w-full transition duration-700 tranform hover:scale-125 hover:shadow-blue-950 shadow-lg rounded-full"
                    src={`data:image/svg+xml;base64,${btoa(iconos.react)}`}
                    height={60}
                    width={60}
                    alt="Tailwind"
                />


                <Image
                    className="max-w-full transition duration-700 tranform hover:scale-125 hover:shadow-blue-950 shadow-lg rounded-full"
                    src={`data:image/svg+xml;base64,${btoa(iconos.next)}`}
                    height={60}
                    width={60}
                    alt="NextJs"
                />

                <Image
                    className="max-w-full transition duration-700 tranform hover:scale-125 hover:shadow-blue-950 shadow-lg rounded-full"
                    src={`data:image/svg+xml;base64,${btoa(iconos.git)}`}
                    height={60}
                    width={60}
                    alt="Git"
                />

                <Image
                    className="max-w-full transition duration-700 tranform hover:scale-125 hover:shadow-blue-950 shadow-lg rounded-full"
                    src={`data:image/svg+xml;base64,${btoa(iconos.github)}`}
                    height={60}
                    width={60}
                    alt="GitHub"
                />


            </div>
        </>
    )
}
