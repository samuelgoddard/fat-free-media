import { useEffect } from 'react'
import { useEmblaCarousel } from 'embla-carousel/react'
import { Image } from "react-datocms"

const EmblaCarousel = ({ images }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, dragFree: true })

  useEffect(() => {
    if (emblaApi) {
    }
  }, [emblaApi])


  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {images.map((image, i) => {
          return (
            <div key={i} className="embla__slide px-3 md:px-8 2xl:px-16">

              <figure className="w-full">
                { image.alt ? (
                  <figcaption className="uppercase text-sm md:text-base tracking-tighter leading-none mb-3 md:mb-4">{ image.title ? image.title : image.alt }</figcaption>
                ) : <div className="block mb-3 md:mb-4 h-3 md:h-4"></div>}
                <Image
                  data={{
                    ...image.responsiveImage,
                    alt: image.alt ? image.alt : image.title,
                  }}
                  className="w-full"
                />
              </figure>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default EmblaCarousel