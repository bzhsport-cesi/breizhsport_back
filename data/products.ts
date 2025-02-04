const products = [
    {
        name: "Baseball bat",
        slug: "baseball-bat",
        description: "A premium baseball bat made of ash wood.",
        publishedAt: new Date(),
        defaultVariant: {
            sku: "BAT-001",
            price: 39.99,
            stock: 50,
            publishedAt: new Date(),
            attributes: [
                {
                    name: "Size",
                    value: "S"
                }
            ]
        },
        variants: [
            {
                sku: "BAT-002",
                price: 39.99,
                stock: 50,
                publishedAt: new Date(),
                attributes: [
                    {
                        name: "Size",
                        value: "M"
                    }
                ]
            },
            {
                sku: "BAT-003",
                price: 39.99,
                stock: 50,
                publishedAt: new Date(),
                attributes: [
                    {
                        name: "Size",
                        value: "L"
                    },
                ]
            }
        ]
    },
    {
        name: "Baseball",
        slug: "baseball",
        description: "A premium baseball made of leather.",
        publishedAt: new Date(),
        defaultVariant: {
            sku: "BAL-001",
            price: 7.99,
            stock: 50,
            publishedAt: new Date(),
            attributes: [
                {
                    name: "Number",
                    value: "1"
                }
            ]
        },
        variants: [
            {
                sku: "BAL-002",
                price: 14.99,
                stock: 50,
                publishedAt: new Date(),
                attributes: [
                    {
                        name: "Number",
                        value: "2"
                    }
                ]
            },
            {
                sku: "BAL-003",
                price: 19.99,
                stock: 50,
                publishedAt: new Date(),
                attributes: [
                    {
                        name: "Number",
                        value: "3"
                    },
                ]
            }
        ]
    },
    {
        name: "Baseball glove",
        slug: "baseball-glove",
        description: "A premium baseball glove of leather.",
        publishedAt: new Date(),
        defaultVariant: {
            sku: "BAG-001",
            price: 10.99,
            stock: 50,
            publishedAt: new Date(),
            attributes: [
                {
                    name: "Size",
                    value: "S"
                }
            ]
        },
        variants: [
            {
                sku: "BAG-002",
                price: 10.99,
                stock: 50,
                publishedAt: new Date(),
                attributes: [
                    {
                        name: "Size",
                        value: "M"
                    }
                ]
            },
            {
                sku: "BAG-003",
                price: 10.99,
                stock: 50,
                publishedAt: new Date(),
                attributes: [
                    {
                        name: "Size",
                        value: "L"
                    },
                ]
            }
        ]
    },
    {
        name: "Baseball jersey",
        slug: "baseball-jersey",
        description: "A premium baseball jersey made of cotton.",
        publishedAt: new Date(),
        defaultVariant: {
            sku: "BAJ-001",
            price: 10.99,
            stock: 50,
            publishedAt: new Date(),
            attributes: [
                {
                    name: "Size",
                    value: "S"
                }
            ]
        },
        variants: [
            {
                sku: "BAJ-002",
                price: 10.99,
                stock: 50,
                publishedAt: new Date(),
                attributes: [
                    {
                        name: "Size",
                        value: "M"
                    }
                ]
            },
            {
                sku: "BAJ-003",
                price: 10.99,
                stock: 50,
                publishedAt: new Date(),
                attributes: [
                    {
                        name: "Size",
                        value: "L"
                    },
                ]
            }
        ]
    },
    {
        name: "Football shoes",
        slug: "football-shoes",
        description: "A premium football shoes made of leather.",
        publishedAt: new Date(),
        defaultVariant: {
            sku: "FOS-001",
            price: 39.99,
            stock: 50,
            publishedAt: new Date(),
            attributes: [
                {
                    name: "Size",
                    value: "S"
                }
            ]
        },
        variants: [
            {
                sku: "FOS-002",
                price: 39.99,
                stock: 50,
                publishedAt: new Date(),
                attributes: [
                    {
                        name: "Size",
                        value: "M"
                    }
                ]
            },
            {
                sku: "FOS-003",
                price: 39.99,
                stock: 50,
                publishedAt: new Date(),
                attributes: [
                    {
                        name: "Size",
                        value: "L"
                    },
                ]
            }
        ]
    },
    {
        name: "Football",
        slug: "football",
        description: "A premium football made of leather.",
        publishedAt: new Date(),
        defaultVariant: {
            sku: "FOB-001",
            price: 7.99,
            stock: 50,
            publishedAt: new Date(),
            attributes: [
                {
                    name: "Number",
                    value: "1"
                }
            ]
        },
        variants: [
            {
                sku: "FOB-002",
                price: 14.99,
                stock: 50,
                publishedAt: new Date(),
                attributes: [
                    {
                        name: "Number",
                        value: "2"
                    }
                ]
            },
            {
                sku: "FOB-003",
                price: 19.99,
                stock: 50,
                publishedAt: new Date(),
                attributes: [
                    {
                        name: "Number",
                        value: "3"
                    },
                ]
            }
        ]
    },
    {
        name: "Football glove",
        slug: "football-glove",
        description: "A premium football glove made of leather.",
        publishedAt: new Date(),
        defaultVariant: {
            sku: "FOG-001",
            price: 10.99,
            stock: 50,
            publishedAt: new Date(),
            attributes: [
                {
                    name: "Size",
                    value: "S"
                }
            ]
        },
        variants: [
            {
                sku: "FOG-002",
                price: 10.99,
                stock: 50,
                publishedAt: new Date(),
                attributes: [
                    {
                        name: "Size",
                        value: "M"
                    }
                ]
            },
            {
                sku: "FOG-003",
                price: 10.99,
                stock: 50,
                publishedAt: new Date(),
                attributes: [
                    {
                        name: "Size",
                        value: "L"
                    },
                ]
            }
        ]
    },
    {
        name: "Football jersey",
        slug: "football-jersey",
        description: "A premium football jersey made of cotton.",
        publishedAt: new Date(),
        defaultVariant: {
            sku: "FOJ-001",
            price: 10.99,
            stock: 50,
            publishedAt: new Date(),
            attributes: [
                {
                    name: "Size",
                    value: "S"
                }
            ]
        },
        variants: [
            {
                sku: "FOJ-002",
                price: 10.99,
                stock: 50,
                publishedAt: new Date(),
                attributes: [
                    {
                        name: "Size",
                        value: "M"
                    }
                ]
            },
            {
                sku: "FOJ-003",
                price: 10.99,
                stock: 50,
                publishedAt: new Date(),
                attributes: [
                    {
                        name: "Size",
                        value: "L"
                    },
                ]
            }
        ]
    },

]

export { products }