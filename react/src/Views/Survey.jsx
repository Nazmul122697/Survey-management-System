import { PlusCircleIcon } from "@heroicons/react/24/outline";
import PageComponent from "../components/PageComponent";
import SurveyListItem from "../components/SurveyListItem";
import TButton from "../components/core/TButton";
import { useStateContext } from "../contexts/ContextProvider";

const Survey = () => {
    const { surveys } = useStateContext();
    const onDeleteClick = () => {
        console.log("delete Button Clicked");
    };
    console.log(surveys);
    return (
        <PageComponent
            title="Survey"
            buttons={
                <TButton color="green" to="/surveys/create">
                    <PlusCircleIcon className="w-6 h-6 mr-2"></PlusCircleIcon>
                    Create New
                </TButton>
            }
        >
            <div className="grid gap-5 divide-x lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1">
                {surveys.map((survey) => (
                    <SurveyListItem
                        survey={survey}
                        key={survey.id}
                        onDeleteClick={onDeleteClick}
                    />
                ))}
            </div>
        </PageComponent>
    );
};

export default Survey;
