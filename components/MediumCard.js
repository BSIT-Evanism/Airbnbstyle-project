import Image from "next/image";

function MediumCard({ img, title }) {
  return (
    <div className="group cursor-pointer hover:scale-105 transform transition duration-300 ease-in-out">
      <div className="relative h-80 w-80">
        <Image
          src={img}
          layout="fill"
          alt="more images"
          className="rounded-xl"
        />
      </div>

      <h3 className="text-2xl group-hover:text-red-400 mt-3 transition color duration-400ms ease-in-out">{title}</h3>
    </div>
  );
}

export default MediumCard;
