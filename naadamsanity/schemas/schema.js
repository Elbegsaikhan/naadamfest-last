// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// We import object and document schemas
import blockContent from "./blockContent";
// import category from "./category";
// import post from "./post";
import employee from "./employee";
import tours from "./tours";
import mainpage from "./mainpage";
import travelInfo from "./travelInfo";
import whymongolia from "./whymongolia";
import tailormadeholiday from "./tailormadeholiday";
import itinerary from "./itinerary";
import dateandprice from "./dateandprice";
import savenow from "./savenow";
import requestquote from "./requestquote";
import requestbrochure from "./requestbrochure";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
    // We name our schema
    name: "default",
    // Then proceed to concatenate our document type
    // to the ones provided by any plugins that are installed
    types: schemaTypes.concat([
        // The following are document types which will appear
        // in the studio.
        // post,
        employee,
        tours,
        mainpage,
        travelInfo,
        whymongolia,
        tailormadeholiday,
        itinerary,
        dateandprice,
        savenow,
        requestquote,
        requestbrochure,
        // category,
        // When added to this list, object types can be used as
        // { type: 'typename' } in other document schemas
        blockContent,
    ]),
});
