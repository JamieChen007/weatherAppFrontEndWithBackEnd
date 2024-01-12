import Image from "../../../Image";

const MetaItem = ({ imageUrl, alt, value }) => {
  return (
    <div className="flex flex-col justify-center items-center max-xl:text-sm">
      <Image
        imageUrl={imageUrl}
        alt={alt}
        className="max-w-[30px] max-xl:max-w-[20px]"
      />
      {value}
    </div>
  );
};

export default MetaItem;
