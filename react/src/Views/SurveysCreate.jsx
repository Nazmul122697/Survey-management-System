import { useState } from "react";
import PageComponent from "../components/PageComponent";
import { PhotoIcon } from "@heroicons/react/24/outline";

const SurveysCreate = () => {
    const [survey, setSurvey] = useState({
        title: "",
        slug: "",
        status: false,
        description: "",
        Image: null,
        Image_url: null,
        expriry_data: "",
        questions: [],
    });

    const onSubmit = () => {
        console.log("ok");
    };
    return (
        <PageComponent title="Create New Survey">
            <form action="#" onSubmit={onSubmit} method="POST">
                <div className="shadow sm:overflow-hidden sm:rounded-md">
                    <div className="px-4 py-5 space-y-6 bg-white sm:p-6">
                        {/* Image  */}
                        <div>
                            <label className="block text-sm font-medium text-gray-799">
                                Photo
                            </label>
                        </div>
                        <div className="flex items-center mt-1">
                            {survey.Image_url && (
                                <img
                                    src={survey.Image_url}
                                    alt=""
                                    className="object-cover w-32 h-32"
                                />
                            )}
                            {!survey.Image_url && (
                                <span className="flex items-center justify-center w-12 h-12 overflow-hidden text-gray-400 bg-gray-100 rounded-full">
                                    <PhotoIcon className="w-8 h-8" />{" "}
                                </span>
                            )}
                            <button
                                type="button"
                                className="relative px-3 py-2 ml-5 text-sm font-medium leading-4 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:bg-indigo-500 focus:ring-offset-2"
                            >
                                Change
                            </button>
                        </div>
                    </div>
                    {/* image  */}

                    {/* title  */}
                    <div className="col-span-6 sm:col-span-3">
                        <label
                            htmlFor="title"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Survey Title
                        </label>

                        <input
                            type="text"
                            name="title"
                            id="tile"
                            value={survey.title}
                            placeholder="Enter Survey Title"
                            className="block w-full mt-1 border-gray-300 rounded md focus:border-indigo-50 focus:ring-indigo-500 sm:text-sm"
                        />
                    </div>

                    {/* title  */}
                </div>
            </form>
        </PageComponent>
    );
};

export default SurveysCreate;
