import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form-example',
  templateUrl: './form-example.component.html',
  styleUrls: ['./form-example.component.css']
})
export class FormExampleComponent implements OnInit {

  profileForm = new FormGroup({
    firstName: new FormControl('test'),
    lastName: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    })
  });

  constructor() {
  }

  ngOnInit() {
  }

  onResetProfile() {
    this.profileForm.setValue({
      firstName: 'first name test',
      lastName: 'last name test',
      address: {
        street: '123 Main St',
        city: 'Anytown',
        state: 'CA',
        zip: '12345'
      }
    });
  }

  onClearProfile() {
    this.profileForm.setValue({
      firstName: '',
      lastName: '',
      address: {
        street: '',
        city: '',
        state: '',
        zip: '',
      }
    });
  }

  onSubmitProfile() {
    console.log(this.profileForm.value);
  }
}
