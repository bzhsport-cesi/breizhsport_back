export default {
  async findCategoryPage(ctx) {
    const { slug } = ctx.params;

    const baseSlug = "/" + slug

    const categories = await strapi.entityService.findMany('api::category.category', {
      filters: {
        slug: {
          $startsWith: baseSlug,
        },
      },
    }
    );


    const currentCategory = categories.find(c => c.slug === baseSlug);
    console.log('currentCategory', currentCategory);
    const categoryIds = categories.map(c => c.id);

    const products = await strapi.entityService.findMany('api::product.product', {
      filters: {
        category: {
          id: {
            $in: categoryIds,
          },
        },
      },
      populate: [
        "defaultVariant",
        "variants"
      ]

    });

    console.log('products', products);

    ctx.body = {
      currentCategory,
      children: categories.filter(c => c.slug !== baseSlug),
      products,
    };
  },
};