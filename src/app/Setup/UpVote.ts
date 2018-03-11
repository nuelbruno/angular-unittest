export class VoteClass {
  totalvote = 0;

  UpVote() {
    this.totalvote++;
  }

  DownVote() {
    this.totalvote--;
  }
}
