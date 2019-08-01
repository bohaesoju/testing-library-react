import React from 'react';
import { render } from '@testing-library/react';
import Profile from './Profile';

describe('<Profile />', () => {
    it('matches snapshot', () => {
        const utils = render(<Profile username="velopert" name="김의중" />);
        expect(utils.container).toMatchSnapshot();
    });
    it('shows the props correctly', () => {
        const utils = render(<Profile username="velopert" name="김의중" />);
        utils.getByText('velopert'); //velopert 라는 텍스트를 가진 엘리먼트가 있는지 확인
        utils.getByText('(김의중)'); //김의중 이라는 텍스트를 가진 엘리먼트가 있는지 확인
        utils.getByText(/김/); //정규식 /김/ 을 통과하는 엘리먼트가 있는지 확인
    });
});
