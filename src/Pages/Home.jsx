import React from "react";
import UserSearch from "../components/Users/UserSearch";
import UsersResults from "../components/Users/UsersResults";

function Home() {
  return (
    <>
      <UserSearch />
      <UsersResults />
    </>
  );
}

export default Home;
