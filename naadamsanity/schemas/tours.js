export default {
    name: "tours",
    title: "Tours",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Tour name",
            type: "string",
        },
        {
            title: "Slug",
            name: "slug",
            type: "slug",
            options: {
                source: "title",
            },
        },
        {
            title: "Image",
            name: "image",
            type: "image",
        },
        {
            name: "overview",
            title: "Tour overview",
            type: "array",
            of: [
                {
                    title: "Block",
                    type: "block",
                    styles: [
                        { title: "Normal", value: "normal" },
                        { title: "H1", value: "h1" },
                        { title: "H2", value: "h2" },
                        { title: "H3", value: "h3" },
                        { title: "H4", value: "h4" },
                    ],
                    lists: [
                        { title: "Numbered", value: "number" },
                        { title: "Bullet", value: "bullet" },
                    ],
                },
            ],
        },
        {
            name: "holiday",
            title: "Holiday information",
            type: "array",
            of: [
                {
                    title: "Block",
                    type: "block",
                    styles: [
                        { title: "Normal", value: "normal" },
                        { title: "H1", value: "h1" },
                        { title: "H2", value: "h2" },
                        { title: "H3", value: "h3" },
                        { title: "H4", value: "h4" },
                    ],
                    lists: [
                        { title: "Numbered", value: "number" },
                        { title: "Bullet", value: "bullet" },
                    ],
                },
            ],
        },
        {
            title: "Itinerary",
            name: "itinerary",
            type: "array",
            of: [
                {
                    title: "Itinerary",
                    type: "itinerary",
                },
            ],
        },
        {
            title: "Date and Price",
            name: "dateAndPrice",
            type: "dateandprice",
        },
    ],
    preview: {
        select: {
            title: "title",
            media: "image",
        },
    },
};
