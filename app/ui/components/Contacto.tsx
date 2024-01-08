"use client";
import Button from './Button'
import styles from '@/app/ui/header.module.css'
import Error from './Error'
import { useState } from 'react'

export default function Contacto() {
    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [mensaje, setMensaje] = useState('')
    const [error, setError] = useState(false)
    console.log(error)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if ([nombre, email, mensaje].includes('')) {
            setError(true)

            setTimeout(() => {
                setError(false)
            }, 3000);

            return
        }


    }
    return (
        <>
            <div className='bg-slate-50  my-40 mx-auto max-w-lg  md:max-w-2xl'>
                <form action="https://formsubmit.co/matias.baeza.escobar@gmail.com" method="POST" onSubmit={handleSubmit} className={`${styles.formulario} ${styles.contenedor} `} >

                    {error && <Error><p>Todos los campos son obligatorios</p></Error>}

                    <fieldset>
                        <legend id='Contacto' className='text-5xl text-center font-bold transition duration-700 tranform hover:scale-125 '>Contactame</legend>
                        <div className='text-2xl flex flex-col my-8 '>
                            <label className='my-7 font-bold ' >Nombre:</label>
                            <input  onChange={(e) => setNombre(e.target.value)} className='w-full px-2 rounded-2xl ' type="text" name="name" placeholder="ejemplo: Matias Baeza" />

                            <label className='my-7 font-bold '>Email:</label>
                            <input  onChange={(e) => setEmail(e.target.value)} className='w-full px-2' type="email" name="email" placeholder="ejemplo: correo@correo.com" />

                            <label className='my-3  font-bold '>Mensaje: </label>
                            <textarea  onChange={(e) => setMensaje(e.target.value)} className='min-w-full min-h-52 my-4 px-2' name="mensaje" placeholder="Escriba el mensaje que desea enviar" />
                        </div>
                    </fieldset>

                    <Button />

                </form>

            </div>

        </>
    )
}
