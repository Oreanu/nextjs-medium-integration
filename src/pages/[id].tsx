import React from "react";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { Inter } from "next/font/google";
import emoji from "node-emoji";
import parser from "html-react-parser";
import moment from "moment";
import { NextPage } from "next";
import { getAllMediumPosts } from "@/services/medium";
import { SingleArticleData } from "@/types/articles";

// Defining the expected props of the component
interface Props {
  article: SingleArticleData;
}

// Initializing Inter font
const inter = Inter({ subsets: ["latin"] });

// Defining the article page component
const ArticlePage: NextPage<Props> = ({ article }) => {
  // Getting the current path using useRouter hook
  const { asPath } = useRouter();

  // If the article is not found, return a "Request Failed" message
  if (!article) return <div>Request Failed</div>;

  // Render the article
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between py-8 md:p-8 ${inter.className}`}
    >
      <div className="min-h-screen">
        <div className="mx-auto max-w-2xl px-6 py-12">
          <h1 className="text-5xl font-bold text-black mb-6">
            {article.title || "--"}
          </h1>
          <p className="text-sm text-black">
            {moment(article.published).format("MMM Do, YYYY")}
          </p>
          <hr className="my-6" />
          <div className="text-lg text-black leading-relaxed">
            {parser(
              emoji.emojify(
                article.content.replace(
                  /<a/g,
                  '<a class="underline text-blue-600" '
                )
              ) || "--"
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

// Define a function to fetch the article from the server-side
export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const { params } = context;

  // If the article ID is not provided, return a 404 page
  if (!params || !params.id) {
    return { notFound: true };
  }

  // Extract the article ID from the context params
  const { id } = params;

  try {
    // Fetch all Medium posts
    const articles = await getAllMediumPosts();
    // Find the article with the matching title
    const article = articles.find((a: SingleArticleData) => a.title === id);

    // If the article is not found, return a 404 page
    if (!article) {
      return { notFound: true };
    }
    // Return the article as a prop
    return { props: { article } };
  } catch (error) {
    // If an error occurs during the fetching process, log the error and return a 404 page
    console.error(error);
    return { notFound: true };
  }
};

export default ArticlePage;
