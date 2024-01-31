import React from 'react'
import Image from 'next/image'
import Contacto from './Contacto'
import styles from '@/app/ui/header.module.css'
import Button from './Button'
import Link from 'next/link'
import Tecnologias from './Tecnologias'
import { iconos } from '@/app/ui/utilities/iconos'

export default function Main() {

    return (
        <>
            <div >
                <h2 id='Proyecto' className={`text-5xl font-bold text-black   text-center my-24 transition duration-700 tranform hover:scale-125`}> Proyectos </h2>
                <div className={`${styles.mainGrid} ${styles.contenedor} mx-auto my-auto  `}>
                    <section className='bg-white max-w-lg rounded-xl flex flex-col h-max shadow-black shadow-xl '>
                        <Image src='/img/gastoSemanal.png' width={1000} height={1000} alt="logo" className="min-w-full" />
                        <article className='mx-3 my-6 overflow-y-scroll scrollbar max-h-80  '>
                            <h3 className='text-center my-5 text-4xl font-bold'>Gasto Semanal</h3>
                            <p className='text-start text-2xl'>Este proyecto tiene como objetivo ofrecer a los usuarios una herramienta intuitiva y eficaz para llevar un registro detallado de sus gastos semanales, proporcionándoles una visión clara de sus hábitos financieros. </p>
                            <Link href="https://papaya-blancmange-f41a27.netlify.app/" className='' legacyBehavior>
                                <a href="#" target='_blank'>
                                    <Button />
                                </a>
                            </Link>

                            <div className='flex justify-between items-center mt-6'>
                                <Image
                                    className="max-w-full"
                                    src={`data:image/svg+xml;base64,${btoa(iconos.html)}`}
                                    height={60}
                                    width={60}
                                    alt="HTML"
                                />

                                <Image
                                    className="max-w-full"
                                    src={`data:image/svg+xml;base64,${btoa(iconos.js)}`}
                                    height={60}
                                    width={60}
                                    alt="JavaScript"
                                />

                                <Image
                                    className="max-w-full"
                                    src={`data:image/svg+xml;base64,${btoa(iconos.css)}`}
                                    height={60}
                                    width={60}
                                    alt="CSS"
                                />
                            </div>
                        </article>

                    </section>

                    <section className='bg-white max-w-lg rounded-xl flex flex-col h-max shadow-black shadow-xl '>
                        <Image src='/img/vet.png' width={1000} height={1000} alt="logo" />
                        <article className='mx-3 my-6 overflow-y-scroll scrollbar max-h-80'>
                            <h3 className='text-center my-5 text-4xl font-bold'>Veterinaria</h3>
                            <p className='text-start text-2xl'>Este proyecto, desarrollado con React, está diseñado para ofrecer a los médicos veterinarios una plataforma digital avanzada para la gestión eficiente de sus clientes y mascotas. La aplicación proporciona una interfaz intuitiva que permite a los profesionales ingresar, organizar y mantener registros detallados de sus pacientes de manera efectiva.</p>
                            <Link href="https://incandescent-belekoy-8234c4.netlify.app/" legacyBehavior>
                                <a href="#" target='_blank'>
                                    <Button />
                                </a>
                            </Link>

                            <div className='flex justify-between items-center mt-6'>
                                <Image
                                    className="max-w-full"
                                    src={`data:image/svg+xml;base64,${btoa(iconos.react)}`}
                                    height={60}
                                    width={60}
                                    alt="React"
                                />

                                <Image
                                    className="max-w-full"
                                    src={`data:image/svg+xml;base64,${btoa(iconos.js)}`}
                                    height={60}
                                    width={60}
                                    alt="JavaScript"
                                />

                                <Image
                                    className="max-w-full"
                                    src={`data:image/svg+xml;base64,${btoa(iconos.tailwind)}`}
                                    height={60}
                                    width={60}
                                    alt="Tawilwind"
                                />
                            </div>
                        </article>

                    </section>

                    <section className='bg-white max-w-lg rounded-xl shadow-black shadow-xl '>
                        <Image src='/img/cafenutricion-t.jpg.webp' width={1000} height={1000} alt="logo" />
                        <article className='mx-3 my-6 overflow-y-scroll scrollbar max-h-80'>
                            <h3 className='text-center my-5 text-4xl font-bold'>Blog Cafe</h3>
                            <p className='text-start text-2xl'> Página creada para mostrar información de los distintos tipos de café, recetas y beneficios que nos puede brindar a nuestro cuerpo </p>
                            <Link href="https://rainbow-muffin-0ad6ae.netlify.app/" legacyBehavior>
                                <a href="#" target='_blank'>
                                    <Button />
                                </a>
                            </Link>


                            <div className='flex justify-evenly items-center mt-6'>
                                <Image
                                    className="max-w-full"
                                    src={`data:image/svg+xml;base64,${btoa(iconos.html)}`}
                                    height={60}
                                    width={60}
                                    alt="Html"
                                />

                                <Image
                                    className="max-w-full"
                                    src={`data:image/svg+xml;base64,${btoa(iconos.css)}`}
                                    height={60}
                                    width={60}
                                    alt="Css"
                                />


                            </div>
                        </article>


                    </section>

                </div>

                <section className={`my-40 mx-auto `}>
                    <h2 id='Tecnologias' className='text-5xl font-bold text-black mt-20 text-center mb-14 transition duration-700 tranform hover:scale-125'>Tecnologias</h2>

                    <Tecnologias />
                </section>





            </div>



        </>
    )
}
