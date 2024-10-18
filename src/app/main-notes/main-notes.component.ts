import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-main-notes',
  templateUrl: './main-notes.component.html',
  styleUrls: ['./main-notes.component.css']
})
export class MainNotesComponent implements OnInit{
userInput:string='';
inputs:number[]=[];
list: {
   text: string, isEditing: boolean 
  }[] = [];


  localStorageKey = 'notes';
  ngOnInit(): void {
    const storedNotes = localStorage.getItem(this.localStorageKey);
    if (storedNotes) {
      this.list = JSON.parse(storedNotes);
    }
  }
  
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
    this.updateLocalStorage(); 
  }
}
delete(index:number){
  this.list.splice(index,1);
  this.updateLocalStorage();

}
edit(index: number) {
  this.list[index].isEditing = !this.list[index].isEditing;
}
save(index: number) {
  this.list[index].isEditing = false;
  this.updateLocalStorage();
}
updateLocalStorage() {
  localStorage.setItem(this.localStorageKey, JSON.stringify(this.list));
}
}
