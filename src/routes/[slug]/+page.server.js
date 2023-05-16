import { BASE_URL, POSTS_API_URL } from '$lib/info.js';

export const load = async({params})=> {
    const getPost = async()=>{
            //const res = await fetch(`/api/posts/${slug}.json`);
            const slug = params.slug
            const ep = `${BASE_URL}${POSTS_API_URL}?slug=${slug}&_embed`;
            const res = await fetch(ep);
            const post = await res.json();
           
            return post[0];
    }
    return {
        post: getPost(),
    };
}
