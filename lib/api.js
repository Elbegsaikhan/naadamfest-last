import client from "./sanity";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);
export const urlFor = (source) => {
    return builder.image(source);
};
export const getAllEmployee = async () => {
    return await client.fetch(
        `*[_type == "employee"]{name, "image": image.asset->url, bio, position} | order(position asc)`
    );
};
export const getTours = async (params) => {
    return await client.fetch(
        `*[_type == "tours" && slug.current == $slug]{overview, title, holiday, image, slug, itinerary, "itimage": itinerary[]["image"]['asset']->url, "dateand": dateAndPrice}`,
        params
    );
};
export const getToursLink = async () => {
    return await client.fetch(
        `*[_type == "tours"] | order(_createdAt asc) {title, "image":image.asset->url, slug, "dateand": dateAndPrice }`
    );
};
export const getAllToursSlug = async () => {
    return await client.fetch(`*[_type == "tours"]{"slug": slug.current}`);
};
export const getMainPage = async () => {
    return await client.fetch(
        `*[_type == "mainpage"]{"image": image.asset->url, text1, text2, text2_sub1,
         'image2': image2.asset->url, "image2Cap": image2.caption, 'image3': image3.asset->url, "image3Cap": image3.caption, 
        text2_sub2, text2_sub3, 
        text2_sub1_title1, text2_sub1_title2, text2_sub1_title3}`
    );
};
export const getTravelSupport = async () => {
    return await client.fetch(`*[_type == "info"]{desc}`);
};
export const getWhyMongolia = async () => {
    return await client.fetch(
        `*[_type == 'mongoliatop']{title, "image": image.asset->url, desc}`
    );
};
export const getTailorMadeHoliday = async () => {
    return await client.fetch(`*[_type == 'tailor']{title, subtitle, block }`);
};
export const getSaveNow = async () => {
    return await client.fetch(
        `*[_type == "savenow" ]{"image": image.asset->url, text, 'tours': tours->, "caption": image.caption, sale  }`
    );
};
export const getRequestQuote = async () => {
    return await client.fetch(
        `*[_type == "requestquote" ]{"image": image.asset->url, text, "caption": image.caption}`
    );
};
export const getRequestBrochure = async () => {
    return await client.fetch(
        `*[_type == "requestbrochure" ]{"image": image.asset->url, text, "caption": image.caption}`
    );
};

export const getSaveNowTours = async () => {
    return await client.fetch(
        `*[_type == "tours"]{overview, title, holiday, image, slug, itinerary, "itimage": itinerary[]["image"]['asset']->url, "dateand": dateAndPrice}`
    );
};
