import React from "react";
import Layout from "../../../layout/website";
import Section from "../../../layout/global/Section";
import Container from "../../../layout/global/Container";

import { Label, Button } from "../../../components";
import {AutoTabProvider} from 'react-auto-tab'

function TwoStepPage() {
    return (
        <Layout title="Two Step Verify">
            <Section className="py-10 my-auto">
                <Container>
                    <div className="flex justify-center -mx-3">
                        <div className="w-full xs:w-4/5 sm:w-3/5 md:w-1/2 lg:w-2/5 xl:w-1/3 px-3">
                            <div className="bg-white dark:bg-slate-950 rounded-lg border border-slate-200 dark:border-slate-800 w-full p-6 pt-5">
                                <div className="mb-2">
                                    <h3 className="text-xl font-bold text-slate-700 dark:text-white mb-1">
                                        Verify Email
                                    </h3>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">
                                        We sent an email to <strong>example@email.com</strong>
                                    </p>
                                </div>
                                <div className="py-2">
                                    <Label
                                        htmlFor="password"
                                        className="mb-2 justify-between w-full items-center"
                                    >
                                        Enter Code
                                        <a
                                            className="text-xs text-blue-500 hover:text-blue-700"
                                            href="#"
                                        >
                                            Resend Code
                                        </a>
                                    </Label>
                                    <AutoTabProvider className="flex gap-x-3">
                                        <input tabbable="true" className="z-10 w-full rounded-md text-sm bg-white dark:bg-slate-950 text-slate-600 dark:text-slate-200 placeholder:text-slate-400 border-slate-200 dark:border-slate-800 disabled:bg-slate-100 disabled:dark:bg-slate-900 disabled:text-slate-400 focus:border-slate-200 focus:dark:border-slate-800 focus:shadow-none focus:outline-none py-2 text-center"
                                            id="passwordCR1"
                                            maxLength={1}
                                            type="password"
                                        />
                                        <input tabbable="true" className="z-10 w-full rounded-md text-sm bg-white dark:bg-slate-950 text-slate-600 dark:text-slate-200 placeholder:text-slate-400 border-slate-200 dark:border-slate-800 disabled:bg-slate-100 disabled:dark:bg-slate-900 disabled:text-slate-400 focus:border-slate-200 focus:dark:border-slate-800 focus:shadow-none focus:outline-none py-2 text-center"
                                            id="passwordCR2"
                                            maxLength={1}
                                            type="password"
                                        />
                                        <input tabbable="true" className="z-10 w-full rounded-md text-sm bg-white dark:bg-slate-950 text-slate-600 dark:text-slate-200 placeholder:text-slate-400 border-slate-200 dark:border-slate-800 disabled:bg-slate-100 disabled:dark:bg-slate-900 disabled:text-slate-400 focus:border-slate-200 focus:dark:border-slate-800 focus:shadow-none focus:outline-none py-2 text-center"
                                            id="passwordCR3"
                                            maxLength={1}
                                            type="password"
                                        />
                                        <input tabbable="true" className="z-10 w-full rounded-md text-sm bg-white dark:bg-slate-950 text-slate-600 dark:text-slate-200 placeholder:text-slate-400 border-slate-200 dark:border-slate-800 disabled:bg-slate-100 disabled:dark:bg-slate-900 disabled:text-slate-400 focus:border-slate-200 focus:dark:border-slate-800 focus:shadow-none focus:outline-none py-2 text-center"
                                            id="passwordCR4"
                                            maxLength={1}
                                            type="password"
                                        />
                                        <input tabbable="true" className="z-10 w-full rounded-md text-sm bg-white dark:bg-slate-950 text-slate-600 dark:text-slate-200 placeholder:text-slate-400 border-slate-200 dark:border-slate-800 disabled:bg-slate-100 disabled:dark:bg-slate-900 disabled:text-slate-400 focus:border-slate-200 focus:dark:border-slate-800 focus:shadow-none focus:outline-none py-2 text-center"
                                            id="passwordCR5"
                                            maxLength={1}
                                            type="password"
                                        />
                                        <input tabbable="true" className="z-10 w-full rounded-md text-sm bg-white dark:bg-slate-950 text-slate-600 dark:text-slate-200 placeholder:text-slate-400 border-slate-200 dark:border-slate-800 disabled:bg-slate-100 disabled:dark:bg-slate-900 disabled:text-slate-400 focus:border-slate-200 focus:dark:border-slate-800 focus:shadow-none focus:outline-none py-2 text-center"
                                            id="passwordCR6"
                                            maxLength={1}
                                            type="password"
                                        />
                                    </AutoTabProvider>
                                </div>
                                <div className="pt-3">
                                    <Button
                                        block
                                        className="bg-blue-600 text-white hover:bg-blue-800"
                                    >
                                        Verify Email
                                    </Button>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>
        </Layout>
    );
}

export default TwoStepPage;
