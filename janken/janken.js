function myResult(user){
  var computer = Math.floor(Math.random() * 3);

  var jankenList  = ["ぐー", "ちょき", "ぱー"];
  var aikoMsg = "あいこです";
  var winMsg = "あなたの勝ちです";
  var loseMsg = "あなたの負けです";
  var computerMsg = "相手は" + jankenList[computer] + "、";



  //todo: あいこの時
  if(user === computer) {
    return computerMsg + aikoMsg;
  }else if(user == 0 && computer == 1 ||
     user == 1 && computer == 2 ||
     user == 2 && computer == 0 ){
      return computerMsg + winMsg;
  }else{
    return computerMsg + loseMsg;
  }


  //todo: じゃんけん勝った時


  //todo: 負けた時

  return myResult();
}
