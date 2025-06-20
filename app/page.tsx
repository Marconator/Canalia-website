export default function Home() {
  return (
      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="bg-white shadow-sm sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center space-x-3">
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
              </div>
              <nav className="hidden md:flex space-x-8">
                <a
                    href="#servicios"
                    className="text-primary hover:text-secondary transition-colors"
                >
                  Servicios
                </a>
                <a
                    href="#beneficios"
                    className="text-primary hover:text-secondary transition-colors"
                >
                  Beneficios
                </a>
                <a
                    href="/formulario"
                    className="text-primary hover:text-secondary transition-colors"
                >
                  Formulario
                </a>
                <a
                    href="#contacto"
                    className="text-primary hover:text-secondary transition-colors"
                >
                  Contacto
                </a>
              </nav>
              <a href="/formulario" className="btn-primary">
                Comenzar
              </a>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="gradient-bg text-white section-padding">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Automatiza tus procesos,
              <br />
              <span className="text-tertiary">potencia tu negocio</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Transforma la manera en que trabajas con nuestras soluciones de
              automatización de flujos. Ahorra tiempo, reduce errores y enfócate
              en lo que realmente importa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                  href="/formulario"
                  className="btn-primary bg-tertiary text-primary hover:bg-opacity-90"
              >
                Comenzar Ahora
              </a>
              {/* <button className="btn-secondary bg-transparent border-2 border-white text-white hover:text-primary">
              Ver Demo
            </button>  */}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="servicios" className="section-padding bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-4">
                Nuestros Servicios
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Ofrecemos soluciones completas de automatización adaptadas a las
                necesidades de tu empresa
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="feature-card text-center">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                  >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Automatización de Procesos
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Elimina tareas repetitivas y optimiza tus flujos de trabajo con
                  nuestras soluciones inteligentes.
                </p>
              </div>

              <div className="feature-card text-center">
                <div className="w-16 h-16 bg-tertiary rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                      className="w-8 h-8 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                  >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Integración de Sistemas
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Conecta todas tus herramientas y plataformas para que trabajen
                  en perfecta armonía.
                </p>
              </div>

              <div className="feature-card text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                  >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Consultoría Personalizada
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Analizamos tu negocio y diseñamos soluciones a medida para
                  maximizar tu eficiencia.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="beneficios" className="section-padding">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-primary mb-6">
                  ¿Por qué elegir Canalia?
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                      >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-2">
                        Ahorro de Tiempo
                      </h3>
                      <p className="text-gray-600">
                        Reduce hasta un 80% el tiempo dedicado a tareas
                        repetitivas
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                      >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-2">
                        Reducción de Errores
                      </h3>
                      <p className="text-gray-600">
                        Minimiza errores humanos con procesos automatizados y
                        confiables
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                      >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-2">
                        Escalabilidad
                      </h3>
                      <p className="text-gray-600">
                        Soluciones que crecen con tu negocio y se adaptan a tus
                        necesidades
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-2xl">
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-primary mb-4">
                    Resultados Comprobados
                  </h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <div className="text-4xl font-bold text-secondary mb-2">
                        80%
                      </div>
                      <p className="text-gray-600">
                        Reducción en tiempo de procesos
                      </p>
                    </div>
                    <div>
                      <div className="text-4xl font-bold text-secondary mb-2">
                        95%
                      </div>
                      <p className="text-gray-600">Satisfacción del cliente</p>
                    </div>
                    <div>
                      <div className="text-4xl font-bold text-secondary mb-2">
                        50+
                      </div>
                      <p className="text-gray-600">Flujos automatizados</p>
                    </div>
                    <div>
                      <div className="text-4xl font-bold text-secondary mb-2">
                        24/7
                      </div>
                      <p className="text-gray-600">Soporte técnico</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contacto" className="section-padding gradient-bg text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              ¿Listo para automatizar tu rutina?
            </h2>
            <p className="text-xl mb-8 leading-relaxed">
              Completa nuestro formulario y descubre cómo podemos transformar tus
              procesos. Te contactaremos en menos de 24 horas para una consulta
              gratuita.
            </p>
            <div className="flex flex-col sm:flex-column gap-4 justify-center items-center">
              <a
                  href="/formulario"
                  className="btn-primary bg-tertiary text-primary hover:bg-opacity-90 text-lg px-12 py-4"
              >
                Solicitar Consulta Gratuita
              </a>
              <p className="text-sm opacity-90">
                Nada de spam, solo resultados. Cancelable en cualquier momento.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-primary text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10">
                    <img
                        src="/logo_vectorized_no_text.svg"
                        alt="Canalia Logo"
                        className="h-full w-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Canalia</h3>
                    <p className="text-sm text-secondary">Automatiza la rutina</p>
                  </div>
                </div>
                <p className="text-gray-300">
                  Transformamos empresas a través de la automatización inteligente
                  de procesos.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Servicios</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>Automatización de Procesos</li>
                  <li>Integración de Sistemas</li>
                  <li>Consultoría Personalizada</li>
                  <li>Soporte Técnico</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Contacto</h4>
                <div className="space-y-2 text-gray-300">
                  <p>contacto@canaliasolutions.com</p>
                  {/* <p>+34 900 123 456</p> */}
                  <p>Disponible 24/7</p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-300">
              <p>&copy; 2024 Canalia. Todos los derechos reservados.</p>
              <div className="mt-4">
                <a
                    href="/politica-de-privacidad"
                    className="text-gray-300 hover:text-white transition-colors underline"
                >
                  Política de privacidad
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
  );
}
