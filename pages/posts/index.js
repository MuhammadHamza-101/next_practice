import Link from "next/link";

function PostList({ postdata }) {
  return (
    <>
      <h1>PostList</h1>
      {postdata.map((e) => {
        return (
          <div key={e.id}>
            <Link href={`posts/${e.id}`} passHref>
              <h1>{e.title}</h1>
            </Link>
            <p>{e.body}</p>
          </div>
        );
      })}
    </>
  );
}

export default PostList;

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return {
    props: {
      postdata: data.slice(0, 3),
    },
  };
}
