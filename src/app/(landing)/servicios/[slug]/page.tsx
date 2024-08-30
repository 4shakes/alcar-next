import { useRouter } from "next/navigation"
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import Link from "next/link";
import { Breadcrumb } from "@/components/ui/breadcrumb /breadcrumb";
import { SERVICES } from "@/data/services";

export default function ServiceIdPage({ params }: { params: { slug: string } }) {


  const processedSlug = params.slug.replace(/-/g, ' ');

  const findService = SERVICES.find(item => item.slug === params.slug);


  return (
    <div className='bg-white dark:bg-gray-900'>
      <section
        style={{
          backgroundImage: `url("/imgs/servicios/${params.slug}.jpg")`
        }}
        className={` mt-16  h-[300px] m-auto bg-no-repeat  md:bg-fixed bg-bottom bg-cover`}
      >
        <div className={`banner h-40`}>
          <div className='w-full h-full flex flex-col justify-center items-center text-white relative z-10 '>
            <div className=" text-xl sm:text-2xl md:text-3xl 2xl:text-5xl font-bold text-white w-full lg:w-1/2 text-center px-4">
              <div className="mt-4 ">
                <p className='my-4 capitalize'>{processedSlug}</p>
              </div>
            </div>
            <div
              className=''

            >
              <Breadcrumb capitalizeLinks />
            </div>
          </div>

        </div>
      </section>

      <div className='  flex flex-col-reverse lg:flex lg:flex-row py-10 gap-10 mt-10   px-6 md:px-10 mx-auto max-w-screen-xl xl:gap-16'>
        <div className=' flex flex-col gap-x-2 sm:gap-x-7 w-full lg:w-3/12 lg:px-3'>
          <div className="sticky top-20 ">
            <p className=' typography-h2'>Servicios</p>
            {SERVICES.map((item) => (
              <Link
                key={item.slug}
                href={`/servicios/${item.slug}`}
                className='flex items-center justify-between border-b-2 border-b-gray-200 py-3 group'
              >
                <span className='text-gray-500 text-base dark:text-gray-400 font-semibold hover:text-gray-700 ease-in-out duration-300 cursor-pointer'>
                  {item.name}
                </span>
                <div className="transform transition-transform ease-in-out duration-300 group-hover:translate-x-1">
                  <MoveRight className='w-5 h-5 text-gray-500 dark:text-gray-400' />
                </div>
              </Link>
            ))}
          </div>
          {/*    <p className='text-gray-900 text-2xl font-bold py-5'>
                        Productos similares
                    </p> */}

          {/*    {!loading &&
                        productos.map((item, i) => {
                            if (i < 5) {
                                return (
                                    <CardProductosRelacionados
                                        slug={item?.slug!}
                                        img={item.imagenPrincipal?.url!}
                                        precioOferta={item?.precioOferta!}
                                        precioReal={item?.precioReal!}
                                        titulo={item?.titulo!}
                                        key={i}
                                        {...item}
                                    />
                                )
                            } else {
                                return null
                            }
                        })} */}
        </div>
        <div className='w-full lg:w-9/12'>
          <article className=''>
            <h2 className='typography-h2'>
              {findService?.title}
            </h2>
            <div className='font-light text-gray-500 md:text-lg dark:text-gray-400 py-7' dangerouslySetInnerHTML={{ __html: findService?.content! }} />

          </article>

          <div className='mt-3'>
            <h2 className='typography-h2'>
              Casos de Éxito
            </h2>

            {/* <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 2 }}
            >
              <Masonry columnsCount={2} gutter="10px">
                {servicios.map((item, i) => (
                  <div
                    key={item.title}
                    className='hover:cursor-pointer relative lg:shadow-sm'
                    onClick={() => router.push
                      >
                    <div className=' flex bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white absolute top-0 w-full h-full z-10  justify-center items-center opacity-0 hover:opacity-100 transition-all duration-500 ease-out pt-10 hover:pt-0 rounded-lg'>
                      <div className='text-center p-5'>
                        <p className='text-2xl font-bold'>{item.title}</p>
                         <p className='text-lg pt-5 font-semibold'>
                                                    {item.description}
                                                </p> 
                      </div>
                    </div>
                    <div className='image-h-full-hack image-block-hack'>
                      <Image
                        width={800}
                        height={914}
                        src={`/imgs/servicios/${item.img}`}
                        className='transition-all duration-500 ease-out rounded-lg'
                        alt={item.title}
                      />
                    </div>
                     <div className='lg:hidden p-1'>
                                        <p className='text-primary-600 text-xl font-semibold'>
                                            {item.title}
                                        </p>
                                        <p className='text-gray-600'>{item.description}</p>
                                    </div> 
                  </div>
                ))}
            </Masonry>
          </ResponsiveMasonry>
 */}
          </div>
        </div>
      </div>
    </div >
  )

}
