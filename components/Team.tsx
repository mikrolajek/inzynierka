import React from "react";
import Router from "next/router";
import ReactMarkdown from "react-markdown";

export type TeamProps = {
  id: number;
  name: string;
};

const Team: React.FC<{ user: TeamProps }> = ({ user }) => {
  return (
    <div
      onClick={() =>
        Router.push("/users/teams/[id]", `/users/teams/${user.id}`)
      }
    >
      <h2>{user.name}</h2>
      <style jsx>{`
        div {
          color: inherit;
          padding: 2rem;
        }
      `}</style>
    </div>
  );
};

export default Team;
