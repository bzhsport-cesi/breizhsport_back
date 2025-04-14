export default {
    async findCategoryPage(ctx) {
      const { slug } = ctx.params;
  
      // Sécurité : enlever slash final s’il y en a
      const baseSlug = slug
  
      // 1. Catégories dont le slug commence par le slug donné
    const categories = await strapi.entityService.findMany('api::category.category', {
        filters: {
          slug: {
            $startsWith: baseSlug,
          },
        },
        }
    );
  
    //   // 2. Trouver la catégorie exacte
      const currentCategory = categories.find(c => c.slug === baseSlug);

    console.log(baseSlug,categories)

      console.log("currentCategory", currentCategory);
  
      // 3. Articles liés uniquement à la catégorie actuelle
      const articles = await strapi.entityService.findMany('api::product.product', {
        filters: {
          category: { id: currentCategory?.id },
        },
      });
  
      ctx.body = {
        currentCategory,
        children: categories.filter(c => c.slug !== baseSlug),
        articles,
      };

    // ctx.send("Prout");
    },
  };