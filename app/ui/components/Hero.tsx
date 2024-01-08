import styles from '@/app/ui/header.module.css'
import Image from 'next/image'
import { iconos } from '@/app/ui/utilities/iconos'
import Link from 'next/link'
export default function Hero() {
    return (
        <>
            <section className={`${styles.contenedorHero} text-center text-black  `}>
                <article >
                    <h2 id='SobreMi' className={`text-5xl font-bold  mt-20 text-center my-24 transition duration-700 tranform hover:scale-125`}>Sobre Mi</h2>
                    <p className='text-3xl  mt-5 flex text-start min-w-10 mb-10 '>Soy Matías Baeza Escobar, un apasionado Diseñador y Desarrollador Web Freelancer enfocado en crear sitios web atractivos visualmente y altamente efectivos para generar ventas. Mi objetivo es fusionar la estética con la funcionalidad para ofrecer experiencias digitales que cautiven a los visitantes e impulsen las ventas.
                    </p>
                   

                </article>

                <article className='flex justify-center gap-6 '>
                    <div className=''>
                    <Link href={'#'} legacyBehavior>
                        <a href="https://github.com/ProgramacionMatias" target='_blank'>
                            <Image
                                className="max-w-full  rounded-full transition duration-700 tranform hover:scale-125 hover:shadow-blue-950 shadow-lg"
                                src={`data:image/svg+xml;base64,${btoa(iconos.github)}`}
                                height={60}
                                width={60}
                                alt="GitHub"
                            />
                        </a>
                    </Link>
                    </div>
                   
                    <Link href={''} legacyBehavior>
                        <a href="https://api.whatsapp.com/send?phone=964784119" target='_blank'>
                            <Image
                               className="max-w-full  rounded-full transition duration-700 tranform hover:scale-125 hover:shadow-blue-950 shadow-lg"
                                src={`data:image/svg+xml;base64,${btoa(iconos.whatsapp)}`}
                                height={60}
                                width={60}
                                alt="whatsapp"
                            />
                        </a>
                    </Link>

                    <Link href={''} legacyBehavior>
                        <a href="https://www.linkedin.com/in/matias06" target='_blank'>
                            <Image
                               className="max-w-full  rounded-full transition duration-700 tranform hover:scale-125 hover:shadow-blue-950 shadow-lg "
                                src={`data:image/svg+xml;base64,${btoa(iconos.linkedin)}`}
                                height={60}
                                width={60}
                                alt="linkedin"
                            />
                        </a>
                    </Link>
                </article>

                <div>
                    <Link href={''} legacyBehavior>
                    <a href="https://www.dropbox.com/scl/fi/6xyms6khjq5ct2gvkpqmb/CV-Matias-Baeza-1.pdf?rlkey=k9s7sl4phjwaoc0u0rsngw9wx&dl=0" target='_blank'>
                        <button className='p-4  text-3xl  mt-5 md:mt-8 bg-red-600 text-cyan-400 rounded-full px-5 hover:text-cyan-200  transform hover:scale-125 hover:text-2xl'> Descargar CV </button>
                    </a>
                    </Link>
                </div>

            </section>
        </>
    )
}