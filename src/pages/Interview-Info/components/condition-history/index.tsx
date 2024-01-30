import HealthCondition from './components/health-condition'
import MedicalHistoryContent from './components/medical-history-content'
import SummaryRecord from './components/summary-record'

type Props = {
    questionnaireAction: () => void
    readonly?: boolean
}

const ConditionHistory = ({ questionnaireAction, readonly }: Props) => {
    return (
        <>
            <MedicalHistoryContent readonly={readonly} />
            <HealthCondition readonly={readonly} />
            <SummaryRecord
                questionnaireAction={questionnaireAction}
                readonly={readonly}
            />
        </>
    )
}

export default ConditionHistory
