import {finishLoading, startLoading} from "../modules/loading";

export default function createRequestThunk(type,request){
    // 성공 및 실패 액션 타입을 정의합니다.
    const SUCCESS = `${type}_SUCCESS`;
    const FAILURE = `${type}_FAILURE`;
    return params =>  async dispatch => {
        dispatch({type}); //시작됨
        dispatch(startLoading(type));
        try{
            const response = await request(params);
            dispatch({
                type: SUCCESS,
                payload: response.data
            });//요청 성공
            dispatch(finishLoading(type));
        }catch (e){
            dispatch({
                type: FAILURE,
                payload:e,
                error: true
            }); //에러 발생
            dispatch(startLoading(type));
            throw e; //나중에 컴포넌트단에서 에러를 조회할 수 있게 해 줌
        }
    };
}