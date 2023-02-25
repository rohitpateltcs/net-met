import Link from "next/link";

const CardItem = ({ id, img }) => {
  return (
    <div>
      <Link href={`project/${id}`}>
        <div className="p-2">
          <img src={img} alt="" />
        </div>
      </Link>
    </div>
  );
};

export default CardItem;
