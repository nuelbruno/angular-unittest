import { EventEmitter } from "events";


export class VoteEventEmitter {
   totalVote = 0;
   voteChange = new EventEmitter();

   upVote() {
      this.totalVote++;
      this.voteChange.emit(this.totalVote);
   }

}
