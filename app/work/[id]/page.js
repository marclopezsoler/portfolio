import works from "@/app/_data/data";

export default function WorkDetail({ params }) {
  const work = works.find((work) => work.id === params.id);

  if (!work) {
    return <div>Work not found</div>;
  }

  return (
    <div>
      <p>Title: {work.title}</p>
      <p>ID: {params.id}</p>
    </div>
  );
}