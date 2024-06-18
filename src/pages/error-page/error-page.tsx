import { Button } from "antd";
import Result, { ResultStatusType } from "antd/es/result"
import { useNavigate } from "react-router-dom";



export type ErrorPageProps = {
    status: ResultStatusType;
    title: string;
    subTitle: string;
}

const ErrorPage: React.FC<ErrorPageProps> = ({title, subTitle, status}) => {
    const navigate = useNavigate();

    return <Result 
        status={status}
        title={title}
        subTitle={subTitle}
        extra={<Button onClick={() => navigate('home')} type='primary'>Back Home</Button>}
    />

}

export default ErrorPage