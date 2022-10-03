import Image from "next/image";
import Link from "next/link";
import { BsDownload } from 'react-icons/bs'
import developer from "../public/developer.png";

const Hero = () => {
  const downloadPDF = () => {
    // using Java Script method to get PDF file
    fetch('Moreshwar_Dalvi_Resume_2022.pdf').then(response => {
      response.blob().then(blob => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'Moreshwar_Dalvi_Resume_2022.pdf';
        alink.click();
      })
    })
  };
  return (
    <>
      <div className="text-center p-5">
        <p className="uppercase tracking-widest dark:text-gray-400 text-gray-600">
          LET&#39;S DO SOMETHING TOGETHER
        </p>
        <h1 className="py-4 text-5xl font-semibold drop-shadow-lg text-gray-700 dark:text-gray-400">
          Hello 🙋‍♂️, I&#39;m{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-tr from-purple-800 to-rose-600">
            Moreshwar Dalvi
          </span>
        </h1>
        <h3 className="text-2xl py-2 text-gray-800 dark:text-gray-200">
          a Developer 🧑‍💻
        </h3>
        <code className="text-xl bg-[#eee] p-3 rounded shadow-inner py-1 text-gray-800">
          Web 2.0 + 1.0;
        </code>
        <p className="text-md  leading-7 pt-5 text-gray-700 dark:text-gray-400">
          I&apos;m a front-end developer specializing in building exceptional
          digital experiences. <br /> Currently, I&apos;m focusing on building
          responsive and fully functional front-end web applications while
          learning web 3.0 technologies.
        </p>


        <div className="flex justify-center">
          
          <span onClick={downloadPDF} className="cursor-pointer bg-gradient-to-bl from-fuchsia-800 to-sky-500 p-2 shadow-inner my-5 mx-4 rounded-lg text-white flex">
            <span>Get My Resume</span> <BsDownload className="ml-3 mt-1" />
          </span>
        </div>
      </div>
      {/* image section start */}
      <div className="mx-auto bg-gradient-to-tr from-purple-700 to-rose-400 rounded-full w-80 h-80 relative overflow-hidden md:h-60 md:w-60">
        <Image
          src={developer}
          alt="developer"
          layout="fill"
          objectFit="cover"
        />
      </div>
      {/* image section end */}
    </>
  );
};

export default Hero;
