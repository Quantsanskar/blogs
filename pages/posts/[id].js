function PostDetail({ post }) {
    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    );
}

export async function getServerSideProps(context) {
    const postId = context.params.id;
    // Fetch the post data based on postId
    // Example: const post = await fetchPostById(postId);
    return {
        props: { post },
    };
}

export default PostDetail;
