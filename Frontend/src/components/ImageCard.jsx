import {saveAs} from "file-saver";

const ImageCard = (props) => {

  if (props.src == "") {
    return (
      <div className="bg-gray-800 shadow-lg w-96 h-96 mb-10">
        <div className="text-center p-2">

          <img
            className="w-96 h-80 rounded-lg"
            src={
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAYFBMVEXw8fP6+/3z9PaAi5F4hIp+h4/BxMjCx81vd35oeXzQ1dbT1Nft8fTu8fCLlZzz9PTa3t/j5+h2foSnr7SGkJXq6+6YnqSYoqWdpqu0urt4g4Xe4eXS195rd3za2t3Iy847O4M1AAAB3klEQVR4nO3Y226CQBSF4XHPjG3VykGgKirv/5YdBJRTdZOYPZiu/xIM+bIChKgWM0z5BowFFDeguAHFDShuQHEDihtQ3N4EReJxUEo4oIACCiiggAIKKKCAAgoooIACCiiggAIKKKD6BZP++5VBpcVyQkX6LYCizFh+2mQLAdTmvJ5w29H6cyOB+jrNEbWa8oAC9U6oMEy7Z/2jop841t2H0zuK9kZrqzsK7yjlTFqbzlTeUZRcUWH7mH/UIXamJJgVSqnDdruPOkdmgKI0Jf+vBKInXyYeUBTmwYPfekHR6qjzx1uJoyjU1m6jka3uF5FGuZ1s+WIabEX5zheq3Kk0DbaiKIl3zWVkUeX9VGfzoLUV5drouNlKFNXsNNjK7VSeMPVWkig6GX3P3LeiPKmO1VtJokJrWyi3Vf2+qnfSt63EUG4n3cvYqNzqtlOlEl2qt9Ntq9ZOzVYrGdT5MtjpqrJ5Z6fqviIp1FIPdqq2OiX9E2Z3kUEdzRjpShg5lMUyqL9M4wE1K1QQzxBFmZlU9vSCL0CptPiYUJGKoNxlAnbqySf861CvDSiggAIKKKCAAgoooIACCiiggAIKKKCAAurfocRjoGYQUNyA4gYUN6C4AcUNKG5AcQOK2y+c0USun3RQnwAAAABJRU5ErkJggg=="
            }
            alt={props.alt}
          ></img>
          <span className="font-medium text-xl p-2 text-white ">
            {props.title}
          </span>

        </div>
      </div>
    );
  }


  const handleDownload = () => {
    saveAs(props.src,props.src.name)
  }



  return (
    <div className="bg-gray-800 shadow-lg w-96 rounded-xl flex flex-col items-center my-10">
      <div className="text-center p-2">
        <img
          className="w-96 h-80 rounded-lg"
          src={props.src}
          alt={props.alt}
        ></img>
        <span className="font-medium text-xl p-2 text-white ">
          {props.title}
        </span>

      </div>
      {props.title == "Colorized Image" ? (
        <div className="m-4">
          <button
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={handleDownload}
            >
              Download
            </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ImageCard;
