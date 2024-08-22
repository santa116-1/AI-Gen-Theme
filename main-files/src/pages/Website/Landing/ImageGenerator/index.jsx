import React, {useState} from "react";
import { RadioGroup } from "@headlessui/react";
import classNames from "classnames";
import Layout from "../../../../layout/website";
import Section from "../../../../layout/global/Section";
import Container from "../../../../layout/global/Container";
import { Accordion, Input, Textarea } from "../../../../components";

import { Link } from "react-router-dom";
import { ArrowPathRoundedSquareIcon, CloudArrowDownIcon, PaperAirplaneIcon, PencilSquareIcon, ShareIcon, SparklesIcon, Square3Stack3DIcon } from "@heroicons/react/24/outline";

import { CheckBadgeIcon, StarIcon } from "@heroicons/react/24/solid";
import Logo from "../../../../layout/global/Logo";

const imagestyle = [
    {
        src: "/images/generated/a-childrens-school-made-of-classrooms-made-of-geodesic-domes-situated-on-an-old-golf-course-in-hawaii.jpg",
        name:"Photo"
    },
    {
        src: "/images/generated/baby-bandsaurus-drinking-coffee-with-baby-bottle.jpg",
        name:"Concept Art"
    },
    {
        src: "/images/generated/happy-ice-cream-sining.jpg",
        name:"Illustration"
    },
    {
        src: "/images/generated/melted-candle-looks-like-a-fried-chicken-burger-in-pastel-colours.jpg",
        name:"Fantasy"
    },
    {
        src: "/images/generated/hype-realistic-modern-bed-with-sandy-colors-white-background-and-cinematic-lights.jpg",
        name:"Isometric"
    },
]

const history = [
    {
        src: "/images/generated/a-modern-and-innovative-commercial-booth-in-the-middle-of-the-desert.jpg",
        link: "#",
        prompt: "A modern and innovative commercial booth in the middle of the desert",
    },
    {
        src: "/images/generated/a-teeny-tiny-cute-redheaded-gremlin-girl-reaching-her-hands-into-the-air-saying-because-I-love-you.jpg",
        link: "#",
        prompt: "a teeny tiny cute redheaded gremlin girl reaching her hands into the air saying 'because I love you!'.jpg",
    },
    {
        src: "/images/generated/angry-doughnut-walking-down-the-street.jpg",
        link: "#",
        prompt: "Angry doughnut walking down the street",
    },
    {
        src: "/images/generated/design-the-world-through-the-eyes-of-a-neurodivergent-child-vivid-and-vibrant-colours-fun-white-background-hyper-realistic.jpg",
        link: "#",
        prompt: "design the world through the eyes of a neurodivergent child vivid and vibrant colours fun white background hyper-realistic",
    },
    {
        src: "/images/generated/happy-ice-cream-sining.jpg",
        link: "#",
        prompt: "Happy ice cream sining",
    },
    {
        src: "/images/generated/cute-cat-as-calculator-macaroon-as-the-buttons-of-the-calculator-ribbon-happy-colors.jpg",
        link: "#",
        prompt: "cute cat as calculator macaroon as the buttons of the calculator ribbon happy colors",
    },
    {
        src: "/images/generated/supplement-and-nutrition-company.jpg",
        link: "#",
        prompt: "supplement and nutrition company",
    },
    {
        src: "/images/generated/hyper-realistic-modern-sofa-with-pastel-colors-and-white-background-cinematic-light.jpg",
        link: "#",
        prompt: "Hyper realistic modern sofa with pastel colors and white background cinematic light",
    },
    {
        src: "/images/generated/hyper-realistic-modern-furniture-with-white-background-and-pastel-colors-cinematic-lights.jpg",
        link: "#",
        prompt: "Hyper realistic modern furniture with white background and pastel colors cinematic lights",
    },
    {
        src: "/images/generated/cute-cat-as-calculator-macaroon-as-the-buttons-of-the-calculator-ribbon-happy-colors2.jpg",
        link: "#",
        prompt: "cute cat as calculator macaroon as the buttons of the calculator ribbon happy colors",
    },
    {
        src: "/images/generated/hype-realistic-modern-bed-with-sandy-colors-white-background-and-cinematic-lights.jpg",
        link: "#",
        prompt: "hype realistic modern bed with sandy colors white background and cinematic lights",
    },
    {
        src: "/images/generated/display-of-various-technological-products-colourful-pastel-abstract.jpg",
        link: "#",
        prompt: "display of various technological products colourful pastel abstract",
    },
];

const features = [
    {
        title : "Various art styles",
        icon : <Square3Stack3DIcon />,
        excerpt: "Render your AI-generated images in stunning art styles like Photo, Concept Art, Illustration, Fantasy, Isometric, and more."
    },
    {
        title : "Enhance your images",
        icon : <SparklesIcon />,
        excerpt: "Using our awesome and dynamic Photo Editor to fix your photo’s focus, lighting, and coloring with easy-to-use sliders."
    },
    {
        title : "Magic Edit",
        icon : <PencilSquareIcon />,
        excerpt: "Want to enhance the color or texture of an object Magic Edit lets you add to, replace, or edit your image with short prompt."
    },
    {
        title : "One Click Re-Generate",
        icon : <ArrowPathRoundedSquareIcon />,
        excerpt: "Didn't like what you see, just hit that big fat Re-Generate button as many time you want, until you get something awesome."
    },
    {
        title : "Access anywhere",
        icon : <CloudArrowDownIcon />,
        excerpt: "Jump from device to desktop—design how you work best! Scribbler autosaves your progress along the way."
    },
    {
        title : "Easy sharing and exporting",
        icon : <ShareIcon />,
        excerpt: "Spread the word with easy sharing with pc, mobile tablet. exporting options including as a JPG, PNG, or PDF."
    },
]

function ImageGenPage() {
    const [selectedStyle, setSelectedStyle] = useState('Photo');
    return (
        <Layout title="Image Generator">
            <Section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-white dark:from-slate-950 to-blue-100 dark:to-blue-950 overflow-hidden">
                <Container>
                    <div className="flex justify-center flex-wrap gap-y-6">
                        <div className="w-full sm:w-5/6 md:w-4/5 lg:w-3/5">
                            <div className="text-center md:pb-5">
                                <h1 className="text-2xl/snug xs:text-3xl/snug sm:text-4xl/snug md:text-5xl/snug lg:text-5xl/snug xl:text-6xl/tight font-bold text-slate-700 dark:text-white">Turn your <span className="bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">Imagination</span> to images in seconds</h1>
                            </div>
                        </div>
                        <div className="w-full md:w-4/5 lg:w-3/5">
                            <div className="flex flex-wrap sm:flex-nowrap items-center bg-white dark:bg-slate-950 border border-slate-200  dark:border-slate-800 rounded-md p-1">
                                <div className="relative flex-grow w-full sm:w-auto">
                                    <Textarea className="w-full py-3 px-3 rounded-md text-sm text-center sm:text-start" rows="1" notheme={true} placeholder="Delicious pizza with toppings"
                                    id="prompt" />
                                </div>
                                <Link to="/app/templates/image" className="w-full sm:w-auto inline-flex justify-center font-medium text-sm bg-blue-600 text-white hover:bg-blue-800 transition-all px-6 py-3 rounded-md">
                                    Generate
                                </Link>
                            </div>
                            <p className="pt-3 text-xs text-slate-600 dark:text-slate-200 text-center">Generate an image by describing what you want to see.</p>
                        </div>
                        <div className="w-full md:w-4/5 lg:w-3/5">
                            <RadioGroup value={selectedStyle} onChange={setSelectedStyle} className="flex overflow-x-auto scrollbar-thin scrollbar-track-transparent  scrollbar-thumb-slate-600 -m-2 pt-3">
                                {imagestyle.map((item, index) => 
                                    <div key={index} className="p-2 w-1/3 xs:w-1/4 sm:w-1/5 flex-shrink-0">
                                        <RadioGroup.Option key={index} value={item.name} className={({ active, checked }) =>
                                            classNames({
                                                ["rounded-md transition-all duration-500"]: true,
                                                ["cursor-default"]: checked,
                                                ["cursor-pointer"]: !checked,
                                            })
                                        }>
                                            {({ checked }) => (
                                                <div className="h-full flex flex-col">
                                                    <img className="rounded-t-md flex-shrink-0" src={item.src} />
                                                    <div className={
                                                        classNames({
                                                            ["flex items-center justify-center flex-grow p-2 rounded-b-md border border-t-0 text-[10px] xs:text-xs font-bold text-center transition-all duration-500"]:true,
                                                            ["text-slate-700 dark:text-white border-blue-200 dark:border-blue-900 bg-blue-100 dark:bg-blue-950"]: checked,
                                                            ["text-slate-600 dark:text-slate-200 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950"]: !checked,
                                                        })
                                                    }>{item.name}</div>
                                                </div>
                                            )}
                                        </RadioGroup.Option>
                                    </div>
                                )}
                            </RadioGroup>
                        </div>
                    </div>
                </Container>
            </Section>
            <Section className="pt-16 md:pt-20 lg:pt-24 xl:pt-28 bg-white dark:bg-slate-900 overflow-hidden">
                <Container>
                    <div className="flex flex-wrap items-center justify-center -m-4">
                        <div className="md:w-4/5 lg:w-1/2 2xl:w-2/5 p-4">
                            <div className="">
                                <img src="/images/landing/text-to-image.png" alt="" />
                            </div>
                        </div>
                        <div className="md:w-4/5 lg:w-1/2 2xl:w-2/5 p-4">
                            <div className="lg:ps-4 xl:ps-8">
                                <h2 className="text-[2.5rem] leading-tight font-bold text-slate-800 dark:text-white mb-2">Where AI Paints <br /> <span className="bg-gradient-to-r from-fuchsia-600 to-purple-600 bg-clip-text text-transparent">Your Vision</span> </h2>
                                <p className="text-2xl text-slate-600 dark:text-slate-200 mb-5">Welcome to Scribbler AI fuels creativity.</p>
                                <p className="text-base/7 text-slate-500 dark:text-slate-300">
                                    Unleash stunning visuals effortlessly with our intuitive AI image generator. Transform ideas into artworks in just a click. Perfect for artists, designers, and anyone seeking instant, unique visuals. Elevate your creative journey with us..
                                </p>
                                <div className="pt-5">    
                                    <Link to="/app/templates/image" className="inline-flex justify-center font-medium text-sm bg-blue-600 text-white hover:bg-blue-800 transition-all px-6 py-3 rounded-md">
                                        Lets Try It
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>
            <Section className="pt-16 md:pt-20 lg:pt-24 xl:pt-28 pb-2 bg-white dark:bg-slate-900 overflow-hidden">
                <Container>
                    <div className="flex flex-wrap items-center justify-center -m-4">
                        <div className="md:w-4/5 lg:w-1/3 p-4">
                            <div className="bg-white dark:bg-slate-950 p-7 border border-slate-100 dark:border-slate-950 shadow rounded-2xl">
                                <div className="flex items-center pb-4">
                                    <div className="flex gap-x-1 text-yellow-500">
                                        <StarIcon className="h-4" /><StarIcon className="h-4" /><StarIcon className="h-4" /><StarIcon className="h-4" /><StarIcon className="h-4" />
                                    </div>
                                    <span className="text-sm text-slate-500 dark:text-slate-300 ms-5">5 Stars</span>
                                </div>
                                <p className="text-lg/relaxed font-light italic text-slate-500 dark:text-slate-300">One of the best template i have ever worked with. Clean and modern UI design. Clear and well commented codes based on atomic.</p>
                                <div className="pt-5 flex items-center">
                                    <div className="inline-flex flex-shrink-0 h-12 w-12 rounded-full overflow-hidden outline outline-1 outline-offset-2 outline-slate-300 dark:outline-slate-700">
                                        <img src="images/avatar/thumb/1.jpg" alt="" />
                                    </div>
                                    <div className="ms-5">
                                        <h6 className="text-sm/snug font-bold text-slate-600 dark:text-slate-100">Mia Thompson</h6>
                                        <span className="text-sm text-slate-400">Fusion Systems</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-4/5 lg:w-1/3 p-4">
                            <div className="bg-white dark:bg-slate-950 p-7 border border-slate-100 dark:border-slate-950 shadow rounded-2xl">
                                <div className="flex items-center pb-4">
                                    <div className="flex gap-x-1 text-yellow-500">
                                        <StarIcon className="h-4" /><StarIcon className="h-4" /><StarIcon className="h-4" /><StarIcon className="h-4" /><StarIcon className="h-4" />
                                    </div>
                                    <span className="text-sm text-slate-500 dark:text-slate-300 ms-5">5 Stars</span>
                                </div>
                                <p className="text-lg/relaxed font-light italic text-slate-500 dark:text-slate-300">With its seamless creativity, the AI image generator delivers diverse and stunning visuals, despite occasional imperfections in execution.</p>
                                <div className="pt-5 flex items-center">
                                    <div className="inline-flex flex-shrink-0 h-12 w-12 rounded-full overflow-hidden outline outline-1 outline-offset-2 outline-slate-300 dark:outline-slate-700">
                                        <img src="images/avatar/thumb/5.jpg" alt="" />
                                    </div>
                                    <div className="ms-5">
                                        <h6 className="text-sm/snug font-bold text-slate-600 dark:text-slate-100">Dianne Russell</h6>
                                        <span className="text-sm text-slate-400">Horizon Tech</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-4/5 lg:w-1/3 p-4">
                            <div className="bg-white dark:bg-slate-950 p-7 border border-slate-100 dark:border-slate-950 shadow rounded-2xl">
                                <div className="flex items-center pb-4">
                                    <div className="flex gap-x-1 text-yellow-500">
                                        <StarIcon className="h-4" /><StarIcon className="h-4" /><StarIcon className="h-4" /><StarIcon className="h-4" /><StarIcon className="h-4" />
                                    </div>
                                    <span className="text-sm text-slate-500 dark:text-slate-300 ms-5">5 Stars</span>
                                </div>
                                <p className="text-lg/relaxed font-light italic text-slate-500 dark:text-slate-300">The AI image generator impresses with its seamless creativity, producing diverse and stunning visuals, despite occasional imperfections.</p>
                                <div className="pt-5 flex items-center">
                                    <div className="inline-flex flex-shrink-0 h-12 w-12 rounded-full overflow-hidden outline outline-1 outline-offset-2 outline-slate-300 dark:outline-slate-700">
                                        <img src="images/avatar/thumb/10.jpg" alt="" />
                                    </div>
                                    <div className="ms-5">
                                        <h6 className="text-sm/snug font-bold text-slate-600 dark:text-slate-100">Liam Anderson</h6>
                                        <span className="text-sm text-slate-400">Nexus Dynamics</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>
            <Section className="pt-16 md:pt-20 lg:pt-24 xl:pt-28 bg-white dark:bg-slate-900 overflow-hidden">
                <Container>
                    <div className="flex flex-wrap items-center justify-center pb-8 lg:pb-12">
                        <div className="w-full sm:w-4/5 md:w-3/5 lg:w-2/5 text-center mx-auto">
                            <h3 className="text-3xl sm:text-[2.5rem] leading-tight font-bold text-slate-700 dark:text-white mb-3">Lets take a look at our awesome results</h3>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-center -m-3 md:-m-4" >
                            {history.map((item,index) => {
                                return(
                                    <div key={index} className="w-1/2 md:w-1/3 xl:w-1/4 p-3 md:p-4">
                                        <div key={index} className="relative group overflow-hidden rounded-xl lg:rounded-2xl">
                                            <img className="rounded-2xl" src={item.src} />
                                            <div className="absolute bottom-0 p-5 pt-13 bg-gradient-to-b from-transparent to-slate-900 rounded-b-md transition-all opacity-0 group-hover:opacity-100 w-full">
                                                <span className="inline-flex bg-blue-500 text-white px-2 pb-1 text-xs font-bold mb-1 rounded">
                                                    prompt
                                                </span>
                                                <span className="text-white text-xs font-bold line-clamp-2">
                                                    {item.prompt}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                    </div>
                </Container>
            </Section>
            <Section className="pt-16 md:pt-20 lg:pt-24 xl:pt-28 pb-2 bg-white dark:bg-slate-900 overflow-hidden">
                <Container>
                    <div className="flex flex-wrap items-center justify-center pb-8 lg:pb-12">
                        <div className="w-full sm:w-4/5 md:w-3/5 lg:w-2/5 text-center mx-auto">
                            <h3 className="text-3xl sm:text-[2.5rem] leading-tight font-bold text-slate-700 dark:text-white mb-3">Check out what else we can do for you.</h3>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-center -m-3 md:-m-4" >
                            {features.map((item,index) => {
                                return(
                                    <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-3 md:p-4">
                                        <div key={index} className="bg-white dark:bg-slate-950 p-7 border border-slate-100 dark:border-slate-950 shadow rounded-2xl  h-full">
                                            <div className="[&_*]:h-8 [&_*]:w-8 p-3 rounded-lg inline-block text-blue-500 bg-blue-100 dark:bg-blue-950">
                                                {item.icon}
                                            </div>
                                            <h6 className="text-lg font-bold text-slate-600 dark:text-slate-200 pt-3 pb-3">{item.title}</h6>
                                            <p className="text-slate-500 dark:text-slate-400 text-sm/6">{item.excerpt}</p>
                                        </div>
                                    </div>
                                )
                            })}
                    </div>
                </Container>
            </Section>
            <Section className="pt-16 md:pt-20 lg:pt-24 xl:pt-28 pb-2 bg-white dark:bg-slate-900 overflow-hidden">
                <Container>
                    <div className="flex flex-wrap items-center justify-center pb-8 lg:pb-12">
                        <div className="w-full sm:w-4/5 md:w-4/5 lg:w-3/5 xl:w-1/2 2xl:w-2/5 text-center mx-auto">
                            <h3 className="text-3xl sm:text-[2.5rem] leading-tight font-bold text-slate-700 dark:text-white mb-3">Start with free, subscribe for more features.</h3>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-center -m-3 md:-m-4" >
                        <div className="w-full lg:w-1/3 xl:w-1/4 p-3 md:p-4">
                            <div className="bg-white dark:bg-slate-950 p-7 border border-slate-100 dark:border-slate-950 shadow rounded-2xl">
                                <h2 className="text-3xl/snug font-bold text-blue-600">
                                    Free
                                </h2>
                                <p className="text-slate-600 dark:text-slate-200 text-lg mb-3">I just need the basics!</p>
                                <p className="text-slate-500 dark:text-slate-400 text-sm/6">
                                    Unleash creativity without costs, transforming ideas into visuals effortlessly.
                                </p>
                                <div className="mt-5">
                                    <button className="inline-flex justify-center w-full font-bold text-base bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-blue-600 hover:dark:bg-blue-600 hover:border-blue-600 hover:dark:border-blue-600 hover:text-white hover:dark:text-white transition-all px-7 py-3 rounded-lg">
                                        Sign up for free
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-3 md:p-4">
                            <div className="bg-white dark:bg-slate-950 p-7 border border-slate-100 dark:border-slate-950 shadow rounded-2xl ring-2 ring-blue-300 dark:ring-blue-900">
                                <h2 className="text-2xl/snug font-bold w-max bg-gradient-to-r from-blue-600 to-pink-500 text-transparent bg-clip-text">
                                    Premium
                                </h2>
                                <div className="flex items-baseline gap-x-2 mt-2 mb-6">
                                    <span className="text-4xl font-bold tracking-tight text-slate-700 dark:text-white"> $12 </span>
                                    <span className="text-sm font-semibold leading-6 tracking-wide text-slate-500 dark:text-slate-400"> Month</span>
                                </div>

                                <ul className="text-slate-500 dark:text-slate-400 text-sm font-medium flex flex-col gap-y-3">
                                    <li className="flex gap-x-3">
                                        <CheckBadgeIcon className="h-5 text-blue-500" />
                                        <span>
                                            <strong className="text-slate-600 dark:text-slate-200">2000</strong>
                                            &nbsp;Monthly Credits
                                        </span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <CheckBadgeIcon className="h-5 text-blue-500" />
                                        <span>Unlimited Saves</span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <CheckBadgeIcon className="h-5 text-blue-500" />
                                        <span>
                                            <strong className="text-slate-600 dark:text-slate-200">5</strong>
                                            &nbsp;Team Members
                                        </span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <CheckBadgeIcon className="h-5 text-blue-500" />
                                        <span>Access Newest features</span>
                                    </li>
                                </ul>
                                
                                <div className="mt-7">
                                    <button className="inline-flex justify-center w-full font-bold text-base bg-blue-600 text-white hover:bg-blue-800 transition-all px-7 py-3 rounded-lg">
                                        Start 7 Days Free Trail
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-3 md:p-4">
                            <div className="bg-white dark:bg-slate-950 p-7 border border-slate-100 dark:border-slate-950 shadow rounded-2xl">
                                <h2 className="text-2xl/snug font-bold w-max text-slate-700 dark:text-blue-500">Corporate </h2>
                                <div className="flex items-baseline gap-x-2 mt-2 mb-6">
                                    <span className="text-4xl font-bold tracking-tight text-slate-700 dark:text-white"> $99 </span>
                                    <span className="text-sm font-semibold leading-6 tracking-wide text-slate-500 dark:text-slate-400"> Month</span>
                                </div>

                                <ul className="text-slate-500 dark:text-slate-400 text-sm font-medium flex flex-col gap-y-3">
                                    <li className="flex gap-x-3">
                                        <CheckBadgeIcon className="h-5 text-blue-500" />
                                        <span>
                                            <strong className="text-slate-600 dark:text-slate-200">90000</strong>
                                            &nbsp;Monthly Credits
                                        </span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <CheckBadgeIcon className="h-5 text-blue-500" />
                                        <span>Unlimited Saves</span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <CheckBadgeIcon className="h-5 text-blue-500" />
                                        <span>
                                            <strong className="text-slate-600 dark:text-slate-200">30</strong>
                                            &nbsp;Team Members
                                        </span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <CheckBadgeIcon className="h-5 text-blue-500" />
                                        <span>Access Newest features</span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <CheckBadgeIcon className="h-5 text-blue-500" />
                                        <span>Access to API</span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <CheckBadgeIcon className="h-5 text-blue-500" />
                                        <span>24/7 Support assistant</span>
                                    </li>
                                </ul>
                                
                                <div className="mt-7">
                                    <button className="inline-flex justify-center w-full font-bold text-base bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-blue-600 hover:dark:bg-blue-600 hover:border-blue-600 hover:dark:border-blue-600 hover:text-white hover:dark:text-white transition-all px-7 py-3 rounded-lg">
                                        Get in touch
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>
            <Section className="py-16 md:py-20 lg:py-24 xl:py-28 bg-white dark:bg-slate-900 overflow-hidden">
                <Container>
                    <div className="flex flex-wrap items-center justify-center pb-8 lg:pb-10">
                        <div className="sm:w-2/3 md:w-3/5 lg:w-2/5 text-center text- mx-auto">
                            <h3 className="text-3xl leading-tight font-bold text-slate-700 dark:text-white mb-3">You might have some questions, lets talk about it</h3>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-center -m-3 md:-m-4" >
                        <div className="w-full xl:w-3/4 p-3 md:p-4">
                            <Accordion className="flex flex-col gap-3">
                                <Accordion.Item
                                    size="lg"
                                    className="bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-950 shadow rounded-2xl"
                                    header={
                                        "What is an AI image generator?"
                                    }
                                    initialEntered
                                >
                                    <div className="max-w-3xl">    
                                        <p className="text-base/7">
                                            An AI image generator is a sophisticated tool that leverages advanced artificial intelligence algorithms to produce realistic and unique images. By understanding patterns and features from extensive datasets, it transforms given inputs or concepts into visually compelling artworks.
                                        </p>
                                    </div>
                                </Accordion.Item>
                                <Accordion.Item
                                    size="lg"
                                    className="bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-950 shadow rounded-2xl"
                                    header={
                                        "How does the AI image generator work?"
                                    }
                                >
                                    <div className="max-w-3xl">    
                                        <p className="text-base/7">
                                            The AI image generator operates by employing intricate algorithms to meticulously analyze input data. By learning from a vast dataset, the generator can then create images that resonate with the identified patterns and features, resulting in visually striking and unique outputs.
                                        </p>
                                    </div>
                                </Accordion.Item>
                                <Accordion.Item
                                    size="lg"
                                    className="bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-950 shadow rounded-2xl"
                                    header={
                                        "Is the AI image generator suitable for beginners?"
                                    }
                                >
                                    <div className="max-w-3xl">    
                                        <p className="text-base/7">
                                        Yes, our AI image generator is designed with a user-friendly interface, making it accessible and intuitive for beginners. Simply input your creative ideas, and the generator seamlessly handles the complex process of image creation on your behalf.
                                        </p>
                                    </div>
                                </Accordion.Item>
                                <Accordion.Item
                                    size="lg"
                                    className="bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-950 shadow rounded-2xl"
                                    header={
                                        "Can I use my own images as input?"
                                    }
                                >
                                    <div className="max-w-3xl">    
                                        <p className="text-base/7">
                                        Depending on the platform, our AI image generator may offer the flexibility for users to incorporate their own images as input. This feature allows for the generation of customized results, adding a personal touch to your creative endeavors.
                                        </p>
                                    </div>
                                </Accordion.Item>
                                <Accordion.Item
                                    size="lg"
                                    className="bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-950 shadow rounded-2xl"
                                    header={
                                        "What kind of images can the AI generator create?"
                                    }
                                >
                                    <div className="max-w-3xl">    
                                        <p className="text-base/7">
                                        Our AI image generator is versatile and can create a diverse array of images. Whether you're looking for landscapes, abstract art, portraits, or other styles, the generator adapts to various preferences and artistic expressions, providing a wide range of creative possibilities.
                                        </p>
                                    </div>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>
                </Container>
            </Section>
            <Section className="py-16 md:py-20 bg-slate-50 dark:bg-slate-950 overflow-hidden border-t border-gray-200 dark:border-gray-800 mt-auto">
                <Container>
                    <div className="flex flex-wrap -m-3 md:-m-4" >
                        <div className="w-full lg:w-4/12 xl:w-3/12 p-3 md:p-4">
                            <div className="pb-3">
                                <Link to="/">
                                    <Logo className="h-7" />
                                </Link>
                                <div className="mt-2 lg:mt-5">
                                    <p className="text-slate-500 dark:text-slate-300 text-base/7"> Unleash stunning visuals effortlessly with our intuitive AI.</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-6/12 sm:w-3/12 lg:w-2/12 p-3 md:p-4 lg:ms-auto">
                            <h6 className="font-bold text-base text-slate-700 dark:text-white mb-3">More Tools</h6>
                            <ul>
                                <li> <Link className="inline-flex text-sm/7 text-slate-500 dark:text-slate-400 hover:text-blue-600 hover:dark:text-blue-600 transition-all">Image Generator</Link> </li>
                                <li> <Link className="inline-flex text-sm/7 text-slate-500 dark:text-slate-400 hover:text-blue-600 hover:dark:text-blue-600 transition-all">Code Generator</Link> </li>
                                <li> <Link className="inline-flex text-sm/7 text-slate-500 dark:text-slate-400 hover:text-blue-600 hover:dark:text-blue-600 transition-all">Speech to Text</Link> </li>
                                <li> <Link className="inline-flex text-sm/7 text-slate-500 dark:text-slate-400 hover:text-blue-600 hover:dark:text-blue-600 transition-all">Article Writer</Link> </li>
                                <li> <Link className="inline-flex text-sm/7 text-slate-500 dark:text-slate-400 hover:text-blue-600 hover:dark:text-blue-600 transition-all">ChatBot</Link> </li>
                            </ul>
                        </div>
                        <div className="w-6/12 sm:w-3/12 lg:w-2/12 p-3 md:p-4">
                            <h6 className="font-bold text-base text-slate-700 dark:text-white mb-3">Pages</h6>
                            <ul>
                                <li> <Link className="inline-flex text-sm/7 text-slate-500 dark:text-slate-400 hover:text-blue-600 hover:dark:text-blue-600 transition-all">Main intro</Link> </li>
                                <li> <Link className="inline-flex text-sm/7 text-slate-500 dark:text-slate-400 hover:text-blue-600 hover:dark:text-blue-600 transition-all">User Application</Link> </li>
                                <li> <Link className="inline-flex text-sm/7 text-slate-500 dark:text-slate-400 hover:text-blue-600 hover:dark:text-blue-600 transition-all">Admin Dashboard</Link> </li>
                            </ul>
                        </div>
                        <div className="w-full sm:w-6/12 lg:w-3/12 p-3 md:p-4">
                            <h6 className="font-bold text-base text-slate-700 dark:text-white mb-3">Sign up for updates</h6>
                            <div className="flex items-center gap-2">
                                <div className="relative flex-grow w-full sm:w-auto">
                                    <Input className="w-full" placeholder="name@email.com" />
                                </div>
                                <Link to="/app/templates/image" className="inline-flex justify-center font-medium text-sm bg-blue-600 text-white hover:bg-blue-800 transition-all px-3 py-2 rounded-md">
                                    <PaperAirplaneIcon className="h-5" />
                                </Link>
                            </div>
                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">We don't share your info</p>
                        </div>
                    </div>
                </Container>
            </Section>
        </Layout>
    );
}

export default ImageGenPage;
