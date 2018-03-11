import { VoteClass } from './UpVote';
describe('upVoteTest', () => {
   let object: VoteClass;

   beforeEach(() => {
     object = new VoteClass();
   });

   it('upvote will increase the vote up one', () => {
      object.UpVote();
      expect(object.totalvote).toBe(1);
   });

   it('DownVote will decrease the vote to one', () => {
      object.DownVote();
      expect(object.totalvote).toBe(-1);
   });
});
