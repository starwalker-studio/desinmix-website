import style from './ContactUs.module.scss';

export const ContactUs = () => {
    return (
        <section className={style.dark_blue_background}>
            <div className={style.contact_container}>
                <div className={style.contact_content}>
                    <div className={style.contact_wrapper}>
                        <div className={style.contact_grid}>
                            <div className={style.form_text}>
                                <div>
                                    <h2>Hablemos de tu proyecto</h2>
                                    <p>Cuéntanos qué quieres lograr y te ayudamos a convertirlo en una solución profesional.</p>
                                    <p>Envíanos tu plan por correo y solicita tu cotización.</p>
                                    {/* <p>Escríbenos o mándanos un WhatsApp, estamos para apoyarte.</p>
                                    <div>
                                        <button>Enviar WhatsApp</button>
                                    </div> */}
                                </div>
                            </div>
                            <div className={style.contact_form}>
                                <form action="">
                                    <input type="text" placeholder='Nombre' />
                                    <input type="email" placeholder='Correo electrónico' />
                                    <input type="text" placeholder='Asunto' />
                                    <textarea name="" id="" placeholder='Mensaje'></textarea>
                                    <button>Enviar Correo</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
