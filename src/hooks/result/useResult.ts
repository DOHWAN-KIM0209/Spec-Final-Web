import { checkAnalysisStatus, getDetailResult, getResultListReq } from '@/services/result/api';
import { IDealsResultListInfiniteReq } from '@/types/result';
import { useQuery, useInfiniteQuery } from '@tanstack/react-query';

export const useResult = () => {
  const useGetListInfinite = (props: IDealsResultListInfiniteReq) => {
    return useInfiniteQuery({
      queryKey: ['result', props],
      queryFn: ({ pageParam }) => {
        return getResultListReq({ ...props, page: pageParam - 1 });
      },
      initialPageParam: 1,
      getNextPageParam: (lastPage, allPages) => {
        const nextPage = allPages.length + 1;
      
        if (!lastPage?.data?.interviewList || lastPage.data.interviewList.last) {
          return undefined; // 마지막 페이지거나 응답 비정상일 경우
        }
      
        return nextPage;
      }
    });
  };

  const useGetAnalysisStatus = (analysisId: number) => {
    return useQuery({
      queryKey: ['analysis', analysisId],
      queryFn: () => checkAnalysisStatus(analysisId),
      refetchInterval: 5000, // 5초마다 다시 가져오기
      enabled: false, // 초기에 비활성화
    });
  };

  // 상세 조회
  const useGetDetailAnalysis = (analysisId: number) => {
    return useQuery({
      queryKey: ['analysis detail', analysisId],
      queryFn: () => getDetailResult(analysisId),
      enabled: !!analysisId,
    });
  };

  return { useGetListInfinite, useGetAnalysisStatus, useGetDetailAnalysis };
};
