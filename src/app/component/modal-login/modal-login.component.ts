import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

interface FormLogin {
  login: FormControl<string | null>;
  password: FormControl<string | null>;
  check: FormControl<boolean>;
}

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.scss'],
})
export class ModalLoginComponent implements OnInit {
  hide = true;
  public color = 'primary';
  public formLogin = new FormGroup<FormLogin>({
    login: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    check: new FormControl(false, {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });
  constructor() {}

  ngOnInit(): void {
    this.formLogin.valueChanges.subscribe((v) => {
      console.log(v);
    });
  }
}