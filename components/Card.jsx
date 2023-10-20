'use client'

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200 card"
    >
      <div
        style={{
          backgroundImage: `url(${card.src})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center'
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-[#f25f4c]/20 to-[#f25f4c]/10 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg card-title">
          {card.title}
        </p>
      </div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <a
          href={card.link}
          target="_blank"
          className="bg-gradient-to-br from-[#f25f4c]/20 to-[#f25f4c]/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg card-link"
        >
          Go to Project
        </a>
      </div>
    </div>
  )
}

export default Card
export { Card }
