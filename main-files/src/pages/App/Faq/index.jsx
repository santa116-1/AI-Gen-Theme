import React from "react";
import Layout from "../../../layout/app";
import Section from "../../../layout/global/Section";
import Container from "../../../layout/global/Container";
import {
    Accordion,
    Breadcrumbs,
    Label,
    Textarea,
    Input,
    Card,
} from "../../../components";
function FaqPage() {
    return (
        <Layout title="Faqs">
            <Section className="py-10 px-3">
                <Container>
                    <div className="mb-7 flex flex-col items-center">
                        <h2 className="text-xl font-bold text-slate-700 dark:text-white mb-2">
                            Frequently Asked Questions
                        </h2>
                        <Breadcrumbs
                            items={[
                                { text: "Home", link: "/" },
                                { text: "Faq" },
                            ]}
                        />
                    </div>
                    <div className="flex flex-wrap items-start -mx-3">
                        <div className="w-full md:w-3/5 p-3">
                            <Accordion className="flex flex-col gap-3">
                                <Accordion.Item
                                    className="bg-white dark:bg-slate-950 rounded-md border border-slate-200 dark:border-slate-800"
                                    header={
                                        "What kind of questions can I ask the chatbot?"
                                    }
                                    initialEntered
                                >
                                    <p>
                                        You can ask the chatbot any question
                                        related to our products or services.
                                        Some common questions include.
                                    </p>
                                </Accordion.Item>
                                <Accordion.Item
                                    className="bg-white dark:bg-slate-950 rounded-md border border-slate-200 dark:border-slate-800"
                                    header={
                                        "What if the chatbot can’t answer my question?"
                                    }
                                >
                                    <p>
                                        If the chatbot is unable to answer your
                                        question or provide the information you
                                        need, it will direct you to other
                                        resources such as our customer service
                                        team or website.
                                    </p>
                                </Accordion.Item>
                                <Accordion.Item
                                    className="bg-white dark:bg-slate-950 rounded-md border border-slate-200 dark:border-slate-800"
                                    header={
                                        "Are AI chatbots becoming smarter over time?"
                                    }
                                >
                                    <p>
                                    Yes, AI chatbots become smarter over time through machine learning. With continuous user interactions, they gather more data, update their models, and refine their responses, leading to continuous improvement in their performance.
                                    </p>
                                </Accordion.Item>
                                <Accordion.Item
                                    className="bg-white dark:bg-slate-950 rounded-md border border-slate-200 dark:border-slate-800"
                                    header={
                                        "How do businesses benefit from using AI chatbots?"
                                    }
                                >
                                    <p>
                                    Businesses benefit from AI chatbots in several ways, including improved customer service, cost reduction in customer support operations, increased efficiency, better lead generation, and enhanced user engagement, leading to overall improved customer satisfaction and loyalty.
                                    </p>
                                </Accordion.Item>
                                <Accordion.Item
                                    className="bg-white dark:bg-slate-950 rounded-md border border-slate-200 dark:border-slate-800"
                                    header={
                                        "What is the role of AI chatbots in personalized user experiences?"
                                    }
                                >
                                    <p>
                                    AI chatbots can play a significant role in delivering personalized user experiences. By analyzing past interactions and user data, they can tailor responses and recommendations based on individual preferences and behaviors.
                                    </p>
                                </Accordion.Item>
                                <Accordion.Item
                                    className="bg-white dark:bg-slate-950 rounded-md border border-slate-200 dark:border-slate-800"
                                    header={
                                        "Can AI chatbots understand and respond to multiple languages?"
                                    }
                                >
                                    <p>
                                    Yes, AI chatbots can be trained to understand and respond in multiple languages. However, supporting multiple languages requires extensive language data for training and may vary in performance depending on the languages involved.
                                    </p>
                                </Accordion.Item>
                                <Accordion.Item
                                    className="bg-white dark:bg-slate-950 rounded-md border border-slate-200 dark:border-slate-800"
                                    header={
                                        "Are AI chatbots capable of learning from external sources like the internet?"
                                    }
                                >
                                    <p>
                                    Some AI chatbots can be designed to learn from external sources like the internet, databases, or APIs. This approach, known as "knowledge base expansion," allows chatbots to access vast amounts of information and stay updated with the latest data relevant to their domain.
                                    </p>
                                </Accordion.Item>
                                <Accordion.Item
                                    className="bg-white dark:bg-slate-950 rounded-md border border-slate-200 dark:border-slate-800"
                                    header={
                                        "What are open-domain and closed-domain AI chatbots?"
                                    }
                                >
                                    <p>
                                    Open-domain chatbots are designed to have general conversations on a wide range of topics and can handle diverse queries. Closed-domain chatbots, on the other hand, are specialized in specific domains and excel at answering questions related to a specific topic or industry.
                                    </p>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                        <div className="w-full md:w-2/5 p-3">
                            <Card className="p-5 h-full">
                                <div className="mb-2">
                                    <h2 className="text-lg font-bold text-slate-700  dark:text-white mb-1">
                                        Drop us your question
                                    </h2>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">
                                        Please try to discribe your question as
                                        clear as possible. we will get back to
                                        you soon.
                                    </p>
                                </div>
                                <div className="py-2">
                                    <Label htmlFor="email" className="mb-2">
                                        Email Address
                                    </Label>
                                    <Input
                                        placeholder="example@email.com"
                                        id="email"
                                    />
                                </div>
                                <div className="py-2">
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
                                <div className="pt-2">
                                    <button className="inline-flex font-medium text-sm bg-blue-600 text-white hover:bg-blue-800 transition-all px-5 py-2 rounded">
                                        Submit
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

export default FaqPage;
