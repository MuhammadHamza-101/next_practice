import React from "react";
import { useRouter } from "next/router";

function Post() {
  const router = useRouter();
  const { id } = router.query;

  return <div>hamza:{id}</div>;
}

export default Post;
