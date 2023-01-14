import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { COURSES } from 'src/db-data';
import {Course, suzi} from '../model/course';


@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit{

constructor(){ }

@Input()
title:string="";

@Input()
crs:Course=suzi;

@Input()
indeks:number=0;

@Output() 
cuci = new EventEmitter<Course>();



ngOnInit(){

}

onCrsViewed(){
  console.log("suzi is cuci and cuci is suzi");
  this.cuci.emit(this.crs)
}

klasi(){
  if (this.crs.category == 'BEGINNER'){
  return {'beginner':true, 'course-card':true}
}else if (this.crs.category == 'ADVANCED'){
  return {'advanced':true, 'course-card':true}
}else if (this.crs.category == 'INTERMEDIATE'){
return {'intermediate':true, 'course-card':true}
}else{
  return {'course-card':true} 
}
}

style(){
  if(this.crs.category == 'INTERMEDIATE'){
  return {'background-image':'url('+this.crs.iconUrl+')'}
}else{
  return null;
}
}
}
