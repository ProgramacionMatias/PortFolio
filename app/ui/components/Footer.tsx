
"use client";
import Link from "next/link";
import styles from '@/app/ui/header.module.css'
import Image from 'next/image'

export default function Footer() {

    const fecha = new Date().getFullYear()

    return (
        <div>
            <div id='Inicio'>

                <section className={`bg-sky-950 text-white font-bold text-xl p-5 `}>

                    <div className='flex-col-reverse gap-5 pt-10 flex md:flex md:flex-row justify-between items-center px-10 '>
                        <div className="py-8 ">
                            <p> {`©Todos los derechos reservados. Matias Baeza Escobar `} <span className="text-2xl text-yellow-400">{fecha}</span></p>
                        </div>
                        <Link legacyBehavior href={'#Inicio'}>

                            <Image src='/img/logoNuevo.jpeg' width={700} height={700} alt="logo" className="w-40 h-40 rounded-full transition duration-700 tranform hover:scale-125 hover:shadow-cyan-200 shadow-lg" />
                        </Link>

                        <nav className='flex flex-col md:flex-row gap-1 md:gap-6 text-3xl text-center  ' >
                            <Link legacyBehavior href="/">
                                <a className="text-white transition duration-700 hover:text-cyan-700  transform hover:scale-125 ">Inicio</a>
                            </Link>
                            <Link legacyBehavior href={'#SobreMi'}>
                                <a className="text-white transition duration-700 hover:text-cyan-700  transform hover:scale-125 ">Sobre Mi</a>
                            </Link>
                            <Link legacyBehavior href={'#Proyecto'}>
                                <a className="text-white transition duration-700 hover:text-cyan-700  transform hover:scale-125 ">Proyecto</a>
                            </Link>
                            <Link legacyBehavior href="#Tecnologias">
                                <a className="text-white transition duration-700 hover:text-cyan-700  transform hover:scale-125 ">Tecnologias</a>
                            </Link>




                        </nav>


                    </div>



                </section>
            </div>
        </div>
    )
}
