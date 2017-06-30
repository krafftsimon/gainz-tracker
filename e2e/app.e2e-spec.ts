import { GainzTrackerPage } from './app.po';

describe('gainz-tracker App', () => {
  let page: GainzTrackerPage;

  beforeEach(() => {
    page = new GainzTrackerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
