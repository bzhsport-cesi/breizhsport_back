import type { Core } from '@strapi/strapi';
import { categories } from '../data/categories';
import { products } from '../data/products';
import { categoriesProduct } from '../data/categories-products';

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/* { strapi }: { strapi: Core.Strapi } */) { },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }: { strapi: Core.Strapi }) {
    console.log("\nSeeding database...");
    try {

      console.log("Is there already the shared admin account ?")
      const existingAdmin = await strapi.query("admin::user").findOne({
        where: {
          email: "admin@breizhsport.com",
        }
      })

      if (!existingAdmin) {
        console.log("Creating admin user")
        const adminRole = await strapi.query("admin::role").findOne(
          {
            where: {
              code: "strapi-super-admin"
            }
          }
        )
        await strapi.documents("admin::user").create({
          data: {
            email: "admin@breizhsport.com",
            username: "admin",
            password: "Admin1234",
            firstname: "Admin",
            blocked: false,
            isActive: true,
            publishedAt: new Date(),
            roles: [adminRole.documentId]
          },
          status: "published"
        })
      }

      console.log("Deleting existing products...");
      const existingProducts = await strapi.documents("api::product.product").findMany()

      for (const product of existingProducts) {
        await strapi.documents("api::product.product").delete({
          documentId: product.documentId
        })
      }

      console.log("Creating products...");
      for (const product of products) {
        await strapi.documents("api::product.product").create({
          data: {
            ...product
          },
          status: "published"
        })
      }

      console.log("Deleting existing categories...")
      const existingCategories = await strapi.documents("api::category.category").findMany()
      for (const category of existingCategories) {
        await strapi.documents("api::category.category").delete({
          documentId: category.documentId
        })
      }

      console.log("Creating categories...")
      for (const category of categories) {
        await strapi.documents("api::category.category").create({
          data: {
            ...category
          },
          status: "published"
        })
      }

      console.log("Linking categories & products...")

      for (const relation of categoriesProduct) {
        const category = await strapi.query("api::category.category").findOne({
          where: {
            slug: relation.category
          }
        })

        const products = await strapi.query("api::product.product").findMany({
          where: {
            slug: relation.products
          }
        })

        await strapi.documents("api::category.category").update({
          data: {
            products: products.map((product) => product.documentId),
            publishedAt: new Date(),
          },
          documentId: category.documentId,
          status: "published"
        })
      }

      console.log("Seeding complete.");
    } catch (e) {
      console.error("Seeding error :", JSON.stringify(e));
    }
  }
}
