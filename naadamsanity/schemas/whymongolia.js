export default {
    name: "mongoliatop",
    title: "Mongolia Top highlights",
    type: "document",
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
        },
        {
            name: "desc",
            title: "Description",
            type: "string",
        },
    ],
    preview: {
        select: {
            title: "title",
            media: "image",
        },
    },
};
