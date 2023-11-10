import { useState } from "react";
import PageComponent from "../components/PageComponent";
import { PhotoIcon } from "@heroicons/react/24/outline";
import TButton from "../components/core/TButton";

const SurveysCreate = () => {
    const [survey, setSurvey] = useState({
        title: "",
        slug: "",
        status: false,
        description: "",
        Image: null,
        Image_url: null,
        expriry_date: "",
        questions: [],
    });

    const onSubmit = (ev) => {
        ev.preventDefault()
    };

    const onImageChoose = () => {
        console.log("img selected");
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
                                    <PhotoIcon className="w-8 h-8" />
                                </span>
                            )}
                            <button
                                type="button"
                                className="relative cursor-pointer  px-3 py-2 ml-5 text-sm font-medium leading-4 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:bg-indigo-500 focus:ring-offset-2"
                            >
                                <input
                                    type="file"
                                    className="absolute left-0 top-0 bottom-0 opacity-0"
                                    onChange={onImageChoose}
                                />
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
                            onChange={(ev) =>
                                setSurvey({ ...survey, title: ev.target.value })
                            }
                        />
                    </div>

                    {/* title  */}

                    {/* description  */}
                    <div className="col-span-6 sm:col-span-3">
                        <label
                            htmlFor="description"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Survey Description
                        </label>

                        <textarea
                            name="description"
                            onChange={(ev) =>
                                setSurvey({
                                    ...survey,
                                    description: ev.target.value,
                                })
                            }
                            placeholder="Enter Description"
                            value={survey.description}
                            id="description"
                            cols="30"
                            rows="10"
                            className="mt-1 block w-full border-gray-300 shadow-sm focus:border-indigo-50 focus:ring-indigo-500 sm:text-sm"
                        ></textarea>
                    </div>

                    {/* description  */}

                    {/* expiry date  */}
                    <div className="col-span-6 sm:col-span-3">
                        <label
                            htmlFor="expiry_date"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Survey Description
                        </label>

                        <input
                            type="date"
                            name="expiry_date"
                            id="expiry_date"
                            value={survey.expriry_date}
                            placeholder="Enter Survey Title"
                            className="block w-full mt-1 border-gray-300 rounded md focus:border-indigo-50 focus:ring-indigo-500 sm:text-sm"
                            onChange={(ev) =>
                                setSurvey({
                                    ...survey,
                                    expiry_date: ev.target.value,
                                })
                            }
                        />
                    </div>

                    {/* expiry date  */}

                    {/* Active  */}

                    <div className="flex items-start">
                        <div className="flex h-5 items-center">
                            <input
                                type="checkbox"
                                name="status"
                                checked={survey.status}
                                onChange={(ev) =>
                                    setSurvey({
                                        ...survey,
                                        status: ev.target.value,
                                    })
                                }
                                className="h-4 w-4 rounded border-gray-300 text-indigo-500"
                                id="status"
                            />
                        </div>
                        <div className="ml-3 text-sm">
                            <label
                                htmlFor="comments"
                                className="font-medium text-gray-700"
                            >
                                Comments
                            </label>
                            <p className="text-gray-500">
                                Whether to make survey publicly available
                            </p>
                        </div>
                    </div>
                    {/* Active  */}
                </div>

                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                    <TButton>Save</TButton>
                </div>
            </form>
        </PageComponent>
    );
};

export default SurveysCreate;
