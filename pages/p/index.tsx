import React from "react";
import { GetServerSideProps } from "next";
import Post, { PostProps } from "../../components/Post";
import { SelectedPanelField } from "../../utils/selectedPanel";
import MyLayout from "../../components/MyLayout";

type Props = {
  feed: PostProps[];
};

const Blog: React.FC<Props> = (props) => {
  return (
    <MyLayout flexCenter={true} selectedField={SelectedPanelField.POSTS}>
      <div className="page">
        <h1>Aktualności</h1>
        <main>
          {props.feed.map((post) => (
            <div key={post.id} className="post">
              <Post post={post} />
            </div>
          ))}
        </main>
      </div>
      <style jsx>{`
        .post {
          background: white;
          transition: box-shadow 0.1s ease-in;
        }

        .post:hover {
          box-shadow: 1px 1px 3px #aaa;
        }

        .post + .post {
          margin-top: 2rem;
        }
      `}</style>
    </MyLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("http://localhost:3000/api/feed");
  const feed = await res.json();
  return {
    props: { feed },
  };
};

export default Blog;
