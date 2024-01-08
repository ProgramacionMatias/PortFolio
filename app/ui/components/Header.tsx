"use client";
import Link from "next/link";
import styles from '@/app/ui/header.module.css'
import Image from 'next/image'





export default function Header() {


    return (

        <>
            <div id='Inicio' className={`${styles.header} `}>

                <section className={`${styles.imagenHeader} ${styles.contenedor} text-white font-bold text-xl `}>
                    <div className='pt-10 md:flex md:justify-between items-center px-10'>

                        <Link legacyBehavior href={'#Inicio'}>

                            <Image src='/img/logoFree.jpeg' width={700} height={700} alt="logo" className="w-40 h-40 rounded-full transition duration-700 tranform hover:scale-125 hover:shadow-cyan-200 shadow-lg" />
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

                            <Link legacyBehavior href={"#Contacto"}>
                                <a className="text-white transition duration-700 hover:text-cyan-700  transform hover:scale-125 ">Contacto</a>
                            </Link>


                        </nav>
                    </div>

                    <div className='text-center mt-7 md:mt-20 text-7xl '>
                        <div className="flex justify-center items-center gap-3">
                            <h1 className=''>Matías Baeza Escobar</h1>
                            <p className=" text-xl transition duration-700 font-bold bg-cyan-400 text-cyan-800 rounded-full px-3 hover:text-cyan-700  transform hover:scale-125 hover:text-2xl ">Disponible para Trabajar</p>
                        </div>
                        
                        <p className='text-3xl  mt-5 md:mt-8'>Desarrollador web FrontEnd</p>
                    </div>


                </section>
            </div>
        </>
    )
}