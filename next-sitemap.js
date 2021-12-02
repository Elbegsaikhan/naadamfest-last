const siteUrl = "http://www.naadamfest.com";
module.exports = {
    siteUrl,
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [
            { userAgent: "*", disallow: "/secret" },
            { userAgent: "*", allow: "/" },
        ],
    },
    exclude: ["/secret"],
};
