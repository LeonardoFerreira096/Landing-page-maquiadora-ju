import { FaInstagram, FaWhatsapp,} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='bg-[#6c3483] p-10 flex justify-center gap-8'>
      
      <a href="https://instagram.com/seuperfil" target="_blank">
        <FaInstagram className="text-white text-3xl hover:text-[#9b59b6]" />
      </a>

      <a href="https://www.instagram.com/j.abreumakeup/" target="_blank">
        <FaWhatsapp className="text-white text-3xl hover:text-green-500" />
      </a>  

      <div>
        <hr className="border-t border-gray-600 my-0 mx-10" />
        <p className="text-center text-white text-sm py-5">&copy; 2026 Juliana ABreu</p>
      </div>

    </div>

    
  )
}

export default Footer