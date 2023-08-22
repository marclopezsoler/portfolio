import Link from "next/link";
import works from "../_data/data";

export default function Work() {
  return (
    <div>
      <p>WORK</p>
      {works.map((work) => (
        <Link href={`/work/${work.id}`} key={work.id}>
          {work.title}
        </Link>
      ))}
    </div>
  );
}
