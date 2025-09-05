import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  Microscope, 
  Atom, 
  Laptop, 
  Calculator, 
  Users, 
  TrendingDown, 
  Target, 
  BookOpen, 
  Briefcase, 
  Heart,
  ArrowRight,
  BarChart3,
  Lightbulb,
  Award,
  Globe,
  ChevronDown
} from 'lucide-react'
import './App.css'

// Importar imágenes
import PortadaImg from './assets/Portada.png'
import Modelo1Img from './assets/Modelo1.png'
import FunnelImg from './assets/Funnel.png'

function App() {
  const [activeSection, setActiveSection] = useState(null)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const estadisticasClave = [
    {
      numero: "15.3%",
      descripcion: "de mujeres en carreras STEM en Chile",
      comparacion: "vs 51.3% de hombres",
      icon: TrendingDown,
      color: "text-red-600"
    },
    {
      numero: "26%",
      descripcion: "participación femenina en TI",
      comparacion: "vs 33% promedio global",
      icon: Laptop,
      color: "text-orange-600"
    },
    {
      numero: "55-60%",
      descripcion: "de mujeres formadas no trabajan en STEM",
      comparacion: "pérdida de talento",
      icon: Users,
      color: "text-red-500"
    },
    {
      numero: "36 puntos",
      descripcion: "de brecha entre hombres y mujeres",
      comparacion: "en participación STEM",
      icon: BarChart3,
      color: "text-red-700"
    }
  ]

  const etapasCiclo = [
    {
      titulo: "Educación Escolar",
      descripcion: "Estereotipos desde la infancia, sesgos en el aula",
      datos: "A los 6 años, niñas ya creen ser menos capaces",
      icon: BookOpen,
      color: "bg-blue-100 border-blue-300",
      textColor: "text-blue-800"
    },
    {
      titulo: "Estudios STEM",
      descripcion: "Baja matrícula femenina en carreras técnicas",
      datos: "Solo 29.7% de matrícula femenina en STEM",
      icon: Calculator,
      color: "bg-blue-200 border-blue-400",
      textColor: "text-blue-900"
    },
    {
      titulo: "Inserción Laboral",
      descripcion: "Dificultades para ingresar al mercado laboral",
      datos: "Solo 22% de postulaciones a empleos digitales",
      icon: Briefcase,
      color: "bg-blue-300 border-blue-500",
      textColor: "text-blue-950"
    },
    {
      titulo: "Permanencia y Desarrollo",
      descripcion: "Techos de cristal y pisos pegajosos",
      datos: "31.6% de cargos de liderazgo ocupados por mujeres",
      icon: Target,
      color: "bg-yellow-200 border-yellow-400",
      textColor: "text-yellow-900"
    }
  ]

  const causasEstructurales = [
    {
      titulo: "Sociocultural",
      descripcion: "Estereotipos de género, medios de comunicación, presión social",
      ejemplos: ["Juguetes diferenciados", "Imagen del científico masculino", "Expectativas familiares"],
      color: "bg-[var(--stem-navy)] text-white",
      icon: Globe
    },
    {
      titulo: "Educativo",
      descripcion: "Sesgos docentes, materiales pedagógicos, falta de referentes",
      ejemplos: ["87-94% personajes STEM son hombres", "Menores expectativas hacia niñas", "Segregación disciplinar"],
      color: "bg-[var(--stem-blue-light)] text-[var(--stem-text)]",
      icon: BookOpen
    },
    {
      titulo: "Laboral",
      descripcion: "Ambientes masculinizados, brechas salariales, conciliación",
      ejemplos: ["Techos de cristal", "Pisos pegajosos", "Dificultades trabajo-familia"],
      color: "bg-[var(--stem-yellow)] text-[var(--stem-text)]",
      icon: Briefcase
    },
    {
      titulo: "Individual",
      descripcion: "Síndrome impostora, autopercepción limitada, menor confianza",
      ejemplos: ["Baja autoconfianza", "Fuga de talento", "Autopercepción negativa"],
      color: "bg-[var(--stem-green)] text-[var(--stem-text)]",
      icon: Heart
    }
  ]

  const buenasPracticas = [
    {
      categoria: "Empoderamiento Temprano",
      descripcion: "Programas para niñas y jóvenes en STEM",
      ejemplos: ["Metodologías inclusivas", "Currículos libres de sesgos", "Referentes femeninos"],
      casos: "STEM Camp Kenya, Bee STEM Costa Rica",
      icon: Users,
      color: "bg-[var(--stem-green)]"
    },
    {
      categoria: "Prácticas Empresariales",
      descripcion: "Políticas corporativas inclusivas",
      ejemplos: ["Programas de mentoría", "Conciliación trabajo-familia", "Ambientes inclusivos"],
      casos: "SAP Returnship, IBM Diversity",
      icon: Briefcase,
      color: "bg-[var(--stem-blue-medium)]"
    },
    {
      categoria: "Políticas Públicas",
      descripcion: "Marcos normativos y financiamiento",
      ejemplos: ["Cuotas de paridad", "Becas específicas", "Observatorios de género"],
      casos: "Política CTCI Chile, España I+D+i",
      icon: Target,
      color: "bg-[var(--stem-navy)]"
    },
    {
      categoria: "Difusión y Medios",
      descripcion: "Visibilización y reconocimiento",
      ejemplos: ["Premios científicos", "Campañas públicas", "Referentes mediáticos"],
      casos: "For Women in Science, Inspiradoras, Editatona",
      icon: Award,
      color: "bg-[var(--stem-orange)]"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[var(--stem-navy)] via-[var(--stem-blue-medium)] to-[var(--stem-blue-light)] text-white py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 text-6xl"><Microscope /></div>
          <div className="absolute top-40 right-20 text-5xl"><Atom /></div>
          <div className="absolute bottom-20 left-1/4 text-4xl"><Laptop /></div>
          <div className="absolute bottom-40 right-10 text-5xl"><Calculator /></div>
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Participación de las <br />
            <span className="text-[var(--stem-orange)]">Mujeres en STEM</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Diagnóstico de barreras, causas y buenas prácticas
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8 inline-block">
            <div className="text-4xl md:text-6xl font-bold text-[var(--stem-orange)] mb-2">15.3%</div>
            <div className="text-lg md:text-xl">de mujeres en carreras STEM en Chile</div>
            <div className="text-sm text-blue-200">vs 51.3% de hombres</div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-[var(--stem-orange)] hover:bg-orange-600 text-white px-8 py-3 text-lg"
              onClick={() => scrollToSection('problema')}
            >
              Explorar Insights <ArrowRight className="ml-2" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white bg-transparent hover:bg-white hover:text-[var(--stem-navy)] px-8 py-3 text-lg backdrop-blur-sm"
              onClick={() => scrollToSection('soluciones')}
            >
              Ver Soluciones
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-white text-3xl" />
        </div>
      </section>

      {/* Problema Principal */}
      <section id="problema" className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[var(--stem-navy)] mb-4">El Problema Central</h2>
            <p className="text-xl text-[var(--stem-text)] max-w-3xl mx-auto">
              La baja participación de mujeres en STEM no responde a diferencias biológicas, 
              sino a un entramado complejo de factores estructurales que operan de manera acumulativa.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {estadisticasClave.map((stat, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-red-500">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <stat.icon className={`h-8 w-8 ${stat.color}`} />
                    <Badge variant="destructive">Crítico</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-[var(--stem-navy)] mb-2">{stat.numero}</div>
                  <p className="text-sm text-[var(--stem-text)] mb-2">{stat.descripcion}</p>
                  <p className="text-xs text-gray-500">{stat.comparacion}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ciclo de Exclusión */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[var(--stem-navy)] mb-4">Las 4 Etapas Críticas</h2>
            <p className="text-xl text-[var(--stem-text)] max-w-3xl mx-auto">
              Un ciclo de exclusión progresiva que filtra el talento femenino a lo largo de la vida
            </p>
          </div>
          
          <div className="relative">
            {/* Línea conectora */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-300 via-blue-500 to-yellow-400 transform -translate-x-1/2 hidden md:block z-0"></div>
            
            <div className="space-y-8">
              {etapasCiclo.map((etapa, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col gap-8`}>
                  <div className="flex-1">
                    <Card className={`${etapa.color} hover:shadow-lg transition-all duration-300`}>
                      <CardHeader>
                        <div className="flex items-center gap-3">
                          <div className={`p-3 rounded-full bg-white`}>
                            <etapa.icon className={`h-6 w-6 ${etapa.textColor}`} />
                          </div>
                          <div>
                            <CardTitle className={etapa.textColor}>{etapa.titulo}</CardTitle>
                            <Badge className="mt-1">Etapa {index + 1}</Badge>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className={`${etapa.textColor} mb-3`}>{etapa.descripcion}</p>
                        <div className={`text-sm ${etapa.textColor} bg-white/20 p-3 rounded`}>
                          <strong>Dato clave:</strong> {etapa.datos}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="hidden md:block relative z-10">
                    <div className={`w-12 h-12 rounded-full ${etapa.color.replace('bg-', 'bg-').replace('border-', 'border-')} border-4 flex items-center justify-center font-bold text-lg ${etapa.textColor}`}>
                      {index + 1}
                    </div>
                  </div>
                  
                  <div className="flex-1 md:block hidden"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Causas Estructurales */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[var(--stem-navy)] mb-4">¿Por qué sucede esto?</h2>
            <p className="text-xl text-[var(--stem-text)] max-w-3xl mx-auto">
              Cuatro ámbitos interconectados que refuerzan los estereotipos de género
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {causasEstructurales.map((causa, index) => (
              <Card key={index} className={`${causa.color} hover:shadow-xl transition-all duration-300 cursor-pointer`}
                    onClick={() => setActiveSection(activeSection === index ? null : index)}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <causa.icon className="h-8 w-8" />
                    <CardTitle className="text-xl">{causa.titulo}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{causa.descripcion}</p>
                  
                  {activeSection === index && (
                    <div className="mt-4 space-y-2">
                      <h4 className="font-semibold">Ejemplos específicos:</h4>
                      <ul className="space-y-1">
                        {causa.ejemplos.map((ejemplo, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <div className="w-2 h-2 rounded-full bg-current mt-2 flex-shrink-0"></div>
                            <span className="text-sm">{ejemplo}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div className="mt-4 text-sm opacity-75">
                    Click para ver más detalles
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Buenas Prácticas */}
      <section id="soluciones" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[var(--stem-navy)] mb-4">Soluciones que Funcionan</h2>
            <p className="text-xl text-[var(--stem-text)] max-w-3xl mx-auto">
              Experiencias internacionales demuestran que es posible contrarrestar el ciclo de exclusión
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {buenasPracticas.map((practica, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-t-4" 
                    style={{borderTopColor: practica.color.includes('var') ? 'var(--stem-green)' : '#10B981'}}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-full ${practica.color} text-white`}>
                      <practica.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle className="text-[var(--stem-navy)]">{practica.categoria}</CardTitle>
                      <Badge variant="secondary" className="mt-1">Probado</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-[var(--stem-text)] mb-4">{practica.descripcion}</p>
                  
                  <div className="space-y-2 mb-4">
                    <h4 className="font-semibold text-sm text-[var(--stem-navy)]">Estrategias clave:</h4>
                    <ul className="space-y-1">
                      {practica.ejemplos.map((ejemplo, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <Lightbulb className="h-3 w-3 text-[var(--stem-orange)] mt-1 flex-shrink-0" />
                          <span>{ejemplo}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-3 rounded text-sm">
                    <strong>Casos de éxito:</strong> {practica.casos}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Situación Chile */}
      <section className="py-16 px-4 bg-gradient-to-r from-[var(--stem-blue-light)] to-[var(--stem-green)]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[var(--stem-navy)] mb-6">La Meta de Chile</h2>
          
          <div className="bg-white rounded-lg p-8 shadow-xl mb-8">
            <div className="text-6xl font-bold text-[var(--stem-orange)] mb-4">50/50</div>
            <div className="text-2xl text-[var(--stem-navy)] mb-2">para el 2030</div>
            <p className="text-[var(--stem-text)]">
              Política Nacional de Igualdad de Género en Ciencia, Tecnología, Conocimiento e Innovación
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <Card className="bg-white/90">
              <CardHeader>
                <CardTitle className="text-[var(--stem-navy)] flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Observatorio OBSERVA
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Sistema de seguimiento y monitoreo de brechas de género en CTCI</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/90">
              <CardHeader>
                <CardTitle className="text-[var(--stem-navy)] flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Programa Inspiradoras
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Visibilización de mujeres científicas y tecnólogas como referentes</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/90">
              <CardHeader>
                <CardTitle className="text-[var(--stem-navy)] flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Educación Inclusiva
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Currículos libres de sesgos y metodologías inclusivas en STEM</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[var(--stem-navy)] text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Sobre este Informe</h3>
              <p className="text-blue-100 text-sm">
                Informe preparado analizando la participación de mujeres en STEM y las buenas prácticas para cerrar brechas.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Datos Clave</h3>
              <ul className="space-y-2 text-sm text-blue-100">
                <li>• 48 páginas de análisis detallado</li>
                <li>• Casos de 6+ países</li>
                <li>• 4 etapas críticas identificadas</li>
                <li>• Múltiples buenas prácticas</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Acción</h3>
              <p className="text-blue-100 text-sm mb-4">
                La evidencia muestra que es posible transformar el ciclo de exclusión 
                en un círculo virtuoso de inclusión, diversidad e innovación.
              </p>
              <Button className="bg-[var(--stem-orange)] hover:bg-orange-600">
                Conocer más iniciativas
              </Button>
            </div>
          </div>
          
          <div className="border-t border-blue-700 mt-8 pt-8 text-center text-sm text-blue-200">
            <p>© 2025 - Basado en el informe "Participación de las mujeres en STEM"</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

