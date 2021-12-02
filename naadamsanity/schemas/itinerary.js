export default {
    name: "itinerary",
    title: "Itinerary",
    type: "object",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
        },
        {
            name: "image",
            title: "Image",
            type: "image",
            options: {
                hotspot: true,
            },
        },
        {
            name: "bio",
            title: "Bio",
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
    ],
    // preview: {
    //     select: {
    //         title: "name",
    //         media: "image",
    //     },
    // },
};
