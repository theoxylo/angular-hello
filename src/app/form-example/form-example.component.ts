import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form-example',
  templateUrl: './form-example.component.html',
  styleUrls: ['./form-example.component.css']
})
export class FormExampleComponent implements OnInit {

  /*
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    })
  });
  */
  // using FormBuilder service:
  profileForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
  }

  onResetAddress() {
    this.profileForm.patchValue({
      address: {
        street: '123 Main St',
        city: 'Anytown',
        state: 'CA',
        zip: '12345'
      }
    });
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
    console.log('submitted: ' + JSON.stringify(this.profileForm.value));
  }
}
