export default {
    name: "employee",
    title: "Who we are",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Name",
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
                    styles: [{ title: "Normal", value: "normal" }],
                    lists: [],
                },
            ],
        },
        {
            title: "Position",
            name: "position",
            type: "number",
        },
    ],
    orderings: [
        {
            title: "Position",
            name: "position",
            by: [{ field: "position", direction: "desc" }],
        },
    ],
    preview: {
        select: {
            title: "name",
            media: "image",
        },
    },
};
