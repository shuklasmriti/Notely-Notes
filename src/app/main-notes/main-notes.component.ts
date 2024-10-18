import { Component } from '@angular/core';

@Component({
  selector: 'app-main-notes',
  templateUrl: './main-notes.component.html',
  styleUrls: ['./main-notes.component.css']
})
export class MainNotesComponent {
userInput:string='';
inputs:number[]=[];
list: {
   text: string, isEditing: boolean 
  }[] = [];

  
  addInput(){
    if(this.inputs=[]){
      this.inputs.push(this.inputs.length+1);
    }
    
  }
  removeInput(){
    this.inputs.pop();
    this.userInput=''
  }
 submit(){
  if(this.userInput.trim()){
    this.list.push({ text: this.userInput, isEditing: false });
    this.userInput=''
  }
}
delete(index:number){
  this.list.splice(index,1)

}
edit(index: number) {
  this.list[index].isEditing = !this.list[index].isEditing;
}
save(index: number) {
  this.list[index].isEditing = false;
}
}
