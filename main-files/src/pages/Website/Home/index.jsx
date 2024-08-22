import React, {useRef, useEffect} from "react";
import Layout from "../../../layout/website";
import Section from "../../../layout/global/Section";
import Container from "../../../layout/global/Container";

import { Link } from "react-router-dom";

import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import { register } from 'swiper/element/bundle';

function IntroPage() {
    const swiperRef = useRef(null);
    useEffect(() => {
        register();
    
        const params = {
            spaceBetween: 24,
            autoplay: true,
            loop:true,
            speed:2000,
            breakpoints: {
                0: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
            },
        };
    
        Object.assign(swiperRef.current, params);
        swiperRef.current.initialize();
    }, []);
    return (
        <Layout title="Intro">
            <Section className="py-24 bg-gradient-to-br from-white dark:from-slate-950 to-blue-100 dark:to-blue-950 overflow-hidden">
                <Container>
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="text-sm inline-flex font-medium text-white bg-gradient-to-r from-blue-600 to-green-500 px-2 py-0.5 rounded-full mb-3"> v1.4.0 </div>
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] font-bold text-slate-800 dark:text-white">
                            <span className="block text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-blue-400 mb-3 lg:mb-6">Scribbler</span>
                            <span className="leading-loose sm:leading-relaxed md:leading-[1.4]">AI content generator <span className="text-orange-500 bg-white px-4 py-2 mx-2 text-[.8em] rounded-lg shadow-sm">Dashboard</span> and <span className="text-lime-600 bg-white px-4 py-2 mx-2 text-[.8em] rounded-lg shadow-sm whitespace-nowrap">User App</span>  React Template</span>    
                        </h1>

                        <h6 className="mt-8 text-lg inline-block font-bold rounded-full w-max bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">Created with Tailwind CSS and React</h6>
                    </div>
                    
                    <ul className="flex justify-center gap-7 mt-4 -mb-36">
                        <li className="relative z-10">
                            <Link className="p-2 bg-white flex flex-col rounded-xl text-center -rotate-12 -me-7 mt-16">
                                <img className="w-56 rounded-t-xl border border-slate-100" src="/images/preview/user/dashboard.png" alt="" />
                            </Link>
                        </li>
                        <li>
                            <Link className="p-2 bg-white flex flex-col rounded-xl text-center mt-8">
                                <img className="w-56 rounded-t-xl border border-slate-100" src="/images/preview/admin/dashboard.png" alt="" />
                            </Link>
                        </li>
                        <li className="relative z-10">
                            <Link className="p-2 bg-white flex flex-col rounded-xl text-center rotate-12 -ms-7 mt-16">
                                <img className="w-56 rounded-t-xl border border-slate-100" src="/images/preview/user/profile.png" alt="" />
                            </Link>
                        </li>
                    </ul>
                </Container>
                <div className="absolute bottom-3 sm:bottom-4 w-full flex justify-center z-10">
                    <div className="bg-white group relative shadow-2xl shadow-slate-900 rounded-full p-px text-sm/6 font-semibold text-slate-600 inline-block">
                        <span className="absolute inset-0 overflow-hidden rounded-full">
                            <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                        </span>
                        <div className="relative z-10 rounded-full bg-white py-1 px-5 ring-1 ring-white/10 ">
                           3 Bonus Landing pages Added <a className="text-blue-600" href="#LandingPage"> Check Out</a>
                        </div>
                        <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
                    </div>
                </div>
            </Section>

            <Section className="py-16 lg:py-20 bg-white dark:bg-slate-950">
                <Container>
                    <div className="pt-0">
                        <div className="flex flex-wrap items-center justify-center -m-3 md:-m-6">
                            <div className="w-full sm:w-4/5 md:w-1/2 lg:w-2/5 p-3 md:p-6">
                                <Link to="/app/templates/image" className="inline-flex">
                                    <ReactCompareSlider className="border border-slate-200 dark:border-slate-800 rounded-lg"
                                        itemOne={<ReactCompareSliderImage src="/images/preview/image-gen-blank.png" alt="Image one" />}
                                        itemTwo={<ReactCompareSliderImage src="/images/preview/image-gen.png" alt="Image two" />}
                                    />
                                </Link>
                            </div>
                            <div className="w-full sm:w-4/5 md:w-1/2 lg:w-2/5 p-3 md:p-6">
                                <div className="text-[11px] inline-flex font-medium text-white bg-gradient-to-r from-blue-600 to-pink-500 px-2 py-0.5 rounded mb-2">
                                    Image Generator
                                </div>
                                <h3 className="text-3xl sm:text-[2.5rem] md:text-3xl lg:text-[2.5rem] !leading-tight font-bold text-slate-800 dark:text-white mb-4">An awesome image generator screen</h3>
                                <p className="text-sm/loose text-slate-500 dark:text-slate-400">
                                    We deigned an awesome Canvas for your awesome AI artist to display it's creativity.
                                </p>
                                <div className="mt-5">
                                    <Link to="/app/templates/image" className="inline-flex font-medium text-sm bg-blue-600 text-white hover:bg-blue-800 transition-all px-5 py-2 rounded-full">Take a Look</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pt-12">
                        <div className="flex flex-wrap items-center justify-center md:flex-row-reverse -m-3 md:-m-6" >
                            <div className="w-full sm:w-4/5 md:w-1/2 lg:w-2/5 p-3 md:p-6">
                                <Link to="/app/templates/image-s2" className="inline-flex">
                                    <img className="border border-slate-200 dark:border-slate-800 rounded-lg" src="/images/preview/image-gen-s2.png" alt="" />
                                </Link>
                            </div>
                            <div className="w-full sm:w-4/5 md:w-1/2 lg:w-2/5 p-3 md:p-6">
                                <div className="text-[11px] inline-flex font-medium text-white bg-gradient-to-r from-yellow-600 to-violet-500 px-2 py-0.5 rounded mb-2">
                                    Added in v1.3.0
                                </div>
                                <h3 className="text-3xl sm:text-[2.5rem] md:text-3xl lg:text-[2.5rem] !leading-tight font-bold text-slate-800 dark:text-white mb-4">Another new design for Image Generator</h3>
                                <p className="text-sm/loose text-slate-500 dark:text-slate-400">
                                    A different way to show your imagination.
                                </p>
                                <div className="mt-5">
                                    <Link to="/app/templates/image-s2" className="inline-flex font-medium text-sm bg-blue-600 text-white hover:bg-blue-800 transition-all px-5 py-2 rounded-full">Check it Out</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="py-12">
                        <div className="flex flex-wrap items-center justify-center">
                            <div className="lg:w-4/5">
                                <div className="sm:w-2/3 md:w-1/2 text-center mx-auto">
                                    <h3 className="text-[2.5rem] leading-tight font-bold text-slate-800 dark:text-white mb-3">Chatbot</h3>
                                    <p className="text-sm/loose text-slate-500 dark:text-slate-400">
                                        Now let's take a look at our awesome chatbot UI. You can talk with different personalities.
                                    </p>
                                </div>
                                <div className="flex justify-center flex-wrap -m-3 pt-6">
                                    <div className="w-full sm:w-4/5 md:w-1/2 p-3">
                                        <Link to="/app/templates/chatbot" className="inline-flex ">
                                            <img className="border border-slate-200 dark:border-slate-800 rounded-lg" src="/images/preview/chatbot-start.png" alt="" />
                                        </Link>
                                    </div>
                                    <div className="md:w-1/2 p-3 max-md:hidden">
                                        <Link to="/app/templates/chatbot" className="inline-flex ">
                                            <img className="border border-slate-200 dark:border-slate-800 rounded-lg" src="/images/preview/chatbot-conv.png" alt="" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="mt-8 text-center">
                                    <Link to="/app/templates/chatbot" className="inline-flex font-medium text-sm bg-blue-600 text-white hover:bg-blue-800 transition-all px-5 py-2 rounded-full">let's Chat</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 shadow shadow-blue-200 dark:shadow-blue-900 p-6 rounded-xl sm:w-5/6 md:w-full lg:w-4/5 mx-auto">
                        <div className="md:w-3/4 xl:w-1/2 text-center mx-auto pb-6">
                            <div className="text-[11px] inline-flex font-medium text-white bg-gradient-to-r from-violet-600 to-pink-500 px-2 py-0.5 rounded mb-2">
                                Added in v1.4.0
                            </div>
                            <h3 className="text-[2.5rem] leading-tight font-bold text-slate-800 dark:text-white mb-3">Chatbot - New</h3>
                            <p className="text-sm/loose text-slate-500 dark:text-slate-400">
                                Let's see our awesome chatbot UI. You make conversation with it, generate images, create code.
                            </p>
                        </div>
                        <swiper-container init="false" ref={swiperRef} class="">
                            <swiper-slide>
                                <Link to="/app/templates/chatbot-s2" className="inline-flex ">
                                    <img className="border border-slate-200 dark:border-slate-800 rounded-lg" src="/images/preview/chatbot-s2-1.png" alt="" />
                                </Link> 
                            </swiper-slide>
                            <swiper-slide>
                                <Link to="/app/templates/chatbot-s2?id=cid02" className="inline-flex ">
                                    <img className="border border-slate-200 dark:border-slate-800 rounded-lg" src="/images/preview/chatbot-s2-2.png" alt="" />
                                </Link> 
                            </swiper-slide>
                            <swiper-slide>
                                <Link to="/app/templates/chatbot-s2?id=cid01" className="inline-flex ">
                                    <img className="border border-slate-200 dark:border-slate-800 rounded-lg" src="/images/preview/chatbot-s2-3.png" alt="" />
                                </Link> 
                            </swiper-slide>
                            <swiper-slide>
                                <Link to="/app/templates/chatbot-s2?id=cid07" className="inline-flex ">
                                    <img className="border border-slate-200 dark:border-slate-800 rounded-lg" src="/images/preview/chatbot-s2-4.png" alt="" />
                                </Link> 
                            </swiper-slide>
                        </swiper-container>

                        <div className="mt-6 text-center">
                            <Link to="/app/templates/chatbot-s2" className="inline-flex font-medium text-sm bg-blue-600 text-white hover:bg-blue-800 transition-all px-5 py-2 rounded-full">Checkout the bot</Link>
                        </div>
                    </div>
                    <div className="pt-12">
                        <div className="flex flex-wrap items-center justify-center">
                            <div className="w-full lg:w-4/5">
                                <div className="w-full md:w-3/4 lg:w-1/2 text-center mx-auto pb-8">
                                    <h3 className="text-[2.5rem] leading-tight font-bold text-slate-800 dark:text-white mb-3">Lets take a look at few more great apps</h3>
                                    <div className="flex flex-wrap justify-center gap-2">
                                        <div className="text-[11px] inline-flex font-medium text-blue-600 bg-blue-200 px-2 py-0.5 rounded mb-2">Code</div>
                                        <div className="text-[11px] inline-flex font-medium text-pink-600 bg-pink-200 px-2 py-0.5 rounded mb-2">Speech to Text</div>
                                        <div className="text-[11px] inline-flex font-medium text-green-600 bg-green-200 px-2 py-0.5 rounded mb-2">Copywriter</div>
                                    </div>
                                </div>
                                <div className="flex justify-center flex-wrap text-center -m-4">
                                    <div className="w-full sm:w-4/5 md:w-1/2 lg:w-1/3 p-4">
                                        <Link to="/app/templates/code" className="p-2 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 flex flex-col rounded-xl text-center group">
                                            <img className="h-full w-full rounded-xl border border-slate-100 group-hover:scale-[1.15] group-hover:-translate-y-3 group-hover:shadow-xl group-hover:shadow-blue-100 group-hover:dark:shadow-blue-950 transition-all duration-300" src="/images/preview/code-gen-blank.png" alt="" /> 
                                            <h6 className="text-base text-slate-600 dark:text-slate-200 font-bold pt-4 pb-2 z-10 relative">Code Generator</h6>
                                        </Link>
                                    </div>
                                    <div className="w-full sm:w-4/5 md:w-1/2 lg:w-1/3 p-4">
                                        <Link to="/app/templates/speech-to-text" className="p-2 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 flex flex-col rounded-xl text-center group">
                                            <img className="h-full w-full rounded-xl border border-slate-100 group-hover:scale-[1.15] group-hover:-translate-y-3 group-hover:shadow-xl group-hover:shadow-pink-100 group-hover:dark:shadow-pink-950 transition-all duration-300" src="/images/preview/speech-text-gen-blank.png" alt="" /> 
                                            <h6 className="text-base text-slate-600 dark:text-slate-200 font-bold pt-4 pb-2 z-10 relative">Speech to Text</h6>
                                        </Link>
                                    </div>
                                    <div className="w-full sm:w-4/5 md:w-1/2 lg:w-1/3 p-4">
                                        <Link to="/app/templates/writer/rewrite-article" className="p-2 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 flex flex-col rounded-xl text-center group">
                                            <img className="h-full w-full rounded-xl border border-slate-100 group-hover:scale-[1.15] group-hover:-translate-y-3 group-hover:shadow-xl group-hover:shadow-green-100 group-hover:dark:shadow-green-950 transition-all duration-300" src="/images/preview/copywrite-gen-blank.png" alt="" /> 
                                            <h6 className="text-base text-slate-600 dark:text-slate-200 font-bold pt-4 pb-2 z-10 relative">Copywriter</h6>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            
            <Section className="py-16 lg:py-20 bg-slate-100 dark:bg-slate-900">
                <Container>
                    <div className="flex flex-wrap items-center justify-center">
                        <div className="lg:w-4/5">
                            <div className="w-full xl:w-2/3 xxl:w-1/2 text-center mx-auto pb-8">
                                <h3 className="text-[2.5rem] leading-tight font-bold text-slate-800 dark:text-white mb-3">Also here is some more example for other useful user/frontend pages</h3>
                            </div>
                            <div className="flex flex-wrap justify-center text-center -m-4">
                                <div className="w-full sm:w-4/5 md:w-1/2 lg:w-1/3 p-4">
                                    <Link to="/app" className="p-2 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 flex flex-col rounded-xl text-center group">
                                        <img className="h-full w-full rounded-xl border border-slate-100 group-hover:scale-[1.15] group-hover:-translate-y-3 group-hover:shadow-xl group-hover:shadow-pink-100 group-hover:dark:shadow-pink-950 transition-all duration-300" src="/images/preview/user/dashboard.png" alt="" /> 
                                        <h6 className="text-base text-slate-600 dark:text-slate-200 font-bold pt-4 pb-2 z-10 relative">User Dashboard</h6>
                                    </Link>
                                </div>
                                <div className="w-full sm:w-4/5 md:w-1/2 lg:w-1/3 p-4">
                                    <Link to="/app/profile" className="p-2 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 flex flex-col rounded-xl text-center group">
                                        <img className="h-full w-full rounded-xl border border-slate-100 group-hover:scale-[1.15] group-hover:-translate-y-3 group-hover:shadow-xl group-hover:shadow-pink-100 group-hover:dark:shadow-pink-950 transition-all duration-300" src="/images/preview/user/profile.png" alt="" /> 
                                        <h6 className="text-base text-slate-600 dark:text-slate-200 font-bold pt-4 pb-2 z-10 relative">User Profile</h6>
                                    </Link>
                                </div>
                                <div className="w-full sm:w-4/5 md:w-1/2 lg:w-1/3 p-4">
                                    <Link to="/app/templates" className="p-2 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 flex flex-col rounded-xl text-center group">
                                        <img className="h-full w-full rounded-xl border border-slate-100 group-hover:scale-[1.15] group-hover:-translate-y-3 group-hover:shadow-xl group-hover:shadow-pink-100 group-hover:dark:shadow-pink-950 transition-all duration-300" src="/images/preview/user/template-list.png" alt="" /> 
                                        <h6 className="text-base text-slate-600 dark:text-slate-200 font-bold pt-4 pb-2 z-10 relative">Template List</h6>
                                    </Link>
                                </div>
                                <div className="w-full sm:w-4/5 md:w-1/2 lg:w-1/3 p-4">
                                    <Link to="/app/documents" className="p-2 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 flex flex-col rounded-xl text-center group">
                                        <img className="h-full w-full rounded-xl border border-slate-100 group-hover:scale-[1.15] group-hover:-translate-y-3 group-hover:shadow-xl group-hover:shadow-pink-100 group-hover:dark:shadow-pink-950 transition-all duration-300" src="/images/preview/user/document-list.png" alt="" /> 
                                        <h6 className="text-base text-slate-600 dark:text-slate-200 font-bold pt-4 pb-2 z-10 relative">Document List</h6>
                                    </Link>
                                </div>
                                <div className="w-full sm:w-4/5 md:w-1/2 lg:w-1/3 p-4">
                                    <Link to="/app/documents/edit/01" className="p-2 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 flex flex-col rounded-xl text-center group">
                                        <img className="h-full w-full rounded-xl border border-slate-100 group-hover:scale-[1.15] group-hover:-translate-y-3 group-hover:shadow-xl group-hover:shadow-pink-100 group-hover:dark:shadow-pink-950 transition-all duration-300" src="/images/preview/user/document-edit.png" alt="" /> 
                                        <h6 className="text-base text-slate-600 dark:text-slate-200 font-bold pt-4 pb-2 z-10 relative">Document Edit</h6>
                                    </Link>
                                </div>
                                <div className="w-full sm:w-4/5 md:w-1/2 lg:w-1/3 p-4">
                                    <Link to="/app/packages" className="p-2 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 flex flex-col rounded-xl text-center group">
                                        <img className="h-full w-full rounded-xl border border-slate-100 group-hover:scale-[1.15] group-hover:-translate-y-3 group-hover:shadow-xl group-hover:shadow-pink-100 group-hover:dark:shadow-pink-950 transition-all duration-300" src="/images/preview/user/pricing-table.png" alt="" /> 
                                        <h6 className="text-base text-slate-600 dark:text-slate-200 font-bold pt-4 pb-2 z-10 relative">Pricing Table</h6>
                                    </Link>
                                </div>
                                <div className="w-full sm:w-4/5 md:w-1/2 lg:w-1/3 p-4">
                                    <Link to="/app/faq" className="p-2 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 flex flex-col rounded-xl text-center group">
                                        <img className="h-full w-full rounded-xl border border-slate-100 group-hover:scale-[1.15] group-hover:-translate-y-3 group-hover:shadow-xl group-hover:shadow-pink-100 group-hover:dark:shadow-pink-950 transition-all duration-300" src="/images/preview/user/faq.png" alt="" /> 
                                        <h6 className="text-base text-slate-600 dark:text-slate-200 font-bold pt-4 pb-2 z-10 relative">Faq</h6>
                                    </Link>
                                </div>
                                <div className="w-full sm:w-4/5 md:w-1/2 lg:w-1/3 p-4">
                                    <Link to="/404" className="p-2 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 flex flex-col rounded-xl text-center group">
                                        <img className="h-full w-full rounded-xl border border-slate-100 group-hover:scale-[1.15] group-hover:-translate-y-3 group-hover:shadow-xl group-hover:shadow-pink-100 group-hover:dark:shadow-pink-950 transition-all duration-300" src="/images/preview/user/404-page.png" alt="" /> 
                                        <h6 className="text-base text-slate-600 dark:text-slate-200 font-bold pt-4 pb-2 z-10 relative">Error 404</h6>
                                    </Link>
                                </div>
                                <div className="w-full sm:w-4/5 md:w-1/2 lg:w-1/3 p-4">
                                    <Link to="/login" className="p-2 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 flex flex-col rounded-xl text-center group">
                                        <img className="h-full w-full rounded-xl border border-slate-100 group-hover:scale-[1.15] group-hover:-translate-y-3 group-hover:shadow-xl group-hover:shadow-pink-100 group-hover:dark:shadow-pink-950 transition-all duration-300" src="/images/preview/user/login.png" alt="" /> 
                                        <h6 className="text-base text-slate-600 dark:text-slate-200 font-bold pt-4 pb-2 z-10 relative">Login</h6>
                                    </Link>
                                </div>
                                <div className="w-full sm:w-4/5 md:w-1/2 lg:w-1/3 p-4">
                                    <Link to="/create-account" className="p-2 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 flex flex-col rounded-xl text-center group">
                                        <img className="h-full w-full rounded-xl border border-slate-100 group-hover:scale-[1.15] group-hover:-translate-y-3 group-hover:shadow-xl group-hover:shadow-pink-100 group-hover:dark:shadow-pink-950 transition-all duration-300" src="/images/preview/user/create-account.png" alt="" /> 
                                        <h6 className="text-base text-slate-600 dark:text-slate-200 font-bold pt-4 pb-2 z-10 relative">Create Account</h6>
                                    </Link>
                                </div>
                                <div className="w-full sm:w-4/5 md:w-1/2 lg:w-1/3 p-4">
                                    <Link to="/create-account" className="p-2 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 flex flex-col rounded-xl text-center group">
                                        <img className="h-full w-full rounded-xl border border-slate-100 group-hover:scale-[1.15] group-hover:-translate-y-3 group-hover:shadow-xl group-hover:shadow-pink-100 group-hover:dark:shadow-pink-950 transition-all duration-300" src="/images/preview/user/two-step-verify.png" alt="" /> 
                                        <h6 className="text-base text-slate-600 dark:text-slate-200 font-bold pt-4 pb-2 z-10 relative">Two Step Verify</h6>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            <Section className="py-16 lg:py-20  bg-white dark:bg-slate-950">
                <Container>
                    <div className="flex flex-wrap items-center justify-center">
                        <div className="lg:w-4/5">
                            <div className="sm:w-1/2 text-center mx-auto pb-8">
                                <h6 className="text-sm font-bold text-blue-400 mb-3">Admin Pages</h6>
                                <h2 className="text-3xl font-bold text-slate-800 dark:text-white">
                                    Everything you need to manage your app.
                                </h2>
                            </div>
                            <div className="flex flex-wrap justify-center text-center -m-4">
                                <div className="w-full sm:w-4/5 md:w-1/2 lg:w-1/3 p-4">
                                    <Link to="/admin" className="p-2 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 flex flex-col rounded-xl text-center group">
                                        <img className="h-full w-full rounded-xl border border-slate-100 group-hover:scale-[1.15] group-hover:-translate-y-3 group-hover:shadow-xl group-hover:shadow-blue-100 group-hover:dark:shadow-blue-950 transition-all duration-300" src="/images/preview/admin/dashboard.png" alt="" /> 
                                        <h6 className="text-base text-slate-600 dark:text-slate-200 font-bold pt-4 pb-2 z-10 relative">Dashboard</h6>
                                    </Link>
                                </div>
                                <div className="w-full sm:w-4/5 md:w-1/2 lg:w-1/3 p-4">
                                    <Link to="/admin/template-manager" className="p-2 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 flex flex-col rounded-xl text-center group">
                                        <img className="h-full w-full rounded-xl border border-slate-100 group-hover:scale-[1.15] group-hover:-translate-y-3 group-hover:shadow-xl group-hover:shadow-blue-100 group-hover:dark:shadow-blue-950 transition-all duration-300" src="/images/preview/admin/template-manager.png" alt="" /> 
                                        <h6 className="text-base text-slate-600 dark:text-slate-200 font-bold pt-4 pb-2 z-10 relative">Template Manager</h6>
                                    </Link>
                                </div>
                                <div className="w-full sm:w-4/5 md:w-1/2 lg:w-1/3 p-4">
                                    <Link to="/admin/template-manager/edit/01" className="p-2 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 flex flex-col rounded-xl text-center group">
                                        <img className="h-full w-full rounded-xl border border-slate-100 group-hover:scale-[1.15] group-hover:-translate-y-3 group-hover:shadow-xl group-hover:shadow-blue-100 group-hover:dark:shadow-blue-950 transition-all duration-300" src="/images/preview/admin/template-edit.png" alt="" /> 
                                        <h6 className="text-base text-slate-600 dark:text-slate-200 font-bold pt-4 pb-2 z-10 relative">Template Edit</h6>
                                    </Link>
                                </div>
                                <div className="w-full sm:w-4/5 md:w-1/2 lg:w-1/3 p-4">
                                    <Link to="/admin/package-manager" className="p-2 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 flex flex-col rounded-xl text-center group">
                                        <img className="h-full w-full rounded-xl border border-slate-100 group-hover:scale-[1.15] group-hover:-translate-y-3 group-hover:shadow-xl group-hover:shadow-blue-100 group-hover:dark:shadow-blue-950 transition-all duration-300" src="/images/preview/admin/package-manage.png" alt="" /> 
                                        <h6 className="text-base text-slate-600 dark:text-slate-200 font-bold pt-4 pb-2 z-10 relative">Package Manager</h6>
                                    </Link>
                                </div>
                                <div className="w-full sm:w-4/5 md:w-1/2 lg:w-1/3 p-4">
                                    <Link to="/admin/package-manager/edit/pid1" className="p-2 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 flex flex-col rounded-xl text-center group">
                                        <img className="h-full w-full rounded-xl border border-slate-100 group-hover:scale-[1.15] group-hover:-translate-y-3 group-hover:shadow-xl group-hover:shadow-blue-100 group-hover:dark:shadow-blue-950 transition-all duration-300" src="/images/preview/admin/package-edit.png" alt="" /> 
                                        <h6 className="text-base text-slate-600 dark:text-slate-200 font-bold pt-4 pb-2 z-10 relative">Package Edit</h6>
                                    </Link>
                                </div>
                                <div className="w-full sm:w-4/5 md:w-1/2 lg:w-1/3 p-4">
                                    <Link to="/admin/coupons" className="p-2 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 flex flex-col rounded-xl text-center group">
                                        <img className="h-full w-full rounded-xl border border-slate-100 group-hover:scale-[1.15] group-hover:-translate-y-3 group-hover:shadow-xl group-hover:shadow-blue-100 group-hover:dark:shadow-blue-950 transition-all duration-300" src="/images/preview/admin/coupon-list.png" alt="" /> 
                                        <h6 className="text-base text-slate-600 dark:text-slate-200 font-bold pt-4 pb-2 z-10 relative">Coupon Manager</h6>
                                    </Link>
                                </div>
                                <div className="w-full sm:w-4/5 md:w-1/2 lg:w-1/3 p-4">
                                    <Link to="/admin/coupons/edit/cid1" className="p-2 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 flex flex-col rounded-xl text-center group">
                                        <img className="h-full w-full rounded-xl border border-slate-100 group-hover:scale-[1.15] group-hover:-translate-y-3 group-hover:shadow-xl group-hover:shadow-blue-100 group-hover:dark:shadow-blue-950 transition-all duration-300" src="/images/preview/admin/coupon-edit.png" alt="" /> 
                                        <h6 className="text-base text-slate-600 dark:text-slate-200 font-bold pt-4 pb-2 z-10 relative">Coupon Edit</h6>
                                    </Link>
                                </div>
                                <div className="w-full sm:w-4/5 md:w-1/2 lg:w-1/3 p-4">
                                    <Link to="/admin/users" className="p-2 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 flex flex-col rounded-xl text-center group">
                                        <img className="h-full w-full rounded-xl border border-slate-100 group-hover:scale-[1.15] group-hover:-translate-y-3 group-hover:shadow-xl group-hover:shadow-blue-100 group-hover:dark:shadow-blue-950 transition-all duration-300" src="/images/preview/admin/user-list.png" alt="" /> 
                                        <h6 className="text-base text-slate-600 dark:text-slate-200 font-bold pt-4 pb-2 z-10 relative">User Manager</h6>
                                    </Link>
                                </div>
                                <div className="w-full sm:w-4/5 md:w-1/2 lg:w-1/3 p-4">
                                    <Link to="/admin/users/edit/uid1" className="p-2 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 flex flex-col rounded-xl text-center group">
                                        <img className="h-full w-full rounded-xl border border-slate-100 group-hover:scale-[1.15] group-hover:-translate-y-3 group-hover:shadow-xl group-hover:shadow-blue-100 group-hover:dark:shadow-blue-950 transition-all duration-300" src="/images/preview/admin/user-edit.png" alt="" /> 
                                        <h6 className="text-base text-slate-600 dark:text-slate-200 font-bold pt-4 pb-2 z-10 relative">User Edit</h6>
                                    </Link>
                                </div>
                                <div className="w-full sm:w-4/5 md:w-1/2 lg:w-1/3 p-4">
                                    <Link to="/admin/transactions" className="p-2 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 flex flex-col rounded-xl text-center group">
                                        <img className="h-full w-full rounded-xl border border-slate-100 group-hover:scale-[1.15] group-hover:-translate-y-3 group-hover:shadow-xl group-hover:shadow-blue-100 group-hover:dark:shadow-blue-950 transition-all duration-300" src="/images/preview/admin/transaction-list.png" alt="" /> 
                                        <h6 className="text-base text-slate-600 dark:text-slate-200 font-bold pt-4 pb-2 z-10 relative">Transaction List</h6>
                                    </Link>
                                </div>
                                <div className="w-full sm:w-4/5 md:w-1/2 lg:w-1/3 p-4">
                                    <Link to="/admin/support" className="p-2 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 flex flex-col rounded-xl text-center group">
                                        <img className="h-full w-full rounded-xl border border-slate-100 group-hover:scale-[1.15] group-hover:-translate-y-3 group-hover:shadow-xl group-hover:shadow-blue-100 group-hover:dark:shadow-blue-950 transition-all duration-300" src="/images/preview/admin/support-list.png" alt="" /> 
                                        <h6 className="text-base text-slate-600 dark:text-slate-200 font-bold pt-4 pb-2 z-10 relative">Support Tickets</h6>
                                    </Link>
                                </div>
                                <div className="w-full sm:w-4/5 md:w-1/2 lg:w-1/3 p-4">
                                    <Link to="/admin/addons" className="p-2 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 flex flex-col rounded-xl text-center group">
                                        <img className="h-full w-full rounded-xl border border-slate-100 group-hover:scale-[1.15] group-hover:-translate-y-3 group-hover:shadow-xl group-hover:shadow-blue-100 group-hover:dark:shadow-blue-950 transition-all duration-300" src="/images/preview/admin/addons-list.png" alt="" /> 
                                        <h6 className="text-base text-slate-600 dark:text-slate-200 font-bold pt-4 pb-2 z-10 relative">Addons</h6>
                                    </Link>
                                </div>
                                <div className="w-full sm:w-4/5 md:w-1/2 lg:w-1/3 p-4">
                                    <Link to="/admin/settings" className="p-2 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 flex flex-col rounded-xl text-center group">
                                        <img className="h-full w-full rounded-xl border border-slate-100 group-hover:scale-[1.15] group-hover:-translate-y-3 group-hover:shadow-xl group-hover:shadow-blue-100 group-hover:dark:shadow-blue-950 transition-all duration-300" src="/images/preview/admin/general-settings.png" alt="" /> 
                                        <h6 className="text-base text-slate-600 dark:text-slate-200 font-bold pt-4 pb-2 z-10 relative">General Settings</h6>
                                    </Link>
                                </div>
                                <div className="w-full sm:w-4/5 md:w-1/2 lg:w-1/3 p-4">
                                    <Link to="/admin/settings/users" className="p-2 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 flex flex-col rounded-xl text-center group">
                                        <img className="h-full w-full rounded-xl border border-slate-100 group-hover:scale-[1.15] group-hover:-translate-y-3 group-hover:shadow-xl group-hover:shadow-blue-100 group-hover:dark:shadow-blue-950 transition-all duration-300" src="/images/preview/admin/user-settings.png" alt="" /> 
                                        <h6 className="text-base text-slate-600 dark:text-slate-200 font-bold pt-4 pb-2 z-10 relative">User Settings</h6>
                                    </Link>
                                </div>
                                <div className="w-full sm:w-4/5 md:w-1/2 lg:w-1/3 p-4">
                                    <Link to="/admin/settings/payment" className="p-2 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 flex flex-col rounded-xl text-center group">
                                        <img className="h-full w-full rounded-xl border border-slate-100 group-hover:scale-[1.15] group-hover:-translate-y-3 group-hover:shadow-xl group-hover:shadow-blue-100 group-hover:dark:shadow-blue-950 transition-all duration-300" src="/images/preview/admin/payment-settings.png" alt="" /> 
                                        <h6 className="text-base text-slate-600 dark:text-slate-200 font-bold pt-4 pb-2 z-10 relative">Payment Settings</h6>
                                    </Link>
                                </div>
                                <div className="w-full sm:w-4/5 md:w-1/2 lg:w-1/3 p-4">
                                    <Link to="/admin/settings/notifications" className="p-2 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 flex flex-col rounded-xl text-center group">
                                        <img className="h-full w-full rounded-xl border border-slate-100 group-hover:scale-[1.15] group-hover:-translate-y-3 group-hover:shadow-xl group-hover:shadow-blue-100 group-hover:dark:shadow-blue-950 transition-all duration-300" src="/images/preview/admin/notification-settings.png" alt="" /> 
                                        <h6 className="text-base text-slate-600 dark:text-slate-200 font-bold pt-4 pb-2 z-10 relative">Notification Settings</h6>
                                    </Link>
                                </div>
                                <div className="w-full sm:w-4/5 md:w-1/2 lg:w-1/3 p-4">
                                    <Link to="/admin/settings/social-networks" className="p-2 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 flex flex-col rounded-xl text-center group">
                                        <img className="h-full w-full rounded-xl border border-slate-100 group-hover:scale-[1.15] group-hover:-translate-y-3 group-hover:shadow-xl group-hover:shadow-blue-100 group-hover:dark:shadow-blue-950 transition-all duration-300" src="/images/preview/admin/social-network-list.png" alt="" /> 
                                        <h6 className="text-base text-slate-600 dark:text-slate-200 font-bold pt-4 pb-2 z-10 relative">Social Network List</h6>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            <Section className="pt-16 lg:pt-20 bg-slate-100 dark:bg-slate-900" id="LandingPage">
                <Container>
                    <div className="flex flex-wrap items-center justify-center">
                        <div className="w-full lg:w-4/5">
                            <div className="w-full md:w-3/4 lg:w-1/2 text-center mx-auto pb-8">
                                <div className="text-[11px] inline-flex font-medium text-white bg-gradient-to-r from-green-600 to-pink-500 px-2 py-0.5 rounded-full mb-2"> New v1.2.0 </div>
                                <h3 className="text-[2.5rem] leading-tight font-bold text-slate-800 dark:text-white mb-3">Landing Pages</h3>
                            </div>
                            <div className="flex justify-center flex-wrap text-center -m-4">
                                <div className="w-full sm:w-4/5 md:w-1/2 lg:w-1/3 p-4">
                                    <Link to="/landing-text-image" className="relative p-2 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 flex flex-col rounded-xl text-center group">
                                        <img className="h-full w-full rounded-xl border border-slate-100 group-hover:scale-[1.15] group-hover:-translate-y-3 group-hover:shadow-xl group-hover:shadow-blue-100 group-hover:dark:shadow-blue-950 transition-all duration-300" src="/images/preview/landing/image-gen-1.png" alt="" /> 
                                        <h6 className="text-base text-slate-600 dark:text-slate-200 font-bold pt-4 pb-2 z-10 relative">Image Generator</h6>
                                    </Link>
                                </div>
                                <div className="w-full sm:w-4/5 md:w-1/2 lg:w-1/3 p-4">
                                    <Link to="/landing-text-code" className="relative p-2 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 flex flex-col rounded-xl text-center group">
                                        <img className="h-full w-full rounded-xl border border-slate-100 group-hover:scale-[1.15] group-hover:-translate-y-3 group-hover:shadow-xl group-hover:shadow-pink-100 group-hover:dark:shadow-pink-950 transition-all duration-300" src="/images/preview/landing/code-gen-1.png" alt="" /> 
                                        <h6 className="text-base text-slate-600 dark:text-slate-200 font-bold pt-4 pb-2 z-10 relative">Code Generator</h6>
                                    </Link>
                                </div>
                                <div className="w-full sm:w-4/5 md:w-1/2 lg:w-1/3 p-4">
                                    <Link to="/landing-prompt-text" className="relative p-2 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 flex flex-col rounded-xl text-center group">
                                        <div className="absolute top-5 end-5 z-10 text-[11px] inline-flex font-medium text-white bg-gradient-to-r from-yellow-600 to-violet-500 px-2 py-0.5 rounded group-hover:translate-x-4 group-hover:-translate-y-4 transition-all duration-300"> Added in v1.3.0 </div>
                                        <img className="h-full w-full rounded-xl border border-slate-100 group-hover:scale-[1.15] group-hover:-translate-y-3 group-hover:shadow-xl group-hover:shadow-green-100 group-hover:dark:shadow-green-950 transition-all duration-300" src="/images/preview/landing/text-gen-1.png" alt="" /> 
                                        <h6 className="text-base text-slate-600 dark:text-slate-200 font-bold pt-4 pb-2 z-10 relative">Text Generator</h6>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>
            <Section className="py-16 lg:py-20 bg-slate-100 dark:bg-slate-900">
                <Container>
                    <div className="flex flex-wrap items-center justify-center">
                        <div className="w-full lg:w-4/5">
                            <div className="w-full md:w-3/4 lg:w-1/2 text-center mx-auto pb-8">
                                <div className="text-[11px] inline-flex font-medium text-white bg-gradient-to-r from-yellow-600 to-violet-500 px-2 py-0.5 rounded-full mb-2"> New v1.3.0 </div>
                                <h3 className="text-[2.5rem] leading-tight font-bold text-slate-800 dark:text-white mb-3">Inner Pages</h3>
                            </div>
                            <div className="flex justify-center flex-wrap text-center -m-4">
                                <div className="w-full sm:w-4/5 md:w-1/2 lg:w-1/3 p-4">
                                    <Link to="/about" className="relative p-2 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 flex flex-col rounded-xl text-center group">
                                        <img className="h-full w-full rounded-xl border border-slate-100 group-hover:scale-[1.15] group-hover:-translate-y-3 group-hover:shadow-xl group-hover:shadow-blue-100 group-hover:dark:shadow-blue-950 transition-all duration-300" src="/images/preview/inner/about-us.png" alt="" /> 
                                        <h6 className="text-base text-slate-600 dark:text-slate-200 font-bold pt-4 pb-2 z-10 relative">About Us</h6>
                                    </Link>
                                </div>
                                <div className="w-full sm:w-4/5 md:w-1/2 lg:w-1/3 p-4">
                                    <Link to="/pricing" className="relative p-2 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 flex flex-col rounded-xl text-center group">
                                        <img className="h-full w-full rounded-xl border border-slate-100 group-hover:scale-[1.15] group-hover:-translate-y-3 group-hover:shadow-xl group-hover:shadow-pink-100 group-hover:dark:shadow-pink-950 transition-all duration-300" src="/images/preview/inner/pricing.png" alt="" /> 
                                        <h6 className="text-base text-slate-600 dark:text-slate-200 font-bold pt-4 pb-2 z-10 relative">Pricing</h6>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            <Section className="bg-slate-100 dark:bg-slate-900 overflow-hidden">
                <Container>
                    <div className="relative bg-gradient-to-b from-slate-100 to-white dark:from-slate-900 dark:to-slate-950 border border-b-0 border-gray-200 dark:border-gray-800 rounded-t-xl p-6 sm:p-10">
                        <div className="max-w-3xl mx-auto text-center">
                            <h1 className="text-[2.5rem] font-bold text-slate-800 dark:text-white">
                                <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] xl:text-5xl !leading-snug text-slate-800 dark:text-white mb-6">Build your AI Content <span className="text-cyan-500">Generator Application</span> with a beautiful UI.</span>
                            </h1>
                            <div className="flex justify-center flex-wrap gap-3 sm:gap-5 sm:pt-2">
                                <div className="relative">
                                    <Link
                                        to="/app" 
                                        className="peer inline-flex font-medium text-sm bg-orange-600 text-white hover:bg-orange-800 transition-all px-5 py-2 rounded-full"
                                    >
                                        Preview App
                                    </Link>
                                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 -translate-y-3 w-52 p-2 mb-2 bg-white dark:bg-slate-950 rounded-md shadow-md shadow-orange-100 dark:shadow-orange-950 opacity-0 peer-hover:opacity-100 peer-hover:translate-y-0 transition-all duration-500 invisible peer-hover:visible">
                                        <img className="rounded-md border border-slate-100" src="/images/preview/user/dashboard.png" alt="" />
                                        <h6 className="text-base text-slate-600 dark:text-slate-200 font-bold pt-4 pb-2 z-10 relative">App Dashboard</h6>
                                    </div>
                                </div>
                                <div className="relative">
                                    <Link
                                        to="/admin" 
                                        className="peer inline-flex font-medium text-sm bg-green-600 text-white hover:bg-green-800 transition-all px-5 py-2 rounded-full"
                                    >
                                        Preview Admin
                                    </Link>
                                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 -translate-y-3 w-52 p-2 mb-2 bg-white dark:bg-slate-950 rounded-md shadow-md shadow-green-100 dark:shadow-green-950 opacity-0 peer-hover:opacity-100 peer-hover:translate-y-0 transition-all duration-500 invisible peer-hover:visible">
                                        <img className="rounded-md border border-slate-100" src="/images/preview/admin/dashboard.png" alt="" />
                                        <h6 className="text-base text-slate-600 dark:text-slate-200 font-bold pt-4 pb-2 z-10 relative">Admin Dashboard</h6>
                                    </div>
                                </div>
                                <div className="relative">
                                    <a
                                        href="https://themeforest.net/item/scribblerai-ai-content-generator-dashboard-and-user-app-react-template/50114420" target="_blank"
                                        className="peer inline-flex font-medium text-sm bg-blue-600 text-white hover:bg-blue-800 transition-all px-5 py-2 rounded-full"
                                    >
                                        Purchase Now
                                    </a>
                                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 -translate-y-3 w-52 p-4 mb-2 bg-white dark:bg-slate-950 rounded-md shadow-md shadow-blue-100 dark:shadow-blue-950 opacity-0 peer-hover:opacity-100 peer-hover:translate-y-0 transition-all duration-300 invisible peer-hover:visible">
                                        <h6 className="text-base text-slate-600 dark:text-slate-200 font-bold z-10 relative">Buy This Awesome Template for <span className="text-emerald-500">Only $20</span></h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>
        </Layout>
    );
}

export default IntroPage;
