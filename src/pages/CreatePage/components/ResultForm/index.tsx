import { AiAPIResponse } from "../../../../utils/BackendIntegration/Interfaces";
import { AiText, MainResponse } from "./styles";

interface Result{
    result: AiAPIResponse | null
}

export const ResultForm:React.FC<Result> = ({result}) => {
    return(
        <MainResponse>
            { result ? (<img src={result.imageUrl}/>) : null}
            { result ? (<AiText>{result.story}</AiText>) : null}
        </MainResponse>
    )
}