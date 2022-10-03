import { socials  } from "../utils/content";


const Media = () => {
  return (
    <>
      {/* social section start */}
      <div className="text-3xl flex justify-center gap-12 pt-9 py-5 text-gray-700 dark:text-purple-400">
        {socials.map((social) => (
          <div
            key={social.id}
            className="rounded-full shadow-md shadow-purple-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
          >
            <a href={social.url} target="_blank" rel="noreferrer">
              {social.icon}
            </a>
          </div>
        ))}
      </div>
      {/* social section end */}
    </>
  )
}

export default Media