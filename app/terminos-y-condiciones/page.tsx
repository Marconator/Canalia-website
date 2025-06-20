import Link from "next/link";

export default function TerminosCondiciones() {
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
              Términos y Condiciones
            </h1>

            <div className="prose prose-lg max-w-none text-gray-600 space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">
                  1. Información de la Empresa
                </h2>
                <div className="bg-gray-100 p-4 rounded-lg mb-4">
                  <p>
                    <strong>Entidad Legal:</strong> Wabot Solutions
                  </p>
                  <p>
                    <strong>Dirección:</strong> Panamá, Ciudad de Panamá
                  </p>
                  <p>
                    <strong>Contacto:</strong> contacto@canaliasolutions.com
                  </p>
                  <p>
                    <strong>Última actualización:</strong> Enero 2024
                  </p>
                </div>
                <p>
                  Estos términos y condiciones regulan el uso de los servicios
                  ofrecidos por Wabot Solutions (en adelante "Canalia",
                  "nosotros" o "la empresa") a través de su plataforma de
                  automatización de flujos digitales.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">
                  2. Descripción del Servicio
                </h2>
                <p>
                  Canalia ofrece servicios de automatización de flujos digitales
                  a través de herramientas especializadas que seleccionamos y
                  configuramos para cada cliente según sus necesidades
                  específicas.
                </p>
                <p>
                  El proceso de contratación inicia cuando el cliente completa
                  el formulario disponible en nuestra página principal o se pone
                  en contacto con nosotros a través de correo electrónico.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">
                  3. Contratación y Requisitos
                </h2>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  3.1 Requisitos de Edad
                </h3>
                <p>
                  Nuestros servicios no están dirigidos a menores de 18 años. Al
                  contratar nuestros servicios, usted declara ser mayor de edad
                  y tener capacidad legal para celebrar contratos.
                </p>

                <h3 className="text-xl font-semibold text-primary mb-3">
                  3.2 Información Requerida
                </h3>
                <p>
                  Para la prestación de nuestros servicios, solicitamos la
                  siguiente información:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Nombre completo</li>
                  <li>Correo electrónico</li>
                  <li>Número de teléfono</li>
                  <li>Información de pago</li>
                  <li>Datos de geolocalización</li>
                </ul>
                <p>
                  No se requiere registro o creación de cuenta. El cliente
                  únicamente debe completar el formulario correspondiente.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">
                  4. Obligaciones y Responsabilidades
                </h2>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  4.1 Obligaciones de Canalia
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Diseñar e implementar soluciones de automatización
                    personalizadas
                  </li>
                  <li>Brindar soporte técnico profesional</li>
                  <li>Mantener la confidencialidad de los datos del cliente</li>
                  <li>Prestar el servicio de forma profesional y diligente</li>
                </ul>

                <h3 className="text-xl font-semibold text-primary mb-3">
                  4.2 Obligaciones del Cliente
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Proporcionar información precisa y oportuna</li>
                  <li>Colaborar activamente en la implementación</li>
                  <li>Realizar pagos a tiempo</li>
                  <li>
                    No utilizar los servicios para fines ilegales o dañinos
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-primary mb-3">
                  4.3 Uso Aceptable
                </h3>
                <p>Está prohibido utilizar nuestros servicios para:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Actividades de spam</li>
                  <li>Ataques cibernéticos</li>
                  <li>Fraude o actividades ilegales</li>
                  <li>Cualquier actividad que cause daño a terceros</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">
                  5. Pagos y Facturación
                </h2>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  5.1 Modelo de Precios
                </h3>
                <p>
                  Los precios varían según el cliente y proyecto, generalmente
                  calculados por flujo y considerando los costos de cómputo y
                  licencias asociados al flujo.
                </p>

                <h3 className="text-xl font-semibold text-primary mb-3">
                  5.2 Términos de Pago
                </h3>
                <p>
                  Los pagos se realizan por adelantado a través de tarjeta de
                  crédito o transferencia bancaria.
                </p>

                <h3 className="text-xl font-semibold text-primary mb-3">
                  5.3 Reembolsos y Cancelaciones
                </h3>
                <p>
                  Se puede solicitar reembolso por fallo continuado en los
                  flujos. Para cancelar el servicio, notifique su deseo por
                  correo electrónico.
                </p>

                <h3 className="text-xl font-semibold text-primary mb-3">
                  5.4 Cambios de Precios
                </h3>
                <p>
                  Los cambios en precios o tarifas se notificarán por correo
                  electrónico con antelación razonable.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">
                  6. Propiedad Intelectual
                </h2>
                <p>
                  Las soluciones de automatización desarrolladas por Canalia son
                  propiedad exclusiva de la empresa. El cliente no obtiene
                  licencia de uso de estas soluciones.
                </p>
                <p>
                  Sin embargo, el cliente conserva la propiedad completa de
                  todos los datos y contenidos que proporcione a Canalia para la
                  automatización.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">
                  7. Confidencialidad
                </h2>
                <p>
                  Nos comprometemos a mantener estricta confidencialidad de toda
                  la información de negocio, procesos y datos que el cliente
                  comparta con nosotros durante la prestación del servicio.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">
                  8. Garantías y Limitación de Responsabilidad
                </h2>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  8.1 Garantías del Servicio
                </h3>
                <p>
                  El servicio se prestará de forma profesional y diligente, pero
                  sin garantía de interrupción o error. No ofrecemos garantías
                  adicionales más allá de las establecidas por la ley.
                </p>

                <h3 className="text-xl font-semibold text-primary mb-3">
                  8.2 Limitación de Responsabilidad
                </h3>
                <p>
                  La responsabilidad de Canalia está limitada, exceptuando casos
                  de negligencia grave o dolo por parte de la empresa.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">
                  9. Terminación del Servicio
                </h2>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  9.1 Terminación por parte de Canalia
                </h3>
                <p>
                  Canalia puede suspender o terminar la prestación del servicio
                  en caso de:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Incumplimiento de pago</li>
                  <li>Violación de estos términos</li>
                  <li>Falta de colaboración del cliente</li>
                </ul>

                <h3 className="text-xl font-semibold text-primary mb-3">
                  9.2 Terminación por parte del Cliente
                </h3>
                <p>
                  El cliente puede cancelar o terminar el servicio en cualquier
                  momento notificando por correo electrónico.
                </p>

                <h3 className="text-xl font-semibold text-primary mb-3">
                  9.3 Tratamiento de Datos tras Terminación
                </h3>
                <p>
                  Los datos y proyectos del cliente se eliminarán tras la
                  finalización del contrato y servicio.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">
                  10. Disposiciones Generales
                </h2>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  10.1 Modificaciones
                </h3>
                <p>
                  Los cambios en estos términos y condiciones se notificarán por
                  correo electrónico.
                </p>

                <h3 className="text-xl font-semibold text-primary mb-3">
                  10.2 Ley Aplicable y Jurisdicción
                </h3>
                <p>
                  Estos términos se rigen por las leyes de Panamá. Cualquier
                  disputa será resuelta por los tribunales de Panamá, Ciudad de
                  Panamá.
                </p>

                <h3 className="text-xl font-semibold text-primary mb-3">
                  10.3 Fuerza Mayor
                </h3>
                <p>
                  Canalia no será responsable por incumplimientos causados por
                  eventos de fuerza mayor fuera de nuestro control razonable.
                </p>

                <h3 className="text-xl font-semibold text-primary mb-3">
                  10.4 Cesión
                </h3>
                <p>
                  Canalia se reserva el derecho de ceder estos términos y
                  obligaciones a terceros.
                </p>

                <h3 className="text-xl font-semibold text-primary mb-3">
                  10.5 Divisibilidad
                </h3>
                <p>
                  Si alguna disposición de estos términos resulta inválida, las
                  demás disposiciones permanecerán en pleno vigor.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">
                  11. Contacto
                </h2>
                <p>
                  Para cualquier consulta sobre estos términos y condiciones,
                  puede contactarnos en:
                </p>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <p>
                    <strong>Email:</strong> contacto@canaliasolutions.com
                  </p>
                  <p>
                    <strong>Empresa:</strong> Wabot Solutions
                  </p>
                  <p>
                    <strong>Dirección:</strong> Panamá, Ciudad de Panamá
                  </p>
                </div>
              </section>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <Link href="/" className="btn-primary inline-block">
                Volver al Inicio
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
