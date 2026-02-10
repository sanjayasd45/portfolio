export default async function sitemap() {
  const baseUrl = "https://developerchowk.com";

  // In a real app, you might fetch dynamic routes (e.g., blog posts) here
  // const posts = await getPosts();
  // const postUrls = posts.map((post) => ({
  //   url: `${baseUrl}/blog/${post.slug}`,
  //   lastModified: post.updatedAt,
  // }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    // ...postUrls,
  ];
}
