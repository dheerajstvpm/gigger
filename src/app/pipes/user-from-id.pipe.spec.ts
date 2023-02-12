import { UserFromIdPipe } from './user-from-id.pipe';

describe('UserFromIdPipe', () => {
  it('create an instance', () => {
    const pipe = new UserFromIdPipe();
    expect(pipe).toBeTruthy();
  });
});
