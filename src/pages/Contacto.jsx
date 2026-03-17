import {
  FaPhone,
  FaMobileScreenButton,
  FaEnvelope,
  FaClock,
  FaLocationDot,
} from "react-icons/fa6";
import PageLayout from "../components/PageLayout";
import Section from "../components/Section";
import Card from "../components/Card";
import SectionHero from "../components/SectionHero";

const Contacto = () => {
  const informacionContacto = {
    nombre: "Colegio María Inmaculada de Los Ángeles",
    rbd: "11716-1",
    directora: "Mirta Morales Sepúlveda",
    direccion: "Avenida Las Quintas 188, Los Ángeles",
    telefono: "432658332",
    celular: "939310070",
    email: "secretaria@midla.cl",
    region: "Del Biobío",
    provincia: "Biobío",
    comuna: "Los Ángeles",
    caracter: "Católico",
    fechaFundacion: "04/08/2017",
    reconocimiento: "Resolución Exenta N° 1542 de 04/08/2017",
    dependencia: "Particular Subvencionado",
    tiposEnsenanza: [
      "Educación Parvularia (NT1 - NT2)",
      "Educación Básica (1° a 8° básico)",
      "Educación Media (I° a IV° Medio)",
    ],
    jornada: "Jornada Escolar Completa",
    horario: "08:30 - 17:30 hrs",
  };

  return (
    <PageLayout title="Contacto">
      {/* HERO */}
      <SectionHero
        pill={
          <span className="flex items-center gap-2">
            <FaPhone /> Contacto
          </span>
        }
        title="Estamos aquí para ayudarte"
        subtitle="Comunícate con nosotros para cualquier consulta o información adicional."
      />

      <div className="max-w-[1000px] mx-auto mt-12 pb-20 space-y-12 px-4">
        {/* GRID PRINCIPAL: Info e Ubicación */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Columna Info: Tarjetas Apiladas */}
          <div className="space-y-6">
            <Card
              title="Datos de Contacto"
              className="border-l-4 border-l-primary"
            >
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-10 h-10 shrink-0 rounded-full bg-primary/5 flex items-center justify-center text-primary">
                    <FaMobileScreenButton />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-sm">
                      Teléfono & Celular
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {informacionContacto.telefono}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {informacionContacto.celular}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 shrink-0 rounded-full bg-primary/5 flex items-center justify-center text-primary">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-sm">
                      Correo Electrónico
                    </h4>
                    <p className="text-gray-600 text-sm italic">
                      {informacionContacto.email}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 shrink-0 rounded-full bg-primary/5 flex items-center justify-center text-primary">
                    <FaClock />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-sm">
                      Horario de Atención
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {informacionContacto.horario}
                    </p>
                    <p className="text-gray-400 text-xs mt-1">
                      Atención presencial y telefónica
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card
              title="Información Institucional"
              className="bg-gray-50/50 border-none shrink-0"
            >
              <div className="space-y-3">
                <p className="text-sm text-gray-700">
                  <strong>Nombre:</strong> {informacionContacto.nombre}
                </p>
                <p className="text-sm text-gray-700">
                  <strong>Directora:</strong> {informacionContacto.directora}
                </p>
                <p className="text-sm text-gray-700">
                  <strong>RBD:</strong> {informacionContacto.rbd}
                </p>
                <p className="text-sm text-gray-700">
                  <strong>Dependencia:</strong>{" "}
                  {informacionContacto.dependencia}
                </p>
                <p className="text-sm text-gray-700">
                  <strong>Carácter:</strong> {informacionContacto.caracter}
                </p>
                <p className="text-sm text-gray-700">
                  <strong>Fecha de Fundación:</strong> {informacionContacto.fechaFundacion}
                </p>
                <p className="text-sm text-gray-700">
                  <strong>Jornada:</strong> {informacionContacto.jornada}
                </p>
              </div>
            </Card>
          </div>

          {/* Columna Ubicación: Mapa y Dirección */}
          <div className="space-y-6">
            <Card className="p-0 overflow-hidden border-none shadow-xl">
              <div className="h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3220.8745678901234!2d-72.3456789!3d-37.456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96681b2a82a8282b%3A0xc0c7c7c0c7c7c7c0!2sAv.%20Las%20Quintas%20188%2C%20Los%20%C3%81ngeles%2C%20Biob%C3%ADo!5e0!3m2!1ses!2scl!4v1234567890123!5m2!1ses!2scl"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación Colegio María Inmaculada Los Ángeles"
                />
              </div>
              <div className="p-6 bg-white border-t border-gray-100">
                <div className="flex gap-4">
                  <FaLocationDot className="text-2xl text-primary" />
                  <div>
                    <h4 className="font-bold text-primary mb-1">
                      {informacionContacto.direccion}
                    </h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      Sector sur de Los Ángeles. Colindante con Villa Las
                      Quintas y sector Paillihue.
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2 text-[10px] uppercase font-bold text-gray-400">
                      <span>{informacionContacto.comuna}</span>
                      <span>•</span>
                      <span>{informacionContacto.provincia}</span>
                      <span>•</span>
                      <span>{informacionContacto.region}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* RECONOCIMIENTO Y ENSEÑANZA */}
        <Section spacing="py-0">
          <Card
            className="bg-primary text-white border-none text-center py-10"
          >
            <h1 className="text-2xl font-bold mb-6">Reconocimiento Oficial</h1>
            <p className="text-gray-200 text-sm max-w-2xl mx-auto italic mb-6">
              "Nos enorgullece ser un establecimiento educacional acreditado y
              reconocido por el Ministerio de Educación."
            </p>
            <div className="inline-block px-4 py-2 bg-white/10 rounded-full border border-white/20 text-xs font-mono">
              {informacionContacto.reconocimiento}
            </div>
          </Card>
        </Section>
      </div>
    </PageLayout>
  );
};

export default Contacto;
