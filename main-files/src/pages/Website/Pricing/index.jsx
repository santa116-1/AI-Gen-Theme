import React from "react";
import Layout from "../../../layout/website";
import Section from "../../../layout/global/Section";
import Container from "../../../layout/global/Container";
import { Link } from "react-router-dom";
import { CheckBadgeIcon, PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { Accordion, Breadcrumbs, Input } from "../../../components";
import Logo from "../../../layout/global/Logo";
import { useTheme } from "../../../layout/provider";
function PricingPage() {
    const theme = useTheme();

    return (
        <Layout title="Pricing">
            <Section className="py-16 md:py-20 bg-slate-100 dark:bg-slate-950">
                <Container>
                    <div className="flex flex-col items-center justify-center">
                        <div className="w-full md:w-5/12">
                            <div className="text-center">
                                <h2 className="text-3xl font-bold text-slate-700 dark:text-white mb-2">
                                    Pricing
                                </h2>
                                <Breadcrumbs
                                    items={[
                                        { text: "Home", link: "/" },
                                        { text: "Pricing" },
                                    ]}
                                />
                            </div>
                        </div>
                    </div>
                </Container>
                <div className="absolute h-[1px] w-full bottom-0 start-0 bg-gradient-to-r from-transparent from-10% via-blue-100 dark:via-blue-950 to-transparent to-90% animate-[animateGradient_5s_ease-in-out_2]"></div>
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
            <Section className="pt-16 md:pt-20 lg:pt-24 xl:pt-28 pb-2 bg-white dark:bg-slate-900 overflow-hidden">
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
            <Section className="pt-16 md:pt-20 lg:pt-24 xl:pt-28 bg-white dark:bg-slate-900 overflow-hidden">
                <Container>
                    <div className="relative bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-950 border border-b-0 border-gray-200 dark:border-gray-800 rounded-t-xl p-6 sm:p-10 !pb-0">
                        <div className="flex flex-wrap items-center -m-4">
                            <div className="p-4 w-full lg:w-6/12">
                                <div className="lg:pb-10">
                                    <h1 className="text-2xl sm:text-4xl/snug font-bold text-slate-700 dark:text-white mb-4">Revolutionize Your Copywriting Save <span className="bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">Time and Money</span></h1>
                                    <p className="text-slate-500 dark:text-slate-300 text-base/relaxed sm:text-lg/relaxed mb-6">Stop the drain on your resources and start investing your time and money where it truly matters.</p>
                                    <button className="inline-flex justify-center font-bold text-base bg-blue-600 text-white hover:bg-blue-800 transition-all px-7 py-3 rounded-lg">
                                        Try it for Free
                                    </button>
                                </div>
                            </div>
                            
                            <div className="p-4 w-full lg:w-6/12 self-end">
                                <img className="rounded-t-xl shadow-lg shadow-blue-100 dark:shadow-blue-950 border border-b-0 border-gray-200 dark:border-gray-800" src={`${theme.mode === "dark" ? "/images/landing/screens/copywriter-dark.png" : "/images/landing/screens/copywriter.png"}`} alt="" />
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>
            <Section className="py-16 md:py-20 bg-slate-50 dark:bg-slate-950 overflow-hidden border-t border-gray-200 dark:border-gray-800">
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

export default PricingPage;
