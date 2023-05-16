<script>
    import formatDate from '$lib/formatDate.js';

    export let data;

    const {posts} = data;
</script>

<section class="pt-20 pb-10 lg:pt-[120px] lg:pb-20">
    <div class="container">
        <div class="-mx-4 flex flex-wrap">
                {#each posts as post}
                    <div class="w-full px-4 md:w-1/2 lg:w-1/3">
                        <div class="wow fadeInUp group mb-10" style="visibility: visible; animation-delay: 0.2s;">
                            <div class="mb-8 overflow-hidden rounded">
                                <a href={`${post.slug}`} class="block" style="background-image: url({post.image}); width=370px;height:240px;">
                                    <img src={post.image} alt="image" class="w-full transition group-hover:rotate-6 group-hover:scale-125">
                                </a>
                            </div>
                            <div>
                                <span class="mb-5 inline-block rounded bg-primary py-1 px-4 text-center text-xs font-semibold leading-loose text-white">{formatDate(post.date)}</span>
                                <h3>
                                    <a href="{`/${post.slug}`}" sveltekit:prefetch class="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl">{@html post.title.rendered}</a>
                                </h3>
                                <p class="text-base text-body-color">{@html post.excerpt.rendered}</p>
                            </div>
                        </div>
                    </div>
                {/each}
        </div>
    </div>
</section>