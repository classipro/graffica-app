<script>
    export let data;

    const {post} = data;
</script>

<section class="pt-20 pb-10 lg:pt-[120px] lg:pb-20">
    <div class="container">
        <div class="-mx-4 flex flex-wrap justify-center">
            <div class="w-full px-4">
                <div class="wow fadeInUp relative z-20 mb-[60px] h-[300px] overflow-hidden rounded md:h-[400px] lg:h-[500px]">
                    <a href="{`/${post.slug}`}" sveltekit:prefetch class="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl">
                        <img src={post.jetpack_featured_media_url} alt="image" class="h-full w-full object-cover object-center">
                    </a>
                    
                </div>
                <div class="-mx-4 flex flex-wrap">
                    <div class="w-full px-4 lg:w-8/12">
                        <h2 class="wow fadeInUp mb-6 text-[26px] font-bold leading-snug text-dark sm:text-3xl sm:leading-snug md:text-4xl md:leading-snug">
                            {@html post.title.rendered}
                        </h2>
                        <p class="wow fadeInUp mb-8 text-base leading-relaxed text-body-color">
                            {@html post.content.rendered}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>