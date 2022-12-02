import Link from "next/link";

export default function Card(props) {
  const { title, imgSrc, description, href } = props;
  
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={imgSrc} alt={title} />
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
