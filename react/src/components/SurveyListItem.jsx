import TButton from "./core/TButton";
import {
    PencilIcon,
    ArrowTopRightOnSquareIcon,
    TrashIcon,
} from "@heroicons/react/24/outline";

const SurveyListItem = ({ survey, onDeleteClick }) => {
    return (
        <div className="flex flex-col py-4 px-6 shadow-md bg-white hover:bg-gray-50 h-[470px]">
            <img
                src={survey.image_url}
                alt={survey.title}
                className="object-cover w-full h-48"
            />
            <h4 className="mt-4 text-lg font-bold">{survey.title}</h4>

            <div
                className="flex-1 overflow-hidden"
                dangerouslySetInnerHTML={{ __html: survey.description }}
            ></div>

            <div className="flex items-center justify-between mt-3">
                <TButton to={`/surveys/${survey.id}`}>
                    <PencilIcon className="w-5 h-5 mr-2">Edit</PencilIcon>
                </TButton>

                <div className="flex items-center">
                    <TButton href={`/view/survey/${survey.slug}`} circle link>
                        <ArrowTopRightOnSquareIcon className="w-5 h-5"></ArrowTopRightOnSquareIcon>
                    </TButton>
                    {survey.id && (
                        <TButton
                            onClick={(ev) => onDeleteClick(survey.id)}
                            circle
                            link
                            color="red"
                        >
                            <TrashIcon className="w-5 h-5"></TrashIcon>
                        </TButton>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SurveyListItem;
