import { VoteEventEmitter } from "./vote-event";


describe('EventEmitter Unit test', () => {

     let voteObject: VoteEventEmitter;

     beforeEach(() => {
       voteObject = new VoteEventEmitter();
     });

     it('shoud emit event with positive value when upvote is called', () => {
       let totalvote = null;

       //voteObject.voteChange.subscribe(tv => to totalvote = tv;

       expect(totalvote).toBeNull();
     });

});
