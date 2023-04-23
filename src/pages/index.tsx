// Importing required dependencies
import { GetServerSideProps } from "next";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import { getAllMediumPosts } from "@/services/medium";
import { SingleArticleData } from "@/types/articles";
import moment from "moment";

// Defining types
interface Props {
  data: SingleArticleData[];
}

// Initializing Inter font
const inter = Inter({ subsets: ["latin"] });

// Defining Home component
export default function Home({ data }: Props) {
  const router = useRouter();

  // Fetching data using react-query
  const { isLoading, error, isFetching } = useQuery({
    queryKey: ["mediumData"],
    queryFn: getAllMediumPosts,
    initialData: data,
  });

  // Handling error case
  if (error) return <div>Request Failed</div>;

  // Rendering component
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between py-8 md:p-8 ${inter.className}`}
    >
      <div className="w-full">
        {isLoading || isFetching ? (
          <p>Loading...</p>
        ) : (
          <div className="mx-4 sm:mx-0 sm:pl-16 ">
            {/* Rendering header */}
            <p className="gilroy-font text-3xl lg:text-5xl text-center lg:leading-normal text-black mb-8 font-semibold sm:ml-8 lg:ml-0">
              All Medium Posts
            </p>

            {/* Rendering articles */}
            {data && data.length > 0 ? (
              <div className="w-full ">
                {data.map((article: SingleArticleData, index: number) => {
                  return (
                    <div key={index} className="mt-8 flex items-top ">
                      <div>
                        {/* Rendering article title */}
                        <p className="text-3xl caption-text nunito-font ">
                          {article.title}
                        </p>

                        {/* Rendering article metadata */}
                        <p className="text-sm font-normal text-black nunito-font my-4">
                          {moment(article.published).format("MMM Do YY")}
                          <span
                            onClick={() =>
                              router.push(`/${article.title}`)
                            }
                            className="custom-red-text ml-4 cursor-pointer"
                          >
                            Read more
                          </span>
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              // Rendering no articles message
              <div className="w-full flex justify-center items-center ">
                <p className="text-center  md:text-3xl caption-text nunito-font">
                  No articles yet, please check back
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  );
}

// Server-side rendering
export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const data = await getAllMediumPosts();
    return { props: { data } };
  } catch (error) {
    console.log(error);
    return { props: { data: [] } };
  }
};
