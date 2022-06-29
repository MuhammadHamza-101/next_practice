import User from "../components/user";

function UserList({ users }) {
  return (
    <>
      <h1>UserList...........</h1>
      <User user={users} />
    </>
  );
}

export default UserList;

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data);

  return {
    props: {
      users: data,
    },
  };
}
