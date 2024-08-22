import React from "react";
import Layout from "../../../layout/website";
import Section from "../../../layout/global/Section";
import Container from "../../../layout/global/Container";

import { Label, Input, Button } from "../../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";

function LoginPage() {
    return (
        <Layout title="Login">
            <Section className="py-10 my-auto">
                <Container>
                    <div className="flex justify-center -mx-3">
                        <div className="w-full xs:w-4/5 sm:w-3/5 md:w-1/2 lg:w-2/5 xl:w-1/3 px-3">
                            <div className="bg-white dark:bg-slate-950 rounded-lg border border-slate-200 dark:border-slate-800 w-full p-6 pt-5">
                                <div className="mb-2">
                                    <h3 className="text-xl font-bold text-slate-700 dark:text-white mb-1">
                                        Login
                                    </h3>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">
                                        With valid credentials
                                    </p>
                                </div>
                                <div className="py-2">
                                    <Label
                                        htmlFor="emial-address"
                                        className="mb-2"
                                    >
                                        Email Address
                                    </Label>
                                    <Input
                                        placeholder="example@email.com"
                                        id="emial-address"
                                    />
                                </div>
                                <div className="py-2">
                                    <Label
                                        htmlFor="password"
                                        className="mb-2 justify-between w-full items-center"
                                    >
                                        Password
                                        <a
                                            className="text-xs text-blue-500 hover:text-blue-700"
                                            href="#"
                                        >
                                            Forgot
                                        </a>
                                    </Label>
                                    <Input
                                        defaultValue="123456"
                                        id="password"
                                        type="password"
                                    />
                                </div>
                                <div className="pt-3">
                                    <Button
                                        block
                                        className="bg-blue-600 text-white hover:bg-blue-800"
                                    >
                                        Account Login
                                    </Button>
                                </div>
                                <div className="mt-5 mb-4">
                                    <h6 className="text-slate-400 text-[11px] uppercase text-center font-bold tracking-wider">
                                        Login With
                                    </h6>
                                </div>
                                <div className="flex flex-wrap -mx-3">
                                    <div className="w-1/2 px-3">
                                        <Button
                                            block
                                            className="bg-white dark:bg-slate-950 text-slate-600 dark:text-slate-200 hover:bg-blue-100 hover:dark:bg-blue-950 hover:text-blue-600 hover:dark:text-blue-600 border border-slate-200 dark:border-slate-800 hover:dark:border-blue-950"
                                        >
                                            <FontAwesomeIcon icon={faGoogle} />
                                            <span>Google</span>
                                        </Button>
                                    </div>
                                    <div className="w-1/2 px-3">
                                        <Button
                                            block
                                            className="bg-white dark:bg-slate-950 text-slate-600 dark:text-slate-200 hover:bg-blue-100 hover:dark:bg-blue-950 hover:text-blue-600 hover:dark:text-blue-600 border border-slate-200 dark:border-slate-800 hover:dark:border-blue-950"
                                        >
                                            <FontAwesomeIcon
                                                icon={faFacebookF}
                                            />
                                            <span>Facebook</span>
                                        </Button>
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

export default LoginPage;
