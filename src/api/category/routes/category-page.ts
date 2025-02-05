//Instead of 3 api call on the client side, we can make a single api call to get all the data at once.

export default {
    routes: [
        {
            method: 'GET',
            path: '/category-page',
            handler: 'CategoryPage.findCategoryPage'
        }
    ]
}