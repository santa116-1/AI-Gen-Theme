import React, { useState } from "react";
import parse from 'html-react-parser';
import SimpleBar from "simplebar-react";
import Layout from "../../../../layout/app";
import Section from "../../../../layout/global/Section";
import Container from "../../../../layout/global/Container";
import { Input, Label, Select, Textarea } from "../../../../components";

import { templates } from "../../../../store";
import { language, result as resultdata } from "../../../../store";
import { NavLink, useParams } from "react-router-dom";

const tones = [
    { name: "Professional" },
    { name: "Casual" },
    { name: "Funny" },
    { name: "Excited" },
    { name: "Sarcastic" },
    { name: "Feminine" },
    { name: "Masculine" },
    { name: "Secretive" },
];

const textTemplates = templates.filter((template) => template.api === "Text");

function Writer() {

    const [selectedLanguage, setSelectedLanguage] = useState(language[40]);
    const [selectedTone, setSelectedTone] = useState(tones[0]);

    const { writerslug } = useParams();

    const template = templates.filter((template) => template.slug === writerslug)[0];

    const [result, setResult] = useState('');

    return (
        <Layout title={`${template.name}`}>
            <Section className="py-10">
                <Container>
                    <div className="flex flex-wrap gap-8 xl:flex-nowrap items-start">
                        <div className="w-full xl:w-96 bg-white dark:bg-slate-950 px-7 py-6 rounded-lg border border-slate-200 dark:border-slate-800">
                            <h4 className="text-xl font-bold mb-3 text-slate-700 dark:text-white">Templates</h4>
                            <ul className="flex flex-wrap -mx-4 xl:mx-0">
                                {textTemplates.map((item, index) => (
                                    <li key={index} className="w-full xs:w-1/2 sm:w-1/3 lg:w-1/4 xl:w-full px-4 xs:py-1 xl:px-0 xl:py-0">
                                        <NavLink
                                        onClick={ () => setResult('') }
                                            to={item.link}
                                            className={({ isActive }) =>
                                                isActive
                                                    ? "flex relative isolate before:content-[''] before:-z-10 before:rounded-md before:absolute before:inset-y-0 before:-inset-x-3 before:bg-blue-100 before:dark:bg-blue-950 text-blue-600"
                                                    : "text-slate-500 dark:text-slate-400"
                                            }
                                        >
                                            <div className="flex items-center py-2">
                                                <div className="h-5 me-3">{item.icon}</div>
                                                <span className="text-sm font-medium">
                                                    {item.name}
                                                </span>
                                            </div>
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex flex-wrap lg:flex-nowrap flex-grow-1 w-full bg-white dark:bg-slate-950 rounded-lg border border-slate-200 dark:border-slate-800 xl:max-h-[calc(100vh-theme(space.52))]">
                            <div className="w-full lg:w-2/5 border-b lg:border-e lg:border-b-0 border-slate-200 dark:border-slate-800">
                                <SimpleBar className="p-6 h-full">
                                    <div className="flex items-center pb-2">
                                        <div className="h-6 me-3">{template.icon}</div>
                                        <h5 className="text-lg font-bold text-slate-700 dark:text-white">{template.name}</h5>
                                    </div>
                                    <div className="flex flex-wrap -my-2 -mx-3">
                                        <div className="w-full py-2 px-3">
                                            <Label htmlFor="title" className="mb-2">
                                                Topic
                                            </Label>
                                            <Textarea
                                                placeholder="10 React best practices"
                                                id="title"
                                                rows="4"
                                            />
                                        </div>
                                        <div className="w-full py-2 px-3">
                                            <Label
                                                htmlFor="keywords"
                                                className="mb-2"
                                            >
                                                Keywords
                                                <span className="self-start text-xs text-slate-500 dark:text-slate-400 ms-2 mt-0.5">
                                                    Comma Seperated
                                                </span>
                                            </Label>
                                            <Input
                                                placeholder="Reactjs, Hook, Context"
                                                id="keywords"
                                            />
                                        </div>
                                        <div className="w-full sm:w-1/2 lg:w-full py-2 px-3">
                                            <Label
                                                htmlFor="language"
                                                className="mb-2"
                                            >
                                                Language
                                            </Label>
                                            <Select
                                                selected={selectedLanguage}
                                                options={language}
                                                onChange={(value) => {
                                                    setSelectedLanguage(value);
                                                }}
                                                id="language"
                                            />
                                        </div>
                                        <div className="w-full sm:w-1/2 lg:w-full py-2 px-3">
                                            <Label htmlFor="tone" className="mb-2">
                                                Writing Style
                                            </Label>
                                            <Select
                                                selected={selectedTone}
                                                options={tones}
                                                onChange={(value) => {
                                                    setSelectedTone(value);
                                                }}
                                                id="tone"
                                            />
                                        </div>
                                        <div className="w-full sm:w-1/2 lg:w-full py-2 px-3">
                                            <Label
                                                htmlFor="varient"
                                                className="mb-2"
                                            >
                                                Varients
                                                <span className="self-start text-xs text-slate-500 dark:text-slate-400 ms-2 mt-0.5">
                                                    Max 3 for demo
                                                </span>
                                            </Label>
                                            <div className="relative">
                                                <Input
                                                    id="varient"
                                                    type="number"
                                                    max="3"
                                                    defaultValue="1"
                                                />
                                            </div>
                                        </div>
                                        <div className="w-full sm:w-1/2 lg:w-full py-2 px-3">
                                            <Label
                                                htmlFor="varient"
                                                className="mb-2"
                                            >
                                                Max Results Length
                                            </Label>
                                            <div className="relative">
                                                <Input
                                                    id="resultslength"
                                                    type="number"
                                                    max="200"
                                                    defaultValue="200"
                                                />
                                            </div>
                                        </div>
                                        <div className="py-2 px-3">
                                            <button onClick={ () => setResult(resultdata.text) } className="inline-flex font-medium text-sm bg-blue-600 text-white hover:bg-blue-800 transition-all px-5 py-2 rounded-full">
                                                Generate
                                            </button>
                                        </div>
                                    </div>
                                </SimpleBar>
                            </div>
                            <div className="w-full lg:w-3/5">
                                {result ? 
                                <SimpleBar className="p-6 h-full">
                                    <div className="prose dark:prose-invert">
                                        {parse(result)}
                                    </div>
                                </SimpleBar>
                                : 
                                <div className="px-6 py-20 h-full w-full flex flex-col items-center justify-center text-center">
                                    <div className="h-16 mb-3">{template.icon}</div>
                                    <div className="text-slate-500 dark:text-slate-400 font-medium">Filling the form and hit Generate.</div>
                                </div>
                                }
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>
        </Layout>
    );
}

export default Writer;