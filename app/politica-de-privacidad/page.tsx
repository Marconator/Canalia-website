import Link from "next/link";

export default function PoliticaPrivacidad() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow-sm sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        <Link href="/" className="flex items-center space-x-3">
                            <div className="w-12 h-12">
                                <img
                                    src="/logo_vectorized_no_text.svg"
                                    alt="Canalia Logo"
                                    className="h-full w-full object-contain"
                                />
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold text-primary">Canalia</h1>
                                <p className="text-sm text-secondary">Automatiza la rutina</p>
                            </div>
                        </Link>
                        <Link
                            href="/"
                            className="text-primary hover:text-secondary transition-colors"
                        >
                            ← Volver al inicio
                        </Link>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="py-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-xl shadow-lg p-8">
                        <h1 className="text-4xl font-bold text-primary mb-8">
                            Política de Privacidad
                        </h1>

                        <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
                            <section>
                                <h2 className="text-2xl font-bold text-primary mb-4">
                                    1. Información general
                                </h2>
                                <p>
                                    Esta Política de Privacidad describe cómo Wabot Solutions (Canalia) ("nosotros", "nuestro" o
                                    "Canalia"), con domicilio en Panamá, Ciudad de Panamá, recopila, utiliza y comparte
                                    su información personal cuando visita nuestro sitio web o utiliza nuestros
                                    servicios.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-primary mb-4">
                                    2. Recopilación de información
                                </h2>
                                <p>
                                    Recopilamos la siguiente información personal de diversas maneras:

                                    Información proporcionada directamente por usted:
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>Nombre completo: Cuando completa formularios de contacto o realiza una
                                            compra.
                                        </li>
                                        <li>Correo electrónico: Para comunicaciones, registro y envío de newsletters.
                                        </li>
                                        <li>Número de teléfono: Para contactarlo en relación con nuestros servicios o
                                            compras.
                                        </li>
                                        <li>Información de pago: Para procesar sus compras de productos o servicios.
                                        </li>
                                        <li>Datos demográficos: Si decide proporcionarlos voluntariamente.</li>
                                        <li>Información recopilada automáticamente:</li>
                                        <li>Datos de geolocalización: A través de cookies y tecnologías de
                                            seguimiento.
                                        </li>
                                        <li>Datos de uso: Información sobre cómo interactúa con nuestro sitio web,
                                            incluyendo las páginas que visita y el tiempo que pasa en ellas, recopilada
                                            a través de cookies y tecnologías de seguimiento.
                                        </li>
                                    </ul>
                                </p>
                                No recopilamos información sensible como datos de salud, origen racial o étnico,
                                opiniones políticas, creencias religiosas o datos genéticos/biométricos.
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-primary mb-4">
                                    3. Uso de la información
                                </h2>
                                <p>
                                    Utilizamos la información recopilada para los siguientes propósitos:

                                    Proveer los servicios o productos solicitados: Para procesar sus pedidos y ofrecerle
                                    nuestros servicios.
                                    Enviar newsletters o comunicaciones de marketing: Para mantenerlo informado sobre
                                    nuestras novedades, ofertas y actualizaciones, si ha optado por recibirlas.
                                    Mejorar la experiencia del usuario: Analizando cómo interactúa con nuestro sitio web
                                    para optimizar su diseño y funcionalidad.
                                    Procesar pagos: Para gestionar todas las transacciones financieras relacionadas con
                                    sus compras.
                                    Analizar el tráfico web: Para entender el rendimiento de nuestro sitio y cómo los
                                    usuarios navegan por él.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-primary mb-4">
                                    4. Datos compartidos con terceros
                                </h2>
                                <p>
                                    Compartimos su información personal con los siguientes terceros para los propósitos
                                    descritos a continuación:

                                    Google: Para servicios de análisis web (Google Analytics) y publicidad, así como
                                    para el alojamiento de ciertos datos.
                                    Digital Ocean: Como proveedor de servicios de hosting.
                                    Estas transferencias se realizan con el propósito de proveer servicios esenciales
                                    como hosting, análisis web, marketing y procesamiento de datos, asegurando la
                                    funcionalidad y mejora de nuestros servicios.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-primary mb-4">
                                    5. Transferencias internacionales de datos
                                </h2>
                                <p>
                                    Su información personal puede ser transferida y almacenada en servidores ubicados fuera de su país de residencia, específicamente en los servidores de Google y Digital Ocean. Estas transferencias se realizan bajo medidas de seguridad adecuadas para proteger su privacidad.
                                </p>

                            </section>
                            <section>
                                <h2 className="text-2xl font-bold text-primary mb-4">
                                    6. Derechos del usuario
                                </h2>
                                <p>
                                    Para ejercer cualquiera de estos derechos, por favor envíe una solicitud explícita a contacto@canaliasolutions.com. Atenderemos su solicitud de acuerdo con la legislación aplicable.
                                </p>
                                <div className="bg-gray-100 p-4 rounded-lg">
                                    <h3 className="font-bold mb-2">Derechos que incluyen:</h3>
                                    <ul className="list-disc pl-6 space-y-1">
                                        <li>Acceso a la información personal</li>
                                        <li>Rectificación de datos incorrectos</li>
                                        <li>Eliminación de datos personales</li>
                                        <li>Limitación del procesamiento</li>
                                        <li>Portabilidad de datos</li>
                                    </ul>
                                </div>
                            </section>
                            <section>
                                <h2 className="text-2xl font-bold text-primary mb-4">
                                    7. Seguridad de los datos
                                </h2>
                                <p>
                                    Nos tomamos la seguridad de su información muy en serio. Implementamos prácticas estándar de seguridad en la industria en el manejo de datos, incluyendo encriptación en tránsito y en reposo. Además, confiamos en proveedores con reconocimiento mundial de seguridad para el almacenamiento y procesamiento de sus datos.
                                </p>
                            </section>
                            <section>
                                <h2 className="text-2xl font-bold text-primary mb-4">
                                    8. Privacidad de menores
                                </h2>
                                <p>
                                    Nuestro sitio web y servicios no están dirigidos a menores de 18 años. No recopilamos intencionalmente información personal de menores de edad. Si descubrimos que hemos recopilado información de un menor sin el consentimiento de los padres, tomaremos medidas para eliminar esa información.                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-primary mb-4">
                                    9. Cambios en la política de privacidad
                                </h2>
                                <p>
                                    Podemos actualizar esta Política de Privacidad periódicamente. Le notificaremos sobre cualquier cambio significativo por correo electrónico a la dirección que tengamos registrada. Le recomendamos revisar esta página regularmente para estar informado sobre nuestras prácticas de privacidad.
                                </p>
                            </section>
                        </div>

                        <div className="mt-12 pt-8 border-t border-gray-200">
                            <Link
                                href="/"
                                className="btn-primary inline-block"
                            >
                                Volver al Inicio
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
