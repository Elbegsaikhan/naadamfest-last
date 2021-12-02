export default {
    name: "mainpage",
    title: "Main page",
    type: "document",
    fields: [
        {
            name: "image",
            title: "Image",
            type: "image",
            options: {
                hotspot: true,
            },
        },
        {
            title: "Image 2",
            name: "image2",
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
                {
                    // Editing this field will be hidden behind an "Edit"-button
                    name: "attribution",
                    type: "string",
                    title: "Attribution",
                },
            ],
        },
        {
            title: "Image 3",
            name: "image3",
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
                {
                    // Editing this field will be hidden behind an "Edit"-button
                    name: "attribution",
                    type: "string",
                    title: "Attribution",
                },
            ],
        },
        {
            name: "text1",
            title: "Image bottom text",
            type: "string",
        },
        {
            name: "text2",
            title: "Text 2",
            type: "string",
        },
        {
            name: "text2_sub1_title1",
            title: "Text 2 subtitle 1",
            type: "string",
        },
        {
            name: "text2_sub1_title2",
            title: "Text 2 subtitle 2",
            type: "string",
        },
        {
            name: "text2_sub1_title3",
            title: "Text 2 subtitle 3",
            type: "string",
        },
        {
            name: "text2_sub1",
            title: "Text 2 sub 1",
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
            name: "text2_sub2",
            title: "Text 2 sub 2",
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
            name: "text2_sub3",
            title: "Text 3 sub 3",
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
    ],
    preview: {
        select: {
            title: "text1",
            media: "image",
        },
    },
};
