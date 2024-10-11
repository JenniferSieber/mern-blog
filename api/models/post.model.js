import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: String,
    // default: 'https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2021/09/how-to-write-a-blog-post.png'
    // default: 'https://cdn.pixabay.com/photo/2014/08/27/08/11/blogging-428955_1280.jpg'
    default:
      "https://cdn.pixabay.com/photo/2017/01/18/08/25/social-1989150_1280.jpg",
  },
  category: {
    type: String,
    default: "uncategorized",
  }, 
  slug: {
    type: String,
    required: true,
    unique: true,
  },
},
{ timestamps: true }
);

const Post = mongoose.model("Post", postSchema);
export default Post;