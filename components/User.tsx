import React from "react";
import Router from "next/router";
import ReactMarkdown from "react-markdown";

export type UserProps = {
  id: number;
  email: string;
  name: string;
  posts: {
    title: string;
  };
  obecny: boolean;
  stanowiskoId;
  roleId;
  teamId;
};

const User: React.FC<{ user: UserProps }> = ({ user }) => {
  return (
    <div
      onClick={() =>
        Router.push("/users/employees/[id]", `/users/employees/${user.id}`)
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

export default User;
