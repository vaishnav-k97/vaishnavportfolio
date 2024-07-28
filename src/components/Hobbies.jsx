import video1 from '../assets/video1.mp4'

const Hobbies = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20 p-2">
      <h4 className="text-3xl sm:text-3xl lg:text-3xl text-center tracking-wide">
        Other Interests :
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          Cinematography - video Editing
        </span>
      </h4>
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Hobbies;