import React, {useState} from "react";
import Layout from "../../../../layout/website";
import Section from "../../../../layout/global/Section";
import Container from "../../../../layout/global/Container";
import { Link } from "react-router-dom";
import { Tab } from "@headlessui/react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { CodeBracketIcon, HashtagIcon, SparklesIcon, CheckBadgeIcon, PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { Accordion, Input } from "../../../../components";
import Logo from "../../../../layout/global/Logo";
import { useTheme } from "../../../../layout/provider";

function CodeGenPage() {
    const theme = useTheme();
    const [selectedIndex, setSelectedIndex] = useState(0);
    const code = {
        python : `x = object()
y = object()

# TODO: change this code
x_list = [x]
y_list = [y]
big_list = []

print("x_list contains %d objects" % len(x_list))
print("y_list contains %d objects" % len(y_list))
print("big_list contains %d objects" % len(big_list))

# testing code
if x_list.count(x) == 10 and y_list.count(y) == 10:
    print("Almost there...")
if big_list.count(x) == 10 and big_list.count(y) == 10:
    print("Great!")`,
        react : `import React, { useState, useEffect } from 'react';
const MyComponent = () => {
    return (
        <div>
            {data ? (
                <ul>
                    {data.map((item) => ( <li key={item.id}>{item.name}</li> ))}
                </ul>
                ) : (
                <p>Loading data...</p>
            )}
        </div>
    );
};
export default MyComponent;`,
        java : `class Main {
public static void main(String[] args) {
        
    double myDouble = 3.4;
    float myFloat = 3.4F;

    // 3.445*10^2
    double myDoubleScientific = 3.445e2;

    System.out.println(myDouble);  // prints 3.4
    System.out.println(myFloat);    // prints 3.4
    System.out.println(myDoubleScientific);   // prints 344.5
}
}`,
        javascript : `// JavaScript program to find the area of a triangle

const side1 = parseInt(prompt('Enter side1: '));
const side2 = parseInt(prompt('Enter side2: '));
const side3 = parseInt(prompt('Enter side3: '));

// calculate the semi-perimeter
const s = (side1 + side2 + side3) / 2;

//calculate the area
const areaValue = Math.sqrt(
    s * (s - side1) * (s - side2) * (s - side3)
);

console.log(
    "The area of the triangle is areaValue"
);`
    }
    return (
        <Layout title="Code Generator">
            <Section className="pt-16 md:pt-20 lg:pt-24 bg-gradient-to-br from-white dark:from-slate-950 to-blue-100 dark:to-blue-950">
                <Container>
                    <div className="flex flex-col items-center justify-center flex-wrap gap-y-12  md:gap-y-16 -mb-16 md:-mb-20 lg:-mb-24 xl:-mb-28">
                        <div className="w-full md:w-9/12 lg:w-6/12">
                            <div className="text-center">
                                <ul className="pb-3 flex flex-wrap justify-center gap-3 md:gap-x-5 text-sm font-medium">
                                    <li className="rounded px-3 py-1 text-violet-600 dark:text-violet-500 bg-violet-200 dark:bg-violet-950">Personalized</li>
                                    <li className="rounded px-3 py-1 text-red-600 dark:text-red-500 bg-red-200 dark:bg-red-950">Protected</li>
                                    <li className="rounded px-3 py-1 text-green-600 dark:text-green-500 bg-green-200 dark:bg-green-950">Private</li>
                                </ul>
                                <h1 className="text-3xl/snug sm:text-4xl/snug lg:text-5xl/tight font-bold text-slate-700 dark:text-white pb-4">Type less, code more.</h1>
                                <p className="text-base/7 text-slate-600 dark:text-slate-300">Scribbler is a coding AI assistant that uses AI and a deep understanding of your codebase to help you write code faster.</p>
                                <div className="pt-6">
                                    <Link to="/app/templates/image" className="inline-flex justify-center font-medium text-sm bg-blue-600 text-white hover:bg-blue-800 transition-all px-6 py-3 rounded-md">
                                        Get Started with Code
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-7/12">
                            <div className="bg-slate-950 shadow-xl shadow-blue-200 dark:shadow-blue-950 rounded-xl relative z-10">
                                <Tab.Group
                                    selectedIndex={selectedIndex}
                                    onChange={setSelectedIndex}
                                >
                                    <Tab.List className="flex border-b border-slate-800 overflow-hidden overflow-x-auto scrollbar-thin scrollbar-track-transparent  scrollbar-thumb-slate-600">
                                        <Tab className="flex items-center px-6 py-3 text-sm text-white dark:text-slate-200 font-medium ui-selected:text-green-400 ui-selected:dark:text-green-400 -mb-[1px] border-b-2 border-b-transparent ui-selected:border-green-400 focus-visible:outline-none">
                                            <span>
                                                Python
                                            </span>
                                        </Tab>
                                        <Tab className="flex items-center px-6 py-3 text-sm text-white dark:text-slate-200 font-medium ui-selected:text-red-400 ui-selected:dark:text-red-400 -mb-[1px] border-b-2 border-b-transparent ui-selected:border-red-400 focus-visible:outline-none">
                                            <span>
                                                Java
                                            </span>
                                        </Tab>
                                        <Tab className="flex items-center px-6 py-3 text-sm text-white dark:text-slate-200 font-medium ui-selected:text-yellow-400 ui-selected:dark:text-yellow-400 -mb-[1px] border-b-2 border-b-transparent ui-selected:border-yellow-400 focus-visible:outline-none">
                                            <span>
                                                JavaScript
                                            </span>
                                        </Tab>
                                        <Tab className="flex items-center px-6 py-3 text-sm text-white dark:text-slate-200 font-medium ui-selected:text-blue-400 ui-selected:dark:text-blue-400 -mb-[1px] border-b-2 border-b-transparent ui-selected:border-blue-400 focus-visible:outline-none">
                                            <span>
                                                React
                                            </span>
                                        </Tab>
                                    </Tab.List>
                                    <Tab.Panels>
                                        <Tab.Panel>
                                            <SyntaxHighlighter language="python" className="!p-5 text-sm rounded-b-xl !bg-slate-900 overflow-x-auto scrollbar-thin scrollbar-track-transparent  scrollbar-thumb-slate-600" style={a11yDark}>
                                                {code.python}
                                            </SyntaxHighlighter>
                                        </Tab.Panel>
                                        <Tab.Panel>
                                            <SyntaxHighlighter language="javascript" className="!p-5 text-sm rounded-b-xl !bg-slate-900 overflow-x-auto scrollbar-thin scrollbar-track-transparent  scrollbar-thumb-slate-600" style={a11yDark}>
                                                {code.java}
                                            </SyntaxHighlighter>
                                        </Tab.Panel>
                                        <Tab.Panel>
                                            <SyntaxHighlighter language="javascript" className="!p-5 text-sm rounded-b-xl !bg-slate-900 overflow-x-auto scrollbar-thin scrollbar-track-transparent  scrollbar-thumb-slate-600" style={a11yDark}>
                                                {code.javascript}
                                            </SyntaxHighlighter>
                                        </Tab.Panel>
                                        <Tab.Panel>
                                            <SyntaxHighlighter language="javascript" className="!p-5 text-sm rounded-b-xl !bg-slate-900 overflow-x-auto scrollbar-thin scrollbar-track-transparent  scrollbar-thumb-slate-600" style={a11yDark}>
                                                {code.react}
                                            </SyntaxHighlighter>
                                        </Tab.Panel>
                                    </Tab.Panels>
                                </Tab.Group>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>
            <Section className="pt-32 md:pt-40 lg:pt-48 xl:pt-56 pb-2 bg-slate-50 dark:bg-slate-950 overflow-hidden">
                <Container>
                    <div className="flex flex-wrap items-center justify-center -m-4">
                        <div className="lg:w-1/3 p-4">
                            <div className="bg-white dark:bg-slate-900 p-7 border border-slate-100 dark:border-slate-900 shadow rounded-2xl">
                                <h5 className="font-bold text-xl/snug text-slate-600 dark:text-slate-200 mb-3">Get started quickly</h5>
                                <p className="text-slate-500 dark:text-slate-400 text-sm/6">Get the benefits of AI immediately. Scribbler supports all of your favorite IDEs, takes seconds to install, and is instantly aware of your code.</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 p-4">
                            <div className="bg-white dark:bg-slate-900 p-7 border border-slate-100 dark:border-slate-900 shadow rounded-2xl">
                                <h5 className="font-bold text-xl/snug text-slate-600 dark:text-slate-200 mb-3">Work on what matters</h5>
                                <p className="text-slate-500 dark:text-slate-400 text-sm/6">Let our AI assistant handle the mundane tasks and free up your time and expertise to focus on delivering innovative features and capabilities.</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 p-4">
                            <div className="bg-white dark:bg-slate-900 p-7 border border-slate-100 dark:border-slate-900 shadow rounded-2xl">
                                <h5 className="font-bold text-xl/snug text-slate-600 dark:text-slate-200 mb-3">Deliver faster</h5>
                                <p className="text-slate-500 dark:text-slate-400 text-sm/6">Scribbler speeds up your software development tasks more than 50%, accelerating software delivery and simplifying testing and maintenance.</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>
            <Section className="py-16 md:py-20 lg:py-24 xl:py-28 bg-slate-50 dark:bg-slate-950 overflow-hidden">
                <Container>
                    <div className="flex flex-wrap items-center justify-center pb-8 lg:pb-12">
                        <div className="w-full sm:w-4/5 md:w-3/5 lg:w-2/5 text-center mx-auto">
                            <h3 className="text-3xl sm:text-[2.5rem] leading-tight font-bold text-slate-700 dark:text-white mb-3">Check out what else we can do for you.</h3>
                        </div>
                    </div>
                    <div className="flex flex-col bg-white dark:bg-slate-900 shadow rounded-2xl">
                        <div className="flex flex-wrap items-center justify-center border-b border-slate-100 dark:border-slate-800 last:border-b-0 p-4 sm:p-8 lg:p-12">
                            <div className="lg:w-6/12 p-4">
                                <div className="md:px-7">
                                    {theme.mode === "dark" ? <img src="/images/landing/gfx/code-enhance-gfx-dark.png" alt="" /> : <img src="/images/landing/gfx/code-enhance-gfx.png" alt="" />}
                                </div>
                            </div>
                            <div className="lg:w-6/12 p-4">
                                <h2 className="font-bold text-2xl sm:text-3xl/snug text-slate-800 dark:text-slate-200 mb-3">How AI Can Enhance Your Performance</h2>
                                <p className="text-slate-500 dark:text-slate-400 text-base/6 sm:text-lg/7">Unlock Superior Coding: Discover AI-Driven Performance Enhancements for Today's Pro Programmer. </p>
                                <div className="pt-7 flex flex-col gap-y-4">
                                    <div className="flex gap-x-4">
                                        <CodeBracketIcon className="text-blue-500 h-6 w-6 flex-shrink-0 my-1" />
                                        <div className="">
                                            <h4 className="font-bold text-base/snug sm:text-lg/snug text-slate-600 dark:text-slate-200 mb-1">Fast API</h4>
                                            <p className="text-slate-500 dark:text-slate-400 text-base/7">A high-performance toolkit for developers</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-x-4">
                                        <SparklesIcon className="text-blue-500 h-6 w-6 flex-shrink-0 my-1" />
                                        <div className="">
                                            <h4 className="font-bold text-base/snug sm:text-lg/snug text-slate-600 dark:text-slate-200 mb-1">Quick Suggestions</h4>
                                            <p className="text-slate-500 dark:text-slate-400 text-base/7">Speed up your coding process with our quick code suggestions!</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-x-4">
                                        <HashtagIcon className="text-blue-500 h-6 w-6 flex-shrink-0 my-1" />
                                        <div className="">
                                            <h4 className="font-bold text-base/snug sm:text-lg/snug text-slate-600 dark:text-slate-200 mb-1">Intuitive User Experience</h4>
                                            <p className="text-slate-500 dark:text-slate-400 text-base/7">Navigate easily with an Intuitive User Experience designed for developers, by developers.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap items-center justify-center border-b border-slate-100 dark:border-slate-800 last:border-b-0 lg:flex-row-reverse p-4 sm:p-8 lg:p-12">
                            <div className="lg:w-6/12 p-4">
                                <div className="md:px-7">
                                    {theme.mode === "dark" ? <img src="/images/landing/gfx/code-secure-gfx-dark.png" alt="" /> : <img src="/images/landing/gfx/code-secure-gfx.png" alt="" />}
                                </div>
                            </div>
                            <div className="lg:w-6/12 p-4">
                                <h2 className="font-bold text-2xl sm:text-3xl/snug text-slate-800 dark:text-slate-200 mb-3">Get AI assistance without the risks</h2>
                                <p className="text-slate-500 dark:text-slate-400 text-base/6 sm:text-lg/7">Most secure ai code generator tool ever existed on this planet. Your prompt and codes saves with end-to-end encryption </p>
                                <div className="pt-9 flex flex-col gap-y-6">
                                    <div className="ps-5 border-s-2 border-green-400">
                                        <h4 className="font-medium text-lg/snug sm:text-xl/snug text-slate-600 dark:text-slate-200 mb-3 -mt-1">Never stores or shares your code or usage</h4>
                                        <p className="text-slate-500 dark:text-slate-400 text-base/7">We don't train on your code unless you choose to connect your codebase. When connecting your codebase to us, your code never leaves your environment and remains completely private.</p>
                                    </div>
                                    <div className="ps-5 border-s-2 border-blue-400">
                                        <h4 className="font-medium text-lg/snug sm:text-xl/snug text-slate-600 dark:text-slate-200 mb-3 -mt-1">Fully isolated deployments</h4>
                                        <p className="text-slate-500 dark:text-slate-400 text-base/7">Experience unparalleled security, privacy, and compliance by hosting Our AI assistant on your preferred environment: on-premises or virtual private cloud.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
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

export default CodeGenPage;
