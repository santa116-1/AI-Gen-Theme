import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../../layout/app";
import Section from "../../../layout/global/Section";
import Container from "../../../layout/global/Container";
import { Breadcrumbs, Button, Card } from "../../../components";
import { ColorPalette, Document, Message } from "../../../components/icons";
import RecentDocument from "./RecentDocument";
import UsageOverviewChart from "./UsageOverviewChart";
import TemplatesList from "./TemplatesList";

function Home() {
    return (
        <Layout title="User Dashboard">
            <Section className="py-10 px-3">
                <Container>
                    <div className="mb-7 flex justify-between items-center -mx-3">
                        <div className="px-3">
                            <h2 className="text-xl font-bold text-slate-700 dark:text-white mb-2">
                                Overview
                            </h2>
                            <Breadcrumbs
                                items={[
                                    { text: "Home", link: "/" },
                                    { text: "Phillip Burke" },
                                ]}
                            />
                        </div>
                        <div className="px-3">
                            <Button
                                as="Link"
                                to="/app/templates"
                                className="bg-blue-600 text-white hover:bg-blue-800"
                            >
                                Create New
                            </Button>
                        </div>
                    </div>
                    <div className="flex flex-wrap -m-3">
                        <div className="w-full xs:w-1/2 lg:w-1/4 p-3">
                            <div className="bg-slate-800 rounded-md border border-slate-800 p-5 h-full">
                                <div className="flex flex-col isolate relative h-full">
                                    <div className=" absolute end-0 top-0"></div>
                                    <div className="mb-auto">
                                        <h6 className="font-bold text-xl w-max bg-gradient-to-r from-blue-300 to-pink-500 text-transparent bg-clip-text">
                                            Welcome
                                        </h6>
                                        <div className="font-bold text-sm text-white mt-2">
                                            Mr. Phillip Burke
                                        </div>
                                    </div>
                                    <div className="flex gap-x-6 mt-4">
                                        <div className="">
                                            <div className="text-xs text-slate-300 mt-1">
                                                Words Available
                                            </div>
                                            <div className="text-base font-bold text-slate-100 mt-1">
                                                48,610
                                            </div>
                                        </div>
                                        <div className="">
                                            <div className="text-xs text-slate-300 mt-1">
                                                Image Credit
                                            </div>
                                            <div className="text-base font-bold text-slate-100 mt-1">
                                                1987
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full xs:w-1/2 lg:w-1/4 p-3">
                            <div className="bg-white dark:bg-slate-950 rounded-md border border-slate-200 dark:border-slate-800 p-5 h-full">
                                <div className="flex flex-col isolate relative">
                                    <div className=" absolute end-0 top-0"></div>
                                    <div className="h-16 opacity-30 -mb-8 relative -z-10">
                                        <Document />
                                    </div>
                                    <div className="mt-2 ms-1">
                                        <p className="flex items-baseline gap-x-2 -ms-0.5">
                                            <span className="text-4xl font-bold tracking-tight text-blue-500">
                                                132
                                            </span>
                                            <span className="text-sm font-semibold leading-6 tracking-wide text-slate-500 dark:text-slate-400">
                                                This Month
                                            </span>
                                        </p>
                                        <h6 className="text-md font-bold text-slate-700 dark:text-white mb-1">
                                            Document Created
                                        </h6>
                                        <Link
                                            to="/app/templates"
                                            className="font-medium text-sm text-blue-600 hover:text-blue-800"
                                        >
                                            Create Document
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full xs:w-1/2 lg:w-1/4 p-3">
                            <div className="bg-white dark:bg-slate-950 rounded-md border border-slate-200 dark:border-slate-800 p-5 h-full">
                                <div className="flex flex-col isolate relative">
                                    <div className=" absolute end-0 top-0"></div>
                                    <div className="h-16 opacity-30 -mb-8 relative -z-10">
                                        <ColorPalette />
                                    </div>
                                    <div className="mt-2 ms-1">
                                        <p className="flex items-baseline gap-x-2 -ms-0.5">
                                            <span className="text-4xl font-bold tracking-tight text-blue-500">
                                                28
                                            </span>
                                            <span className="text-sm font-semibold leading-6 tracking-wide text-slate-500 dark:text-slate-400">
                                                This Month
                                            </span>
                                        </p>
                                        <h6 className="text-md font-bold text-slate-700 dark:text-white mb-1">
                                            Image Created
                                        </h6>
                                        <Link
                                            to="/app/templates/image"
                                            className="font-medium text-sm text-blue-600 hover:text-blue-800"
                                        >
                                            Create Image
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full xs:w-1/2 lg:w-1/4 p-3">
                            <div className="bg-white dark:bg-slate-950 rounded-md border border-slate-200 dark:border-slate-800 p-5 h-full">
                                <div className="flex flex-col isolate relative">
                                    <div className=" absolute end-0 top-0">
                                        <div className="text-[11px] font-medium text-white bg-gradient-to-r from-blue-600 to-pink-500 px-2 py-0.5 rounded">
                                            Premium
                                        </div>
                                    </div>
                                    <div className="h-16 opacity-30 -mb-8 relative -z-10">
                                        <Message />
                                    </div>
                                    <div className="mt-2 ms-1">
                                        <p className="flex items-baseline gap-x-2 -ms-0.5">
                                            <span className="text-4xl font-bold tracking-tight text-blue-500">
                                                289
                                            </span>
                                            <span className="text-sm font-semibold leading-6 tracking-wide text-slate-500 dark:text-slate-400">
                                                This Month
                                            </span>
                                        </p>
                                        <h6 className="text-md font-bold text-slate-700 dark:text-white mb-1">
                                            Chat Session
                                        </h6>
                                        <Link
                                            to="/app/templates/chatbot"
                                            className="font-medium text-sm text-blue-600 hover:text-blue-800"
                                        >
                                            Chat Now
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-2/5 p-3">
                            <Card className="h-full">
                                <div className="flex flex-col isolate relative">
                                    <div className="p-5 pb-2">
                                        <h6 className="text-md font-bold text-slate-700 dark:text-white mb-1">
                                            Usage Overview
                                        </h6>
                                        <span className="block text-slate-500 dark:text-slate-400 text-[11px] font-medium">
                                            By Words per day
                                        </span>
                                    </div>
                                    <div className="h-48 w-full px-5 pb-1">
                                        <UsageOverviewChart />
                                    </div>
                                </div>
                            </Card>
                        </div>
                        <div className="w-full lg:w-3/5 p-3">
                            <RecentDocument />
                        </div>
                    </div>
                    <TemplatesList />
                </Container>
            </Section>
        </Layout>
    );
}

export default Home;
