"use client";
import Counter from "@/components/ui/counter/counter";
import { useInView } from "react-intersection-observer";

const Contadores = () => {
  const { ref, inView } = useInView();

  return (
    <section className="bg-slate-100 dark:bg-gray-800 py-16">
      <div className="container mx-auto px-6 md:px-12 xl:px-32">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className="typography-h2">
            {" "}
            Servicios de impresión de alta calidad que superara tus expectativas
          </h2>

          <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
            ¡Confía en nosotros para proyectos exitosos! Descubre nuestra
            excelencia en servicio al cliente y profesionalismo en cada entrega.
          </p>
        </div>

        <div ref={ref} className="grid gap-12 items-center md:grid-cols-3">
          <div className="space-y-4 text-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-primary-600">
                {inView ? <Counter duration={1000} num={"12"} /> : "12"}
              </h2>
              <h3 className="text-xl font-bold text-primary-600">
                Años de Experiencia
              </h3>
              <span className="block text-sm text-gray-500">
                En el rubro de la imprenta
              </span>
            </div>
          </div>
          <div className="space-y-4  text-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-primary-600">
                {inView ? (
                  <>
                    <Counter duration={1000} num={"10000"} />+{" "}
                  </>
                ) : (
                  "10000"
                )}
              </h2>
              <h3 className="text-xl font-bold text-primary-600">
                Trabajos completados
              </h3>
              <span className="block text-sm text-gray-500">
                En todos estos años
              </span>
            </div>
          </div>
          <div className="space-y-4 text-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-primary-600">
                {inView ? (
                  <>
                    <Counter duration={1500} num={"5000"} />+
                  </>
                ) : (
                  "5000"
                )}
              </h2>
              <h3 className="text-xl font-bold text-primary-600">
                Clientes satisfechos
              </h3>
              <span className="block text-sm text-gray-500">
                Que confían en nosotros
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contadores;
