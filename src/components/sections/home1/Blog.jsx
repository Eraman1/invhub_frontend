import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
const apiUrl = import.meta.env.VITE_BASE_URL;
export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch(`${apiUrl}/api/post/getPosts?limit=3`);
      const blogpost = await res.json();
      setPosts(blogpost.posts);
    };
    fetchPosts();
  }, []);

  return (
    <>
      {/*Blog One Start*/}
      {posts && posts.length > 0 && (
        <section className="blog-one pt-5">
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400/10 to-amber-500/10 border border-yellow-400/20 rounded-full px-4 py-2 mb-6">
              {/* <LayoutGrid className="w-4 h-4 text-yellow-400" /> */}
              <span className="text-sm text-yellow-400 font-medium">Blog & News</span>
            </div>
          </div>
          <div className="container">
            <div className="row">
              {/*Blog One Single Start*/}
              {posts?.map((post, index) => (
                <div
                  key={index}
                  className="col-xl-4 col-lg-4 wow fadeInUp"
                  data-wow-delay="100ms"
                >
                  <div className="blog-one__single">
                    <div className="blog-one__img-box">
                      <div className="blog-one__img">
                        <img src={post.image} alt="@@title" />

                        <Link
                          to={`/post/${post.slug}`}
                          className="blog-one__link" aria-label="blog post"
                        >
                          <span className="sr-only"></span>
                        </Link>
                      </div>
                      {/* <div className="blog-one__date">
                                    <p>12<br/>Nov</p>
                                </div> */}
                    </div>
                    <div className="blog-one__content">
                      <div className="blog-one__user">
                        <p>
                          <span className="icon-user"></span>By Admin
                        </p>
                      </div>
                      <h3 className="blog-one__title">
                        <Link to={`/post/${post.slug}`}>{post.title}</Link>
                      </h3>
                      <Link
                        to={`/post/${post.slug}`}
                        className="blog-one__learn-more"
                        aria-label={`Learn more ${post.title}`}
                      >
                        View Details<span className="icon-arrow-right"></span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center">
            <Link
              to={`/blogs`}
              className="blog-one__learn-more"
            >
              All Blog & News<span className="icon-arrow-right"></span>
            </Link>
          </div>
        </section>
      )}
    </>
  );
}
