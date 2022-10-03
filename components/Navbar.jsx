
import { BsFillMoonFill, BsSunFill } from "react-icons/bs";


const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <>
      <nav className="py-10 mb-12 flex justify-between">
        <span></span>
        {/* <h1 className='text-xl '>Portfolio</h1> */}
        <ul>
          <li>
            <span onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? (
                <BsSunFill className="rounded-full shadow-md shadow-purple-400 cursor-pointer hover:scale-105 ease-in duration-300 text-4xl p-2" />
              ) : (
                <BsFillMoonFill className="rounded-full shadow-md shadow-purple-400 cursor-pointer hover:scale-105 ease-in duration-300 text-4xl p-2" />
              )}
            </span>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar