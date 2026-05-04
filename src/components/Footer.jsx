import { FaInstagram, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='bg-[#6c3483] p-5 flex flex-col items-center gap-1'>

      <div className='flex gap-8'>
        <a href="https://instagram.com/seuperfil" target="_blank">
          <FaInstagram className="text-white text-3xl hover:text-[#9b59b6]" />
        </a>

        <a href="https://www.instagram.com/j.abreumakeup/" target="_blank">
          <FaWhatsapp className="text-white text-3xl hover:text-green-500" />
        </a>
      </div>

      <hr className="border-t border-gray-600 w-full" />
      <p className="text-center text-white text-sm">&copy; 2026 Juliana Abreu</p>

    </div>
  )
}

export default Footer