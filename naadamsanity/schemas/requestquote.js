export default {
    name: "requestquote",
    title: "Request Quote page",
    type: "document",
    fields: [
        {
            title: "Image",
            name: "image",
            type: "image",
            options: {
                hotspot: true, // <-- Defaults to false
            },
            fields: [
                {
                    name: "caption",
                    type: "string",
                    title: "Caption",
                    options: {
                        isHighlighted: true, // <-- make this field easily accessible
                    },
                },
            ],
        },
        {
            name: "text",
            title: "Text",
            type: "array",
            of: [
                {
                    title: "Block",
                    type: "block",
                    styles: [
                        { title: "Normal", value: "normal" },
                        { title: "Title", value: "title" },
                        { title: "H1", value: "h1" },
                        { title: "H2", value: "h2" },
                        { title: "H3", value: "h3" },
                        { title: "Quote", value: "blockquote" },
                    ],
                    lists: [],
                },
            ],
        },
    ],
    preview: {
        select: {
            title: "image.caption",
            media: "image",
        },
    },
};
