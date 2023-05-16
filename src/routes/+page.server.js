import { BASE_URL, POSTS_API_URL } from '$lib/info.js';

export const load = async()=> {
      
    const getPosts = async()=>{
        
            const response = await fetch(`${BASE_URL}${POSTS_API_URL}?_embed`);
            const posts = await response.json();
            posts.map((p)=>{
                p.image = p._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url;
            });
           
            return posts;
    }

    return {
        posts: getPosts(),
    };
}