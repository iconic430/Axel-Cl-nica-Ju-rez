/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  MessageCircle, 
  MapPin, 
  Clock, 
  Star, 
  ChevronRight, 
  Award, 
  GraduationCap, 
  ShieldCheck,
  Smartphone
} from "lucide-react";

export default function App() {
  const scrollToForm = () => {
    const formSection = document.getElementById("formulario-section");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">
      {/* Top Logo Placeholder */}
      <div className="w-full h-16 bg-brand-green flex items-center justify-center">
        <div className="text-white font-bold tracking-widest text-sm italic">
          Insertar LOGO aquí
        </div>
      </div>

      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 px-6 py-4 flex justify-between items-center">
        <span className="font-black tracking-tighter text-xl text-slate-800">
          HECTOR JUAREZ
        </span>
        <button 
          onClick={scrollToForm}
          className="bg-brand-blue text-white px-5 py-2 rounded-full text-sm font-bold premium-shadow active:scale-95 transition-transform"
        >
          AGENDAR
        </button>
      </nav>

      <main className="max-w-md mx-auto">
        {/* Hero Section */}
        <section className="px-6 pt-12 pb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-black leading-tight tracking-tight mb-4">
              Redefine tu Imagen a través de tu <span className="text-brand-green">Sonrisa</span>
            </h1>
            <p className="text-slate-500 text-lg mb-8 leading-relaxed">
              Diseño de sonrisa con carillas personalizadas buscando armonía y estética natural. Atención profesional en Hermosillo.
            </p>
            
            <button 
              onClick={scrollToForm}
              className="w-full bg-slate-900 text-white py-5 rounded-[30px] text-lg font-bold flex items-center justify-center gap-2 premium-shadow mb-8 active:scale-95 transition-transform"
            >
              Agendar valoración <ChevronRight size={20} />
            </button>

            {/* Social Proof */}
            <div className="flex flex-col items-center gap-3">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img 
                    key={i}
                    src={`https://picsum.photos/seed/person${i}/100/100`}
                    alt="Paciente"
                    className="w-10 h-10 rounded-full border-2 border-white object-cover"
                    referrerPolicy="no-referrer"
                  />
                ))}
              </div>
              <div className="flex items-center gap-1 text-sm font-medium text-slate-600">
                <div className="flex text-yellow-400">
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                </div>
                <span>+50 reseñas positivas</span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Competitive Advantage */}
        <section className="px-6 py-16 bg-slate-50 rounded-t-[50px]">
          <div className="mb-10">
            <span className="text-brand-green font-bold text-xs uppercase tracking-widest mb-2 block">Tecnología en Carillas</span>
            <h2 className="text-3xl font-black tracking-tight mb-4">Precisión digital para un ajuste anatómico</h2>
            <p className="text-slate-500 leading-relaxed">
              Utilizamos tecnología para planificar los detalles de tus carillas estratificadas. Buscamos un resultado que se integre estéticamente con tu fisionomía.
            </p>
          </div>

          <div className="relative rounded-[30px] overflow-hidden aspect-video bg-slate-200 mb-6 flex items-center justify-center">
            <div className="text-slate-400 italic text-sm text-center px-10">
              Insertar video o foto de alta calidad del proceso digital
            </div>
            <div className="absolute top-4 left-4 bg-white/80 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-tighter">
              Proceso 100% Digital
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div className="bg-white p-6 rounded-[30px] premium-shadow flex items-start gap-4">
              <div className="bg-brand-green/10 p-3 rounded-2xl text-brand-green">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h3 className="font-bold mb-1">Calidad Humana</h3>
                <p className="text-sm text-slate-500">Trato humanista y calidez en cada paso de tu tratamiento.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Authority Section */}
        <section className="px-6 py-16">
          <h2 className="text-3xl font-black tracking-tight mb-8 text-center">Tu sonrisa en manos expertas</h2>
          
          <div className="bg-white rounded-[40px] p-8 premium-shadow border border-slate-50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/5 rounded-full -mr-16 -mt-16" />
            
            <div className="flex flex-col items-center mb-6">
              <div className="w-24 h-24 rounded-full bg-slate-100 mb-4 flex items-center justify-center overflow-hidden border-4 border-white premium-shadow">
                <div className="text-slate-400 italic text-[10px] text-center px-2">
                  Insertar foto profesional del Dr. Hector Juarez
                </div>
              </div>
              <h3 className="text-xl font-bold">Dr. Hector Juarez</h3>
              <p className="text-brand-green font-medium text-sm">Odontología Estética</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 text-slate-600">
                <Award className="text-brand-green shrink-0" size={20} />
                <span className="text-sm font-medium">3 años de práctica profesional</span>
              </div>
              <div className="flex items-start gap-4 text-slate-600">
                <GraduationCap className="text-brand-green shrink-0" size={20} />
                <span className="text-sm font-medium leading-tight">
                  Egresado de Universidad Vizcaya de las Américas y Universidad del Ejército y Fuerza Aérea
                </span>
              </div>
            </div>

            <div className="mt-8 p-4 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
              <p className="text-slate-400 italic text-sm text-center">
                Insertar descripción personal sobre estudios y pasión por la profesión aquí.
              </p>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section id="formulario-section" className="px-6 py-16 bg-slate-900 rounded-t-[50px] text-white">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black tracking-tight mb-4">Agenda una sesión de valoración gratuita</h2>
            <p className="text-slate-400">Déjanos tus datos y te contactaremos en breve</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-[40px] p-12 flex flex-col items-center justify-center min-h-[300px]">
            <span className="text-white/20 font-black text-4xl tracking-widest uppercase">FORMULARIO</span>
            <p className="text-white/40 text-xs mt-4 italic">El formulario externo se insertará en este recuadro</p>
          </div>
        </section>

        {/* Location & Contact */}
        <section className="px-6 py-16 bg-white">
          <h2 className="text-3xl font-black tracking-tight mb-8">Visítanos</h2>
          
          <div className="rounded-[30px] overflow-hidden premium-shadow mb-8 border border-slate-100">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3486.23456789!2d-110.95!3d29.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDA2JzAwLjAiTiAxMTDCsDU3JzAwLjAiVw!5e0!3m2!1sen!2smx!4v1612345678901!5m2!1sen!2smx" 
              width="100%" 
              height="250" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              title="Ubicación"
            ></iframe>
            <div className="p-6 bg-white">
              <div className="flex items-start gap-3 mb-4">
                <MapPin className="text-brand-green shrink-0" size={20} />
                <p className="text-sm text-slate-600 font-medium">
                  Constituyentes 113, Colonia Misión del Real, Hermosillo, Sonora.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="text-brand-green shrink-0" size={20} />
                <div className="text-xs text-slate-500 space-y-1">
                  <p><span className="font-bold text-slate-700">Lun-Mié-Vie:</span> 10:00 AM - 2:00 PM / 4:00 PM - 8:00 PM</p>
                  <p><span className="font-bold text-slate-700">Jue:</span> 4:00 PM - 8:00 PM</p>
                  <p><span className="font-bold text-slate-700">Sáb:</span> 11:00 AM - 3:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <button 
              onClick={scrollToForm}
              className="w-full bg-brand-blue text-white py-5 rounded-[30px] font-bold flex items-center justify-center gap-3 premium-shadow active:scale-95 transition-transform"
            >
              <MessageCircle size={24} />
              Contactar
            </button>
          </div>
        </section>
      </main>

      <footer className="px-6 py-12 bg-slate-50 text-center border-t border-slate-100">
        <p className="text-slate-400 text-xs font-medium uppercase tracking-widest mb-2">
          Dr. Hector Juarez
        </p>
        <p className="text-slate-300 text-[10px] mb-4">
          © 2026 Todos los derechos reservados.
        </p>
        <div className="inline-block px-4 py-2 bg-slate-100 rounded-lg border border-slate-200">
          <p className="text-slate-400 text-[9px] italic">
            Aviso de Publicidad COFEPRIS: [Insertar número aquí]
          </p>
        </div>
      </footer>
    </div>
  );
}
