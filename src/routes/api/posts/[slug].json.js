import { BASE_URL,  POSTS_API_URL} from "$lib/info";

export const get = async({params})=>{

    const slug = params.slug;
    const res = await fetch(`${BASE_URL}${POSTS_API_URL}?slug=${slug}&_embed`);
    const posts = await res.json();
    const post = posts[0];
    post.image = post._embedded["wp:featuredmedia"][0].source_url;

    if (post){    
        return {
            status: 200,
            body: post
        };
    }
    return {
        status: 404
    };
}