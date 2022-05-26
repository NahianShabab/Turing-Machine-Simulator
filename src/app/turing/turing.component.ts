import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'turing',
  templateUrl: './turing.component.html',
  styleUrls: ['./turing.component.css']
})
export class TuringComponent implements OnInit {
  turingMachine:TuringMachine=new TuringMachine("q0","q1","","N",["1","0","1","1","0","1","N"],[]);
  constructor() { 
    this.turingMachine.transitions=
    [
      new Transition("q0","1","q0","0",MoveDirection.RIGHT),
      new Transition("q0","0","q0","1",MoveDirection.RIGHT),
      new Transition("q0","N","q1","N",MoveDirection.RIGHT)
    ]
  }

  ngOnInit(): void {
    setInterval(
      ()=>{
        if(this.turingMachine.currentState===this.turingMachine.acceptState){

        }else if(this.turingMachine.currentState===this.turingMachine.rejectState){

        }else{
          console.log("inside advance");
          
          this.turingMachine.advance();          
        }
      },1000
    );
  }

}


export class TuringMachine{
  tape:string[];
  startState:string;
  acceptState:string;
  rejectState:string;
  blankSymbol:string;
  transitions:Transition[];
  currentTapeIndex:number=0;
  currentState:string;
  constructor(start:string,accept:string,reject:string,blank:string,tape:string[],transitions:Transition[]){
    this.acceptState=accept;
    this.rejectState=reject;
    this.startState=start;
    this.currentState=start;
    this.blankSymbol=blank;
    this.tape=tape;
    this.transitions=transitions;
  }
  advance(){
    if(this.tape.length===0){
      console.log("tape length zero, rejected");
      
      this.currentState=this.rejectState;
      return;
    }
    let currentTapeSymbol=this.tape[this.currentTapeIndex];
    for(let t of this.transitions){
      if(t.currentState===this.currentState && t.currentTapeSymbol===currentTapeSymbol){
        console.log("found");
        
        this.currentState=t.nextState;
        this.tape[this.currentTapeIndex]=t.writeToTape;
        if(t.moveDirection===MoveDirection.RIGHT){
          if(this.currentTapeIndex===this.tape.length-1){
            this.tape.push(this.blankSymbol);
          }
          this.currentTapeIndex++;
        }else{
          if(this.currentTapeIndex!=0){
            this.currentTapeIndex--;
          }else{
            this.tape.unshift(this.blankSymbol);
          }
        }
        return;
      }
    }
    this.currentState=this.rejectState;
  }
}
export enum MoveDirection{
    RIGHT,LEFT
}

export class Transition{
  currentState:string;
  currentTapeSymbol:string;
  nextState:string;
  writeToTape:string;
  moveDirection:MoveDirection;
  constructor(curState:string,curTapeSym:string,nxtState:string,writeTape:string,movDir:MoveDirection){
    this.currentState=curState;
    this.currentTapeSymbol=curTapeSym;
    this.nextState=nxtState;
    this.writeToTape=writeTape;
    this.moveDirection=movDir;
  }
}




