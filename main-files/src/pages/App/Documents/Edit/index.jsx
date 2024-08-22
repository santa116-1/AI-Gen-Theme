import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ReactQuill from "react-quill";
import Layout from "../../../../layout/app";
import Section from "../../../../layout/global/Section";
import Container from "../../../../layout/global/Container";
import { Breadcrumbs, Button, Label, Input, Card } from "../../../../components";
import { documents } from "../../../../store";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

function UserEdit() {
    const { documentId } = useParams();

    const document = documents.filter(
        (document) => document.id === documentId
    )[0];

    const [content, setContent] = useState(document.content);

    return (
        <Layout title={`Edit ${document.name}`}>
            <Section className="px-3 py-6">
                <Container>
                    <div className="mb-7 flex justify-between items-center -mx-3">
                        <div className="px-3">
                            <h2 className="text-xl font-bold text-slate-700 dark:text-white mb-2">
                                Edit Document
                            </h2>
                            <Breadcrumbs
                                items={[
                                    {
                                        text: "Documents",
                                        link: "/app/documents",
                                    },
                                    { text: document.name },
                                ]}
                            />
                        </div>
                        <div className="px-3">
                            <Button
                                as="Link"
                                to="/app/documents"
                                className="bg-slate-200 text-slate-600 hover:bg-blue-600 hover:text-white"
                            >
                                <ArrowLeftIcon className="h-3" />
                                <span>Back</span>
                            </Button>
                        </div>
                    </div>

                    <Card>
                        <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800">
                            <h2 className="text-xl font-bold text-slate-700 dark:text-white">
                                <span className="text-base text-slate-400 font-normal">
                                    Edit -{" "}
                                </span>{" "}
                                {document.name}
                            </h2>
                        </div>
                        <div className="px-6 pt-5 pb-6">
                            <div className="flex flex-wrap items-center -mx-3 -my-2">
                                <div className="w-full px-3">
                                    <div className="py-2">
                                        <Label
                                            htmlFor="documentName"
                                            className="mb-2"
                                        >
                                            Document Name
                                        </Label>
                                        <Input
                                            defaultValue={document.name}
                                            id="documentName"
                                        />
                                    </div>
                                </div>
                                <div className="w-full px-3">
                                    <div className="py-3">
                                        <ReactQuill
                                            theme="snow"
                                            value={content}
                                            onChange={setContent}
                                        />
                                    </div>
                                </div>
                                <div className="w-full px-3 pb-2 pt-2">
                                    <Button className="bg-blue-600 text-white hover:bg-blue-800">
                                        Update Document
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Card>
                </Container>
            </Section>
        </Layout>
    );
}

export default UserEdit;
