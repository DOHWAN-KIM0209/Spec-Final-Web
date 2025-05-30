import Lottie from 'react-lottie';
import { analysisOptions, xMarkOptions } from '@/assets/lotties/lottieOptions';
import { formatInterviewSetTime } from '@/utils/formatDateTime';
import { formatVideoLength } from '@/utils/formatVideoLength';
import { ResultItemData } from '@/types/model/index';
import { useNavigate } from 'react-router-dom';
import default_Img from '@/assets/images/defaultImage.png';

const ResultItem = ({ id, thumbnailPath, type, date, question, videoLength, status }: ResultItemData) => {
  const navigate = useNavigate();

  const onErrorImg = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = default_Img;
  };

  return (
    <div
      className={`bg-white rounded-lg py-1 ${status !== 'success' ? 'pointer-events-none' : 'cursor-pointer'}`}
      onClick={() => navigate(`/result/${id}`)}
    >
      <div className="relative bg-[#e2e2e2] rounded-lg ">
        {(status === 'process' || status === null) && (
          <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-75 rounded-lg">
            <Lottie options={analysisOptions} height={65} width={150} />
            <div className="text-center pt-2">
              <span className="text-white font-semibold">결과 분석 중</span>
              <p className="text-white text-sm">5분 이내에 완료됩니다.</p>
            </div>
          </div>
        )}
        {status === 'fail' && (
          <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-75 rounded-lg">
            <Lottie options={xMarkOptions} height={80} width={80} />
            <div className="text-center pt-2">
              <span className="text-white font-semibold">결과 분석 실패</span>
              <p className="text-white text-sm">
                {videoLength < 10 ? '10초 미만의 영상은 분석이 불가능합니다.' : '영상 분석에 실패했습니다.'}
              </p>
            </div>
          </div>
        )}

        <div className="text-xs text-white text-center bg-[#2a2a2a] p-1 w-10 rounded-md z-10 absolute right-2 bottom-2">
          <span>{formatVideoLength(videoLength)}</span>
        </div>
        <img
          width={300}
          height={200}
          src={`https://j10d102.p.ssafy.io/file/download/thumbnail?path=${thumbnailPath}`}
          onError={onErrorImg}
          alt={`${type === 'mock' ? '모의 면접' : '실전 면접'} ${id} 분석 결과`}
          className="w-full py-3 bg-cover bg-center rounded-lg bg-inherit shadow-md  "
        />
      </div>
      <div className="flex justify-between mx-1 mt-2">
        <span className="text-sm text-MAIN1">{type == 'mock' ? '모의 면접' : '실전 면접'}</span>
        <span className="text-xs text-UNIMPORTANT_TEXT mr-1">{date && formatInterviewSetTime(date)}</span>
      </div>
      <span className="line-clamp-2 font-semibold text-BLACK mx-1">Q. {question}</span>
    </div>
  );
};

export default ResultItem;
