import React from "react";

import Layout from "../../../layout/app";
import Section from "../../../layout/global/Section";
import Container from "../../../layout/global/Container";
import {
    BuildingOffice2Icon,
    CheckIcon,
    XMarkIcon,
} from "@heroicons/react/24/solid";
import { Breadcrumbs, Card, Label, Textarea } from "../../../components";

function PackagesPage() {
    return (
        <Layout title="Packages">
            <Section className="py-10 px-3">
                <Container>
                    <div className="mb-7 flex flex-col items-center">
                        <h2 className="text-xl font-bold text-slate-700 dark:text-white mb-2">
                            Upgrade Your Plan
                        </h2>
                        <Breadcrumbs
                            items={[
                                { text: "Home", link: "/" },
                                { text: "Packages" },
                            ]}
                        />
                    </div>
                    <div className="flex flex-wrap justify-center -m-3">
                        <div className="w-full xs:w-4/5 sm:w-1/2 xl:w-1/4 p-3">
                            <Card className="p-5 h-full">
                                <h2 className="text-xl font-bold text-slate-700 dark:text-white">
                                    Free Plan
                                </h2>
                                <p className="flex items-baseline gap-x-2 mt-2">
                                    <span className="text-4xl font-bold tracking-tight text-slate-700 dark:text-white">
                                        $0
                                    </span>
                                    <span className="text-sm font-semibold leading-6 tracking-wide text-slate-500 dark:text-slate-400">
                                        Forever
                                    </span>
                                </p>
                                <ul className="mt-4 text-slate-500 dark:text-slate-400 text-sm font-medium flex flex-col gap-y-3">
                                    <li className="flex gap-x-3">
                                        <span className="bg-emerald-100 dark:bg-emerald-950 p-1 h-5 w-5 flex-shrink-0 rounded-full">
                                            <CheckIcon className="h-3 text-emerald-600" />
                                        </span>
                                        <span>
                                            <strong className="text-slate-600 dark:text-slate-200">
                                                10+
                                            </strong>
                                            &nbsp;Copywriting Tools
                                        </span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <span className="bg-emerald-100 dark:bg-emerald-950 p-1 h-5 w-5 flex-shrink-0 rounded-full">
                                            <CheckIcon className="h-3 text-emerald-600" />
                                        </span>
                                        <span>
                                            <strong className="text-slate-600 dark:text-slate-200">
                                                2000
                                            </strong>
                                            &nbsp;Words
                                        </span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <span className="bg-emerald-100 dark:bg-emerald-950 p-1 h-5 w-5 flex-shrink-0 rounded-full">
                                            <CheckIcon className="h-3 text-emerald-600" />
                                        </span>
                                        <span>Unlimited Documents</span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <span className="bg-slate-200 dark:bg-slate-800 p-1 h-5 w-5 flex-shrink-0 rounded-full">
                                            <XMarkIcon className="h-3 text-slate-600 dark:text-slate-200" />
                                        </span>
                                        <span>32+ Languages</span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <span className="bg-slate-200 dark:bg-slate-800 p-1 h-5 w-5 flex-shrink-0 rounded-full">
                                            <XMarkIcon className="h-3 text-slate-600 dark:text-slate-200" />
                                        </span>
                                        <span>Access Newest features</span>
                                    </li>
                                </ul>
                                <div className="mt-6">
                                    <button
                                        disabled
                                        className="inline-flex font-medium text-sm text-slate-700 dark:text-slate-300 bg-slate-300 dark:bg-slate-700 transition-all px-5 py-2 rounded"
                                    >
                                        Current Package
                                    </button>
                                </div>
                            </Card>
                        </div>
                        <div className="w-full xs:w-4/5 sm:w-1/2 xl:w-1/4 p-3">
                            <Card className="p-5 h-full">
                                <h2 className="text-xl font-bold w-max bg-gradient-to-r from-blue-600 to-pink-500 text-transparent bg-clip-text">
                                    Strater Plan
                                </h2>
                                <p className="flex items-baseline gap-x-2 mt-2">
                                    <span className="text-4xl font-bold tracking-tight text-slate-700 dark:text-white">
                                        $19
                                    </span>
                                    <span className="text-sm font-semibold leading-6 tracking-wide text-slate-500 dark:text-slate-400">
                                        per Month
                                    </span>
                                </p>
                                <ul className="mt-4 text-slate-500 dark:text-slate-400 text-sm font-medium flex flex-col gap-y-3">
                                    <li className="flex gap-x-3">
                                        <span className="bg-emerald-100 dark:bg-emerald-950 p-1 h-5 w-5 flex-shrink-0 rounded-full">
                                            <CheckIcon className="h-3 text-emerald-600" />
                                        </span>
                                        <span>
                                            <strong className="text-slate-600 dark:text-slate-200">
                                                20+
                                            </strong>
                                            &nbsp;Copywriting Tools
                                        </span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <span className="bg-emerald-100 dark:bg-emerald-950 p-1 h-5 w-5 flex-shrink-0 rounded-full">
                                            <CheckIcon className="h-3 text-emerald-600" />
                                        </span>
                                        <span>
                                            <strong className="text-slate-600 dark:text-slate-200">
                                                50,000
                                            </strong>
                                            &nbsp;Words
                                        </span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <span className="bg-emerald-100 dark:bg-emerald-950 p-1 h-5 w-5 flex-shrink-0 rounded-full">
                                            <CheckIcon className="h-3 text-emerald-600" />
                                        </span>
                                        <span>Unlimited Documents</span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <span className="bg-emerald-100 dark:bg-emerald-950 p-1 h-5 w-5 flex-shrink-0 rounded-full">
                                            <CheckIcon className="h-3 text-emerald-600" />
                                        </span>
                                        <span>32+ Languages</span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <span className="bg-emerald-100 dark:bg-emerald-950 p-1 h-5 w-5 flex-shrink-0 rounded-full">
                                            <CheckIcon className="h-3 text-emerald-600" />
                                        </span>
                                        <span>Access Newest features</span>
                                    </li>
                                </ul>
                                <div className="mt-6">
                                    <button className="inline-flex font-medium text-sm bg-blue-600 text-white hover:bg-blue-800 transition-all px-5 py-2 rounded">
                                        Upgrade Package
                                    </button>
                                </div>
                            </Card>
                        </div>
                        <div className="w-full xs:w-4/5 sm:w-1/2 xl:w-1/4 p-3">
                            <Card className="p-5 h-full">
                                <h2 className="text-xl font-bold text-slate-700 dark:text-white">
                                    Premium Plan
                                </h2>
                                <p className="flex items-baseline gap-x-2 mt-2">
                                    <span className="text-4xl font-bold tracking-tight text-slate-700 dark:text-white">
                                        $39
                                    </span>
                                    <span className="text-sm font-semibold leading-6 tracking-wide text-slate-500 dark:text-slate-400">
                                        per Month
                                    </span>
                                </p>
                                <ul className="mt-4 text-slate-500 dark:text-slate-400 text-sm font-medium flex flex-col gap-y-3">
                                    <li className="flex gap-x-3">
                                        <span className="bg-emerald-100 dark:bg-emerald-950 p-1 h-5 w-5 flex-shrink-0 rounded-full">
                                            <CheckIcon className="h-3 text-emerald-600" />
                                        </span>
                                        <span>Everything From Starter</span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <span className="bg-emerald-100 dark:bg-emerald-950 p-1 h-5 w-5 flex-shrink-0 rounded-full">
                                            <CheckIcon className="h-3 text-emerald-600" />
                                        </span>
                                        <span>
                                            <strong className="text-slate-600 dark:text-slate-200">
                                                + 1,00,000
                                            </strong>
                                            &nbsp;Words
                                        </span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <span className="bg-emerald-100 dark:bg-emerald-950 p-1 h-5 w-5 flex-shrink-0 rounded-full">
                                            <CheckIcon className="h-3 text-emerald-600" />
                                        </span>
                                        <span>Editor Access</span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <span className="bg-emerald-100 dark:bg-emerald-950 p-1 h-5 w-5 flex-shrink-0 rounded-full">
                                            <CheckIcon className="h-3 text-emerald-600" />
                                        </span>
                                        <span>API Integration</span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <span className="bg-emerald-100 dark:bg-emerald-950 p-1 h-5 w-5 flex-shrink-0 rounded-full">
                                            <CheckIcon className="h-3 text-emerald-600" />
                                        </span>
                                        <span>24/7 Support assistant</span>
                                    </li>
                                </ul>
                                <div className="mt-6">
                                    <button className="inline-flex font-medium text-sm bg-blue-600 text-white hover:bg-blue-800 transition-all px-5 py-2 rounded">
                                        Upgrade Package
                                    </button>
                                </div>
                            </Card>
                        </div>
                        <div className="w-full xs:w-4/5 sm:w-1/2 xl:w-1/4 p-3">
                            <Card className="p-5 h-full">
                                <div className="text-slate-600 dark:text-slate-200 bg-slate-300 dark:bg-slate-700 h-10 w-10 p-3 rounded-full mb-3">
                                    <BuildingOffice2Icon className="h-4" />
                                </div>
                                <div className="mt-4">
                                    <Label
                                        htmlFor="package-details"
                                        className="mb-2"
                                    >
                                        Describe Your Needs
                                    </Label>
                                    <Textarea
                                        id="package-details"
                                        className="h-28"
                                    />
                                </div>
                                <p className="text-sm text-slate-500 mt-2">
                                    Our team will get back to with an custom
                                    offer as per your needs
                                </p>
                                <div className="mt-4">
                                    <button className="inline-flex font-medium text-sm bg-emerald-600 text-white hover:bg-emerald-800 transition-all px-5 py-2 rounded">
                                        Contact Us
                                    </button>
                                </div>
                            </Card>
                        </div>
                    </div>
                </Container>
            </Section>
        </Layout>
    );
}

export default PackagesPage;
