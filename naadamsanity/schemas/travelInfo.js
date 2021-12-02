export default {
    name: "info",
    title: "Travel Support",
    type: "document",
    fields: [
        {
            name: "desc",
            title: "Travel support",
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
                    lists: [{ title: "Numbered", value: "number" }],
                },
            ],
        },
    ],
    preview: {
        select: {
            title: "desc",
        },
    },
};
