import React, { useEffect } from "react";
import { useRouter } from "next/router";

const cancel = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/");
  }, []);
  return <div></div>;
};

export default cancel;
