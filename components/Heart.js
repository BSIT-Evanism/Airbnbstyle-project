const { HeartIcon } = require("@heroicons/react/24/solid");
const { useState } = require("react");

function Heart() {
  const [heart, setHeart] = useState(false);

  if (heart) {
    return (
      <HeartIcon
        className="text-red-400 h-7 cursor-pointer"
        onClick={() => setHeart(!heart)}
      />
    );
  }
  return (
    <HeartIcon
      className="h-7 cursor-pointer"
      onClick={() => setHeart(!heart)}
    />
  );
}

export default Heart;
