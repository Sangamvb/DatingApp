import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { AccountService } from '_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Input() usersFromHomecomponunt:any;
  @Output() cancelRegister=new EventEmitter();
  model:any={}
  constructor(private accountservice:AccountService) { }

  ngOnInit(): void {
  }

  register()  {
    console.log(this.model);
    this.accountservice.register(this.model).subscribe(response=>{
      this.cancel();
    },erro=>{
      console.log(erro);
    })
  }
  cancel(){
    console.log("Cancelled");
      this.cancelRegister.emit(false);
  }
}
