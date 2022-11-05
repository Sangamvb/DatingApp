import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from 'src/app/_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Input() usersFromHomecomponunt:any;
  @Output() cancelRegister=new EventEmitter();
  model:any={}
  constructor(private accountservice:AccountService,private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  register()  {
    console.log(this.model);
    this.accountservice.register(this.model).subscribe(response=>{
      this.cancel();
    },error=>{
      console.log(error);
      this.toastr.error(error.error)
    })
  }
  cancel(){
    console.log("Cancelled");
      this.cancelRegister.emit(false);
  }
}
