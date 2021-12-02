export default {
    name: "tailor",
    title: "Tailor Made Holiday",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
        },
        {
            name: "subtitle",
            title: "Subtitle",
            type: "string",
        },
        {
            name: "block",
            title: "Tailor Made Holiday",
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
    preview: {
        select: {
            title: "title",
            // media: "image",
        },
    },
};
