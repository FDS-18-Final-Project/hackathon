/* eslint-disable import/no-anonymous-default-export */
import Input from './Input';

//스토리 구성 객체
export default {
  // 사이드 바에 표시할 컴포넌트 시스템
  title: 'Form 디자인 | Input',
  component: Input,
  parameters: {
    docs: {
      description: {
        component:
          '**인풋** 컴포넌트는 이벤트를 트리거 하는 방식으로 사용자와 상호작용(interaction) 하여 제어(contorl) 하는 그래픽 컨트롤입니다.'
      }
    }
  },
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['textarea', 'checkbox', 'text']
      }
    }
  }
};

//template 만들기
const Template = args => <Input {...args}></Input>;

//스토리 구성 객체 기본 내보내기
export const EmailInput = Template.bind({});

EmailInput.args = {
  type: 'textarea'
};

export const EmailInputed = Template.bind({});

EmailInputed.args = {
  type: 'checkbox'
};

export const InvalidEmailInput = Template.bind({});

InvalidEmailInput.args = {
  type: 'text'
};
