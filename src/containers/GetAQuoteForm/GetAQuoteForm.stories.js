/* eslint-disable import/no-anonymous-default-export */
import { GetAQuoteForm } from '../';

//스토리 구성 객체
export default {
  // 사이드 바에 표시할 컴포넌트 시스템
  title: 'Form 디자인 | GetAQuoteForm',
  component: GetAQuoteForm,
  parameters: {
    docs: {
      description: {
        component:
          '**폼** 컴포넌트는 이벤트를 트리거 하는 방식으로 사용자와 상호작용(interaction) 하여 제어(contorl) 하는 그래픽 컨트롤입니다.'
      }
    }
  }
};

export const GetAQuoteFormSample = () => <GetAQuoteForm></GetAQuoteForm>;
