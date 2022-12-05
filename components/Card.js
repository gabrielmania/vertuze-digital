import Image from "next/image";
import Link from "next/link";

export default function Card({ title, imgSrc, description, href }) {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <Image src={imgSrc} alt={title} width={500} height={500} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-center">
          <Link href={href} className="btn btn-warning bg-primary">
            View Detail
          </Link>
        </div>
      </div>
    </div>
  );
}
