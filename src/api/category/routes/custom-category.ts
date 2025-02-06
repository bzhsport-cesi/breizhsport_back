export default {
    routes: [
        {
            method: 'GET',
            path: '/categories/slug-tree/:slug*', // * permet de capturer les slugs imbriqués
            handler: 'category.getTreeData',
            config: { auth: false }
        }
    ]
};