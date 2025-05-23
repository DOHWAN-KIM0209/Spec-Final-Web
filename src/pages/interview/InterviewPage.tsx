import { mainOptions, mockOptions } from '@/assets/lotties/lottieOptions';
import Button from '@/components/@common/Button/Button';
import Header from '@/components/@common/Header/Header';
import InterviewStartItem from '@/components/interview/InterviewStartItem';
import { useNavigate } from 'react-router-dom';

const InterviewPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <main className="max-w-5xl mx-auto animate-showUp h-[calc(100vh-95px)]">
        <div className="h-full flex flex-row justify-around items-center gap-10 min-w-[1040px]">
          <InterviewStartItem
            tittle="실전 면접"
            animationOptions={mainOptions}
            subTitle="내 면접 실력을 알고 싶다면?"
            advantageList={[
              '내 이력서를 기반으로 한 면접 시뮬레이션',
              '답변에 기반한 꼬리 질문 제공',
              'AI 분석을 통한 면접 성과 피드백 제공',
              '종합 리포트 및 면접 합격 가능성 제공',
            ]}
          >
            <Button
              text="실전 면접 시작하기"
              width="w-full"
              height="h-14"
              backgroundColor="bg-[#34C36F]"
              hoverBackgroundColor=""
              textColor="text-white"
              textSize="text-lg"
              onClick={() => navigate('/interview/resume')}
            />
          </InterviewStartItem>
          <InterviewStartItem
            tittle="면접 연습"
            animationOptions={mockOptions}
            subTitle="내 면접 실력을 쌓고 싶다면?"
            advantageList={[
              '실제 면접과 유사한 환경에서의 면접 연습',
              '다양한 면접 유형에 대한 연습 기회 제공',
              '내 이력서를 기반으로 한 면접 시뮬레이션',
              '종합 리포트 및 면접 합격 가능성 제공',
            ]}
          >
            <Button
              text="면접 연습 시작하기"
              width="w-full"
              height="h-14"
              backgroundColor="bg-[#4E4E4E]"
              textColor="text-white"
              textSize="text-lg"
              onClick={() => navigate('/question')}
            />
          </InterviewStartItem>
        </div>
      </main>
    </>
  );
};

export default InterviewPage;
