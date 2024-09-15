import { Star } from "@/icons/Icons"


interface StarComponentProps {
  Nstar: number // Valoración que determina el número de estrellas amarillas
  maxStars?: number // Número máximo de estrellas (por defecto 5)
  onClick?: (rating: number) => void // Función opcional para manejar el clic en las estrellas
}

export default function StarComponent({ Nstar, maxStars = 5,onClick }: StarComponentProps) {
  return (
    <div className="ml-auto flex">
      {[...Array(maxStars)].map((_, index) => {
        const starNumber = index + 1
        return (
          <Star
            key={starNumber}
            className={`w-4 h-4 ${starNumber <= Nstar ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
            onClick={() => onClick && onClick(starNumber)} // Llama a onClick solo si se proporciona
          />
        )
      })}
    </div>
  )
}
