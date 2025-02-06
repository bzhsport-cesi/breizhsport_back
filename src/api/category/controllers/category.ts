/**
 * category controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::category.category', ({ strapi }) => ({
    async getTreeData(ctx) {
        //TODO parse returned data to IStrapiAPIResponse
        try {
            const { slug } = ctx.params;
            const currentPath = slug

            const currentCategory = await strapi.query("api::category.category").findOne({
                where: {
                    slug: `/${currentPath}`
                }
            })

            if (!currentCategory) return ctx.notFound('Category not found');


            const children = await strapi.documents("api::category.category").findMany({
                filters: {
                    slug: { $startsWith: `/${currentPath}/`, $notEq: `/${currentPath}` },
                    depth: currentCategory.depth + 1
                }
            })

            const products = await strapi.documents("api::product.product").findMany({
                filters: {
                    category: {
                        slug: { $startsWith: `/${currentPath}` }
                    }
                },
                populate: {
                    category: true,
                    defaultVariant: {
                        populate: '*'
                    },
                    variants: {
                        populate: '*'
                    }
                }
            })


            return {
                currentCategory,
                children,
                products
            };

        } catch (err) {
            ctx.throw(500, err.message);
        }
    }
}))

