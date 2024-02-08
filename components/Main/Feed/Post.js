import { useContext, useEffect } from "react";
import { useRouter } from "next/router";


//STYLES
import styles from "../../../styles/Main/Feed/Post.module.css";

//COMPONENTS
import PostRating from "./PostRating";
import PostInteraction from "./PostInteraction";

//REDUX
import { useSelector } from "react-redux";


import { RedditContext } from "@/context/RedditContext";

const Post = (props) => {
  const nightMode = useSelector((state) => state.toggle);

  const { id, created_at,content,  author, title, description, upvotes, downvotes } =
    props;

  let totalvote = upvotes - downvotes;

  const formatDate = (timestamp) => {
    const dateObj = new Date(timestamp);
    const options = { year: "numeric", month: "long", day: "numeric" };
    const date = dateObj.toLocaleDateString("de-DE", options);
    const time = dateObj.toLocaleTimeString("de-DE", {
      hour: "2-digit",
      minute: "2-digit",
    });
    return { date, time };
  };

  const formattedDateTime = formatDate(created_at);

  const router = useRouter()

  const {setSelectedPost} = useContext(RedditContext)


  



  const navigateToPost = () =>{
    setSelectedPost({
      id,
      title,
      description,
      author,
      created_at,
      upvotes,
      downvotes,
    });

    // Save selected post data to local storage
    localStorage.setItem(
      "selectedPost",
      JSON.stringify({
        id,
        title,
        description,
        author,
        created_at,
        upvotes,
        downvotes,
      })
    );

    router.push(`/post/${id}`);
  }

  return (
    <div className={styles.post_container}>
      <div className={styles.postRating_container}>
        <PostRating votes={totalvote} postId={id} />
      </div>

      <div className={styles.postField} onClick={navigateToPost}>
        <div className={styles.postInfo}>
          <p className={styles.postInfo_p}>
            <span> {author}</span> - {formattedDateTime.date} -{" "}
            {formattedDateTime.time}
          </p>
        </div>
        <div className={styles.postItself}>
          <h1
            className={nightMode ? styles.post_title_dark : styles.post_title}
          >
            {title} 
          </h1>
          <p>{description} </p>
        </div>
        <div className={styles.postInteraction}>
          <PostInteraction postId={id} />
        </div>
      </div>
    </div>
  );
};

export default Post;
