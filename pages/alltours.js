import { getToursLink } from "../lib/api";
import Cards from "../components/Card/Cards";
import Path from "../components/Path";
import Head from "next/head";

export default function AllTours({ data }) {
    return (
        <>
            <Head>
                <title>Naadam Festival Tours</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <meta name="description" content="Naadam festival event" />
                <meta name="author" content="Naadam Festival" />
                <meta
                    name="keywords"
                    content="Naadam festival, Tailor Made Mongolia, Mongolia, Mongol naadam, NAADAM FESTIVAL AND ANCIENT CAPITAL CITY, NAADAM FESTIVAL AND CENTRAL REGION OF MONGOLIA,
                    NAADAM FESTIVAL AND EPIC MONGOLIAN OVERLAND, NAADAM FESTIVAL AND GREAT GOBI DESERT, NAADAM FESTIVAL AND MONGOLIAN BLUE PEARL, NAADAM FESTIVAL AND ULTIMATE WEST,
                    Jargal Expedition, Mongolia Travel Information, tailor made holidays in Mongolia"
                />
                <meta property="og:type" content="website" />
                {/*End url bichne*/}
                <meta property="og:url" content="http://naadamfest.com/" />
                <meta
                    property="og:title"
                    content="naadamfest.com :: Naadam Festival"
                />
                <meta
                    property="og:description"
                    content="For millennia, herders have lived on the Mongolian land, living as free as the country is wide. Mongolia’s vast steppe is home to one of the world’s last surviving nomadic cultures. The Mongolian steppe remains mostly intact, and its nomadic way of life has been largely unchanged for generations. Some herding customs alive today pre-date the era of Genghis Khan."
                />
                <meta property="og:site_name" content="naadamfest.com" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="799" />
                <meta
                    property="og:image"
                    content="https://cdn.sanity.io/images/aj69bwet/production/87731def5a651b9d29f99489ab9cd3077cebed78-3215x960.png?w=1000&h=1000&fit=max"
                />
                <meta property="og:locale" content="en_US" />
                <meta property="og:site_name" content="naadamfest.com" />
                <link rel="canonical" href="http://naadamfest.com/alltours" />
                <link rel="icon" href="/favicon_n.ico" />
            </Head>
            <Path name="Naadam Festival Tours" />
            <Cards tours={data} />
        </>
    );
}

export const getServerSideProps = async () => {
    const data = await getToursLink();
    return {
        props: {
            data,
        },
    };
};
