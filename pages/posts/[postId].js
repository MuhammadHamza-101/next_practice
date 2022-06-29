function postId({ postData }) {
  return (
    <>
      <h1>{postData.id}</h1>
      <h2>{postData.title}</h2>
      <p>{postData.body}</p>
    </>
  );
}

export default postId;

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { postId: "1" },
      },
      {
        params: { postId: "2" },
      },
      {
        params: { postId: "3" },
      },
    ],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts ${params.postId}`
  );
  const data = await res.json();

  return {
    props: {
      postData: data,
    },
  };
}
